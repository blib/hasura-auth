import { RequestHandler } from 'express';
import { logger } from '@/logger';
import crypto from 'crypto';
import qs from 'fast-querystring';

import { getSignInResponse, insertUser, getUserByTelegramId, getTelegramBotToken, ENV } from '@/utils';
import { sendError } from '@/errors';
import { Joi, locale } from '@/validation';

export const signInTelegramSchema = Joi.object({
  locale,
  botId: Joi.string().required(),
  initData: Joi.string().required(),
}).meta({ className: 'SignInTelegramSchema' });

type BodyType = {
  initData: string;
  botId: string
};

export const signInTelegramHandler: RequestHandler<{}, {}, BodyType> = async (
  req,
  res
) => {
  if (!ENV.AUTH_TELEGRAM_USERS_ENABLED) {
    return sendError(res, 'disabled-endpoint');
  }

  const { botId, initData } = req.body;

  // check if hmac sha256 of id and bot_id is equal to the one in the metadata
  const botToken = await getTelegramBotToken(botId)
  if (!botToken) {
    return sendError(res, 'bot-not-registred-request');
  }
  const data = qs.parse(initData);

  logger.debug(`Data before hash: ${JSON.stringify(data)}`);

  const hash = data.hash as string;
  delete data.hash; // Remove hash from object to build the verification string

  const dataCheckString = Object.keys(data)
    .sort()
    .map((key) => `${key}=${data[key]}`)
    .join("\n");

  const secretKey = crypto
    .createHmac("sha256", "WebAppData")
    .update(botToken)
    .digest();

  const computedHash = crypto
    .createHmac("sha256", secretKey)
    .update(dataCheckString)
    .digest("hex");

  const secretKeyWeb = crypto
    .createHash("sha256")
    .update(botToken)
    .digest();

  const computedHashWeb = crypto
    .createHmac("sha256", secretKeyWeb)
    .update(dataCheckString)
    .digest("hex");

  if (computedHash !== hash && computedHashWeb !== hash) {
    return sendError(res, 'invalid-ticket');
  } else {
    const CURRENT_UNIX_TIME = Math.floor(Date.now() / 1000);
    const TIMEOUT_SECONDS = 3600; // Approximately 1 hour

    if (CURRENT_UNIX_TIME - Number(data.auth_date) > TIMEOUT_SECONDS) {
      return sendError(res, 'invalid-expiry-date');
    }
  }

  const userData = JSON.parse(data.user);

  let user = await getUserByTelegramId(userData.id);

  if (!user) {
    if (ENV.AUTH_DISABLE_SIGNUP) {
      return sendError(res, 'signup-disabled');
    }
    const userRoles = [{ role: ENV.AUTH_USER_DEFAULT_ROLE }];

    user = await insertUser({
      displayName: userData.username ?? `${userData.first_name} ${userData.last_name}`,
      locale: userData.language_code || "en",
      roles: {
        data: userRoles,
      },
      telegramId: userData.id,
      disabled: ENV.AUTH_DISABLE_NEW_USERS,
      defaultRole: ENV.AUTH_USER_DEFAULT_ROLE,
      metadata: {},
    });

  }

  if (user?.disabled) {
    return sendError(res, 'disabled-user');
  }

  const signInResponse = await getSignInResponse({
    userId: user.id,
    checkMFA: false,
  });

  return res.send(signInResponse);
};
