import { RequestHandler } from 'express';
import { v4 as uuidv4 } from 'uuid';

import { getGravatarUrl, getUserByEmail, hashPassword } from '@/helpers';
import { emailClient } from '@/email';
import { ENV } from '@/utils/env';
import { generateTicketExpiresAt } from '@/utils/ticket';
import { getSignInResponse } from '@/utils/tokens';
import { insertUser } from '@/utils/user';
import { UserRegistrationOptions } from '@/types';
import { sendError } from '@/errors';
import {
  Joi,
  registrationOptions,
  email,
  passwordInsert,
  redirectTo,
} from '@/validation';

export const signUpEmailPasswordSchema = Joi.object({
  email: email.required(),
  password: passwordInsert.required(),
  options: registrationOptions.keys({
    redirectTo,
  }),
}).meta({ className: 'SignUpEmailPasswordSchema' });

export const signUpEmailPasswordHandler: RequestHandler<
  {},
  {},
  {
    email: string;
    password: string;
    options: UserRegistrationOptions & {
      redirectTo: string;
    };
  }
> = async (req, res) => {
  const { body } = req;
  const {
    email,
    password,
    options: {
      redirectTo,
      locale,
      defaultRole,
      allowedRoles,
      metadata,
      displayName = email,
    },
  } = body;

  // check if email already in use by some other user
  if (await getUserByEmail(email)) {
    return sendError(res, 'email-already-in-use');
  }

  // hash password
  const passwordHash = await hashPassword(password);

  // create ticket
  const ticket = `verifyEmail:${uuidv4()}`;
  const ticketExpiresAt = generateTicketExpiresAt(60 * 60 * 24 * 30); // 30 days

  // insert user
  const user = await insertUser({
    disabled: ENV.AUTH_DISABLE_NEW_USERS,
    displayName,
    avatarUrl: getGravatarUrl(email),
    email,
    passwordHash,
    ticket,
    ticketExpiresAt,
    emailVerified: false,
    locale,
    defaultRole,
    roles: {
      // restructure user roles to be inserted in GraphQL mutation
      data: allowedRoles.map((role: string) => ({ role })),
    },
    metadata,
  });

  // user is now inserted. Continue sending out activation email
  if (
    !ENV.AUTH_DISABLE_NEW_USERS &&
    ENV.AUTH_EMAIL_SIGNIN_EMAIL_VERIFIED_REQUIRED
  ) {
    const template = 'email-verify';
    await emailClient.send({
      template,
      message: {
        to: email,
        headers: {
          'x-ticket': {
            prepared: true,
            value: ticket,
          },
          'x-redirect-to': {
            prepared: true,
            value: redirectTo,
          },
          'x-email-template': {
            prepared: true,
            value: template,
          },
        },
      },
      locals: {
        link: `${ENV.AUTH_SERVER_URL}/verify?&ticket=${ticket}&type=emailVerify&redirectTo=${redirectTo}`,
        displayName,
        email,
        ticket,
        redirectTo,
        locale: user.locale,
        serverUrl: ENV.AUTH_SERVER_URL,
        clientUrl: ENV.AUTH_CLIENT_URL,
      },
    });
  }

  // SIGNIN_EMAIL_VERIFIED_REQUIRED = true => Must verify email before sign in
  // SIGNIN_EMAIL_VERIFIED_REQUIRED = true => Don't have to verify email before
  // sign in

  if (!ENV.AUTH_EMAIL_SIGNIN_EMAIL_VERIFIED_REQUIRED) {
    const signInResponse = await getSignInResponse({
      userId: user.id,
      checkMFA: false,
    });

    // return logged in session because user does not have to verify their email
    // to sign in
    return res.send(signInResponse);
  }

  return res.send({ session: null, mfa: null });
};
