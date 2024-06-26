import { sendError } from '@/errors';
import {
  getNewOrUpdateCurrentSession,
  getUserByRefreshToken,
  gqlSdk,
} from '@/utils';
import { Joi, refreshToken } from '@/validation';
import { RequestHandler } from 'express';

export const tokenSchema = Joi.object({
  refreshToken,
}).meta({ className: 'TokenSchema' });

export const tokenHandler: RequestHandler<
  {},
  {},
  { refreshToken: string }
> = async (req, res) => {
  let { refreshToken } = req.body;

  if (!refreshToken) {
    // get refresh token from cookie
    req.headers && req.headers['cookie']?.split(';').forEach((cookie) => {
      const parts = cookie.match(/(.*?)=(.*)$/)
      if (parts && parts[1].trim() == 'refreshtoken') {
        refreshToken = (parts[2] || '').trim();
      }
    });
  }

  const user = await getUserByRefreshToken(refreshToken);

  if (!user) {
    return sendError(res, 'invalid-refresh-token');
  }

  if (user.disabled) {
    return sendError(res, 'disabled-user');
  }

  // 1 in 10 request will delete expired refresh tokens
  // TODO: CRONJOB in the future.
  if (Math.random() < 0.1) {
    // no await
    gqlSdk.deleteExpiredRefreshTokens();
  }

  const session = await getNewOrUpdateCurrentSession({
    user,
    currentRefreshToken: refreshToken,
  });

  return res.send(session);
};
