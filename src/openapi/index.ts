import expressJSDocSwagger from 'express-jsdoc-swagger';
import j2s, { SwaggerSchema } from 'joi-to-swagger';
import { Application } from 'express';

import {
  signInOtpSchema,
  signInPasswordlessEmailSchema,
  signInPasswordlessSmsSchema,
} from '@/routes/signin/passwordless';
import { signUpEmailPasswordSchema } from '@/routes/signup/email-password';
import { signInEmailPasswordSchema } from '@/routes/signin/email-password';
import { signInMfaTotpSchema } from '@/routes/signin/mfa';
import { signInAnonymousSchema } from '@/routes/signin/anonymous';
import { signOutSchema } from '@/routes/signout/signout';
import { userPasswordResetSchema } from '@/routes/user/password-reset';
import { userPasswordSchema } from '@/routes/user/password';
import {
  userEmailChangeSchema,
  userEmailSendVerificationEmailSchema,
} from '@/routes/user/email';
import { userMfaSchema } from '@/routes/user/mfa';
import { userDeanonymizeSchema } from '@/routes/user/deanonymize';
import { userProviderTokensSchema } from '@/routes/user/provider-tokens';
import { tokenSchema } from '@/routes/token/token';
import {
  providerCallbackQuerySchema,
  providerQuerySchema,
} from '@/routes/signin/providers/utils';

import * as responses from './responses';

const schema: Record<string, unknown> & { components: SwaggerSchema } = {
  tags: [],
  components: { schemas: {} },
};

const requestSchemas = [
  signInPasswordlessEmailSchema,
  signUpEmailPasswordSchema,
  signInEmailPasswordSchema,
  signInPasswordlessSmsSchema,
  signInOtpSchema,
  signInMfaTotpSchema,
  signInAnonymousSchema,
  signOutSchema,
  userPasswordResetSchema,
  userPasswordSchema,
  userEmailChangeSchema,
  userEmailSendVerificationEmailSchema,
  userMfaSchema,
  userDeanonymizeSchema,
  userProviderTokensSchema,
  tokenSchema,
  providerQuerySchema,
  providerCallbackQuerySchema,
];

[...requestSchemas, ...Object.values(responses)].forEach((validator) => {
  const { components } = j2s(validator, {});
  schema.components.schemas = {
    ...schema.components.schemas,
    ...components?.schemas,
  };
});

export const addOpenApiRoute = (app: Application) =>
  expressJSDocSwagger(app)(
    {
      info: {
        version: process.env.npm_package_version || 'unknown',
        title: 'Hasura auth',
        license: {
          name: 'MIT',
        },
        description: 'Authentication for Hasura',
      },
      security: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
      baseDir: __dirname,
      filesPattern: '@/routes/**/*.{js,ts}',
      swaggerUIPath: '/api-docs',
      exposeSwaggerUI: true,
      exposeApiDocs: true,
      apiDocsPath: '/openapi.json',
      notRequiredAsNullable: false,
      swaggerUiOptions: {
        swaggerOptions: {
          // This one removes the modals spec
          // You can checkout more config info here: https://github.com/swagger-api/swagger-ui/blob/master/docs/usage/configuration.md
          defaultModelsExpandDepth: -1,
        },
      },
    },
    schema
  );
