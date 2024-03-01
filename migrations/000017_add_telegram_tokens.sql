BEGIN;
ALTER TABLE auth.users
    ADD COLUMN telegram_id text UNIQUE;
CREATE TABLE auth.telegram_bot_tokens(
    id text NOT NULL PRIMARY KEY,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL DEFAULT '',
    token text NOT NULL DEFAULT ''
);
COMMIT;

