import { User } from '@/types';
import { gqlSdk } from '../gql-sdk';

export const getUserByPhoneNumber = async ({
  phoneNumber,
}: {
  phoneNumber: string;
}) => {
  const { users } = await gqlSdk.users({
    where: {
      phoneNumber: {
        _eq: phoneNumber,
      },
    },
  });

  return users[0];
};

export const getUser = async ({
  userId,
}: {
  userId: string;
}): Promise<User> => {
  const { user } = await gqlSdk.user({
    id: userId,
  });

  if (!user) {
    throw new Error('Unable to get user');
  }

  const {
    id,
    createdAt,
    displayName,
    avatarUrl,
    locale,
    email,
    isAnonymous,
    defaultRole,
    metadata,
    emailVerified,
    phoneNumber,
    phoneNumberVerified,
    telegramId,
    activeMfaType,
  } = user;
  return {
    id,
    createdAt,
    displayName,
    avatarUrl,
    locale,
    email,
    isAnonymous,
    defaultRole,
    metadata,
    emailVerified,
    phoneNumber,
    phoneNumberVerified,
    telegramId,
    activeMfaType,
    roles: user.roles.map((role) => role.role),
  };
};

export const getUserById = async (id: string) => {
  const { users } = await gqlSdk.users({
    where: {
      id: {
        _eq: id,
      },
    },
  });

  if (users.length !== 1) {
    return null;
  }

  return users[0];
};

export const getUserByEmail = async (email: string) => {
  const { users } = await gqlSdk.users({
    where: {
      email: {
        _eq: email,
      },
    },
  });

  if (users.length !== 1) {
    return null;
  }

  return users[0];
};

export const getTelegramBotToken = async (id: string) => {
  const { authTelegramBotToken } = await gqlSdk.authTelegramBotToken({ id: id });

  if (!authTelegramBotToken) {
    return null;
  }
  return authTelegramBotToken.token;
};

export const getUserByTelegramId = async (id: string) => {
  const { users } = await gqlSdk.users({
    where: {
      telegramId: {
        _eq: id.toString(),
      },
    },
  });

  if (users.length !== 1) {
    return null;
  }

  return users[0];
};

export const getUserByTicket = async (ticket: string) => {
  const now = new Date();

  const { users } = await gqlSdk.users({
    where: {
      _and: [
        {
          ticket: {
            _eq: ticket,
          },
        },
        {
          ticketExpiresAt: {
            _gt: now,
          },
        },
      ],
    },
  });

  if (users.length !== 1) {
    return null;
  }

  return users[0];
};
