/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */
import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  bytea: any;
  citext: any;
  json: any;
  jsonb: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequests_Aggregate_Fields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_Fields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequests_Max_Fields>;
  min?: Maybe<AuthProviderRequests_Min_Fields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Append_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequests_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  _not?: InputMaybe<AuthProviderRequests_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviderRequests_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  options?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequests_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequests_Delete_At_Path_Input = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequests_Delete_Elem_Input = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequests_Delete_Key_Input = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequests_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequests_Max_Fields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequests_Min_Fields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequests_Mutation_Response = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequests_On_Conflict = {
  constraint: AuthProviderRequests_Constraint;
  update_columns?: Array<AuthProviderRequests_Update_Column>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequests_Order_By = {
  id?: InputMaybe<Order_By>;
  options?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.provider_requests */
export type AuthProviderRequests_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequests_Prepend_Input = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequests_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Streaming cursor of the table "authProviderRequests" */
export type AuthProviderRequests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviderRequests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviderRequests_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequests_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export type AuthProviderRequests_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviderRequests_Bool_Exp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProviders_Aggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProviders_Aggregate_Fields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_Fields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviders_Max_Fields>;
  min?: Maybe<AuthProviders_Min_Fields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthProviders_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProviders_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthProviders_Max_Fields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProviders_Min_Fields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProviders_Mutation_Response = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProviders_Obj_Rel_Insert_Input = {
  data: AuthProviders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProviders_On_Conflict = {
  constraint: AuthProviders_Constraint;
  update_columns?: Array<AuthProviders_Update_Column>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProviders_Order_By = {
  id?: InputMaybe<Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.providers */
export type AuthProviders_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProviders_Select_Column {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProviders_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authProviders" */
export type AuthProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthProviders_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProviders_Update_Column {
  /** column name */
  Id = 'id'
}

export type AuthProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthProviders_Bool_Exp;
};

/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes = {
  __typename?: 'authRefreshTokenTypes';
  comment?: Maybe<Scalars['String']>;
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** columns and relationships of "auth.refresh_token_types" */
export type AuthRefreshTokenTypesRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** aggregated selection of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate = {
  __typename?: 'authRefreshTokenTypes_aggregate';
  aggregate?: Maybe<AuthRefreshTokenTypes_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokenTypes>;
};

/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_Fields = {
  __typename?: 'authRefreshTokenTypes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokenTypes_Max_Fields>;
  min?: Maybe<AuthRefreshTokenTypes_Min_Fields>;
};


/** aggregate fields of "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.refresh_token_types". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokenTypes_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokenTypes_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Constraint {
  /** unique or primary key constraint on columns "value" */
  RefreshTokenTypesPkey = 'refresh_token_types_pkey'
}

export enum AuthRefreshTokenTypes_Enum {
  /** Personal access token */
  Pat = 'pat',
  /** Regular refresh token */
  Regular = 'regular'
}

/** Boolean expression to compare columns of type "authRefreshTokenTypes_enum". All fields are combined with logical 'AND'. */
export type AuthRefreshTokenTypes_Enum_Comparison_Exp = {
  _eq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _in?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  _nin?: InputMaybe<Array<AuthRefreshTokenTypes_Enum>>;
};

/** input type for inserting data into table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AuthRefreshTokenTypes_Max_Fields = {
  __typename?: 'authRefreshTokenTypes_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRefreshTokenTypes_Min_Fields = {
  __typename?: 'authRefreshTokenTypes_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Mutation_Response = {
  __typename?: 'authRefreshTokenTypes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokenTypes>;
};

/** input type for inserting object relation for remote table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Obj_Rel_Insert_Input = {
  data: AuthRefreshTokenTypes_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};

/** on_conflict condition type for table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_On_Conflict = {
  constraint: AuthRefreshTokenTypes_Constraint;
  update_columns?: Array<AuthRefreshTokenTypes_Update_Column>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_token_types". */
export type AuthRefreshTokenTypes_Order_By = {
  comment?: InputMaybe<Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_token_types */
export type AuthRefreshTokenTypes_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "auth.refresh_token_types" */
export type AuthRefreshTokenTypes_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authRefreshTokenTypes" */
export type AuthRefreshTokenTypes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokenTypes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokenTypes_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.refresh_token_types" */
export enum AuthRefreshTokenTypes_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type AuthRefreshTokenTypes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokenTypes_Bool_Exp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  metadata?: Maybe<Scalars['jsonb']>;
  refreshTokenHash?: Maybe<Scalars['String']>;
  /** An object relationship */
  refresh_token_type: AuthRefreshTokenTypes;
  type: AuthRefreshTokenTypes_Enum;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};


/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokensMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokens_Aggregate_Fields>;
  nodes: Array<AuthRefreshTokens>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp_Count>;
};

export type AuthRefreshTokens_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Fields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokens_Max_Fields>;
  min?: Maybe<AuthRefreshTokens_Min_Fields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthRefreshTokens_Max_Order_By>;
  min?: InputMaybe<AuthRefreshTokens_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokens_Arr_Rel_Insert_Input = {
  data: Array<AuthRefreshTokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRefreshTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  refreshTokenHash?: InputMaybe<String_Comparison_Exp>;
  refresh_token_type?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthRefreshTokens_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthRefreshTokens_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthRefreshTokens_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  refreshTokenHash?: InputMaybe<Scalars['String']>;
  refresh_token_type?: InputMaybe<AuthRefreshTokenTypes_Obj_Rel_Insert_Input>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokens_Max_Fields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  refreshTokenHash?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthRefreshTokens_Min_Fields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  refreshTokenHash?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokens_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokens_Mutation_Response = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokens_On_Conflict = {
  constraint: AuthRefreshTokens_Constraint;
  update_columns?: Array<AuthRefreshTokens_Update_Column>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  expiresAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  refreshTokenHash?: InputMaybe<Order_By>;
  refresh_token_type?: InputMaybe<AuthRefreshTokenTypes_Order_By>;
  type?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.refresh_tokens */
export type AuthRefreshTokens_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthRefreshTokens_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  refreshTokenHash?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authRefreshTokens" */
export type AuthRefreshTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRefreshTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRefreshTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  refreshTokenHash?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<AuthRefreshTokenTypes_Enum>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshTokenHash = 'refreshTokenHash',
  /** column name */
  Type = 'type',
  /** column name */
  UserId = 'userId'
}

export type AuthRefreshTokens_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRefreshTokens_Bool_Exp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: Users_Aggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRole_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRoles_Aggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRoles_Aggregate_Fields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_Fields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRoles_Max_Fields>;
  min?: Maybe<AuthRoles_Min_Fields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthRoles_Bool_Exp>>;
  role?: InputMaybe<String_Comparison_Exp>;
  userRoles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  usersByDefaultRole?: InputMaybe<Users_Bool_Exp>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRoles_Constraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRoles_Insert_Input = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  usersByDefaultRole?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type AuthRoles_Max_Fields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRoles_Min_Fields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRoles_Mutation_Response = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRoles_Obj_Rel_Insert_Input = {
  data: AuthRoles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRoles_On_Conflict = {
  constraint: AuthRoles_Constraint;
  update_columns?: Array<AuthRoles_Update_Column>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRoles_Order_By = {
  role?: InputMaybe<Order_By>;
  userRoles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  usersByDefaultRole_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: auth.roles */
export type AuthRoles_Pk_Columns_Input = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRoles_Select_Column {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRoles_Set_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authRoles" */
export type AuthRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthRoles_Stream_Cursor_Value_Input = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRoles_Update_Column {
  /** column name */
  Role = 'role'
}

export type AuthRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthRoles_Bool_Exp;
};

/** columns and relationships of "auth.telegram_bot_tokens" */
export type AuthTelegramBotTokens = {
  __typename?: 'authTelegramBotTokens';
  createdAt: Scalars['timestamptz'];
  id: Scalars['String'];
  name: Scalars['String'];
  /** An array relationship */
  telegram_bots: Array<Telegram_Bot>;
  /** An aggregate relationship */
  telegram_bots_aggregate: Telegram_Bot_Aggregate;
  token: Scalars['String'];
};


/** columns and relationships of "auth.telegram_bot_tokens" */
export type AuthTelegramBotTokensTelegram_BotsArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Bot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Bot_Order_By>>;
  where?: InputMaybe<Telegram_Bot_Bool_Exp>;
};


/** columns and relationships of "auth.telegram_bot_tokens" */
export type AuthTelegramBotTokensTelegram_Bots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Bot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Bot_Order_By>>;
  where?: InputMaybe<Telegram_Bot_Bool_Exp>;
};

/** aggregated selection of "auth.telegram_bot_tokens" */
export type AuthTelegramBotTokens_Aggregate = {
  __typename?: 'authTelegramBotTokens_aggregate';
  aggregate?: Maybe<AuthTelegramBotTokens_Aggregate_Fields>;
  nodes: Array<AuthTelegramBotTokens>;
};

/** aggregate fields of "auth.telegram_bot_tokens" */
export type AuthTelegramBotTokens_Aggregate_Fields = {
  __typename?: 'authTelegramBotTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthTelegramBotTokens_Max_Fields>;
  min?: Maybe<AuthTelegramBotTokens_Min_Fields>;
};


/** aggregate fields of "auth.telegram_bot_tokens" */
export type AuthTelegramBotTokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthTelegramBotTokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.telegram_bot_tokens". All fields are combined with a logical 'AND'. */
export type AuthTelegramBotTokens_Bool_Exp = {
  _and?: InputMaybe<Array<AuthTelegramBotTokens_Bool_Exp>>;
  _not?: InputMaybe<AuthTelegramBotTokens_Bool_Exp>;
  _or?: InputMaybe<Array<AuthTelegramBotTokens_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  telegram_bots?: InputMaybe<Telegram_Bot_Bool_Exp>;
  telegram_bots_aggregate?: InputMaybe<Telegram_Bot_Aggregate_Bool_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.telegram_bot_tokens" */
export enum AuthTelegramBotTokens_Constraint {
  /** unique or primary key constraint on columns "id" */
  TelegramBotTokensPkey = 'telegram_bot_tokens_pkey'
}

/** input type for inserting data into table "auth.telegram_bot_tokens" */
export type AuthTelegramBotTokens_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  telegram_bots?: InputMaybe<Telegram_Bot_Arr_Rel_Insert_Input>;
  token?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type AuthTelegramBotTokens_Max_Fields = {
  __typename?: 'authTelegramBotTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthTelegramBotTokens_Min_Fields = {
  __typename?: 'authTelegramBotTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.telegram_bot_tokens" */
export type AuthTelegramBotTokens_Mutation_Response = {
  __typename?: 'authTelegramBotTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthTelegramBotTokens>;
};

/** input type for inserting object relation for remote table "auth.telegram_bot_tokens" */
export type AuthTelegramBotTokens_Obj_Rel_Insert_Input = {
  data: AuthTelegramBotTokens_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthTelegramBotTokens_On_Conflict>;
};

/** on_conflict condition type for table "auth.telegram_bot_tokens" */
export type AuthTelegramBotTokens_On_Conflict = {
  constraint: AuthTelegramBotTokens_Constraint;
  update_columns?: Array<AuthTelegramBotTokens_Update_Column>;
  where?: InputMaybe<AuthTelegramBotTokens_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.telegram_bot_tokens". */
export type AuthTelegramBotTokens_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  telegram_bots_aggregate?: InputMaybe<Telegram_Bot_Aggregate_Order_By>;
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.telegram_bot_tokens */
export type AuthTelegramBotTokens_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "auth.telegram_bot_tokens" */
export enum AuthTelegramBotTokens_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "auth.telegram_bot_tokens" */
export type AuthTelegramBotTokens_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "authTelegramBotTokens" */
export type AuthTelegramBotTokens_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthTelegramBotTokens_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthTelegramBotTokens_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  token?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.telegram_bot_tokens" */
export enum AuthTelegramBotTokens_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Token = 'token'
}

export type AuthTelegramBotTokens_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthTelegramBotTokens_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthTelegramBotTokens_Bool_Exp;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProviders_Aggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProviders_Aggregate_Fields>;
  nodes: Array<AuthUserProviders>;
};

export type AuthUserProviders_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp_Count>;
};

export type AuthUserProviders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserProviders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_Fields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProviders_Max_Fields>;
  min?: Maybe<AuthUserProviders_Min_Fields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProviders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProviders_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserProviders_Max_Order_By>;
  min?: InputMaybe<AuthUserProviders_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProviders_Arr_Rel_Insert_Input = {
  data: Array<AuthUserProviders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProviders_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  _not?: InputMaybe<AuthUserProviders_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserProviders_Bool_Exp>>;
  accessToken?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  provider?: InputMaybe<AuthProviders_Bool_Exp>;
  providerId?: InputMaybe<String_Comparison_Exp>;
  providerUserId?: InputMaybe<String_Comparison_Exp>;
  refreshToken?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProviders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_user_id", "provider_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "user_id", "provider_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProviders_Insert_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProviders_Obj_Rel_Insert_Input>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProviders_Max_Fields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProviders_Max_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserProviders_Min_Fields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProviders_Min_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProviders_Mutation_Response = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProviders_On_Conflict = {
  constraint: AuthUserProviders_Constraint;
  update_columns?: Array<AuthUserProviders_Update_Column>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProviders_Order_By = {
  accessToken?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<AuthProviders_Order_By>;
  providerId?: InputMaybe<Order_By>;
  providerUserId?: InputMaybe<Order_By>;
  refreshToken?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_providers */
export type AuthUserProviders_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProviders_Select_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProviders_Set_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserProviders" */
export type AuthUserProviders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserProviders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserProviders_Stream_Cursor_Value_Input = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProviders_Update_Column {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type AuthUserProviders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserProviders_Bool_Exp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRoles_Aggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRoles_Aggregate_Fields>;
  nodes: Array<AuthUserRoles>;
};

export type AuthUserRoles_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp_Count>;
};

export type AuthUserRoles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserRoles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_Fields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRoles_Max_Fields>;
  min?: Maybe<AuthUserRoles_Min_Fields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRoles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRoles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserRoles_Max_Order_By>;
  min?: InputMaybe<AuthUserRoles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRoles_Arr_Rel_Insert_Input = {
  data: Array<AuthUserRoles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRoles_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  _not?: InputMaybe<AuthUserRoles_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserRoles_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRoles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRoles_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRoles_Max_Fields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRoles_Max_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserRoles_Min_Fields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRoles_Min_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRoles_Mutation_Response = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRoles_On_Conflict = {
  constraint: AuthUserRoles_Constraint;
  update_columns?: Array<AuthUserRoles_Update_Column>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRoles_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<AuthRoles_Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_roles */
export type AuthUserRoles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRoles_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRoles_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "authUserRoles" */
export type AuthUserRoles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserRoles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserRoles_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRoles_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AuthUserRoles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserRoles_Bool_Exp;
};

/** User webauthn security keys. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserSecurityKeys = {
  __typename?: 'authUserSecurityKeys';
  counter: Scalars['bigint'];
  credentialId: Scalars['String'];
  credentialPublicKey?: Maybe<Scalars['bytea']>;
  id: Scalars['uuid'];
  nickname?: Maybe<Scalars['String']>;
  transports: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate = {
  __typename?: 'authUserSecurityKeys_aggregate';
  aggregate?: Maybe<AuthUserSecurityKeys_Aggregate_Fields>;
  nodes: Array<AuthUserSecurityKeys>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp = {
  count?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp_Count>;
};

export type AuthUserSecurityKeys_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Fields = {
  __typename?: 'authUserSecurityKeys_aggregate_fields';
  avg?: Maybe<AuthUserSecurityKeys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<AuthUserSecurityKeys_Max_Fields>;
  min?: Maybe<AuthUserSecurityKeys_Min_Fields>;
  stddev?: Maybe<AuthUserSecurityKeys_Stddev_Fields>;
  stddev_pop?: Maybe<AuthUserSecurityKeys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<AuthUserSecurityKeys_Stddev_Samp_Fields>;
  sum?: Maybe<AuthUserSecurityKeys_Sum_Fields>;
  var_pop?: Maybe<AuthUserSecurityKeys_Var_Pop_Fields>;
  var_samp?: Maybe<AuthUserSecurityKeys_Var_Samp_Fields>;
  variance?: Maybe<AuthUserSecurityKeys_Variance_Fields>;
};


/** aggregate fields of "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Aggregate_Order_By = {
  avg?: InputMaybe<AuthUserSecurityKeys_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<AuthUserSecurityKeys_Max_Order_By>;
  min?: InputMaybe<AuthUserSecurityKeys_Min_Order_By>;
  stddev?: InputMaybe<AuthUserSecurityKeys_Stddev_Order_By>;
  stddev_pop?: InputMaybe<AuthUserSecurityKeys_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<AuthUserSecurityKeys_Stddev_Samp_Order_By>;
  sum?: InputMaybe<AuthUserSecurityKeys_Sum_Order_By>;
  var_pop?: InputMaybe<AuthUserSecurityKeys_Var_Pop_Order_By>;
  var_samp?: InputMaybe<AuthUserSecurityKeys_Var_Samp_Order_By>;
  variance?: InputMaybe<AuthUserSecurityKeys_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Arr_Rel_Insert_Input = {
  data: Array<AuthUserSecurityKeys_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};

/** aggregate avg on columns */
export type AuthUserSecurityKeys_Avg_Fields = {
  __typename?: 'authUserSecurityKeys_avg_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Avg_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "auth.user_security_keys". All fields are combined with a logical 'AND'. */
export type AuthUserSecurityKeys_Bool_Exp = {
  _and?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  _not?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  _or?: InputMaybe<Array<AuthUserSecurityKeys_Bool_Exp>>;
  counter?: InputMaybe<Bigint_Comparison_Exp>;
  credentialId?: InputMaybe<String_Comparison_Exp>;
  credentialPublicKey?: InputMaybe<Bytea_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  nickname?: InputMaybe<String_Comparison_Exp>;
  transports?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Constraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserSecurityKeyCredentialIdKey = 'user_security_key_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserSecurityKeysPkey = 'user_security_keys_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Inc_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Insert_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserSecurityKeys_Max_Fields = {
  __typename?: 'authUserSecurityKeys_max_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Max_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type AuthUserSecurityKeys_Min_Fields = {
  __typename?: 'authUserSecurityKeys_min_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  nickname?: Maybe<Scalars['String']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Min_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Mutation_Response = {
  __typename?: 'authUserSecurityKeys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserSecurityKeys>;
};

/** on_conflict condition type for table "auth.user_security_keys" */
export type AuthUserSecurityKeys_On_Conflict = {
  constraint: AuthUserSecurityKeys_Constraint;
  update_columns?: Array<AuthUserSecurityKeys_Update_Column>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.user_security_keys". */
export type AuthUserSecurityKeys_Order_By = {
  counter?: InputMaybe<Order_By>;
  credentialId?: InputMaybe<Order_By>;
  credentialPublicKey?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  nickname?: InputMaybe<Order_By>;
  transports?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth.user_security_keys */
export type AuthUserSecurityKeys_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Select_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Set_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type AuthUserSecurityKeys_Stddev_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type AuthUserSecurityKeys_Stddev_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type AuthUserSecurityKeys_Stddev_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Stddev_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "authUserSecurityKeys" */
export type AuthUserSecurityKeys_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: AuthUserSecurityKeys_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type AuthUserSecurityKeys_Stream_Cursor_Value_Input = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  nickname?: InputMaybe<Scalars['String']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type AuthUserSecurityKeys_Sum_Fields = {
  __typename?: 'authUserSecurityKeys_sum_fields';
  counter?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Sum_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** update columns of table "auth.user_security_keys" */
export enum AuthUserSecurityKeys_Update_Column {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Nickname = 'nickname',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export type AuthUserSecurityKeys_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  /** filter the rows which have to be updated */
  where: AuthUserSecurityKeys_Bool_Exp;
};

/** aggregate var_pop on columns */
export type AuthUserSecurityKeys_Var_Pop_Fields = {
  __typename?: 'authUserSecurityKeys_var_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Pop_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type AuthUserSecurityKeys_Var_Samp_Fields = {
  __typename?: 'authUserSecurityKeys_var_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Var_Samp_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type AuthUserSecurityKeys_Variance_Fields = {
  __typename?: 'authUserSecurityKeys_variance_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auth.user_security_keys" */
export type AuthUserSecurityKeys_Variance_Order_By = {
  counter?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  files_aggregate?: InputMaybe<Files_Aggregate_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "buckets" */
export type Buckets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Buckets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Buckets_Stream_Cursor_Value_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Buckets_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Buckets_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Buckets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Buckets_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']>;
  _gt?: InputMaybe<Scalars['bytea']>;
  _gte?: InputMaybe<Scalars['bytea']>;
  _in?: InputMaybe<Array<Scalars['bytea']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bytea']>;
  _lte?: InputMaybe<Scalars['bytea']>;
  _neq?: InputMaybe<Scalars['bytea']>;
  _nin?: InputMaybe<Array<Scalars['bytea']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type Citext_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** columns and relationships of "company" */
export type Company = {
  __typename?: 'company';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  spaces: Array<Space>;
  /** An aggregate relationship */
  spaces_aggregate: Space_Aggregate;
  /** An array relationship */
  telegram_bots: Array<Telegram_Bot>;
  /** An aggregate relationship */
  telegram_bots_aggregate: Telegram_Bot_Aggregate;
  /** An array relationship */
  user_companies: Array<User_Company>;
  /** An aggregate relationship */
  user_companies_aggregate: User_Company_Aggregate;
};


/** columns and relationships of "company" */
export type CompanySpacesArgs = {
  distinct_on?: InputMaybe<Array<Space_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Space_Order_By>>;
  where?: InputMaybe<Space_Bool_Exp>;
};


/** columns and relationships of "company" */
export type CompanySpaces_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Space_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Space_Order_By>>;
  where?: InputMaybe<Space_Bool_Exp>;
};


/** columns and relationships of "company" */
export type CompanyTelegram_BotsArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Bot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Bot_Order_By>>;
  where?: InputMaybe<Telegram_Bot_Bool_Exp>;
};


/** columns and relationships of "company" */
export type CompanyTelegram_Bots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Bot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Bot_Order_By>>;
  where?: InputMaybe<Telegram_Bot_Bool_Exp>;
};


/** columns and relationships of "company" */
export type CompanyUser_CompaniesArgs = {
  distinct_on?: InputMaybe<Array<User_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Company_Order_By>>;
  where?: InputMaybe<User_Company_Bool_Exp>;
};


/** columns and relationships of "company" */
export type CompanyUser_Companies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Company_Order_By>>;
  where?: InputMaybe<User_Company_Bool_Exp>;
};

/** aggregated selection of "company" */
export type Company_Aggregate = {
  __typename?: 'company_aggregate';
  aggregate?: Maybe<Company_Aggregate_Fields>;
  nodes: Array<Company>;
};

/** aggregate fields of "company" */
export type Company_Aggregate_Fields = {
  __typename?: 'company_aggregate_fields';
  avg?: Maybe<Company_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Company_Max_Fields>;
  min?: Maybe<Company_Min_Fields>;
  stddev?: Maybe<Company_Stddev_Fields>;
  stddev_pop?: Maybe<Company_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Company_Stddev_Samp_Fields>;
  sum?: Maybe<Company_Sum_Fields>;
  var_pop?: Maybe<Company_Var_Pop_Fields>;
  var_samp?: Maybe<Company_Var_Samp_Fields>;
  variance?: Maybe<Company_Variance_Fields>;
};


/** aggregate fields of "company" */
export type Company_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Company_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Company_Avg_Fields = {
  __typename?: 'company_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "company". All fields are combined with a logical 'AND'. */
export type Company_Bool_Exp = {
  _and?: InputMaybe<Array<Company_Bool_Exp>>;
  _not?: InputMaybe<Company_Bool_Exp>;
  _or?: InputMaybe<Array<Company_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  spaces?: InputMaybe<Space_Bool_Exp>;
  spaces_aggregate?: InputMaybe<Space_Aggregate_Bool_Exp>;
  telegram_bots?: InputMaybe<Telegram_Bot_Bool_Exp>;
  telegram_bots_aggregate?: InputMaybe<Telegram_Bot_Aggregate_Bool_Exp>;
  user_companies?: InputMaybe<User_Company_Bool_Exp>;
  user_companies_aggregate?: InputMaybe<User_Company_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "company" */
export enum Company_Constraint {
  /** unique or primary key constraint on columns "id" */
  CompaniesPkey = 'companies_pkey'
}

/** input type for inserting data into table "company" */
export type Company_Insert_Input = {
  name?: InputMaybe<Scalars['String']>;
  spaces?: InputMaybe<Space_Arr_Rel_Insert_Input>;
  telegram_bots?: InputMaybe<Telegram_Bot_Arr_Rel_Insert_Input>;
  user_companies?: InputMaybe<User_Company_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Company_Max_Fields = {
  __typename?: 'company_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Company_Min_Fields = {
  __typename?: 'company_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "company" */
export type Company_Mutation_Response = {
  __typename?: 'company_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Company>;
};

/** input type for inserting object relation for remote table "company" */
export type Company_Obj_Rel_Insert_Input = {
  data: Company_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Company_On_Conflict>;
};

/** on_conflict condition type for table "company" */
export type Company_On_Conflict = {
  constraint: Company_Constraint;
  update_columns?: Array<Company_Update_Column>;
  where?: InputMaybe<Company_Bool_Exp>;
};

/** Ordering options when selecting data from "company". */
export type Company_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  spaces_aggregate?: InputMaybe<Space_Aggregate_Order_By>;
  telegram_bots_aggregate?: InputMaybe<Telegram_Bot_Aggregate_Order_By>;
  user_companies_aggregate?: InputMaybe<User_Company_Aggregate_Order_By>;
};

/** primary key columns input for table: company */
export type Company_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "company" */
export enum Company_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "company" */
export type Company_Set_Input = {
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Company_Stddev_Fields = {
  __typename?: 'company_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Company_Stddev_Pop_Fields = {
  __typename?: 'company_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Company_Stddev_Samp_Fields = {
  __typename?: 'company_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "company" */
export type Company_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Company_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Company_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Company_Sum_Fields = {
  __typename?: 'company_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "company" */
export enum Company_Update_Column {
  /** column name */
  Name = 'name'
}

export type Company_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Company_Set_Input>;
  /** filter the rows which have to be updated */
  where: Company_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Company_Var_Pop_Fields = {
  __typename?: 'company_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Company_Var_Samp_Fields = {
  __typename?: 'company_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Company_Variance_Fields = {
  __typename?: 'company_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "event" */
export type Event = {
  __typename?: 'event';
  date: Scalars['timestamptz'];
  description: Scalars['String'];
  /** An array relationship */
  event_participants: Array<Event_Participant>;
  /** An aggregate relationship */
  event_participants_aggregate: Event_Participant_Aggregate;
  id: Scalars['Int'];
  is_online: Scalars['Boolean'];
  location: Scalars['String'];
  name: Scalars['String'];
  /** An object relationship */
  space: Space;
  space_id: Scalars['Int'];
};


/** columns and relationships of "event" */
export type EventEvent_ParticipantsArgs = {
  distinct_on?: InputMaybe<Array<Event_Participant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Participant_Order_By>>;
  where?: InputMaybe<Event_Participant_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventEvent_Participants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Participant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Participant_Order_By>>;
  where?: InputMaybe<Event_Participant_Bool_Exp>;
};

/** aggregated selection of "event" */
export type Event_Aggregate = {
  __typename?: 'event_aggregate';
  aggregate?: Maybe<Event_Aggregate_Fields>;
  nodes: Array<Event>;
};

export type Event_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Event_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Event_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Event_Aggregate_Bool_Exp_Count>;
};

export type Event_Aggregate_Bool_Exp_Bool_And = {
  arguments: Event_Select_Column_Event_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Event_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Event_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Event_Select_Column_Event_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Event_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Event_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Event_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "event" */
export type Event_Aggregate_Fields = {
  __typename?: 'event_aggregate_fields';
  avg?: Maybe<Event_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Event_Max_Fields>;
  min?: Maybe<Event_Min_Fields>;
  stddev?: Maybe<Event_Stddev_Fields>;
  stddev_pop?: Maybe<Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Event_Stddev_Samp_Fields>;
  sum?: Maybe<Event_Sum_Fields>;
  var_pop?: Maybe<Event_Var_Pop_Fields>;
  var_samp?: Maybe<Event_Var_Samp_Fields>;
  variance?: Maybe<Event_Variance_Fields>;
};


/** aggregate fields of "event" */
export type Event_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Event_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "event" */
export type Event_Aggregate_Order_By = {
  avg?: InputMaybe<Event_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Event_Max_Order_By>;
  min?: InputMaybe<Event_Min_Order_By>;
  stddev?: InputMaybe<Event_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Event_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Event_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Event_Sum_Order_By>;
  var_pop?: InputMaybe<Event_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Event_Var_Samp_Order_By>;
  variance?: InputMaybe<Event_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "event" */
export type Event_Arr_Rel_Insert_Input = {
  data: Array<Event_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Event_On_Conflict>;
};

/** aggregate avg on columns */
export type Event_Avg_Fields = {
  __typename?: 'event_avg_fields';
  id?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "event" */
export type Event_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "event". All fields are combined with a logical 'AND'. */
export type Event_Bool_Exp = {
  _and?: InputMaybe<Array<Event_Bool_Exp>>;
  _not?: InputMaybe<Event_Bool_Exp>;
  _or?: InputMaybe<Array<Event_Bool_Exp>>;
  date?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  event_participants?: InputMaybe<Event_Participant_Bool_Exp>;
  event_participants_aggregate?: InputMaybe<Event_Participant_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_online?: InputMaybe<Boolean_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  space?: InputMaybe<Space_Bool_Exp>;
  space_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "event" */
export enum Event_Constraint {
  /** unique or primary key constraint on columns "id" */
  EventPkey = 'event_pkey'
}

/** input type for incrementing numeric columns in table "event" */
export type Event_Inc_Input = {
  space_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "event" */
export type Event_Insert_Input = {
  date?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  event_participants?: InputMaybe<Event_Participant_Arr_Rel_Insert_Input>;
  is_online?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  space?: InputMaybe<Space_Obj_Rel_Insert_Input>;
  space_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Event_Max_Fields = {
  __typename?: 'event_max_fields';
  date?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  space_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "event" */
export type Event_Max_Order_By = {
  date?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Event_Min_Fields = {
  __typename?: 'event_min_fields';
  date?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  space_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "event" */
export type Event_Min_Order_By = {
  date?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "event" */
export type Event_Mutation_Response = {
  __typename?: 'event_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Event>;
};

/** input type for inserting object relation for remote table "event" */
export type Event_Obj_Rel_Insert_Input = {
  data: Event_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Event_On_Conflict>;
};

/** on_conflict condition type for table "event" */
export type Event_On_Conflict = {
  constraint: Event_Constraint;
  update_columns?: Array<Event_Update_Column>;
  where?: InputMaybe<Event_Bool_Exp>;
};

/** Ordering options when selecting data from "event". */
export type Event_Order_By = {
  date?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  event_participants_aggregate?: InputMaybe<Event_Participant_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  is_online?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  space?: InputMaybe<Space_Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "event_participant" */
export type Event_Participant = {
  __typename?: 'event_participant';
  /** An object relationship */
  event: Event;
  event_id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "event_participant" */
export type Event_Participant_Aggregate = {
  __typename?: 'event_participant_aggregate';
  aggregate?: Maybe<Event_Participant_Aggregate_Fields>;
  nodes: Array<Event_Participant>;
};

export type Event_Participant_Aggregate_Bool_Exp = {
  count?: InputMaybe<Event_Participant_Aggregate_Bool_Exp_Count>;
};

export type Event_Participant_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Event_Participant_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Event_Participant_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "event_participant" */
export type Event_Participant_Aggregate_Fields = {
  __typename?: 'event_participant_aggregate_fields';
  avg?: Maybe<Event_Participant_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Event_Participant_Max_Fields>;
  min?: Maybe<Event_Participant_Min_Fields>;
  stddev?: Maybe<Event_Participant_Stddev_Fields>;
  stddev_pop?: Maybe<Event_Participant_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Event_Participant_Stddev_Samp_Fields>;
  sum?: Maybe<Event_Participant_Sum_Fields>;
  var_pop?: Maybe<Event_Participant_Var_Pop_Fields>;
  var_samp?: Maybe<Event_Participant_Var_Samp_Fields>;
  variance?: Maybe<Event_Participant_Variance_Fields>;
};


/** aggregate fields of "event_participant" */
export type Event_Participant_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Event_Participant_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "event_participant" */
export type Event_Participant_Aggregate_Order_By = {
  avg?: InputMaybe<Event_Participant_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Event_Participant_Max_Order_By>;
  min?: InputMaybe<Event_Participant_Min_Order_By>;
  stddev?: InputMaybe<Event_Participant_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Event_Participant_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Event_Participant_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Event_Participant_Sum_Order_By>;
  var_pop?: InputMaybe<Event_Participant_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Event_Participant_Var_Samp_Order_By>;
  variance?: InputMaybe<Event_Participant_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "event_participant" */
export type Event_Participant_Arr_Rel_Insert_Input = {
  data: Array<Event_Participant_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Event_Participant_On_Conflict>;
};

/** aggregate avg on columns */
export type Event_Participant_Avg_Fields = {
  __typename?: 'event_participant_avg_fields';
  event_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "event_participant" */
export type Event_Participant_Avg_Order_By = {
  event_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "event_participant". All fields are combined with a logical 'AND'. */
export type Event_Participant_Bool_Exp = {
  _and?: InputMaybe<Array<Event_Participant_Bool_Exp>>;
  _not?: InputMaybe<Event_Participant_Bool_Exp>;
  _or?: InputMaybe<Array<Event_Participant_Bool_Exp>>;
  event?: InputMaybe<Event_Bool_Exp>;
  event_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "event_participant" */
export enum Event_Participant_Constraint {
  /** unique or primary key constraint on columns "user_id", "event_id" */
  EventParticipantPkey = 'event_participant_pkey'
}

/** input type for incrementing numeric columns in table "event_participant" */
export type Event_Participant_Inc_Input = {
  event_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "event_participant" */
export type Event_Participant_Insert_Input = {
  event?: InputMaybe<Event_Obj_Rel_Insert_Input>;
  event_id?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Event_Participant_Max_Fields = {
  __typename?: 'event_participant_max_fields';
  event_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "event_participant" */
export type Event_Participant_Max_Order_By = {
  event_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Event_Participant_Min_Fields = {
  __typename?: 'event_participant_min_fields';
  event_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "event_participant" */
export type Event_Participant_Min_Order_By = {
  event_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "event_participant" */
export type Event_Participant_Mutation_Response = {
  __typename?: 'event_participant_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Event_Participant>;
};

/** on_conflict condition type for table "event_participant" */
export type Event_Participant_On_Conflict = {
  constraint: Event_Participant_Constraint;
  update_columns?: Array<Event_Participant_Update_Column>;
  where?: InputMaybe<Event_Participant_Bool_Exp>;
};

/** Ordering options when selecting data from "event_participant". */
export type Event_Participant_Order_By = {
  event?: InputMaybe<Event_Order_By>;
  event_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: event_participant */
export type Event_Participant_Pk_Columns_Input = {
  event_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};

/** select columns of table "event_participant" */
export enum Event_Participant_Select_Column {
  /** column name */
  EventId = 'event_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "event_participant" */
export type Event_Participant_Set_Input = {
  event_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Event_Participant_Stddev_Fields = {
  __typename?: 'event_participant_stddev_fields';
  event_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "event_participant" */
export type Event_Participant_Stddev_Order_By = {
  event_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Event_Participant_Stddev_Pop_Fields = {
  __typename?: 'event_participant_stddev_pop_fields';
  event_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "event_participant" */
export type Event_Participant_Stddev_Pop_Order_By = {
  event_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Event_Participant_Stddev_Samp_Fields = {
  __typename?: 'event_participant_stddev_samp_fields';
  event_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "event_participant" */
export type Event_Participant_Stddev_Samp_Order_By = {
  event_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "event_participant" */
export type Event_Participant_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Event_Participant_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Event_Participant_Stream_Cursor_Value_Input = {
  event_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Event_Participant_Sum_Fields = {
  __typename?: 'event_participant_sum_fields';
  event_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "event_participant" */
export type Event_Participant_Sum_Order_By = {
  event_id?: InputMaybe<Order_By>;
};

/** update columns of table "event_participant" */
export enum Event_Participant_Update_Column {
  /** column name */
  EventId = 'event_id',
  /** column name */
  UserId = 'user_id'
}

export type Event_Participant_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Event_Participant_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Event_Participant_Set_Input>;
  /** filter the rows which have to be updated */
  where: Event_Participant_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Event_Participant_Var_Pop_Fields = {
  __typename?: 'event_participant_var_pop_fields';
  event_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "event_participant" */
export type Event_Participant_Var_Pop_Order_By = {
  event_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Event_Participant_Var_Samp_Fields = {
  __typename?: 'event_participant_var_samp_fields';
  event_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "event_participant" */
export type Event_Participant_Var_Samp_Order_By = {
  event_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Event_Participant_Variance_Fields = {
  __typename?: 'event_participant_variance_fields';
  event_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "event_participant" */
export type Event_Participant_Variance_Order_By = {
  event_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: event */
export type Event_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "event" */
export enum Event_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsOnline = 'is_online',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  SpaceId = 'space_id'
}

/** select "event_aggregate_bool_exp_bool_and_arguments_columns" columns of table "event" */
export enum Event_Select_Column_Event_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsOnline = 'is_online'
}

/** select "event_aggregate_bool_exp_bool_or_arguments_columns" columns of table "event" */
export enum Event_Select_Column_Event_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsOnline = 'is_online'
}

/** input type for updating data in table "event" */
export type Event_Set_Input = {
  date?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  is_online?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  space_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Event_Stddev_Fields = {
  __typename?: 'event_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "event" */
export type Event_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Event_Stddev_Pop_Fields = {
  __typename?: 'event_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "event" */
export type Event_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Event_Stddev_Samp_Fields = {
  __typename?: 'event_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "event" */
export type Event_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "event" */
export type Event_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Event_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Event_Stream_Cursor_Value_Input = {
  date?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  is_online?: InputMaybe<Scalars['Boolean']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  space_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate sum on columns */
export type Event_Sum_Fields = {
  __typename?: 'event_sum_fields';
  id?: Maybe<Scalars['Int']>;
  space_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "event" */
export type Event_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** update columns of table "event" */
export enum Event_Update_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Description = 'description',
  /** column name */
  IsOnline = 'is_online',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  SpaceId = 'space_id'
}

export type Event_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Event_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Event_Set_Input>;
  /** filter the rows which have to be updated */
  where: Event_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Event_Var_Pop_Fields = {
  __typename?: 'event_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "event" */
export type Event_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Event_Var_Samp_Fields = {
  __typename?: 'event_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "event" */
export type Event_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Event_Variance_Fields = {
  __typename?: 'event_variance_fields';
  id?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "event" */
export type Event_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isUploaded?: Maybe<Scalars['Boolean']>;
  metadata?: Maybe<Scalars['jsonb']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  /** An object relationship */
  telegram_file?: Maybe<Telegram_File>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};


/** columns and relationships of "storage.files" */
export type FilesMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

export type Files_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Files_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Files_Aggregate_Bool_Exp_Count>;
};

export type Files_Aggregate_Bool_Exp_Bool_And = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Files_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Files_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Files_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  telegram_file?: InputMaybe<Telegram_File_Bool_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Files_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Files_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Files_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  telegram_file?: InputMaybe<Telegram_File_Obj_Rel_Insert_Input>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** input type for inserting object relation for remote table "storage.files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  telegram_file?: InputMaybe<Telegram_File_Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Files_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** select "files_aggregate_bool_exp_bool_and_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** select "files_aggregate_bool_exp_bool_or_arguments_columns" columns of table "storage.files" */
export enum Files_Select_Column_Files_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsUploaded = 'isUploaded'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

export type Files_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Files_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Files_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Files_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Files_Set_Input>;
  /** filter the rows which have to be updated */
  where: Files_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']>;
  _gt?: InputMaybe<Scalars['json']>;
  _gte?: InputMaybe<Scalars['json']>;
  _in?: InputMaybe<Array<Scalars['json']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['json']>;
  _lte?: InputMaybe<Scalars['json']>;
  _neq?: InputMaybe<Scalars['json']>;
  _nin?: InputMaybe<Array<Scalars['json']>>;
};

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete single row from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** delete data from the table: "auth.refresh_token_types" */
  deleteAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** delete single row from the table: "auth.telegram_bot_tokens" */
  deleteAuthTelegramBotToken?: Maybe<AuthTelegramBotTokens>;
  /** delete data from the table: "auth.telegram_bot_tokens" */
  deleteAuthTelegramBotTokens?: Maybe<AuthTelegramBotTokens_Mutation_Response>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** delete single row from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** delete data from the table: "auth.user_security_keys" */
  deleteAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "storage.virus" */
  deleteVirus?: Maybe<Virus>;
  /** delete data from the table: "storage.virus" */
  deleteViruses?: Maybe<Virus_Mutation_Response>;
  /** delete data from the table: "company" */
  delete_company?: Maybe<Company_Mutation_Response>;
  /** delete single row from the table: "company" */
  delete_company_by_pk?: Maybe<Company>;
  /** delete data from the table: "event" */
  delete_event?: Maybe<Event_Mutation_Response>;
  /** delete single row from the table: "event" */
  delete_event_by_pk?: Maybe<Event>;
  /** delete data from the table: "event_participant" */
  delete_event_participant?: Maybe<Event_Participant_Mutation_Response>;
  /** delete single row from the table: "event_participant" */
  delete_event_participant_by_pk?: Maybe<Event_Participant>;
  /** delete data from the table: "space" */
  delete_space?: Maybe<Space_Mutation_Response>;
  /** delete single row from the table: "space" */
  delete_space_by_pk?: Maybe<Space>;
  /** delete data from the table: "space_document" */
  delete_space_document?: Maybe<Space_Document_Mutation_Response>;
  /** delete single row from the table: "space_document" */
  delete_space_document_by_pk?: Maybe<Space_Document>;
  /** delete data from the table: "telegram_bot" */
  delete_telegram_bot?: Maybe<Telegram_Bot_Mutation_Response>;
  /** delete single row from the table: "telegram_bot" */
  delete_telegram_bot_by_pk?: Maybe<Telegram_Bot>;
  /** delete data from the table: "telegram_chat" */
  delete_telegram_chat?: Maybe<Telegram_Chat_Mutation_Response>;
  /** delete single row from the table: "telegram_chat" */
  delete_telegram_chat_by_pk?: Maybe<Telegram_Chat>;
  /** delete data from the table: "telegram_file" */
  delete_telegram_file?: Maybe<Telegram_File_Mutation_Response>;
  /** delete single row from the table: "telegram_file" */
  delete_telegram_file_by_pk?: Maybe<Telegram_File>;
  /** delete data from the table: "tinder_swipes" */
  delete_tinder_swipes?: Maybe<Tinder_Swipes_Mutation_Response>;
  /** delete single row from the table: "tinder_swipes" */
  delete_tinder_swipes_by_pk?: Maybe<Tinder_Swipes>;
  /** delete data from the table: "user_company" */
  delete_user_company?: Maybe<User_Company_Mutation_Response>;
  /** delete single row from the table: "user_company" */
  delete_user_company_by_pk?: Maybe<User_Company>;
  /** delete data from the table: "user_extended_info" */
  delete_user_extended_info?: Maybe<User_Extended_Info_Mutation_Response>;
  /** delete single row from the table: "user_extended_info" */
  delete_user_extended_info_by_pk?: Maybe<User_Extended_Info>;
  /** delete data from the table: "user_profile" */
  delete_user_profile?: Maybe<User_Profile_Mutation_Response>;
  /** delete single row from the table: "user_profile" */
  delete_user_profile_by_pk?: Maybe<User_Profile>;
  /** delete data from the table: "user_space" */
  delete_user_space?: Maybe<User_Space_Mutation_Response>;
  /** delete single row from the table: "user_space" */
  delete_user_space_by_pk?: Maybe<User_Space>;
  /** delete data from the table: "webhook_logs" */
  delete_webhook_logs?: Maybe<Webhook_Logs_Mutation_Response>;
  /** delete single row from the table: "webhook_logs" */
  delete_webhook_logs_by_pk?: Maybe<Webhook_Logs>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert a single row into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** insert data into the table: "auth.refresh_token_types" */
  insertAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.telegram_bot_tokens" */
  insertAuthTelegramBotToken?: Maybe<AuthTelegramBotTokens>;
  /** insert data into the table: "auth.telegram_bot_tokens" */
  insertAuthTelegramBotTokens?: Maybe<AuthTelegramBotTokens_Mutation_Response>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** insert a single row into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** insert data into the table: "auth.user_security_keys" */
  insertAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "storage.virus" */
  insertVirus?: Maybe<Virus>;
  /** insert data into the table: "storage.virus" */
  insertViruses?: Maybe<Virus_Mutation_Response>;
  /** insert data into the table: "company" */
  insert_company?: Maybe<Company_Mutation_Response>;
  /** insert a single row into the table: "company" */
  insert_company_one?: Maybe<Company>;
  /** insert data into the table: "event" */
  insert_event?: Maybe<Event_Mutation_Response>;
  /** insert a single row into the table: "event" */
  insert_event_one?: Maybe<Event>;
  /** insert data into the table: "event_participant" */
  insert_event_participant?: Maybe<Event_Participant_Mutation_Response>;
  /** insert a single row into the table: "event_participant" */
  insert_event_participant_one?: Maybe<Event_Participant>;
  /** insert data into the table: "space" */
  insert_space?: Maybe<Space_Mutation_Response>;
  /** insert data into the table: "space_document" */
  insert_space_document?: Maybe<Space_Document_Mutation_Response>;
  /** insert a single row into the table: "space_document" */
  insert_space_document_one?: Maybe<Space_Document>;
  /** insert a single row into the table: "space" */
  insert_space_one?: Maybe<Space>;
  /** insert data into the table: "telegram_bot" */
  insert_telegram_bot?: Maybe<Telegram_Bot_Mutation_Response>;
  /** insert a single row into the table: "telegram_bot" */
  insert_telegram_bot_one?: Maybe<Telegram_Bot>;
  /** insert data into the table: "telegram_chat" */
  insert_telegram_chat?: Maybe<Telegram_Chat_Mutation_Response>;
  /** insert a single row into the table: "telegram_chat" */
  insert_telegram_chat_one?: Maybe<Telegram_Chat>;
  /** insert data into the table: "telegram_file" */
  insert_telegram_file?: Maybe<Telegram_File_Mutation_Response>;
  /** insert a single row into the table: "telegram_file" */
  insert_telegram_file_one?: Maybe<Telegram_File>;
  /** insert data into the table: "tinder_swipes" */
  insert_tinder_swipes?: Maybe<Tinder_Swipes_Mutation_Response>;
  /** insert a single row into the table: "tinder_swipes" */
  insert_tinder_swipes_one?: Maybe<Tinder_Swipes>;
  /** insert data into the table: "user_company" */
  insert_user_company?: Maybe<User_Company_Mutation_Response>;
  /** insert a single row into the table: "user_company" */
  insert_user_company_one?: Maybe<User_Company>;
  /** insert data into the table: "user_extended_info" */
  insert_user_extended_info?: Maybe<User_Extended_Info_Mutation_Response>;
  /** insert a single row into the table: "user_extended_info" */
  insert_user_extended_info_one?: Maybe<User_Extended_Info>;
  /** insert data into the table: "user_profile" */
  insert_user_profile?: Maybe<User_Profile_Mutation_Response>;
  /** insert a single row into the table: "user_profile" */
  insert_user_profile_one?: Maybe<User_Profile>;
  /** insert data into the table: "user_space" */
  insert_user_space?: Maybe<User_Space_Mutation_Response>;
  /** insert a single row into the table: "user_space" */
  insert_user_space_one?: Maybe<User_Space>;
  /** insert data into the table: "webhook_logs" */
  insert_webhook_logs?: Maybe<Webhook_Logs_Mutation_Response>;
  /** insert a single row into the table: "webhook_logs" */
  insert_webhook_logs_one?: Maybe<Webhook_Logs>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequests_Mutation_Response>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProviders_Mutation_Response>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update single row of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** update data of the table: "auth.refresh_token_types" */
  updateAuthRefreshTokenTypes?: Maybe<AuthRefreshTokenTypes_Mutation_Response>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokens_Mutation_Response>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRoles_Mutation_Response>;
  /** update single row of the table: "auth.telegram_bot_tokens" */
  updateAuthTelegramBotToken?: Maybe<AuthTelegramBotTokens>;
  /** update data of the table: "auth.telegram_bot_tokens" */
  updateAuthTelegramBotTokens?: Maybe<AuthTelegramBotTokens_Mutation_Response>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProviders_Mutation_Response>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRoles_Mutation_Response>;
  /** update single row of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** update data of the table: "auth.user_security_keys" */
  updateAuthUserSecurityKeys?: Maybe<AuthUserSecurityKeys_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "storage.virus" */
  updateVirus?: Maybe<Virus>;
  /** update data of the table: "storage.virus" */
  updateViruses?: Maybe<Virus_Mutation_Response>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequests_Mutation_Response>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_token_types" */
  update_authRefreshTokenTypes_many?: Maybe<Array<Maybe<AuthRefreshTokenTypes_Mutation_Response>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.telegram_bot_tokens" */
  update_authTelegramBotTokens_many?: Maybe<Array<Maybe<AuthTelegramBotTokens_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProviders_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRoles_Mutation_Response>>>;
  /** update multiples rows of table: "auth.user_security_keys" */
  update_authUserSecurityKeys_many?: Maybe<Array<Maybe<AuthUserSecurityKeys_Mutation_Response>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<Buckets_Mutation_Response>>>;
  /** update data of the table: "company" */
  update_company?: Maybe<Company_Mutation_Response>;
  /** update single row of the table: "company" */
  update_company_by_pk?: Maybe<Company>;
  /** update multiples rows of table: "company" */
  update_company_many?: Maybe<Array<Maybe<Company_Mutation_Response>>>;
  /** update data of the table: "event" */
  update_event?: Maybe<Event_Mutation_Response>;
  /** update single row of the table: "event" */
  update_event_by_pk?: Maybe<Event>;
  /** update multiples rows of table: "event" */
  update_event_many?: Maybe<Array<Maybe<Event_Mutation_Response>>>;
  /** update data of the table: "event_participant" */
  update_event_participant?: Maybe<Event_Participant_Mutation_Response>;
  /** update single row of the table: "event_participant" */
  update_event_participant_by_pk?: Maybe<Event_Participant>;
  /** update multiples rows of table: "event_participant" */
  update_event_participant_many?: Maybe<Array<Maybe<Event_Participant_Mutation_Response>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>;
  /** update data of the table: "space" */
  update_space?: Maybe<Space_Mutation_Response>;
  /** update single row of the table: "space" */
  update_space_by_pk?: Maybe<Space>;
  /** update data of the table: "space_document" */
  update_space_document?: Maybe<Space_Document_Mutation_Response>;
  /** update single row of the table: "space_document" */
  update_space_document_by_pk?: Maybe<Space_Document>;
  /** update multiples rows of table: "space_document" */
  update_space_document_many?: Maybe<Array<Maybe<Space_Document_Mutation_Response>>>;
  /** update multiples rows of table: "space" */
  update_space_many?: Maybe<Array<Maybe<Space_Mutation_Response>>>;
  /** update data of the table: "telegram_bot" */
  update_telegram_bot?: Maybe<Telegram_Bot_Mutation_Response>;
  /** update single row of the table: "telegram_bot" */
  update_telegram_bot_by_pk?: Maybe<Telegram_Bot>;
  /** update multiples rows of table: "telegram_bot" */
  update_telegram_bot_many?: Maybe<Array<Maybe<Telegram_Bot_Mutation_Response>>>;
  /** update data of the table: "telegram_chat" */
  update_telegram_chat?: Maybe<Telegram_Chat_Mutation_Response>;
  /** update single row of the table: "telegram_chat" */
  update_telegram_chat_by_pk?: Maybe<Telegram_Chat>;
  /** update multiples rows of table: "telegram_chat" */
  update_telegram_chat_many?: Maybe<Array<Maybe<Telegram_Chat_Mutation_Response>>>;
  /** update data of the table: "telegram_file" */
  update_telegram_file?: Maybe<Telegram_File_Mutation_Response>;
  /** update single row of the table: "telegram_file" */
  update_telegram_file_by_pk?: Maybe<Telegram_File>;
  /** update multiples rows of table: "telegram_file" */
  update_telegram_file_many?: Maybe<Array<Maybe<Telegram_File_Mutation_Response>>>;
  /** update data of the table: "tinder_swipes" */
  update_tinder_swipes?: Maybe<Tinder_Swipes_Mutation_Response>;
  /** update single row of the table: "tinder_swipes" */
  update_tinder_swipes_by_pk?: Maybe<Tinder_Swipes>;
  /** update multiples rows of table: "tinder_swipes" */
  update_tinder_swipes_many?: Maybe<Array<Maybe<Tinder_Swipes_Mutation_Response>>>;
  /** update data of the table: "user_company" */
  update_user_company?: Maybe<User_Company_Mutation_Response>;
  /** update single row of the table: "user_company" */
  update_user_company_by_pk?: Maybe<User_Company>;
  /** update multiples rows of table: "user_company" */
  update_user_company_many?: Maybe<Array<Maybe<User_Company_Mutation_Response>>>;
  /** update data of the table: "user_extended_info" */
  update_user_extended_info?: Maybe<User_Extended_Info_Mutation_Response>;
  /** update single row of the table: "user_extended_info" */
  update_user_extended_info_by_pk?: Maybe<User_Extended_Info>;
  /** update multiples rows of table: "user_extended_info" */
  update_user_extended_info_many?: Maybe<Array<Maybe<User_Extended_Info_Mutation_Response>>>;
  /** update data of the table: "user_profile" */
  update_user_profile?: Maybe<User_Profile_Mutation_Response>;
  /** update single row of the table: "user_profile" */
  update_user_profile_by_pk?: Maybe<User_Profile>;
  /** update multiples rows of table: "user_profile" */
  update_user_profile_many?: Maybe<Array<Maybe<User_Profile_Mutation_Response>>>;
  /** update data of the table: "user_space" */
  update_user_space?: Maybe<User_Space_Mutation_Response>;
  /** update single row of the table: "user_space" */
  update_user_space_by_pk?: Maybe<User_Space>;
  /** update multiples rows of table: "user_space" */
  update_user_space_many?: Maybe<Array<Maybe<User_Space_Mutation_Response>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update multiples rows of table: "storage.virus" */
  update_virus_many?: Maybe<Array<Maybe<Virus_Mutation_Response>>>;
  /** update data of the table: "webhook_logs" */
  update_webhook_logs?: Maybe<Webhook_Logs_Mutation_Response>;
  /** update single row of the table: "webhook_logs" */
  update_webhook_logs_by_pk?: Maybe<Webhook_Logs>;
  /** update multiples rows of table: "webhook_logs" */
  update_webhook_logs_many?: Maybe<Array<Maybe<Webhook_Logs_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthProvidersArgs = {
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypeArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokenTypesArgs = {
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthRolesArgs = {
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthTelegramBotTokenArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteAuthTelegramBotTokensArgs = {
  where: AuthTelegramBotTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserProvidersArgs = {
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserRolesArgs = {
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteAuthUserSecurityKeysArgs = {
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteUsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteVirusArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteVirusesArgs = {
  where: Virus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_CompanyArgs = {
  where: Company_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Company_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_EventArgs = {
  where: Event_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Event_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Event_ParticipantArgs = {
  where: Event_Participant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Event_Participant_By_PkArgs = {
  event_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SpaceArgs = {
  where: Space_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Space_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Space_DocumentArgs = {
  where: Space_Document_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Space_Document_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Telegram_BotArgs = {
  where: Telegram_Bot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Telegram_Bot_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Telegram_ChatArgs = {
  where: Telegram_Chat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Telegram_Chat_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Telegram_FileArgs = {
  where: Telegram_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Telegram_File_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Tinder_SwipesArgs = {
  where: Tinder_Swipes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tinder_Swipes_By_PkArgs = {
  from_user_id: Scalars['uuid'];
  to_user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_CompanyArgs = {
  where: User_Company_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Company_By_PkArgs = {
  company_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_Extended_InfoArgs = {
  where: User_Extended_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Extended_Info_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_ProfileArgs = {
  where: User_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Profile_By_PkArgs = {
  space_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_SpaceArgs = {
  where: User_Space_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Space_By_PkArgs = {
  space_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Webhook_LogsArgs = {
  where: Webhook_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Webhook_Logs_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootInsertAuthProviderArgs = {
  object: AuthProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequests_Insert_Input;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequests_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviderRequests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthProvidersArgs = {
  objects: Array<AuthProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypeArgs = {
  object: AuthRefreshTokenTypes_Insert_Input;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokenTypesArgs = {
  objects: Array<AuthRefreshTokenTypes_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokenTypes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthRefreshTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRoleArgs = {
  object: AuthRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthRolesArgs = {
  objects: Array<AuthRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthTelegramBotTokenArgs = {
  object: AuthTelegramBotTokens_Insert_Input;
  on_conflict?: InputMaybe<AuthTelegramBotTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthTelegramBotTokensArgs = {
  objects: Array<AuthTelegramBotTokens_Insert_Input>;
  on_conflict?: InputMaybe<AuthTelegramBotTokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProviderArgs = {
  object: AuthUserProviders_Insert_Input;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProviders_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserProviders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRoleArgs = {
  object: AuthUserRoles_Insert_Input;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRoles_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserRoles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeyArgs = {
  object: AuthUserSecurityKeys_Insert_Input;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertAuthUserSecurityKeysArgs = {
  objects: Array<AuthUserSecurityKeys_Insert_Input>;
  on_conflict?: InputMaybe<AuthUserSecurityKeys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUserArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertUsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertVirusArgs = {
  object: Virus_Insert_Input;
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertVirusesArgs = {
  objects: Array<Virus_Insert_Input>;
  on_conflict?: InputMaybe<Virus_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CompanyArgs = {
  objects: Array<Company_Insert_Input>;
  on_conflict?: InputMaybe<Company_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_OneArgs = {
  object: Company_Insert_Input;
  on_conflict?: InputMaybe<Company_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_EventArgs = {
  objects: Array<Event_Insert_Input>;
  on_conflict?: InputMaybe<Event_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Event_OneArgs = {
  object: Event_Insert_Input;
  on_conflict?: InputMaybe<Event_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Event_ParticipantArgs = {
  objects: Array<Event_Participant_Insert_Input>;
  on_conflict?: InputMaybe<Event_Participant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Event_Participant_OneArgs = {
  object: Event_Participant_Insert_Input;
  on_conflict?: InputMaybe<Event_Participant_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SpaceArgs = {
  objects: Array<Space_Insert_Input>;
  on_conflict?: InputMaybe<Space_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Space_DocumentArgs = {
  objects: Array<Space_Document_Insert_Input>;
  on_conflict?: InputMaybe<Space_Document_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Space_Document_OneArgs = {
  object: Space_Document_Insert_Input;
  on_conflict?: InputMaybe<Space_Document_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Space_OneArgs = {
  object: Space_Insert_Input;
  on_conflict?: InputMaybe<Space_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Telegram_BotArgs = {
  objects: Array<Telegram_Bot_Insert_Input>;
  on_conflict?: InputMaybe<Telegram_Bot_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Telegram_Bot_OneArgs = {
  object: Telegram_Bot_Insert_Input;
  on_conflict?: InputMaybe<Telegram_Bot_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Telegram_ChatArgs = {
  objects: Array<Telegram_Chat_Insert_Input>;
  on_conflict?: InputMaybe<Telegram_Chat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Telegram_Chat_OneArgs = {
  object: Telegram_Chat_Insert_Input;
  on_conflict?: InputMaybe<Telegram_Chat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Telegram_FileArgs = {
  objects: Array<Telegram_File_Insert_Input>;
  on_conflict?: InputMaybe<Telegram_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Telegram_File_OneArgs = {
  object: Telegram_File_Insert_Input;
  on_conflict?: InputMaybe<Telegram_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tinder_SwipesArgs = {
  objects: Array<Tinder_Swipes_Insert_Input>;
  on_conflict?: InputMaybe<Tinder_Swipes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tinder_Swipes_OneArgs = {
  object: Tinder_Swipes_Insert_Input;
  on_conflict?: InputMaybe<Tinder_Swipes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_CompanyArgs = {
  objects: Array<User_Company_Insert_Input>;
  on_conflict?: InputMaybe<User_Company_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Company_OneArgs = {
  object: User_Company_Insert_Input;
  on_conflict?: InputMaybe<User_Company_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Extended_InfoArgs = {
  objects: Array<User_Extended_Info_Insert_Input>;
  on_conflict?: InputMaybe<User_Extended_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Extended_Info_OneArgs = {
  object: User_Extended_Info_Insert_Input;
  on_conflict?: InputMaybe<User_Extended_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_ProfileArgs = {
  objects: Array<User_Profile_Insert_Input>;
  on_conflict?: InputMaybe<User_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Profile_OneArgs = {
  object: User_Profile_Insert_Input;
  on_conflict?: InputMaybe<User_Profile_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_SpaceArgs = {
  objects: Array<User_Space_Insert_Input>;
  on_conflict?: InputMaybe<User_Space_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Space_OneArgs = {
  object: User_Space_Insert_Input;
  on_conflict?: InputMaybe<User_Space_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Webhook_LogsArgs = {
  objects: Array<Webhook_Logs_Insert_Input>;
  on_conflict?: InputMaybe<Webhook_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Webhook_Logs_OneArgs = {
  object: Webhook_Logs_Insert_Input;
  on_conflict?: InputMaybe<Webhook_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  pk_columns: AuthProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  pk_columns: AuthProviderRequests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequests_Append_Input>;
  _delete_at_path?: InputMaybe<AuthProviderRequests_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthProviderRequests_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthProviderRequests_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthProviderRequests_Prepend_Input>;
  _set?: InputMaybe<AuthProviderRequests_Set_Input>;
  where: AuthProviderRequests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProviders_Set_Input>;
  where: AuthProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  pk_columns: AuthRefreshTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypeArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  pk_columns: AuthRefreshTokenTypes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokenTypesArgs = {
  _set?: InputMaybe<AuthRefreshTokenTypes_Set_Input>;
  where: AuthRefreshTokenTypes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRefreshTokensArgs = {
  _append?: InputMaybe<AuthRefreshTokens_Append_Input>;
  _delete_at_path?: InputMaybe<AuthRefreshTokens_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<AuthRefreshTokens_Delete_Elem_Input>;
  _delete_key?: InputMaybe<AuthRefreshTokens_Delete_Key_Input>;
  _prepend?: InputMaybe<AuthRefreshTokens_Prepend_Input>;
  _set?: InputMaybe<AuthRefreshTokens_Set_Input>;
  where: AuthRefreshTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  pk_columns: AuthRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRoles_Set_Input>;
  where: AuthRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthTelegramBotTokenArgs = {
  _set?: InputMaybe<AuthTelegramBotTokens_Set_Input>;
  pk_columns: AuthTelegramBotTokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthTelegramBotTokensArgs = {
  _set?: InputMaybe<AuthTelegramBotTokens_Set_Input>;
  where: AuthTelegramBotTokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  pk_columns: AuthUserProviders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProviders_Set_Input>;
  where: AuthUserProviders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  pk_columns: AuthUserRoles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRoles_Set_Input>;
  where: AuthUserRoles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeyArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  pk_columns: AuthUserSecurityKeys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateAuthUserSecurityKeysArgs = {
  _inc?: InputMaybe<AuthUserSecurityKeys_Inc_Input>;
  _set?: InputMaybe<AuthUserSecurityKeys_Set_Input>;
  where: AuthUserSecurityKeys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _append?: InputMaybe<Files_Append_Input>;
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  _inc?: InputMaybe<Files_Inc_Input>;
  _prepend?: InputMaybe<Files_Prepend_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _append?: InputMaybe<Files_Append_Input>;
  _delete_at_path?: InputMaybe<Files_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Files_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Files_Delete_Key_Input>;
  _inc?: InputMaybe<Files_Inc_Input>;
  _prepend?: InputMaybe<Files_Prepend_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateUserArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateUsersArgs = {
  _append?: InputMaybe<Users_Append_Input>;
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  _prepend?: InputMaybe<Users_Prepend_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateVirusArgs = {
  _append?: InputMaybe<Virus_Append_Input>;
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  _set?: InputMaybe<Virus_Set_Input>;
  pk_columns: Virus_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateVirusesArgs = {
  _append?: InputMaybe<Virus_Append_Input>;
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  _set?: InputMaybe<Virus_Set_Input>;
  where: Virus_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviderRequests_ManyArgs = {
  updates: Array<AuthProviderRequests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthProviders_ManyArgs = {
  updates: Array<AuthProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokenTypes_ManyArgs = {
  updates: Array<AuthRefreshTokenTypes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRefreshTokens_ManyArgs = {
  updates: Array<AuthRefreshTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthRoles_ManyArgs = {
  updates: Array<AuthRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthTelegramBotTokens_ManyArgs = {
  updates: Array<AuthTelegramBotTokens_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserProviders_ManyArgs = {
  updates: Array<AuthUserProviders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserRoles_ManyArgs = {
  updates: Array<AuthUserRoles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AuthUserSecurityKeys_ManyArgs = {
  updates: Array<AuthUserSecurityKeys_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Buckets_ManyArgs = {
  updates: Array<Buckets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CompanyArgs = {
  _set?: InputMaybe<Company_Set_Input>;
  where: Company_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Company_By_PkArgs = {
  _set?: InputMaybe<Company_Set_Input>;
  pk_columns: Company_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Company_ManyArgs = {
  updates: Array<Company_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_EventArgs = {
  _inc?: InputMaybe<Event_Inc_Input>;
  _set?: InputMaybe<Event_Set_Input>;
  where: Event_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Event_By_PkArgs = {
  _inc?: InputMaybe<Event_Inc_Input>;
  _set?: InputMaybe<Event_Set_Input>;
  pk_columns: Event_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Event_ManyArgs = {
  updates: Array<Event_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Event_ParticipantArgs = {
  _inc?: InputMaybe<Event_Participant_Inc_Input>;
  _set?: InputMaybe<Event_Participant_Set_Input>;
  where: Event_Participant_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Event_Participant_By_PkArgs = {
  _inc?: InputMaybe<Event_Participant_Inc_Input>;
  _set?: InputMaybe<Event_Participant_Set_Input>;
  pk_columns: Event_Participant_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Event_Participant_ManyArgs = {
  updates: Array<Event_Participant_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SpaceArgs = {
  _inc?: InputMaybe<Space_Inc_Input>;
  _set?: InputMaybe<Space_Set_Input>;
  where: Space_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Space_By_PkArgs = {
  _inc?: InputMaybe<Space_Inc_Input>;
  _set?: InputMaybe<Space_Set_Input>;
  pk_columns: Space_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Space_DocumentArgs = {
  _inc?: InputMaybe<Space_Document_Inc_Input>;
  _set?: InputMaybe<Space_Document_Set_Input>;
  where: Space_Document_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Space_Document_By_PkArgs = {
  _inc?: InputMaybe<Space_Document_Inc_Input>;
  _set?: InputMaybe<Space_Document_Set_Input>;
  pk_columns: Space_Document_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Space_Document_ManyArgs = {
  updates: Array<Space_Document_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Space_ManyArgs = {
  updates: Array<Space_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Telegram_BotArgs = {
  _inc?: InputMaybe<Telegram_Bot_Inc_Input>;
  _set?: InputMaybe<Telegram_Bot_Set_Input>;
  where: Telegram_Bot_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Telegram_Bot_By_PkArgs = {
  _inc?: InputMaybe<Telegram_Bot_Inc_Input>;
  _set?: InputMaybe<Telegram_Bot_Set_Input>;
  pk_columns: Telegram_Bot_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Telegram_Bot_ManyArgs = {
  updates: Array<Telegram_Bot_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Telegram_ChatArgs = {
  _inc?: InputMaybe<Telegram_Chat_Inc_Input>;
  _set?: InputMaybe<Telegram_Chat_Set_Input>;
  where: Telegram_Chat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Telegram_Chat_By_PkArgs = {
  _inc?: InputMaybe<Telegram_Chat_Inc_Input>;
  _set?: InputMaybe<Telegram_Chat_Set_Input>;
  pk_columns: Telegram_Chat_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Telegram_Chat_ManyArgs = {
  updates: Array<Telegram_Chat_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Telegram_FileArgs = {
  _set?: InputMaybe<Telegram_File_Set_Input>;
  where: Telegram_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Telegram_File_By_PkArgs = {
  _set?: InputMaybe<Telegram_File_Set_Input>;
  pk_columns: Telegram_File_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Telegram_File_ManyArgs = {
  updates: Array<Telegram_File_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Tinder_SwipesArgs = {
  _set?: InputMaybe<Tinder_Swipes_Set_Input>;
  where: Tinder_Swipes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tinder_Swipes_By_PkArgs = {
  _set?: InputMaybe<Tinder_Swipes_Set_Input>;
  pk_columns: Tinder_Swipes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tinder_Swipes_ManyArgs = {
  updates: Array<Tinder_Swipes_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_CompanyArgs = {
  _inc?: InputMaybe<User_Company_Inc_Input>;
  _set?: InputMaybe<User_Company_Set_Input>;
  where: User_Company_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Company_By_PkArgs = {
  _inc?: InputMaybe<User_Company_Inc_Input>;
  _set?: InputMaybe<User_Company_Set_Input>;
  pk_columns: User_Company_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Company_ManyArgs = {
  updates: Array<User_Company_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_Extended_InfoArgs = {
  _set?: InputMaybe<User_Extended_Info_Set_Input>;
  where: User_Extended_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Extended_Info_By_PkArgs = {
  _set?: InputMaybe<User_Extended_Info_Set_Input>;
  pk_columns: User_Extended_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Extended_Info_ManyArgs = {
  updates: Array<User_Extended_Info_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_ProfileArgs = {
  _inc?: InputMaybe<User_Profile_Inc_Input>;
  _set?: InputMaybe<User_Profile_Set_Input>;
  where: User_Profile_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Profile_By_PkArgs = {
  _inc?: InputMaybe<User_Profile_Inc_Input>;
  _set?: InputMaybe<User_Profile_Set_Input>;
  pk_columns: User_Profile_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Profile_ManyArgs = {
  updates: Array<User_Profile_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_SpaceArgs = {
  _inc?: InputMaybe<User_Space_Inc_Input>;
  _set?: InputMaybe<User_Space_Set_Input>;
  where: User_Space_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Space_By_PkArgs = {
  _inc?: InputMaybe<User_Space_Inc_Input>;
  _set?: InputMaybe<User_Space_Set_Input>;
  pk_columns: User_Space_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Space_ManyArgs = {
  updates: Array<User_Space_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Virus_ManyArgs = {
  updates: Array<Virus_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Webhook_LogsArgs = {
  _set?: InputMaybe<Webhook_Logs_Set_Input>;
  where: Webhook_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Webhook_Logs_By_PkArgs = {
  _set?: InputMaybe<Webhook_Logs_Set_Input>;
  pk_columns: Webhook_Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Webhook_Logs_ManyArgs = {
  updates: Array<Webhook_Logs_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table: "auth.telegram_bot_tokens" using primary key columns */
  authTelegramBotToken?: Maybe<AuthTelegramBotTokens>;
  /** fetch data from the table: "auth.telegram_bot_tokens" */
  authTelegramBotTokens: Array<AuthTelegramBotTokens>;
  /** fetch aggregated fields from the table: "auth.telegram_bot_tokens" */
  authTelegramBotTokens_aggregate: AuthTelegramBotTokens_Aggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "company" */
  company: Array<Company>;
  /** fetch aggregated fields from the table: "company" */
  company_aggregate: Company_Aggregate;
  /** fetch data from the table: "company" using primary key columns */
  company_by_pk?: Maybe<Company>;
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch aggregated fields from the table: "event" */
  event_aggregate: Event_Aggregate;
  /** fetch data from the table: "event" using primary key columns */
  event_by_pk?: Maybe<Event>;
  /** fetch data from the table: "event_participant" */
  event_participant: Array<Event_Participant>;
  /** fetch aggregated fields from the table: "event_participant" */
  event_participant_aggregate: Event_Participant_Aggregate;
  /** fetch data from the table: "event_participant" using primary key columns */
  event_participant_by_pk?: Maybe<Event_Participant>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "space" */
  space: Array<Space>;
  /** fetch aggregated fields from the table: "space" */
  space_aggregate: Space_Aggregate;
  /** fetch data from the table: "space" using primary key columns */
  space_by_pk?: Maybe<Space>;
  /** fetch data from the table: "space_document" */
  space_document: Array<Space_Document>;
  /** fetch aggregated fields from the table: "space_document" */
  space_document_aggregate: Space_Document_Aggregate;
  /** fetch data from the table: "space_document" using primary key columns */
  space_document_by_pk?: Maybe<Space_Document>;
  /** fetch data from the table: "telegram_bot" */
  telegram_bot: Array<Telegram_Bot>;
  /** fetch aggregated fields from the table: "telegram_bot" */
  telegram_bot_aggregate: Telegram_Bot_Aggregate;
  /** fetch data from the table: "telegram_bot" using primary key columns */
  telegram_bot_by_pk?: Maybe<Telegram_Bot>;
  /** fetch data from the table: "telegram_chat" */
  telegram_chat: Array<Telegram_Chat>;
  /** fetch aggregated fields from the table: "telegram_chat" */
  telegram_chat_aggregate: Telegram_Chat_Aggregate;
  /** fetch data from the table: "telegram_chat" using primary key columns */
  telegram_chat_by_pk?: Maybe<Telegram_Chat>;
  /** fetch data from the table: "telegram_file" */
  telegram_file: Array<Telegram_File>;
  /** fetch aggregated fields from the table: "telegram_file" */
  telegram_file_aggregate: Telegram_File_Aggregate;
  /** fetch data from the table: "telegram_file" using primary key columns */
  telegram_file_by_pk?: Maybe<Telegram_File>;
  /** fetch data from the table: "tinder_swipes" */
  tinder_swipes: Array<Tinder_Swipes>;
  /** fetch aggregated fields from the table: "tinder_swipes" */
  tinder_swipes_aggregate: Tinder_Swipes_Aggregate;
  /** fetch data from the table: "tinder_swipes" using primary key columns */
  tinder_swipes_by_pk?: Maybe<Tinder_Swipes>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_company" */
  user_company: Array<User_Company>;
  /** fetch aggregated fields from the table: "user_company" */
  user_company_aggregate: User_Company_Aggregate;
  /** fetch data from the table: "user_company" using primary key columns */
  user_company_by_pk?: Maybe<User_Company>;
  /** fetch data from the table: "user_extended_info" */
  user_extended_info: Array<User_Extended_Info>;
  /** fetch aggregated fields from the table: "user_extended_info" */
  user_extended_info_aggregate: User_Extended_Info_Aggregate;
  /** fetch data from the table: "user_extended_info" using primary key columns */
  user_extended_info_by_pk?: Maybe<User_Extended_Info>;
  /** fetch data from the table: "user_profile" */
  user_profile: Array<User_Profile>;
  /** fetch aggregated fields from the table: "user_profile" */
  user_profile_aggregate: User_Profile_Aggregate;
  /** fetch data from the table: "user_profile" using primary key columns */
  user_profile_by_pk?: Maybe<User_Profile>;
  /** fetch data from the table: "user_space" */
  user_space: Array<User_Space>;
  /** fetch aggregated fields from the table: "user_space" */
  user_space_aggregate: User_Space_Aggregate;
  /** fetch data from the table: "user_space" using primary key columns */
  user_space_by_pk?: Maybe<User_Space>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate;
  /** fetch data from the table: "webhook_logs" */
  webhook_logs: Array<Webhook_Logs>;
  /** fetch aggregated fields from the table: "webhook_logs" */
  webhook_logs_aggregate: Webhook_Logs_Aggregate;
  /** fetch data from the table: "webhook_logs" using primary key columns */
  webhook_logs_by_pk?: Maybe<Webhook_Logs>;
};


export type Query_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Query_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String'];
};


export type Query_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Query_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Query_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Query_RootAuthTelegramBotTokenArgs = {
  id: Scalars['String'];
};


export type Query_RootAuthTelegramBotTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthTelegramBotTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthTelegramBotTokens_Order_By>>;
  where?: InputMaybe<AuthTelegramBotTokens_Bool_Exp>;
};


export type Query_RootAuthTelegramBotTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthTelegramBotTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthTelegramBotTokens_Order_By>>;
  where?: InputMaybe<AuthTelegramBotTokens_Bool_Exp>;
};


export type Query_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Query_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Query_RootBucketArgs = {
  id: Scalars['String'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootCompanyArgs = {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Query_RootCompany_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Query_RootCompany_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootEventArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


export type Query_RootEvent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


export type Query_RootEvent_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootEvent_ParticipantArgs = {
  distinct_on?: InputMaybe<Array<Event_Participant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Participant_Order_By>>;
  where?: InputMaybe<Event_Participant_Bool_Exp>;
};


export type Query_RootEvent_Participant_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Participant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Participant_Order_By>>;
  where?: InputMaybe<Event_Participant_Bool_Exp>;
};


export type Query_RootEvent_Participant_By_PkArgs = {
  event_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


export type Query_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootSpaceArgs = {
  distinct_on?: InputMaybe<Array<Space_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Space_Order_By>>;
  where?: InputMaybe<Space_Bool_Exp>;
};


export type Query_RootSpace_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Space_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Space_Order_By>>;
  where?: InputMaybe<Space_Bool_Exp>;
};


export type Query_RootSpace_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSpace_DocumentArgs = {
  distinct_on?: InputMaybe<Array<Space_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Space_Document_Order_By>>;
  where?: InputMaybe<Space_Document_Bool_Exp>;
};


export type Query_RootSpace_Document_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Space_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Space_Document_Order_By>>;
  where?: InputMaybe<Space_Document_Bool_Exp>;
};


export type Query_RootSpace_Document_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootTelegram_BotArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Bot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Bot_Order_By>>;
  where?: InputMaybe<Telegram_Bot_Bool_Exp>;
};


export type Query_RootTelegram_Bot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Bot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Bot_Order_By>>;
  where?: InputMaybe<Telegram_Bot_Bool_Exp>;
};


export type Query_RootTelegram_Bot_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTelegram_ChatArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Chat_Order_By>>;
  where?: InputMaybe<Telegram_Chat_Bool_Exp>;
};


export type Query_RootTelegram_Chat_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Chat_Order_By>>;
  where?: InputMaybe<Telegram_Chat_Bool_Exp>;
};


export type Query_RootTelegram_Chat_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootTelegram_FileArgs = {
  distinct_on?: InputMaybe<Array<Telegram_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_File_Order_By>>;
  where?: InputMaybe<Telegram_File_Bool_Exp>;
};


export type Query_RootTelegram_File_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Telegram_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_File_Order_By>>;
  where?: InputMaybe<Telegram_File_Bool_Exp>;
};


export type Query_RootTelegram_File_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootTinder_SwipesArgs = {
  distinct_on?: InputMaybe<Array<Tinder_Swipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tinder_Swipes_Order_By>>;
  where?: InputMaybe<Tinder_Swipes_Bool_Exp>;
};


export type Query_RootTinder_Swipes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tinder_Swipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tinder_Swipes_Order_By>>;
  where?: InputMaybe<Tinder_Swipes_Bool_Exp>;
};


export type Query_RootTinder_Swipes_By_PkArgs = {
  from_user_id: Scalars['uuid'];
  to_user_id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_CompanyArgs = {
  distinct_on?: InputMaybe<Array<User_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Company_Order_By>>;
  where?: InputMaybe<User_Company_Bool_Exp>;
};


export type Query_RootUser_Company_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Company_Order_By>>;
  where?: InputMaybe<User_Company_Bool_Exp>;
};


export type Query_RootUser_Company_By_PkArgs = {
  company_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


export type Query_RootUser_Extended_InfoArgs = {
  distinct_on?: InputMaybe<Array<User_Extended_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Extended_Info_Order_By>>;
  where?: InputMaybe<User_Extended_Info_Bool_Exp>;
};


export type Query_RootUser_Extended_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Extended_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Extended_Info_Order_By>>;
  where?: InputMaybe<User_Extended_Info_Bool_Exp>;
};


export type Query_RootUser_Extended_Info_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_ProfileArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Query_RootUser_Profile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Query_RootUser_Profile_By_PkArgs = {
  space_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


export type Query_RootUser_SpaceArgs = {
  distinct_on?: InputMaybe<Array<User_Space_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Space_Order_By>>;
  where?: InputMaybe<User_Space_Bool_Exp>;
};


export type Query_RootUser_Space_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Space_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Space_Order_By>>;
  where?: InputMaybe<User_Space_Bool_Exp>;
};


export type Query_RootUser_Space_By_PkArgs = {
  space_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootVirusArgs = {
  id: Scalars['uuid'];
};


export type Query_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Query_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Query_RootWebhook_LogsArgs = {
  distinct_on?: InputMaybe<Array<Webhook_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Webhook_Logs_Order_By>>;
  where?: InputMaybe<Webhook_Logs_Bool_Exp>;
};


export type Query_RootWebhook_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Webhook_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Webhook_Logs_Order_By>>;
  where?: InputMaybe<Webhook_Logs_Bool_Exp>;
};


export type Query_RootWebhook_Logs_By_PkArgs = {
  id: Scalars['bigint'];
};

/** columns and relationships of "space" */
export type Space = {
  __typename?: 'space';
  /** An object relationship */
  company: Company;
  company_id: Scalars['Int'];
  created_at: Scalars['timestamp'];
  description: Scalars['String'];
  /** An array relationship */
  events: Array<Event>;
  /** An aggregate relationship */
  events_aggregate: Event_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  space_documents: Array<Space_Document>;
  /** An aggregate relationship */
  space_documents_aggregate: Space_Document_Aggregate;
  /** An array relationship */
  telegram_bots: Array<Telegram_Bot>;
  /** An aggregate relationship */
  telegram_bots_aggregate: Telegram_Bot_Aggregate;
  /** An array relationship */
  telegram_chats: Array<Telegram_Chat>;
  /** An aggregate relationship */
  telegram_chats_aggregate: Telegram_Chat_Aggregate;
  /** An array relationship */
  user_profiles: Array<User_Profile>;
  /** An aggregate relationship */
  user_profiles_aggregate: User_Profile_Aggregate;
  /** An array relationship */
  users: Array<User_Space>;
  /** An aggregate relationship */
  users_aggregate: User_Space_Aggregate;
};


/** columns and relationships of "space" */
export type SpaceEventsArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


/** columns and relationships of "space" */
export type SpaceEvents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


/** columns and relationships of "space" */
export type SpaceSpace_DocumentsArgs = {
  distinct_on?: InputMaybe<Array<Space_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Space_Document_Order_By>>;
  where?: InputMaybe<Space_Document_Bool_Exp>;
};


/** columns and relationships of "space" */
export type SpaceSpace_Documents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Space_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Space_Document_Order_By>>;
  where?: InputMaybe<Space_Document_Bool_Exp>;
};


/** columns and relationships of "space" */
export type SpaceTelegram_BotsArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Bot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Bot_Order_By>>;
  where?: InputMaybe<Telegram_Bot_Bool_Exp>;
};


/** columns and relationships of "space" */
export type SpaceTelegram_Bots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Bot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Bot_Order_By>>;
  where?: InputMaybe<Telegram_Bot_Bool_Exp>;
};


/** columns and relationships of "space" */
export type SpaceTelegram_ChatsArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Chat_Order_By>>;
  where?: InputMaybe<Telegram_Chat_Bool_Exp>;
};


/** columns and relationships of "space" */
export type SpaceTelegram_Chats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Chat_Order_By>>;
  where?: InputMaybe<Telegram_Chat_Bool_Exp>;
};


/** columns and relationships of "space" */
export type SpaceUser_ProfilesArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


/** columns and relationships of "space" */
export type SpaceUser_Profiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


/** columns and relationships of "space" */
export type SpaceUsersArgs = {
  distinct_on?: InputMaybe<Array<User_Space_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Space_Order_By>>;
  where?: InputMaybe<User_Space_Bool_Exp>;
};


/** columns and relationships of "space" */
export type SpaceUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Space_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Space_Order_By>>;
  where?: InputMaybe<User_Space_Bool_Exp>;
};

/** aggregated selection of "space" */
export type Space_Aggregate = {
  __typename?: 'space_aggregate';
  aggregate?: Maybe<Space_Aggregate_Fields>;
  nodes: Array<Space>;
};

export type Space_Aggregate_Bool_Exp = {
  count?: InputMaybe<Space_Aggregate_Bool_Exp_Count>;
};

export type Space_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Space_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Space_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "space" */
export type Space_Aggregate_Fields = {
  __typename?: 'space_aggregate_fields';
  avg?: Maybe<Space_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Space_Max_Fields>;
  min?: Maybe<Space_Min_Fields>;
  stddev?: Maybe<Space_Stddev_Fields>;
  stddev_pop?: Maybe<Space_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Space_Stddev_Samp_Fields>;
  sum?: Maybe<Space_Sum_Fields>;
  var_pop?: Maybe<Space_Var_Pop_Fields>;
  var_samp?: Maybe<Space_Var_Samp_Fields>;
  variance?: Maybe<Space_Variance_Fields>;
};


/** aggregate fields of "space" */
export type Space_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Space_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "space" */
export type Space_Aggregate_Order_By = {
  avg?: InputMaybe<Space_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Space_Max_Order_By>;
  min?: InputMaybe<Space_Min_Order_By>;
  stddev?: InputMaybe<Space_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Space_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Space_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Space_Sum_Order_By>;
  var_pop?: InputMaybe<Space_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Space_Var_Samp_Order_By>;
  variance?: InputMaybe<Space_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "space" */
export type Space_Arr_Rel_Insert_Input = {
  data: Array<Space_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Space_On_Conflict>;
};

/** aggregate avg on columns */
export type Space_Avg_Fields = {
  __typename?: 'space_avg_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "space" */
export type Space_Avg_Order_By = {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "space". All fields are combined with a logical 'AND'. */
export type Space_Bool_Exp = {
  _and?: InputMaybe<Array<Space_Bool_Exp>>;
  _not?: InputMaybe<Space_Bool_Exp>;
  _or?: InputMaybe<Array<Space_Bool_Exp>>;
  company?: InputMaybe<Company_Bool_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  events?: InputMaybe<Event_Bool_Exp>;
  events_aggregate?: InputMaybe<Event_Aggregate_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  space_documents?: InputMaybe<Space_Document_Bool_Exp>;
  space_documents_aggregate?: InputMaybe<Space_Document_Aggregate_Bool_Exp>;
  telegram_bots?: InputMaybe<Telegram_Bot_Bool_Exp>;
  telegram_bots_aggregate?: InputMaybe<Telegram_Bot_Aggregate_Bool_Exp>;
  telegram_chats?: InputMaybe<Telegram_Chat_Bool_Exp>;
  telegram_chats_aggregate?: InputMaybe<Telegram_Chat_Aggregate_Bool_Exp>;
  user_profiles?: InputMaybe<User_Profile_Bool_Exp>;
  user_profiles_aggregate?: InputMaybe<User_Profile_Aggregate_Bool_Exp>;
  users?: InputMaybe<User_Space_Bool_Exp>;
  users_aggregate?: InputMaybe<User_Space_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "space" */
export enum Space_Constraint {
  /** unique or primary key constraint on columns "id" */
  SpacePkey = 'space_pkey'
}

/** columns and relationships of "space_document" */
export type Space_Document = {
  __typename?: 'space_document';
  data_id?: Maybe<Scalars['uuid']>;
  description: Scalars['String'];
  /** An object relationship */
  file?: Maybe<Files>;
  icon: Scalars['String'];
  id: Scalars['bigint'];
  /** An object relationship */
  preview_file?: Maybe<Files>;
  preview_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  space: Space;
  space_id: Scalars['Int'];
  summary: Scalars['String'];
  uploaded_by_person_id?: Maybe<Scalars['uuid']>;
  /** An object relationship */
  uploded_by_user?: Maybe<Users>;
};

/** aggregated selection of "space_document" */
export type Space_Document_Aggregate = {
  __typename?: 'space_document_aggregate';
  aggregate?: Maybe<Space_Document_Aggregate_Fields>;
  nodes: Array<Space_Document>;
};

export type Space_Document_Aggregate_Bool_Exp = {
  count?: InputMaybe<Space_Document_Aggregate_Bool_Exp_Count>;
};

export type Space_Document_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Space_Document_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Space_Document_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "space_document" */
export type Space_Document_Aggregate_Fields = {
  __typename?: 'space_document_aggregate_fields';
  avg?: Maybe<Space_Document_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Space_Document_Max_Fields>;
  min?: Maybe<Space_Document_Min_Fields>;
  stddev?: Maybe<Space_Document_Stddev_Fields>;
  stddev_pop?: Maybe<Space_Document_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Space_Document_Stddev_Samp_Fields>;
  sum?: Maybe<Space_Document_Sum_Fields>;
  var_pop?: Maybe<Space_Document_Var_Pop_Fields>;
  var_samp?: Maybe<Space_Document_Var_Samp_Fields>;
  variance?: Maybe<Space_Document_Variance_Fields>;
};


/** aggregate fields of "space_document" */
export type Space_Document_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Space_Document_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "space_document" */
export type Space_Document_Aggregate_Order_By = {
  avg?: InputMaybe<Space_Document_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Space_Document_Max_Order_By>;
  min?: InputMaybe<Space_Document_Min_Order_By>;
  stddev?: InputMaybe<Space_Document_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Space_Document_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Space_Document_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Space_Document_Sum_Order_By>;
  var_pop?: InputMaybe<Space_Document_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Space_Document_Var_Samp_Order_By>;
  variance?: InputMaybe<Space_Document_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "space_document" */
export type Space_Document_Arr_Rel_Insert_Input = {
  data: Array<Space_Document_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Space_Document_On_Conflict>;
};

/** aggregate avg on columns */
export type Space_Document_Avg_Fields = {
  __typename?: 'space_document_avg_fields';
  id?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "space_document" */
export type Space_Document_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "space_document". All fields are combined with a logical 'AND'. */
export type Space_Document_Bool_Exp = {
  _and?: InputMaybe<Array<Space_Document_Bool_Exp>>;
  _not?: InputMaybe<Space_Document_Bool_Exp>;
  _or?: InputMaybe<Array<Space_Document_Bool_Exp>>;
  data_id?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  file?: InputMaybe<Files_Bool_Exp>;
  icon?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  preview_file?: InputMaybe<Files_Bool_Exp>;
  preview_id?: InputMaybe<Uuid_Comparison_Exp>;
  space?: InputMaybe<Space_Bool_Exp>;
  space_id?: InputMaybe<Int_Comparison_Exp>;
  summary?: InputMaybe<String_Comparison_Exp>;
  uploaded_by_person_id?: InputMaybe<Uuid_Comparison_Exp>;
  uploded_by_user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "space_document" */
export enum Space_Document_Constraint {
  /** unique or primary key constraint on columns "id" */
  SpaceDocumentPkey = 'space_document_pkey'
}

/** input type for incrementing numeric columns in table "space_document" */
export type Space_Document_Inc_Input = {
  space_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "space_document" */
export type Space_Document_Insert_Input = {
  data_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  icon?: InputMaybe<Scalars['String']>;
  preview_file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  preview_id?: InputMaybe<Scalars['uuid']>;
  space?: InputMaybe<Space_Obj_Rel_Insert_Input>;
  space_id?: InputMaybe<Scalars['Int']>;
  summary?: InputMaybe<Scalars['String']>;
  uploaded_by_person_id?: InputMaybe<Scalars['uuid']>;
  uploded_by_user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Space_Document_Max_Fields = {
  __typename?: 'space_document_max_fields';
  data_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  preview_id?: Maybe<Scalars['uuid']>;
  space_id?: Maybe<Scalars['Int']>;
  summary?: Maybe<Scalars['String']>;
  uploaded_by_person_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "space_document" */
export type Space_Document_Max_Order_By = {
  data_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  preview_id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
  summary?: InputMaybe<Order_By>;
  uploaded_by_person_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Space_Document_Min_Fields = {
  __typename?: 'space_document_min_fields';
  data_id?: Maybe<Scalars['uuid']>;
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  preview_id?: Maybe<Scalars['uuid']>;
  space_id?: Maybe<Scalars['Int']>;
  summary?: Maybe<Scalars['String']>;
  uploaded_by_person_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "space_document" */
export type Space_Document_Min_Order_By = {
  data_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  preview_id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
  summary?: InputMaybe<Order_By>;
  uploaded_by_person_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "space_document" */
export type Space_Document_Mutation_Response = {
  __typename?: 'space_document_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Space_Document>;
};

/** on_conflict condition type for table "space_document" */
export type Space_Document_On_Conflict = {
  constraint: Space_Document_Constraint;
  update_columns?: Array<Space_Document_Update_Column>;
  where?: InputMaybe<Space_Document_Bool_Exp>;
};

/** Ordering options when selecting data from "space_document". */
export type Space_Document_Order_By = {
  data_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  file?: InputMaybe<Files_Order_By>;
  icon?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  preview_file?: InputMaybe<Files_Order_By>;
  preview_id?: InputMaybe<Order_By>;
  space?: InputMaybe<Space_Order_By>;
  space_id?: InputMaybe<Order_By>;
  summary?: InputMaybe<Order_By>;
  uploaded_by_person_id?: InputMaybe<Order_By>;
  uploded_by_user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: space_document */
export type Space_Document_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "space_document" */
export enum Space_Document_Select_Column {
  /** column name */
  DataId = 'data_id',
  /** column name */
  Description = 'description',
  /** column name */
  Icon = 'icon',
  /** column name */
  Id = 'id',
  /** column name */
  PreviewId = 'preview_id',
  /** column name */
  SpaceId = 'space_id',
  /** column name */
  Summary = 'summary',
  /** column name */
  UploadedByPersonId = 'uploaded_by_person_id'
}

/** input type for updating data in table "space_document" */
export type Space_Document_Set_Input = {
  data_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  preview_id?: InputMaybe<Scalars['uuid']>;
  space_id?: InputMaybe<Scalars['Int']>;
  summary?: InputMaybe<Scalars['String']>;
  uploaded_by_person_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Space_Document_Stddev_Fields = {
  __typename?: 'space_document_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "space_document" */
export type Space_Document_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Space_Document_Stddev_Pop_Fields = {
  __typename?: 'space_document_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "space_document" */
export type Space_Document_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Space_Document_Stddev_Samp_Fields = {
  __typename?: 'space_document_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "space_document" */
export type Space_Document_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "space_document" */
export type Space_Document_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Space_Document_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Space_Document_Stream_Cursor_Value_Input = {
  data_id?: InputMaybe<Scalars['uuid']>;
  description?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  preview_id?: InputMaybe<Scalars['uuid']>;
  space_id?: InputMaybe<Scalars['Int']>;
  summary?: InputMaybe<Scalars['String']>;
  uploaded_by_person_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type Space_Document_Sum_Fields = {
  __typename?: 'space_document_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  space_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "space_document" */
export type Space_Document_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** update columns of table "space_document" */
export enum Space_Document_Update_Column {
  /** column name */
  DataId = 'data_id',
  /** column name */
  Description = 'description',
  /** column name */
  Icon = 'icon',
  /** column name */
  PreviewId = 'preview_id',
  /** column name */
  SpaceId = 'space_id',
  /** column name */
  Summary = 'summary',
  /** column name */
  UploadedByPersonId = 'uploaded_by_person_id'
}

export type Space_Document_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Space_Document_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Space_Document_Set_Input>;
  /** filter the rows which have to be updated */
  where: Space_Document_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Space_Document_Var_Pop_Fields = {
  __typename?: 'space_document_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "space_document" */
export type Space_Document_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Space_Document_Var_Samp_Fields = {
  __typename?: 'space_document_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "space_document" */
export type Space_Document_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Space_Document_Variance_Fields = {
  __typename?: 'space_document_variance_fields';
  id?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "space_document" */
export type Space_Document_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "space" */
export type Space_Inc_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "space" */
export type Space_Insert_Input = {
  company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  events?: InputMaybe<Event_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  space_documents?: InputMaybe<Space_Document_Arr_Rel_Insert_Input>;
  telegram_bots?: InputMaybe<Telegram_Bot_Arr_Rel_Insert_Input>;
  telegram_chats?: InputMaybe<Telegram_Chat_Arr_Rel_Insert_Input>;
  user_profiles?: InputMaybe<User_Profile_Arr_Rel_Insert_Input>;
  users?: InputMaybe<User_Space_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Space_Max_Fields = {
  __typename?: 'space_max_fields';
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "space" */
export type Space_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Space_Min_Fields = {
  __typename?: 'space_min_fields';
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamp']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "space" */
export type Space_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "space" */
export type Space_Mutation_Response = {
  __typename?: 'space_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Space>;
};

/** input type for inserting object relation for remote table "space" */
export type Space_Obj_Rel_Insert_Input = {
  data: Space_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Space_On_Conflict>;
};

/** on_conflict condition type for table "space" */
export type Space_On_Conflict = {
  constraint: Space_Constraint;
  update_columns?: Array<Space_Update_Column>;
  where?: InputMaybe<Space_Bool_Exp>;
};

/** Ordering options when selecting data from "space". */
export type Space_Order_By = {
  company?: InputMaybe<Company_Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  events_aggregate?: InputMaybe<Event_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  space_documents_aggregate?: InputMaybe<Space_Document_Aggregate_Order_By>;
  telegram_bots_aggregate?: InputMaybe<Telegram_Bot_Aggregate_Order_By>;
  telegram_chats_aggregate?: InputMaybe<Telegram_Chat_Aggregate_Order_By>;
  user_profiles_aggregate?: InputMaybe<User_Profile_Aggregate_Order_By>;
  users_aggregate?: InputMaybe<User_Space_Aggregate_Order_By>;
};

/** primary key columns input for table: space */
export type Space_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "space" */
export enum Space_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "space" */
export type Space_Set_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Space_Stddev_Fields = {
  __typename?: 'space_stddev_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "space" */
export type Space_Stddev_Order_By = {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Space_Stddev_Pop_Fields = {
  __typename?: 'space_stddev_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "space" */
export type Space_Stddev_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Space_Stddev_Samp_Fields = {
  __typename?: 'space_stddev_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "space" */
export type Space_Stddev_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "space" */
export type Space_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Space_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Space_Stream_Cursor_Value_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamp']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Space_Sum_Fields = {
  __typename?: 'space_sum_fields';
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "space" */
export type Space_Sum_Order_By = {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "space" */
export enum Space_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name'
}

export type Space_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Space_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Space_Set_Input>;
  /** filter the rows which have to be updated */
  where: Space_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Space_Var_Pop_Fields = {
  __typename?: 'space_var_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "space" */
export type Space_Var_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Space_Var_Samp_Fields = {
  __typename?: 'space_var_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "space" */
export type Space_Var_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Space_Variance_Fields = {
  __typename?: 'space_variance_fields';
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "space" */
export type Space_Variance_Order_By = {
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequests_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.provider_requests" */
  authProviderRequests_stream: Array<AuthProviderRequests>;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.providers" */
  authProviders_stream: Array<AuthProviders>;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_token_types" using primary key columns */
  authRefreshTokenType?: Maybe<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_token_types" */
  authRefreshTokenTypes: Array<AuthRefreshTokenTypes>;
  /** fetch aggregated fields from the table: "auth.refresh_token_types" */
  authRefreshTokenTypesAggregate: AuthRefreshTokenTypes_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_token_types" */
  authRefreshTokenTypes_stream: Array<AuthRefreshTokenTypes>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.refresh_tokens" */
  authRefreshTokens_stream: Array<AuthRefreshTokens>;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.roles" */
  authRoles_stream: Array<AuthRoles>;
  /** fetch data from the table: "auth.telegram_bot_tokens" using primary key columns */
  authTelegramBotToken?: Maybe<AuthTelegramBotTokens>;
  /** fetch data from the table: "auth.telegram_bot_tokens" */
  authTelegramBotTokens: Array<AuthTelegramBotTokens>;
  /** fetch aggregated fields from the table: "auth.telegram_bot_tokens" */
  authTelegramBotTokens_aggregate: AuthTelegramBotTokens_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.telegram_bot_tokens" */
  authTelegramBotTokens_stream: Array<AuthTelegramBotTokens>;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProviders_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_providers" */
  authUserProviders_stream: Array<AuthUserProviders>;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRoles_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_roles" */
  authUserRoles_stream: Array<AuthUserRoles>;
  /** fetch data from the table: "auth.user_security_keys" using primary key columns */
  authUserSecurityKey?: Maybe<AuthUserSecurityKeys>;
  /** fetch data from the table: "auth.user_security_keys" */
  authUserSecurityKeys: Array<AuthUserSecurityKeys>;
  /** fetch aggregated fields from the table: "auth.user_security_keys" */
  authUserSecurityKeysAggregate: AuthUserSecurityKeys_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.user_security_keys" */
  authUserSecurityKeys_stream: Array<AuthUserSecurityKeys>;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.buckets" */
  buckets_stream: Array<Buckets>;
  /** fetch data from the table: "company" */
  company: Array<Company>;
  /** fetch aggregated fields from the table: "company" */
  company_aggregate: Company_Aggregate;
  /** fetch data from the table: "company" using primary key columns */
  company_by_pk?: Maybe<Company>;
  /** fetch data from the table in a streaming manner: "company" */
  company_stream: Array<Company>;
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch aggregated fields from the table: "event" */
  event_aggregate: Event_Aggregate;
  /** fetch data from the table: "event" using primary key columns */
  event_by_pk?: Maybe<Event>;
  /** fetch data from the table: "event_participant" */
  event_participant: Array<Event_Participant>;
  /** fetch aggregated fields from the table: "event_participant" */
  event_participant_aggregate: Event_Participant_Aggregate;
  /** fetch data from the table: "event_participant" using primary key columns */
  event_participant_by_pk?: Maybe<Event_Participant>;
  /** fetch data from the table in a streaming manner: "event_participant" */
  event_participant_stream: Array<Event_Participant>;
  /** fetch data from the table in a streaming manner: "event" */
  event_stream: Array<Event>;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table in a streaming manner: "storage.files" */
  files_stream: Array<Files>;
  /** fetch data from the table: "space" */
  space: Array<Space>;
  /** fetch aggregated fields from the table: "space" */
  space_aggregate: Space_Aggregate;
  /** fetch data from the table: "space" using primary key columns */
  space_by_pk?: Maybe<Space>;
  /** fetch data from the table: "space_document" */
  space_document: Array<Space_Document>;
  /** fetch aggregated fields from the table: "space_document" */
  space_document_aggregate: Space_Document_Aggregate;
  /** fetch data from the table: "space_document" using primary key columns */
  space_document_by_pk?: Maybe<Space_Document>;
  /** fetch data from the table in a streaming manner: "space_document" */
  space_document_stream: Array<Space_Document>;
  /** fetch data from the table in a streaming manner: "space" */
  space_stream: Array<Space>;
  /** fetch data from the table: "telegram_bot" */
  telegram_bot: Array<Telegram_Bot>;
  /** fetch aggregated fields from the table: "telegram_bot" */
  telegram_bot_aggregate: Telegram_Bot_Aggregate;
  /** fetch data from the table: "telegram_bot" using primary key columns */
  telegram_bot_by_pk?: Maybe<Telegram_Bot>;
  /** fetch data from the table in a streaming manner: "telegram_bot" */
  telegram_bot_stream: Array<Telegram_Bot>;
  /** fetch data from the table: "telegram_chat" */
  telegram_chat: Array<Telegram_Chat>;
  /** fetch aggregated fields from the table: "telegram_chat" */
  telegram_chat_aggregate: Telegram_Chat_Aggregate;
  /** fetch data from the table: "telegram_chat" using primary key columns */
  telegram_chat_by_pk?: Maybe<Telegram_Chat>;
  /** fetch data from the table in a streaming manner: "telegram_chat" */
  telegram_chat_stream: Array<Telegram_Chat>;
  /** fetch data from the table: "telegram_file" */
  telegram_file: Array<Telegram_File>;
  /** fetch aggregated fields from the table: "telegram_file" */
  telegram_file_aggregate: Telegram_File_Aggregate;
  /** fetch data from the table: "telegram_file" using primary key columns */
  telegram_file_by_pk?: Maybe<Telegram_File>;
  /** fetch data from the table in a streaming manner: "telegram_file" */
  telegram_file_stream: Array<Telegram_File>;
  /** fetch data from the table: "tinder_swipes" */
  tinder_swipes: Array<Tinder_Swipes>;
  /** fetch aggregated fields from the table: "tinder_swipes" */
  tinder_swipes_aggregate: Tinder_Swipes_Aggregate;
  /** fetch data from the table: "tinder_swipes" using primary key columns */
  tinder_swipes_by_pk?: Maybe<Tinder_Swipes>;
  /** fetch data from the table in a streaming manner: "tinder_swipes" */
  tinder_swipes_stream: Array<Tinder_Swipes>;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "user_company" */
  user_company: Array<User_Company>;
  /** fetch aggregated fields from the table: "user_company" */
  user_company_aggregate: User_Company_Aggregate;
  /** fetch data from the table: "user_company" using primary key columns */
  user_company_by_pk?: Maybe<User_Company>;
  /** fetch data from the table in a streaming manner: "user_company" */
  user_company_stream: Array<User_Company>;
  /** fetch data from the table: "user_extended_info" */
  user_extended_info: Array<User_Extended_Info>;
  /** fetch aggregated fields from the table: "user_extended_info" */
  user_extended_info_aggregate: User_Extended_Info_Aggregate;
  /** fetch data from the table: "user_extended_info" using primary key columns */
  user_extended_info_by_pk?: Maybe<User_Extended_Info>;
  /** fetch data from the table in a streaming manner: "user_extended_info" */
  user_extended_info_stream: Array<User_Extended_Info>;
  /** fetch data from the table: "user_profile" */
  user_profile: Array<User_Profile>;
  /** fetch aggregated fields from the table: "user_profile" */
  user_profile_aggregate: User_Profile_Aggregate;
  /** fetch data from the table: "user_profile" using primary key columns */
  user_profile_by_pk?: Maybe<User_Profile>;
  /** fetch data from the table in a streaming manner: "user_profile" */
  user_profile_stream: Array<User_Profile>;
  /** fetch data from the table: "user_space" */
  user_space: Array<User_Space>;
  /** fetch aggregated fields from the table: "user_space" */
  user_space_aggregate: User_Space_Aggregate;
  /** fetch data from the table: "user_space" using primary key columns */
  user_space_by_pk?: Maybe<User_Space>;
  /** fetch data from the table in a streaming manner: "user_space" */
  user_space_stream: Array<User_Space>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: Users_Aggregate;
  /** fetch data from the table in a streaming manner: "auth.users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "storage.virus" using primary key columns */
  virus?: Maybe<Virus>;
  /** fetch data from the table in a streaming manner: "storage.virus" */
  virus_stream: Array<Virus>;
  /** fetch data from the table: "storage.virus" */
  viruses: Array<Virus>;
  /** fetch aggregated fields from the table: "storage.virus" */
  virusesAggregate: Virus_Aggregate;
  /** fetch data from the table: "webhook_logs" */
  webhook_logs: Array<Webhook_Logs>;
  /** fetch aggregated fields from the table: "webhook_logs" */
  webhook_logs_aggregate: Webhook_Logs_Aggregate;
  /** fetch data from the table: "webhook_logs" using primary key columns */
  webhook_logs_by_pk?: Maybe<Webhook_Logs>;
  /** fetch data from the table in a streaming manner: "webhook_logs" */
  webhook_logs_stream: Array<Webhook_Logs>;
};


export type Subscription_RootAuthProviderArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequests_Order_By>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProviderRequests_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthProviderRequests_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviderRequests_Bool_Exp>;
};


export type Subscription_RootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviders_Order_By>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthProviders_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthRefreshTokenTypeArgs = {
  value: Scalars['String'];
};


export type Subscription_RootAuthRefreshTokenTypesArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokenTypes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokenTypes_Order_By>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokenTypes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRefreshTokenTypes_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokenTypes_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRefreshTokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRefreshTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


export type Subscription_RootAuthRoleArgs = {
  role: Scalars['String'];
};


export type Subscription_RootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRoles_Order_By>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthRoles_Bool_Exp>;
};


export type Subscription_RootAuthTelegramBotTokenArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuthTelegramBotTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthTelegramBotTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthTelegramBotTokens_Order_By>>;
  where?: InputMaybe<AuthTelegramBotTokens_Bool_Exp>;
};


export type Subscription_RootAuthTelegramBotTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthTelegramBotTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthTelegramBotTokens_Order_By>>;
  where?: InputMaybe<AuthTelegramBotTokens_Bool_Exp>;
};


export type Subscription_RootAuthTelegramBotTokens_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthTelegramBotTokens_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthTelegramBotTokens_Bool_Exp>;
};


export type Subscription_RootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserProviders_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserProviders_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


export type Subscription_RootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserRoles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserRoles_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeyArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAuthUserSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeysAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootAuthUserSecurityKeys_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<AuthUserSecurityKeys_Stream_Cursor_Input>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBuckets_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Buckets_Stream_Cursor_Input>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootCompanyArgs = {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Subscription_RootCompany_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Subscription_RootCompany_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCompany_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Company_Stream_Cursor_Input>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Subscription_RootEventArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


export type Subscription_RootEvent_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Order_By>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


export type Subscription_RootEvent_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootEvent_ParticipantArgs = {
  distinct_on?: InputMaybe<Array<Event_Participant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Participant_Order_By>>;
  where?: InputMaybe<Event_Participant_Bool_Exp>;
};


export type Subscription_RootEvent_Participant_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Participant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Participant_Order_By>>;
  where?: InputMaybe<Event_Participant_Bool_Exp>;
};


export type Subscription_RootEvent_Participant_By_PkArgs = {
  event_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootEvent_Participant_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Event_Participant_Stream_Cursor_Input>>;
  where?: InputMaybe<Event_Participant_Bool_Exp>;
};


export type Subscription_RootEvent_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Event_Stream_Cursor_Input>>;
  where?: InputMaybe<Event_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Files_Stream_Cursor_Input>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootSpaceArgs = {
  distinct_on?: InputMaybe<Array<Space_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Space_Order_By>>;
  where?: InputMaybe<Space_Bool_Exp>;
};


export type Subscription_RootSpace_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Space_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Space_Order_By>>;
  where?: InputMaybe<Space_Bool_Exp>;
};


export type Subscription_RootSpace_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSpace_DocumentArgs = {
  distinct_on?: InputMaybe<Array<Space_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Space_Document_Order_By>>;
  where?: InputMaybe<Space_Document_Bool_Exp>;
};


export type Subscription_RootSpace_Document_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Space_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Space_Document_Order_By>>;
  where?: InputMaybe<Space_Document_Bool_Exp>;
};


export type Subscription_RootSpace_Document_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootSpace_Document_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Space_Document_Stream_Cursor_Input>>;
  where?: InputMaybe<Space_Document_Bool_Exp>;
};


export type Subscription_RootSpace_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Space_Stream_Cursor_Input>>;
  where?: InputMaybe<Space_Bool_Exp>;
};


export type Subscription_RootTelegram_BotArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Bot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Bot_Order_By>>;
  where?: InputMaybe<Telegram_Bot_Bool_Exp>;
};


export type Subscription_RootTelegram_Bot_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Bot_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Bot_Order_By>>;
  where?: InputMaybe<Telegram_Bot_Bool_Exp>;
};


export type Subscription_RootTelegram_Bot_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTelegram_Bot_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Telegram_Bot_Stream_Cursor_Input>>;
  where?: InputMaybe<Telegram_Bot_Bool_Exp>;
};


export type Subscription_RootTelegram_ChatArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Chat_Order_By>>;
  where?: InputMaybe<Telegram_Chat_Bool_Exp>;
};


export type Subscription_RootTelegram_Chat_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Chat_Order_By>>;
  where?: InputMaybe<Telegram_Chat_Bool_Exp>;
};


export type Subscription_RootTelegram_Chat_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootTelegram_Chat_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Telegram_Chat_Stream_Cursor_Input>>;
  where?: InputMaybe<Telegram_Chat_Bool_Exp>;
};


export type Subscription_RootTelegram_FileArgs = {
  distinct_on?: InputMaybe<Array<Telegram_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_File_Order_By>>;
  where?: InputMaybe<Telegram_File_Bool_Exp>;
};


export type Subscription_RootTelegram_File_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Telegram_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_File_Order_By>>;
  where?: InputMaybe<Telegram_File_Bool_Exp>;
};


export type Subscription_RootTelegram_File_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootTelegram_File_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Telegram_File_Stream_Cursor_Input>>;
  where?: InputMaybe<Telegram_File_Bool_Exp>;
};


export type Subscription_RootTinder_SwipesArgs = {
  distinct_on?: InputMaybe<Array<Tinder_Swipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tinder_Swipes_Order_By>>;
  where?: InputMaybe<Tinder_Swipes_Bool_Exp>;
};


export type Subscription_RootTinder_Swipes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tinder_Swipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tinder_Swipes_Order_By>>;
  where?: InputMaybe<Tinder_Swipes_Bool_Exp>;
};


export type Subscription_RootTinder_Swipes_By_PkArgs = {
  from_user_id: Scalars['uuid'];
  to_user_id: Scalars['uuid'];
};


export type Subscription_RootTinder_Swipes_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tinder_Swipes_Stream_Cursor_Input>>;
  where?: InputMaybe<Tinder_Swipes_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_CompanyArgs = {
  distinct_on?: InputMaybe<Array<User_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Company_Order_By>>;
  where?: InputMaybe<User_Company_Bool_Exp>;
};


export type Subscription_RootUser_Company_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Company_Order_By>>;
  where?: InputMaybe<User_Company_Bool_Exp>;
};


export type Subscription_RootUser_Company_By_PkArgs = {
  company_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootUser_Company_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Company_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Company_Bool_Exp>;
};


export type Subscription_RootUser_Extended_InfoArgs = {
  distinct_on?: InputMaybe<Array<User_Extended_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Extended_Info_Order_By>>;
  where?: InputMaybe<User_Extended_Info_Bool_Exp>;
};


export type Subscription_RootUser_Extended_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Extended_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Extended_Info_Order_By>>;
  where?: InputMaybe<User_Extended_Info_Bool_Exp>;
};


export type Subscription_RootUser_Extended_Info_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_Extended_Info_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Extended_Info_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Extended_Info_Bool_Exp>;
};


export type Subscription_RootUser_ProfileArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Subscription_RootUser_Profile_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Subscription_RootUser_Profile_By_PkArgs = {
  space_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootUser_Profile_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Profile_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


export type Subscription_RootUser_SpaceArgs = {
  distinct_on?: InputMaybe<Array<User_Space_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Space_Order_By>>;
  where?: InputMaybe<User_Space_Bool_Exp>;
};


export type Subscription_RootUser_Space_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Space_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Space_Order_By>>;
  where?: InputMaybe<User_Space_Bool_Exp>;
};


export type Subscription_RootUser_Space_By_PkArgs = {
  space_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};


export type Subscription_RootUser_Space_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<User_Space_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Space_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVirusArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootVirus_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Virus_Stream_Cursor_Input>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Subscription_RootVirusesArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Subscription_RootVirusesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Virus_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Virus_Order_By>>;
  where?: InputMaybe<Virus_Bool_Exp>;
};


export type Subscription_RootWebhook_LogsArgs = {
  distinct_on?: InputMaybe<Array<Webhook_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Webhook_Logs_Order_By>>;
  where?: InputMaybe<Webhook_Logs_Bool_Exp>;
};


export type Subscription_RootWebhook_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Webhook_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Webhook_Logs_Order_By>>;
  where?: InputMaybe<Webhook_Logs_Bool_Exp>;
};


export type Subscription_RootWebhook_Logs_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootWebhook_Logs_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Webhook_Logs_Stream_Cursor_Input>>;
  where?: InputMaybe<Webhook_Logs_Bool_Exp>;
};

/** columns and relationships of "telegram_bot" */
export type Telegram_Bot = {
  __typename?: 'telegram_bot';
  bot_auth: Scalars['String'];
  /** An array relationship */
  chats: Array<Telegram_Chat>;
  /** An aggregate relationship */
  chats_aggregate: Telegram_Chat_Aggregate;
  /** An object relationship */
  company: Company;
  company_id: Scalars['Int'];
  default_space_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  inline_description?: Maybe<Scalars['String']>;
  inline_menu_button?: Maybe<Scalars['String']>;
  login_url?: Maybe<Scalars['String']>;
  menu_button?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  /** An object relationship */
  space?: Maybe<Space>;
  telegram_id?: Maybe<Scalars['bigint']>;
  /** An object relationship */
  token: AuthTelegramBotTokens;
  webapp_demo_gif?: Maybe<Scalars['uuid']>;
  webapp_description?: Maybe<Scalars['String']>;
  webapp_photo?: Maybe<Scalars['uuid']>;
  webapp_shortname?: Maybe<Scalars['String']>;
  webapp_title?: Maybe<Scalars['String']>;
  webapp_url?: Maybe<Scalars['String']>;
};


/** columns and relationships of "telegram_bot" */
export type Telegram_BotChatsArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Chat_Order_By>>;
  where?: InputMaybe<Telegram_Chat_Bool_Exp>;
};


/** columns and relationships of "telegram_bot" */
export type Telegram_BotChats_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Telegram_Chat_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Telegram_Chat_Order_By>>;
  where?: InputMaybe<Telegram_Chat_Bool_Exp>;
};

/** aggregated selection of "telegram_bot" */
export type Telegram_Bot_Aggregate = {
  __typename?: 'telegram_bot_aggregate';
  aggregate?: Maybe<Telegram_Bot_Aggregate_Fields>;
  nodes: Array<Telegram_Bot>;
};

export type Telegram_Bot_Aggregate_Bool_Exp = {
  count?: InputMaybe<Telegram_Bot_Aggregate_Bool_Exp_Count>;
};

export type Telegram_Bot_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Telegram_Bot_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Telegram_Bot_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "telegram_bot" */
export type Telegram_Bot_Aggregate_Fields = {
  __typename?: 'telegram_bot_aggregate_fields';
  avg?: Maybe<Telegram_Bot_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Telegram_Bot_Max_Fields>;
  min?: Maybe<Telegram_Bot_Min_Fields>;
  stddev?: Maybe<Telegram_Bot_Stddev_Fields>;
  stddev_pop?: Maybe<Telegram_Bot_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Telegram_Bot_Stddev_Samp_Fields>;
  sum?: Maybe<Telegram_Bot_Sum_Fields>;
  var_pop?: Maybe<Telegram_Bot_Var_Pop_Fields>;
  var_samp?: Maybe<Telegram_Bot_Var_Samp_Fields>;
  variance?: Maybe<Telegram_Bot_Variance_Fields>;
};


/** aggregate fields of "telegram_bot" */
export type Telegram_Bot_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Telegram_Bot_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "telegram_bot" */
export type Telegram_Bot_Aggregate_Order_By = {
  avg?: InputMaybe<Telegram_Bot_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Telegram_Bot_Max_Order_By>;
  min?: InputMaybe<Telegram_Bot_Min_Order_By>;
  stddev?: InputMaybe<Telegram_Bot_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Telegram_Bot_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Telegram_Bot_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Telegram_Bot_Sum_Order_By>;
  var_pop?: InputMaybe<Telegram_Bot_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Telegram_Bot_Var_Samp_Order_By>;
  variance?: InputMaybe<Telegram_Bot_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "telegram_bot" */
export type Telegram_Bot_Arr_Rel_Insert_Input = {
  data: Array<Telegram_Bot_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Telegram_Bot_On_Conflict>;
};

/** aggregate avg on columns */
export type Telegram_Bot_Avg_Fields = {
  __typename?: 'telegram_bot_avg_fields';
  company_id?: Maybe<Scalars['Float']>;
  default_space_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  telegram_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "telegram_bot" */
export type Telegram_Bot_Avg_Order_By = {
  company_id?: InputMaybe<Order_By>;
  default_space_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  telegram_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "telegram_bot". All fields are combined with a logical 'AND'. */
export type Telegram_Bot_Bool_Exp = {
  _and?: InputMaybe<Array<Telegram_Bot_Bool_Exp>>;
  _not?: InputMaybe<Telegram_Bot_Bool_Exp>;
  _or?: InputMaybe<Array<Telegram_Bot_Bool_Exp>>;
  bot_auth?: InputMaybe<String_Comparison_Exp>;
  chats?: InputMaybe<Telegram_Chat_Bool_Exp>;
  chats_aggregate?: InputMaybe<Telegram_Chat_Aggregate_Bool_Exp>;
  company?: InputMaybe<Company_Bool_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  default_space_id?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  inline_description?: InputMaybe<String_Comparison_Exp>;
  inline_menu_button?: InputMaybe<String_Comparison_Exp>;
  login_url?: InputMaybe<String_Comparison_Exp>;
  menu_button?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  space?: InputMaybe<Space_Bool_Exp>;
  telegram_id?: InputMaybe<Bigint_Comparison_Exp>;
  token?: InputMaybe<AuthTelegramBotTokens_Bool_Exp>;
  webapp_demo_gif?: InputMaybe<Uuid_Comparison_Exp>;
  webapp_description?: InputMaybe<String_Comparison_Exp>;
  webapp_photo?: InputMaybe<Uuid_Comparison_Exp>;
  webapp_shortname?: InputMaybe<String_Comparison_Exp>;
  webapp_title?: InputMaybe<String_Comparison_Exp>;
  webapp_url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "telegram_bot" */
export enum Telegram_Bot_Constraint {
  /** unique or primary key constraint on columns "id" */
  TelegramBotPkey = 'telegram_bot_pkey'
}

/** input type for incrementing numeric columns in table "telegram_bot" */
export type Telegram_Bot_Inc_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  default_space_id?: InputMaybe<Scalars['Int']>;
  telegram_id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "telegram_bot" */
export type Telegram_Bot_Insert_Input = {
  bot_auth?: InputMaybe<Scalars['String']>;
  chats?: InputMaybe<Telegram_Chat_Arr_Rel_Insert_Input>;
  company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  company_id?: InputMaybe<Scalars['Int']>;
  default_space_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  inline_description?: InputMaybe<Scalars['String']>;
  inline_menu_button?: InputMaybe<Scalars['String']>;
  login_url?: InputMaybe<Scalars['String']>;
  menu_button?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  space?: InputMaybe<Space_Obj_Rel_Insert_Input>;
  telegram_id?: InputMaybe<Scalars['bigint']>;
  token?: InputMaybe<AuthTelegramBotTokens_Obj_Rel_Insert_Input>;
  webapp_demo_gif?: InputMaybe<Scalars['uuid']>;
  webapp_description?: InputMaybe<Scalars['String']>;
  webapp_photo?: InputMaybe<Scalars['uuid']>;
  webapp_shortname?: InputMaybe<Scalars['String']>;
  webapp_title?: InputMaybe<Scalars['String']>;
  webapp_url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Telegram_Bot_Max_Fields = {
  __typename?: 'telegram_bot_max_fields';
  bot_auth?: Maybe<Scalars['String']>;
  company_id?: Maybe<Scalars['Int']>;
  default_space_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  inline_description?: Maybe<Scalars['String']>;
  inline_menu_button?: Maybe<Scalars['String']>;
  login_url?: Maybe<Scalars['String']>;
  menu_button?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  telegram_id?: Maybe<Scalars['bigint']>;
  webapp_demo_gif?: Maybe<Scalars['uuid']>;
  webapp_description?: Maybe<Scalars['String']>;
  webapp_photo?: Maybe<Scalars['uuid']>;
  webapp_shortname?: Maybe<Scalars['String']>;
  webapp_title?: Maybe<Scalars['String']>;
  webapp_url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "telegram_bot" */
export type Telegram_Bot_Max_Order_By = {
  bot_auth?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  default_space_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inline_description?: InputMaybe<Order_By>;
  inline_menu_button?: InputMaybe<Order_By>;
  login_url?: InputMaybe<Order_By>;
  menu_button?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  telegram_id?: InputMaybe<Order_By>;
  webapp_demo_gif?: InputMaybe<Order_By>;
  webapp_description?: InputMaybe<Order_By>;
  webapp_photo?: InputMaybe<Order_By>;
  webapp_shortname?: InputMaybe<Order_By>;
  webapp_title?: InputMaybe<Order_By>;
  webapp_url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Telegram_Bot_Min_Fields = {
  __typename?: 'telegram_bot_min_fields';
  bot_auth?: Maybe<Scalars['String']>;
  company_id?: Maybe<Scalars['Int']>;
  default_space_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  inline_description?: Maybe<Scalars['String']>;
  inline_menu_button?: Maybe<Scalars['String']>;
  login_url?: Maybe<Scalars['String']>;
  menu_button?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  telegram_id?: Maybe<Scalars['bigint']>;
  webapp_demo_gif?: Maybe<Scalars['uuid']>;
  webapp_description?: Maybe<Scalars['String']>;
  webapp_photo?: Maybe<Scalars['uuid']>;
  webapp_shortname?: Maybe<Scalars['String']>;
  webapp_title?: Maybe<Scalars['String']>;
  webapp_url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "telegram_bot" */
export type Telegram_Bot_Min_Order_By = {
  bot_auth?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  default_space_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inline_description?: InputMaybe<Order_By>;
  inline_menu_button?: InputMaybe<Order_By>;
  login_url?: InputMaybe<Order_By>;
  menu_button?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  telegram_id?: InputMaybe<Order_By>;
  webapp_demo_gif?: InputMaybe<Order_By>;
  webapp_description?: InputMaybe<Order_By>;
  webapp_photo?: InputMaybe<Order_By>;
  webapp_shortname?: InputMaybe<Order_By>;
  webapp_title?: InputMaybe<Order_By>;
  webapp_url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "telegram_bot" */
export type Telegram_Bot_Mutation_Response = {
  __typename?: 'telegram_bot_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Telegram_Bot>;
};

/** input type for inserting object relation for remote table "telegram_bot" */
export type Telegram_Bot_Obj_Rel_Insert_Input = {
  data: Telegram_Bot_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Telegram_Bot_On_Conflict>;
};

/** on_conflict condition type for table "telegram_bot" */
export type Telegram_Bot_On_Conflict = {
  constraint: Telegram_Bot_Constraint;
  update_columns?: Array<Telegram_Bot_Update_Column>;
  where?: InputMaybe<Telegram_Bot_Bool_Exp>;
};

/** Ordering options when selecting data from "telegram_bot". */
export type Telegram_Bot_Order_By = {
  bot_auth?: InputMaybe<Order_By>;
  chats_aggregate?: InputMaybe<Telegram_Chat_Aggregate_Order_By>;
  company?: InputMaybe<Company_Order_By>;
  company_id?: InputMaybe<Order_By>;
  default_space_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  inline_description?: InputMaybe<Order_By>;
  inline_menu_button?: InputMaybe<Order_By>;
  login_url?: InputMaybe<Order_By>;
  menu_button?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  space?: InputMaybe<Space_Order_By>;
  telegram_id?: InputMaybe<Order_By>;
  token?: InputMaybe<AuthTelegramBotTokens_Order_By>;
  webapp_demo_gif?: InputMaybe<Order_By>;
  webapp_description?: InputMaybe<Order_By>;
  webapp_photo?: InputMaybe<Order_By>;
  webapp_shortname?: InputMaybe<Order_By>;
  webapp_title?: InputMaybe<Order_By>;
  webapp_url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: telegram_bot */
export type Telegram_Bot_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "telegram_bot" */
export enum Telegram_Bot_Select_Column {
  /** column name */
  BotAuth = 'bot_auth',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  DefaultSpaceId = 'default_space_id',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  InlineDescription = 'inline_description',
  /** column name */
  InlineMenuButton = 'inline_menu_button',
  /** column name */
  LoginUrl = 'login_url',
  /** column name */
  MenuButton = 'menu_button',
  /** column name */
  Name = 'name',
  /** column name */
  TelegramId = 'telegram_id',
  /** column name */
  WebappDemoGif = 'webapp_demo_gif',
  /** column name */
  WebappDescription = 'webapp_description',
  /** column name */
  WebappPhoto = 'webapp_photo',
  /** column name */
  WebappShortname = 'webapp_shortname',
  /** column name */
  WebappTitle = 'webapp_title',
  /** column name */
  WebappUrl = 'webapp_url'
}

/** input type for updating data in table "telegram_bot" */
export type Telegram_Bot_Set_Input = {
  bot_auth?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['Int']>;
  default_space_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  inline_description?: InputMaybe<Scalars['String']>;
  inline_menu_button?: InputMaybe<Scalars['String']>;
  login_url?: InputMaybe<Scalars['String']>;
  menu_button?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  telegram_id?: InputMaybe<Scalars['bigint']>;
  webapp_demo_gif?: InputMaybe<Scalars['uuid']>;
  webapp_description?: InputMaybe<Scalars['String']>;
  webapp_photo?: InputMaybe<Scalars['uuid']>;
  webapp_shortname?: InputMaybe<Scalars['String']>;
  webapp_title?: InputMaybe<Scalars['String']>;
  webapp_url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Telegram_Bot_Stddev_Fields = {
  __typename?: 'telegram_bot_stddev_fields';
  company_id?: Maybe<Scalars['Float']>;
  default_space_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  telegram_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "telegram_bot" */
export type Telegram_Bot_Stddev_Order_By = {
  company_id?: InputMaybe<Order_By>;
  default_space_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  telegram_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Telegram_Bot_Stddev_Pop_Fields = {
  __typename?: 'telegram_bot_stddev_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  default_space_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  telegram_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "telegram_bot" */
export type Telegram_Bot_Stddev_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  default_space_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  telegram_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Telegram_Bot_Stddev_Samp_Fields = {
  __typename?: 'telegram_bot_stddev_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  default_space_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  telegram_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "telegram_bot" */
export type Telegram_Bot_Stddev_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  default_space_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  telegram_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "telegram_bot" */
export type Telegram_Bot_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Telegram_Bot_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Telegram_Bot_Stream_Cursor_Value_Input = {
  bot_auth?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['Int']>;
  default_space_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  inline_description?: InputMaybe<Scalars['String']>;
  inline_menu_button?: InputMaybe<Scalars['String']>;
  login_url?: InputMaybe<Scalars['String']>;
  menu_button?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  telegram_id?: InputMaybe<Scalars['bigint']>;
  webapp_demo_gif?: InputMaybe<Scalars['uuid']>;
  webapp_description?: InputMaybe<Scalars['String']>;
  webapp_photo?: InputMaybe<Scalars['uuid']>;
  webapp_shortname?: InputMaybe<Scalars['String']>;
  webapp_title?: InputMaybe<Scalars['String']>;
  webapp_url?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Telegram_Bot_Sum_Fields = {
  __typename?: 'telegram_bot_sum_fields';
  company_id?: Maybe<Scalars['Int']>;
  default_space_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  telegram_id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "telegram_bot" */
export type Telegram_Bot_Sum_Order_By = {
  company_id?: InputMaybe<Order_By>;
  default_space_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  telegram_id?: InputMaybe<Order_By>;
};

/** update columns of table "telegram_bot" */
export enum Telegram_Bot_Update_Column {
  /** column name */
  BotAuth = 'bot_auth',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  DefaultSpaceId = 'default_space_id',
  /** column name */
  Description = 'description',
  /** column name */
  InlineDescription = 'inline_description',
  /** column name */
  InlineMenuButton = 'inline_menu_button',
  /** column name */
  LoginUrl = 'login_url',
  /** column name */
  MenuButton = 'menu_button',
  /** column name */
  Name = 'name',
  /** column name */
  TelegramId = 'telegram_id',
  /** column name */
  WebappDemoGif = 'webapp_demo_gif',
  /** column name */
  WebappDescription = 'webapp_description',
  /** column name */
  WebappPhoto = 'webapp_photo',
  /** column name */
  WebappShortname = 'webapp_shortname',
  /** column name */
  WebappTitle = 'webapp_title',
  /** column name */
  WebappUrl = 'webapp_url'
}

export type Telegram_Bot_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Telegram_Bot_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Telegram_Bot_Set_Input>;
  /** filter the rows which have to be updated */
  where: Telegram_Bot_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Telegram_Bot_Var_Pop_Fields = {
  __typename?: 'telegram_bot_var_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  default_space_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  telegram_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "telegram_bot" */
export type Telegram_Bot_Var_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  default_space_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  telegram_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Telegram_Bot_Var_Samp_Fields = {
  __typename?: 'telegram_bot_var_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  default_space_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  telegram_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "telegram_bot" */
export type Telegram_Bot_Var_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  default_space_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  telegram_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Telegram_Bot_Variance_Fields = {
  __typename?: 'telegram_bot_variance_fields';
  company_id?: Maybe<Scalars['Float']>;
  default_space_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  telegram_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "telegram_bot" */
export type Telegram_Bot_Variance_Order_By = {
  company_id?: InputMaybe<Order_By>;
  default_space_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  telegram_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "telegram_chat" */
export type Telegram_Chat = {
  __typename?: 'telegram_chat';
  administrator_count: Scalars['Int'];
  banned_count: Scalars['Int'];
  bot_id?: Maybe<Scalars['Int']>;
  bot_present?: Maybe<Scalars['Boolean']>;
  can_get_members?: Maybe<Scalars['Boolean']>;
  can_hide_members?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  has_hidden_members?: Maybe<Scalars['Boolean']>;
  id: Scalars['bigint'];
  invite_link?: Maybe<Scalars['String']>;
  is_all_history_available?: Maybe<Scalars['Boolean']>;
  is_channel?: Maybe<Scalars['Boolean']>;
  is_group?: Maybe<Scalars['Boolean']>;
  is_supergroup?: Maybe<Scalars['Boolean']>;
  linked_chat_id?: Maybe<Scalars['bigint']>;
  member_count: Scalars['Int'];
  photo?: Maybe<Scalars['uuid']>;
  restricted_count: Scalars['Int'];
  slow_mode_delay: Scalars['Int'];
  /** An object relationship */
  space?: Maybe<Space>;
  space_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  telegram_bot?: Maybe<Telegram_Bot>;
  title?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregated selection of "telegram_chat" */
export type Telegram_Chat_Aggregate = {
  __typename?: 'telegram_chat_aggregate';
  aggregate?: Maybe<Telegram_Chat_Aggregate_Fields>;
  nodes: Array<Telegram_Chat>;
};

export type Telegram_Chat_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Telegram_Chat_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Telegram_Chat_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Telegram_Chat_Aggregate_Bool_Exp_Count>;
};

export type Telegram_Chat_Aggregate_Bool_Exp_Bool_And = {
  arguments: Telegram_Chat_Select_Column_Telegram_Chat_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Telegram_Chat_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Telegram_Chat_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Telegram_Chat_Select_Column_Telegram_Chat_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Telegram_Chat_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Telegram_Chat_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Telegram_Chat_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Telegram_Chat_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "telegram_chat" */
export type Telegram_Chat_Aggregate_Fields = {
  __typename?: 'telegram_chat_aggregate_fields';
  avg?: Maybe<Telegram_Chat_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Telegram_Chat_Max_Fields>;
  min?: Maybe<Telegram_Chat_Min_Fields>;
  stddev?: Maybe<Telegram_Chat_Stddev_Fields>;
  stddev_pop?: Maybe<Telegram_Chat_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Telegram_Chat_Stddev_Samp_Fields>;
  sum?: Maybe<Telegram_Chat_Sum_Fields>;
  var_pop?: Maybe<Telegram_Chat_Var_Pop_Fields>;
  var_samp?: Maybe<Telegram_Chat_Var_Samp_Fields>;
  variance?: Maybe<Telegram_Chat_Variance_Fields>;
};


/** aggregate fields of "telegram_chat" */
export type Telegram_Chat_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Telegram_Chat_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "telegram_chat" */
export type Telegram_Chat_Aggregate_Order_By = {
  avg?: InputMaybe<Telegram_Chat_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Telegram_Chat_Max_Order_By>;
  min?: InputMaybe<Telegram_Chat_Min_Order_By>;
  stddev?: InputMaybe<Telegram_Chat_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Telegram_Chat_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Telegram_Chat_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Telegram_Chat_Sum_Order_By>;
  var_pop?: InputMaybe<Telegram_Chat_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Telegram_Chat_Var_Samp_Order_By>;
  variance?: InputMaybe<Telegram_Chat_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "telegram_chat" */
export type Telegram_Chat_Arr_Rel_Insert_Input = {
  data: Array<Telegram_Chat_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Telegram_Chat_On_Conflict>;
};

/** aggregate avg on columns */
export type Telegram_Chat_Avg_Fields = {
  __typename?: 'telegram_chat_avg_fields';
  administrator_count?: Maybe<Scalars['Float']>;
  banned_count?: Maybe<Scalars['Float']>;
  bot_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  linked_chat_id?: Maybe<Scalars['Float']>;
  member_count?: Maybe<Scalars['Float']>;
  restricted_count?: Maybe<Scalars['Float']>;
  slow_mode_delay?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "telegram_chat" */
export type Telegram_Chat_Avg_Order_By = {
  administrator_count?: InputMaybe<Order_By>;
  banned_count?: InputMaybe<Order_By>;
  bot_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  linked_chat_id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
  restricted_count?: InputMaybe<Order_By>;
  slow_mode_delay?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "telegram_chat". All fields are combined with a logical 'AND'. */
export type Telegram_Chat_Bool_Exp = {
  _and?: InputMaybe<Array<Telegram_Chat_Bool_Exp>>;
  _not?: InputMaybe<Telegram_Chat_Bool_Exp>;
  _or?: InputMaybe<Array<Telegram_Chat_Bool_Exp>>;
  administrator_count?: InputMaybe<Int_Comparison_Exp>;
  banned_count?: InputMaybe<Int_Comparison_Exp>;
  bot_id?: InputMaybe<Int_Comparison_Exp>;
  bot_present?: InputMaybe<Boolean_Comparison_Exp>;
  can_get_members?: InputMaybe<Boolean_Comparison_Exp>;
  can_hide_members?: InputMaybe<Boolean_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  has_hidden_members?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  invite_link?: InputMaybe<String_Comparison_Exp>;
  is_all_history_available?: InputMaybe<Boolean_Comparison_Exp>;
  is_channel?: InputMaybe<Boolean_Comparison_Exp>;
  is_group?: InputMaybe<Boolean_Comparison_Exp>;
  is_supergroup?: InputMaybe<Boolean_Comparison_Exp>;
  linked_chat_id?: InputMaybe<Bigint_Comparison_Exp>;
  member_count?: InputMaybe<Int_Comparison_Exp>;
  photo?: InputMaybe<Uuid_Comparison_Exp>;
  restricted_count?: InputMaybe<Int_Comparison_Exp>;
  slow_mode_delay?: InputMaybe<Int_Comparison_Exp>;
  space?: InputMaybe<Space_Bool_Exp>;
  space_id?: InputMaybe<Int_Comparison_Exp>;
  telegram_bot?: InputMaybe<Telegram_Bot_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "telegram_chat" */
export enum Telegram_Chat_Constraint {
  /** unique or primary key constraint on columns "bot_id", "id" */
  TelegramChatBotIdIdKey = 'telegram_chat_bot_id_id_key',
  /** unique or primary key constraint on columns "id" */
  TelegramChatPkey = 'telegram_chat_pkey'
}

/** input type for incrementing numeric columns in table "telegram_chat" */
export type Telegram_Chat_Inc_Input = {
  administrator_count?: InputMaybe<Scalars['Int']>;
  banned_count?: InputMaybe<Scalars['Int']>;
  bot_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['bigint']>;
  linked_chat_id?: InputMaybe<Scalars['bigint']>;
  member_count?: InputMaybe<Scalars['Int']>;
  restricted_count?: InputMaybe<Scalars['Int']>;
  slow_mode_delay?: InputMaybe<Scalars['Int']>;
  space_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "telegram_chat" */
export type Telegram_Chat_Insert_Input = {
  administrator_count?: InputMaybe<Scalars['Int']>;
  banned_count?: InputMaybe<Scalars['Int']>;
  bot_id?: InputMaybe<Scalars['Int']>;
  bot_present?: InputMaybe<Scalars['Boolean']>;
  can_get_members?: InputMaybe<Scalars['Boolean']>;
  can_hide_members?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  has_hidden_members?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['bigint']>;
  invite_link?: InputMaybe<Scalars['String']>;
  is_all_history_available?: InputMaybe<Scalars['Boolean']>;
  is_channel?: InputMaybe<Scalars['Boolean']>;
  is_group?: InputMaybe<Scalars['Boolean']>;
  is_supergroup?: InputMaybe<Scalars['Boolean']>;
  linked_chat_id?: InputMaybe<Scalars['bigint']>;
  member_count?: InputMaybe<Scalars['Int']>;
  photo?: InputMaybe<Scalars['uuid']>;
  restricted_count?: InputMaybe<Scalars['Int']>;
  slow_mode_delay?: InputMaybe<Scalars['Int']>;
  space?: InputMaybe<Space_Obj_Rel_Insert_Input>;
  space_id?: InputMaybe<Scalars['Int']>;
  telegram_bot?: InputMaybe<Telegram_Bot_Obj_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Telegram_Chat_Max_Fields = {
  __typename?: 'telegram_chat_max_fields';
  administrator_count?: Maybe<Scalars['Int']>;
  banned_count?: Maybe<Scalars['Int']>;
  bot_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  invite_link?: Maybe<Scalars['String']>;
  linked_chat_id?: Maybe<Scalars['bigint']>;
  member_count?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['uuid']>;
  restricted_count?: Maybe<Scalars['Int']>;
  slow_mode_delay?: Maybe<Scalars['Int']>;
  space_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "telegram_chat" */
export type Telegram_Chat_Max_Order_By = {
  administrator_count?: InputMaybe<Order_By>;
  banned_count?: InputMaybe<Order_By>;
  bot_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invite_link?: InputMaybe<Order_By>;
  linked_chat_id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
  photo?: InputMaybe<Order_By>;
  restricted_count?: InputMaybe<Order_By>;
  slow_mode_delay?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Telegram_Chat_Min_Fields = {
  __typename?: 'telegram_chat_min_fields';
  administrator_count?: Maybe<Scalars['Int']>;
  banned_count?: Maybe<Scalars['Int']>;
  bot_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  invite_link?: Maybe<Scalars['String']>;
  linked_chat_id?: Maybe<Scalars['bigint']>;
  member_count?: Maybe<Scalars['Int']>;
  photo?: Maybe<Scalars['uuid']>;
  restricted_count?: Maybe<Scalars['Int']>;
  slow_mode_delay?: Maybe<Scalars['Int']>;
  space_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "telegram_chat" */
export type Telegram_Chat_Min_Order_By = {
  administrator_count?: InputMaybe<Order_By>;
  banned_count?: InputMaybe<Order_By>;
  bot_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invite_link?: InputMaybe<Order_By>;
  linked_chat_id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
  photo?: InputMaybe<Order_By>;
  restricted_count?: InputMaybe<Order_By>;
  slow_mode_delay?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "telegram_chat" */
export type Telegram_Chat_Mutation_Response = {
  __typename?: 'telegram_chat_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Telegram_Chat>;
};

/** on_conflict condition type for table "telegram_chat" */
export type Telegram_Chat_On_Conflict = {
  constraint: Telegram_Chat_Constraint;
  update_columns?: Array<Telegram_Chat_Update_Column>;
  where?: InputMaybe<Telegram_Chat_Bool_Exp>;
};

/** Ordering options when selecting data from "telegram_chat". */
export type Telegram_Chat_Order_By = {
  administrator_count?: InputMaybe<Order_By>;
  banned_count?: InputMaybe<Order_By>;
  bot_id?: InputMaybe<Order_By>;
  bot_present?: InputMaybe<Order_By>;
  can_get_members?: InputMaybe<Order_By>;
  can_hide_members?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  has_hidden_members?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  invite_link?: InputMaybe<Order_By>;
  is_all_history_available?: InputMaybe<Order_By>;
  is_channel?: InputMaybe<Order_By>;
  is_group?: InputMaybe<Order_By>;
  is_supergroup?: InputMaybe<Order_By>;
  linked_chat_id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
  photo?: InputMaybe<Order_By>;
  restricted_count?: InputMaybe<Order_By>;
  slow_mode_delay?: InputMaybe<Order_By>;
  space?: InputMaybe<Space_Order_By>;
  space_id?: InputMaybe<Order_By>;
  telegram_bot?: InputMaybe<Telegram_Bot_Order_By>;
  title?: InputMaybe<Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: telegram_chat */
export type Telegram_Chat_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "telegram_chat" */
export enum Telegram_Chat_Select_Column {
  /** column name */
  AdministratorCount = 'administrator_count',
  /** column name */
  BannedCount = 'banned_count',
  /** column name */
  BotId = 'bot_id',
  /** column name */
  BotPresent = 'bot_present',
  /** column name */
  CanGetMembers = 'can_get_members',
  /** column name */
  CanHideMembers = 'can_hide_members',
  /** column name */
  Description = 'description',
  /** column name */
  HasHiddenMembers = 'has_hidden_members',
  /** column name */
  Id = 'id',
  /** column name */
  InviteLink = 'invite_link',
  /** column name */
  IsAllHistoryAvailable = 'is_all_history_available',
  /** column name */
  IsChannel = 'is_channel',
  /** column name */
  IsGroup = 'is_group',
  /** column name */
  IsSupergroup = 'is_supergroup',
  /** column name */
  LinkedChatId = 'linked_chat_id',
  /** column name */
  MemberCount = 'member_count',
  /** column name */
  Photo = 'photo',
  /** column name */
  RestrictedCount = 'restricted_count',
  /** column name */
  SlowModeDelay = 'slow_mode_delay',
  /** column name */
  SpaceId = 'space_id',
  /** column name */
  Title = 'title',
  /** column name */
  Username = 'username'
}

/** select "telegram_chat_aggregate_bool_exp_bool_and_arguments_columns" columns of table "telegram_chat" */
export enum Telegram_Chat_Select_Column_Telegram_Chat_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  BotPresent = 'bot_present',
  /** column name */
  CanGetMembers = 'can_get_members',
  /** column name */
  CanHideMembers = 'can_hide_members',
  /** column name */
  HasHiddenMembers = 'has_hidden_members',
  /** column name */
  IsAllHistoryAvailable = 'is_all_history_available',
  /** column name */
  IsChannel = 'is_channel',
  /** column name */
  IsGroup = 'is_group',
  /** column name */
  IsSupergroup = 'is_supergroup'
}

/** select "telegram_chat_aggregate_bool_exp_bool_or_arguments_columns" columns of table "telegram_chat" */
export enum Telegram_Chat_Select_Column_Telegram_Chat_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  BotPresent = 'bot_present',
  /** column name */
  CanGetMembers = 'can_get_members',
  /** column name */
  CanHideMembers = 'can_hide_members',
  /** column name */
  HasHiddenMembers = 'has_hidden_members',
  /** column name */
  IsAllHistoryAvailable = 'is_all_history_available',
  /** column name */
  IsChannel = 'is_channel',
  /** column name */
  IsGroup = 'is_group',
  /** column name */
  IsSupergroup = 'is_supergroup'
}

/** input type for updating data in table "telegram_chat" */
export type Telegram_Chat_Set_Input = {
  administrator_count?: InputMaybe<Scalars['Int']>;
  banned_count?: InputMaybe<Scalars['Int']>;
  bot_id?: InputMaybe<Scalars['Int']>;
  bot_present?: InputMaybe<Scalars['Boolean']>;
  can_get_members?: InputMaybe<Scalars['Boolean']>;
  can_hide_members?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  has_hidden_members?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['bigint']>;
  invite_link?: InputMaybe<Scalars['String']>;
  is_all_history_available?: InputMaybe<Scalars['Boolean']>;
  is_channel?: InputMaybe<Scalars['Boolean']>;
  is_group?: InputMaybe<Scalars['Boolean']>;
  is_supergroup?: InputMaybe<Scalars['Boolean']>;
  linked_chat_id?: InputMaybe<Scalars['bigint']>;
  member_count?: InputMaybe<Scalars['Int']>;
  photo?: InputMaybe<Scalars['uuid']>;
  restricted_count?: InputMaybe<Scalars['Int']>;
  slow_mode_delay?: InputMaybe<Scalars['Int']>;
  space_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Telegram_Chat_Stddev_Fields = {
  __typename?: 'telegram_chat_stddev_fields';
  administrator_count?: Maybe<Scalars['Float']>;
  banned_count?: Maybe<Scalars['Float']>;
  bot_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  linked_chat_id?: Maybe<Scalars['Float']>;
  member_count?: Maybe<Scalars['Float']>;
  restricted_count?: Maybe<Scalars['Float']>;
  slow_mode_delay?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "telegram_chat" */
export type Telegram_Chat_Stddev_Order_By = {
  administrator_count?: InputMaybe<Order_By>;
  banned_count?: InputMaybe<Order_By>;
  bot_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  linked_chat_id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
  restricted_count?: InputMaybe<Order_By>;
  slow_mode_delay?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Telegram_Chat_Stddev_Pop_Fields = {
  __typename?: 'telegram_chat_stddev_pop_fields';
  administrator_count?: Maybe<Scalars['Float']>;
  banned_count?: Maybe<Scalars['Float']>;
  bot_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  linked_chat_id?: Maybe<Scalars['Float']>;
  member_count?: Maybe<Scalars['Float']>;
  restricted_count?: Maybe<Scalars['Float']>;
  slow_mode_delay?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "telegram_chat" */
export type Telegram_Chat_Stddev_Pop_Order_By = {
  administrator_count?: InputMaybe<Order_By>;
  banned_count?: InputMaybe<Order_By>;
  bot_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  linked_chat_id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
  restricted_count?: InputMaybe<Order_By>;
  slow_mode_delay?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Telegram_Chat_Stddev_Samp_Fields = {
  __typename?: 'telegram_chat_stddev_samp_fields';
  administrator_count?: Maybe<Scalars['Float']>;
  banned_count?: Maybe<Scalars['Float']>;
  bot_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  linked_chat_id?: Maybe<Scalars['Float']>;
  member_count?: Maybe<Scalars['Float']>;
  restricted_count?: Maybe<Scalars['Float']>;
  slow_mode_delay?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "telegram_chat" */
export type Telegram_Chat_Stddev_Samp_Order_By = {
  administrator_count?: InputMaybe<Order_By>;
  banned_count?: InputMaybe<Order_By>;
  bot_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  linked_chat_id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
  restricted_count?: InputMaybe<Order_By>;
  slow_mode_delay?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "telegram_chat" */
export type Telegram_Chat_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Telegram_Chat_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Telegram_Chat_Stream_Cursor_Value_Input = {
  administrator_count?: InputMaybe<Scalars['Int']>;
  banned_count?: InputMaybe<Scalars['Int']>;
  bot_id?: InputMaybe<Scalars['Int']>;
  bot_present?: InputMaybe<Scalars['Boolean']>;
  can_get_members?: InputMaybe<Scalars['Boolean']>;
  can_hide_members?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  has_hidden_members?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['bigint']>;
  invite_link?: InputMaybe<Scalars['String']>;
  is_all_history_available?: InputMaybe<Scalars['Boolean']>;
  is_channel?: InputMaybe<Scalars['Boolean']>;
  is_group?: InputMaybe<Scalars['Boolean']>;
  is_supergroup?: InputMaybe<Scalars['Boolean']>;
  linked_chat_id?: InputMaybe<Scalars['bigint']>;
  member_count?: InputMaybe<Scalars['Int']>;
  photo?: InputMaybe<Scalars['uuid']>;
  restricted_count?: InputMaybe<Scalars['Int']>;
  slow_mode_delay?: InputMaybe<Scalars['Int']>;
  space_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Telegram_Chat_Sum_Fields = {
  __typename?: 'telegram_chat_sum_fields';
  administrator_count?: Maybe<Scalars['Int']>;
  banned_count?: Maybe<Scalars['Int']>;
  bot_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  linked_chat_id?: Maybe<Scalars['bigint']>;
  member_count?: Maybe<Scalars['Int']>;
  restricted_count?: Maybe<Scalars['Int']>;
  slow_mode_delay?: Maybe<Scalars['Int']>;
  space_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "telegram_chat" */
export type Telegram_Chat_Sum_Order_By = {
  administrator_count?: InputMaybe<Order_By>;
  banned_count?: InputMaybe<Order_By>;
  bot_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  linked_chat_id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
  restricted_count?: InputMaybe<Order_By>;
  slow_mode_delay?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** update columns of table "telegram_chat" */
export enum Telegram_Chat_Update_Column {
  /** column name */
  AdministratorCount = 'administrator_count',
  /** column name */
  BannedCount = 'banned_count',
  /** column name */
  BotId = 'bot_id',
  /** column name */
  BotPresent = 'bot_present',
  /** column name */
  CanGetMembers = 'can_get_members',
  /** column name */
  CanHideMembers = 'can_hide_members',
  /** column name */
  Description = 'description',
  /** column name */
  HasHiddenMembers = 'has_hidden_members',
  /** column name */
  Id = 'id',
  /** column name */
  InviteLink = 'invite_link',
  /** column name */
  IsAllHistoryAvailable = 'is_all_history_available',
  /** column name */
  IsChannel = 'is_channel',
  /** column name */
  IsGroup = 'is_group',
  /** column name */
  IsSupergroup = 'is_supergroup',
  /** column name */
  LinkedChatId = 'linked_chat_id',
  /** column name */
  MemberCount = 'member_count',
  /** column name */
  Photo = 'photo',
  /** column name */
  RestrictedCount = 'restricted_count',
  /** column name */
  SlowModeDelay = 'slow_mode_delay',
  /** column name */
  SpaceId = 'space_id',
  /** column name */
  Title = 'title',
  /** column name */
  Username = 'username'
}

export type Telegram_Chat_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Telegram_Chat_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Telegram_Chat_Set_Input>;
  /** filter the rows which have to be updated */
  where: Telegram_Chat_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Telegram_Chat_Var_Pop_Fields = {
  __typename?: 'telegram_chat_var_pop_fields';
  administrator_count?: Maybe<Scalars['Float']>;
  banned_count?: Maybe<Scalars['Float']>;
  bot_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  linked_chat_id?: Maybe<Scalars['Float']>;
  member_count?: Maybe<Scalars['Float']>;
  restricted_count?: Maybe<Scalars['Float']>;
  slow_mode_delay?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "telegram_chat" */
export type Telegram_Chat_Var_Pop_Order_By = {
  administrator_count?: InputMaybe<Order_By>;
  banned_count?: InputMaybe<Order_By>;
  bot_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  linked_chat_id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
  restricted_count?: InputMaybe<Order_By>;
  slow_mode_delay?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Telegram_Chat_Var_Samp_Fields = {
  __typename?: 'telegram_chat_var_samp_fields';
  administrator_count?: Maybe<Scalars['Float']>;
  banned_count?: Maybe<Scalars['Float']>;
  bot_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  linked_chat_id?: Maybe<Scalars['Float']>;
  member_count?: Maybe<Scalars['Float']>;
  restricted_count?: Maybe<Scalars['Float']>;
  slow_mode_delay?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "telegram_chat" */
export type Telegram_Chat_Var_Samp_Order_By = {
  administrator_count?: InputMaybe<Order_By>;
  banned_count?: InputMaybe<Order_By>;
  bot_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  linked_chat_id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
  restricted_count?: InputMaybe<Order_By>;
  slow_mode_delay?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Telegram_Chat_Variance_Fields = {
  __typename?: 'telegram_chat_variance_fields';
  administrator_count?: Maybe<Scalars['Float']>;
  banned_count?: Maybe<Scalars['Float']>;
  bot_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  linked_chat_id?: Maybe<Scalars['Float']>;
  member_count?: Maybe<Scalars['Float']>;
  restricted_count?: Maybe<Scalars['Float']>;
  slow_mode_delay?: Maybe<Scalars['Float']>;
  space_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "telegram_chat" */
export type Telegram_Chat_Variance_Order_By = {
  administrator_count?: InputMaybe<Order_By>;
  banned_count?: InputMaybe<Order_By>;
  bot_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  linked_chat_id?: InputMaybe<Order_By>;
  member_count?: InputMaybe<Order_By>;
  restricted_count?: InputMaybe<Order_By>;
  slow_mode_delay?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "telegram_file" */
export type Telegram_File = {
  __typename?: 'telegram_file';
  /** An object relationship */
  file?: Maybe<Files>;
  file_id?: Maybe<Scalars['uuid']>;
  id: Scalars['String'];
};

/** aggregated selection of "telegram_file" */
export type Telegram_File_Aggregate = {
  __typename?: 'telegram_file_aggregate';
  aggregate?: Maybe<Telegram_File_Aggregate_Fields>;
  nodes: Array<Telegram_File>;
};

/** aggregate fields of "telegram_file" */
export type Telegram_File_Aggregate_Fields = {
  __typename?: 'telegram_file_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Telegram_File_Max_Fields>;
  min?: Maybe<Telegram_File_Min_Fields>;
};


/** aggregate fields of "telegram_file" */
export type Telegram_File_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Telegram_File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "telegram_file". All fields are combined with a logical 'AND'. */
export type Telegram_File_Bool_Exp = {
  _and?: InputMaybe<Array<Telegram_File_Bool_Exp>>;
  _not?: InputMaybe<Telegram_File_Bool_Exp>;
  _or?: InputMaybe<Array<Telegram_File_Bool_Exp>>;
  file?: InputMaybe<Files_Bool_Exp>;
  file_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "telegram_file" */
export enum Telegram_File_Constraint {
  /** unique or primary key constraint on columns "file_id" */
  TelegramFileFileIdKey = 'telegram_file_file_id_key',
  /** unique or primary key constraint on columns "id" */
  TelegramFilePkey = 'telegram_file_pkey'
}

/** input type for inserting data into table "telegram_file" */
export type Telegram_File_Insert_Input = {
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  file_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Telegram_File_Max_Fields = {
  __typename?: 'telegram_file_max_fields';
  file_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Telegram_File_Min_Fields = {
  __typename?: 'telegram_file_min_fields';
  file_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "telegram_file" */
export type Telegram_File_Mutation_Response = {
  __typename?: 'telegram_file_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Telegram_File>;
};

/** input type for inserting object relation for remote table "telegram_file" */
export type Telegram_File_Obj_Rel_Insert_Input = {
  data: Telegram_File_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Telegram_File_On_Conflict>;
};

/** on_conflict condition type for table "telegram_file" */
export type Telegram_File_On_Conflict = {
  constraint: Telegram_File_Constraint;
  update_columns?: Array<Telegram_File_Update_Column>;
  where?: InputMaybe<Telegram_File_Bool_Exp>;
};

/** Ordering options when selecting data from "telegram_file". */
export type Telegram_File_Order_By = {
  file?: InputMaybe<Files_Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: telegram_file */
export type Telegram_File_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "telegram_file" */
export enum Telegram_File_Select_Column {
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "telegram_file" */
export type Telegram_File_Set_Input = {
  file_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "telegram_file" */
export type Telegram_File_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Telegram_File_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Telegram_File_Stream_Cursor_Value_Input = {
  file_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "telegram_file" */
export enum Telegram_File_Update_Column {
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id'
}

export type Telegram_File_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Telegram_File_Set_Input>;
  /** filter the rows which have to be updated */
  where: Telegram_File_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']>;
  _gt?: InputMaybe<Scalars['timestamp']>;
  _gte?: InputMaybe<Scalars['timestamp']>;
  _in?: InputMaybe<Array<Scalars['timestamp']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamp']>;
  _lte?: InputMaybe<Scalars['timestamp']>;
  _neq?: InputMaybe<Scalars['timestamp']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "tinder_swipes" */
export type Tinder_Swipes = {
  __typename?: 'tinder_swipes';
  created_at: Scalars['timestamp'];
  from_user_id: Scalars['uuid'];
  liked: Scalars['Boolean'];
  to_user_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  userByToUserId: Users;
};

/** aggregated selection of "tinder_swipes" */
export type Tinder_Swipes_Aggregate = {
  __typename?: 'tinder_swipes_aggregate';
  aggregate?: Maybe<Tinder_Swipes_Aggregate_Fields>;
  nodes: Array<Tinder_Swipes>;
};

export type Tinder_Swipes_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Tinder_Swipes_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Tinder_Swipes_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Tinder_Swipes_Aggregate_Bool_Exp_Count>;
};

export type Tinder_Swipes_Aggregate_Bool_Exp_Bool_And = {
  arguments: Tinder_Swipes_Select_Column_Tinder_Swipes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Tinder_Swipes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Tinder_Swipes_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Tinder_Swipes_Select_Column_Tinder_Swipes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Tinder_Swipes_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Tinder_Swipes_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Tinder_Swipes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Tinder_Swipes_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "tinder_swipes" */
export type Tinder_Swipes_Aggregate_Fields = {
  __typename?: 'tinder_swipes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tinder_Swipes_Max_Fields>;
  min?: Maybe<Tinder_Swipes_Min_Fields>;
};


/** aggregate fields of "tinder_swipes" */
export type Tinder_Swipes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tinder_Swipes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tinder_swipes" */
export type Tinder_Swipes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Tinder_Swipes_Max_Order_By>;
  min?: InputMaybe<Tinder_Swipes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "tinder_swipes" */
export type Tinder_Swipes_Arr_Rel_Insert_Input = {
  data: Array<Tinder_Swipes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Tinder_Swipes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "tinder_swipes". All fields are combined with a logical 'AND'. */
export type Tinder_Swipes_Bool_Exp = {
  _and?: InputMaybe<Array<Tinder_Swipes_Bool_Exp>>;
  _not?: InputMaybe<Tinder_Swipes_Bool_Exp>;
  _or?: InputMaybe<Array<Tinder_Swipes_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  from_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  liked?: InputMaybe<Boolean_Comparison_Exp>;
  to_user_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userByToUserId?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "tinder_swipes" */
export enum Tinder_Swipes_Constraint {
  /** unique or primary key constraint on columns "to_user_id", "from_user_id" */
  TinderSwipesPkey = 'tinder_swipes_pkey'
}

/** input type for inserting data into table "tinder_swipes" */
export type Tinder_Swipes_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  from_user_id?: InputMaybe<Scalars['uuid']>;
  liked?: InputMaybe<Scalars['Boolean']>;
  to_user_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByToUserId?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tinder_Swipes_Max_Fields = {
  __typename?: 'tinder_swipes_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  from_user_id?: Maybe<Scalars['uuid']>;
  to_user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "tinder_swipes" */
export type Tinder_Swipes_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  from_user_id?: InputMaybe<Order_By>;
  to_user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Tinder_Swipes_Min_Fields = {
  __typename?: 'tinder_swipes_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  from_user_id?: Maybe<Scalars['uuid']>;
  to_user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "tinder_swipes" */
export type Tinder_Swipes_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  from_user_id?: InputMaybe<Order_By>;
  to_user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "tinder_swipes" */
export type Tinder_Swipes_Mutation_Response = {
  __typename?: 'tinder_swipes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tinder_Swipes>;
};

/** on_conflict condition type for table "tinder_swipes" */
export type Tinder_Swipes_On_Conflict = {
  constraint: Tinder_Swipes_Constraint;
  update_columns?: Array<Tinder_Swipes_Update_Column>;
  where?: InputMaybe<Tinder_Swipes_Bool_Exp>;
};

/** Ordering options when selecting data from "tinder_swipes". */
export type Tinder_Swipes_Order_By = {
  created_at?: InputMaybe<Order_By>;
  from_user_id?: InputMaybe<Order_By>;
  liked?: InputMaybe<Order_By>;
  to_user_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userByToUserId?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: tinder_swipes */
export type Tinder_Swipes_Pk_Columns_Input = {
  from_user_id: Scalars['uuid'];
  to_user_id: Scalars['uuid'];
};

/** select columns of table "tinder_swipes" */
export enum Tinder_Swipes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FromUserId = 'from_user_id',
  /** column name */
  Liked = 'liked',
  /** column name */
  ToUserId = 'to_user_id'
}

/** select "tinder_swipes_aggregate_bool_exp_bool_and_arguments_columns" columns of table "tinder_swipes" */
export enum Tinder_Swipes_Select_Column_Tinder_Swipes_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Liked = 'liked'
}

/** select "tinder_swipes_aggregate_bool_exp_bool_or_arguments_columns" columns of table "tinder_swipes" */
export enum Tinder_Swipes_Select_Column_Tinder_Swipes_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Liked = 'liked'
}

/** input type for updating data in table "tinder_swipes" */
export type Tinder_Swipes_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  from_user_id?: InputMaybe<Scalars['uuid']>;
  liked?: InputMaybe<Scalars['Boolean']>;
  to_user_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "tinder_swipes" */
export type Tinder_Swipes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tinder_Swipes_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tinder_Swipes_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  from_user_id?: InputMaybe<Scalars['uuid']>;
  liked?: InputMaybe<Scalars['Boolean']>;
  to_user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "tinder_swipes" */
export enum Tinder_Swipes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FromUserId = 'from_user_id',
  /** column name */
  Liked = 'liked',
  /** column name */
  ToUserId = 'to_user_id'
}

export type Tinder_Swipes_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tinder_Swipes_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tinder_Swipes_Bool_Exp;
};

/** columns and relationships of "user_company" */
export type User_Company = {
  __typename?: 'user_company';
  /** An object relationship */
  company: Company;
  company_id: Scalars['Int'];
  is_owner: Scalars['Boolean'];
  is_staff: Scalars['Boolean'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_company" */
export type User_Company_Aggregate = {
  __typename?: 'user_company_aggregate';
  aggregate?: Maybe<User_Company_Aggregate_Fields>;
  nodes: Array<User_Company>;
};

export type User_Company_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<User_Company_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<User_Company_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<User_Company_Aggregate_Bool_Exp_Count>;
};

export type User_Company_Aggregate_Bool_Exp_Bool_And = {
  arguments: User_Company_Select_Column_User_Company_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Company_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Company_Aggregate_Bool_Exp_Bool_Or = {
  arguments: User_Company_Select_Column_User_Company_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Company_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Company_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Company_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Company_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_company" */
export type User_Company_Aggregate_Fields = {
  __typename?: 'user_company_aggregate_fields';
  avg?: Maybe<User_Company_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Company_Max_Fields>;
  min?: Maybe<User_Company_Min_Fields>;
  stddev?: Maybe<User_Company_Stddev_Fields>;
  stddev_pop?: Maybe<User_Company_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Company_Stddev_Samp_Fields>;
  sum?: Maybe<User_Company_Sum_Fields>;
  var_pop?: Maybe<User_Company_Var_Pop_Fields>;
  var_samp?: Maybe<User_Company_Var_Samp_Fields>;
  variance?: Maybe<User_Company_Variance_Fields>;
};


/** aggregate fields of "user_company" */
export type User_Company_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Company_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_company" */
export type User_Company_Aggregate_Order_By = {
  avg?: InputMaybe<User_Company_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Company_Max_Order_By>;
  min?: InputMaybe<User_Company_Min_Order_By>;
  stddev?: InputMaybe<User_Company_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Company_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Company_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Company_Sum_Order_By>;
  var_pop?: InputMaybe<User_Company_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Company_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Company_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_company" */
export type User_Company_Arr_Rel_Insert_Input = {
  data: Array<User_Company_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Company_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Company_Avg_Fields = {
  __typename?: 'user_company_avg_fields';
  company_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_company" */
export type User_Company_Avg_Order_By = {
  company_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_company". All fields are combined with a logical 'AND'. */
export type User_Company_Bool_Exp = {
  _and?: InputMaybe<Array<User_Company_Bool_Exp>>;
  _not?: InputMaybe<User_Company_Bool_Exp>;
  _or?: InputMaybe<Array<User_Company_Bool_Exp>>;
  company?: InputMaybe<Company_Bool_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  is_owner?: InputMaybe<Boolean_Comparison_Exp>;
  is_staff?: InputMaybe<Boolean_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_company" */
export enum User_Company_Constraint {
  /** unique or primary key constraint on columns "user_id", "company_id" */
  UserCompanyPkey = 'user_company_pkey'
}

/** input type for incrementing numeric columns in table "user_company" */
export type User_Company_Inc_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_company" */
export type User_Company_Insert_Input = {
  company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  company_id?: InputMaybe<Scalars['Int']>;
  is_owner?: InputMaybe<Scalars['Boolean']>;
  is_staff?: InputMaybe<Scalars['Boolean']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Company_Max_Fields = {
  __typename?: 'user_company_max_fields';
  company_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_company" */
export type User_Company_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Company_Min_Fields = {
  __typename?: 'user_company_min_fields';
  company_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_company" */
export type User_Company_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_company" */
export type User_Company_Mutation_Response = {
  __typename?: 'user_company_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Company>;
};

/** on_conflict condition type for table "user_company" */
export type User_Company_On_Conflict = {
  constraint: User_Company_Constraint;
  update_columns?: Array<User_Company_Update_Column>;
  where?: InputMaybe<User_Company_Bool_Exp>;
};

/** Ordering options when selecting data from "user_company". */
export type User_Company_Order_By = {
  company?: InputMaybe<Company_Order_By>;
  company_id?: InputMaybe<Order_By>;
  is_owner?: InputMaybe<Order_By>;
  is_staff?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_company */
export type User_Company_Pk_Columns_Input = {
  company_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};

/** select columns of table "user_company" */
export enum User_Company_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  IsOwner = 'is_owner',
  /** column name */
  IsStaff = 'is_staff',
  /** column name */
  UserId = 'user_id'
}

/** select "user_company_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_company" */
export enum User_Company_Select_Column_User_Company_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsOwner = 'is_owner',
  /** column name */
  IsStaff = 'is_staff'
}

/** select "user_company_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_company" */
export enum User_Company_Select_Column_User_Company_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsOwner = 'is_owner',
  /** column name */
  IsStaff = 'is_staff'
}

/** input type for updating data in table "user_company" */
export type User_Company_Set_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  is_owner?: InputMaybe<Scalars['Boolean']>;
  is_staff?: InputMaybe<Scalars['Boolean']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Company_Stddev_Fields = {
  __typename?: 'user_company_stddev_fields';
  company_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_company" */
export type User_Company_Stddev_Order_By = {
  company_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Company_Stddev_Pop_Fields = {
  __typename?: 'user_company_stddev_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_company" */
export type User_Company_Stddev_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Company_Stddev_Samp_Fields = {
  __typename?: 'user_company_stddev_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_company" */
export type User_Company_Stddev_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_company" */
export type User_Company_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Company_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Company_Stream_Cursor_Value_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  is_owner?: InputMaybe<Scalars['Boolean']>;
  is_staff?: InputMaybe<Scalars['Boolean']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type User_Company_Sum_Fields = {
  __typename?: 'user_company_sum_fields';
  company_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_company" */
export type User_Company_Sum_Order_By = {
  company_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_company" */
export enum User_Company_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  IsOwner = 'is_owner',
  /** column name */
  IsStaff = 'is_staff',
  /** column name */
  UserId = 'user_id'
}

export type User_Company_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Company_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Company_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Company_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Company_Var_Pop_Fields = {
  __typename?: 'user_company_var_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_company" */
export type User_Company_Var_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Company_Var_Samp_Fields = {
  __typename?: 'user_company_var_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_company" */
export type User_Company_Var_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Company_Variance_Fields = {
  __typename?: 'user_company_variance_fields';
  company_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_company" */
export type User_Company_Variance_Order_By = {
  company_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_extended_info" */
export type User_Extended_Info = {
  __typename?: 'user_extended_info';
  created_at: Scalars['timestamp'];
  id: Scalars['uuid'];
  is_active: Scalars['Boolean'];
  is_superuser: Scalars['Boolean'];
  is_verified: Scalars['Boolean'];
  locale?: Maybe<Scalars['String']>;
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "user_extended_info" */
export type User_Extended_Info_Aggregate = {
  __typename?: 'user_extended_info_aggregate';
  aggregate?: Maybe<User_Extended_Info_Aggregate_Fields>;
  nodes: Array<User_Extended_Info>;
};

/** aggregate fields of "user_extended_info" */
export type User_Extended_Info_Aggregate_Fields = {
  __typename?: 'user_extended_info_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Extended_Info_Max_Fields>;
  min?: Maybe<User_Extended_Info_Min_Fields>;
};


/** aggregate fields of "user_extended_info" */
export type User_Extended_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Extended_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "user_extended_info". All fields are combined with a logical 'AND'. */
export type User_Extended_Info_Bool_Exp = {
  _and?: InputMaybe<Array<User_Extended_Info_Bool_Exp>>;
  _not?: InputMaybe<User_Extended_Info_Bool_Exp>;
  _or?: InputMaybe<Array<User_Extended_Info_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  is_superuser?: InputMaybe<Boolean_Comparison_Exp>;
  is_verified?: InputMaybe<Boolean_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "user_extended_info" */
export enum User_Extended_Info_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserExtendedInfoPkey = 'user_extended_info_pkey'
}

/** input type for inserting data into table "user_extended_info" */
export type User_Extended_Info_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  is_superuser?: InputMaybe<Scalars['Boolean']>;
  is_verified?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Extended_Info_Max_Fields = {
  __typename?: 'user_extended_info_max_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  locale?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type User_Extended_Info_Min_Fields = {
  __typename?: 'user_extended_info_min_fields';
  created_at?: Maybe<Scalars['timestamp']>;
  id?: Maybe<Scalars['uuid']>;
  locale?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "user_extended_info" */
export type User_Extended_Info_Mutation_Response = {
  __typename?: 'user_extended_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Extended_Info>;
};

/** input type for inserting object relation for remote table "user_extended_info" */
export type User_Extended_Info_Obj_Rel_Insert_Input = {
  data: User_Extended_Info_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Extended_Info_On_Conflict>;
};

/** on_conflict condition type for table "user_extended_info" */
export type User_Extended_Info_On_Conflict = {
  constraint: User_Extended_Info_Constraint;
  update_columns?: Array<User_Extended_Info_Update_Column>;
  where?: InputMaybe<User_Extended_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "user_extended_info". */
export type User_Extended_Info_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  is_superuser?: InputMaybe<Order_By>;
  is_verified?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: user_extended_info */
export type User_Extended_Info_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_extended_info" */
export enum User_Extended_Info_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  IsSuperuser = 'is_superuser',
  /** column name */
  IsVerified = 'is_verified',
  /** column name */
  Locale = 'locale'
}

/** input type for updating data in table "user_extended_info" */
export type User_Extended_Info_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  is_superuser?: InputMaybe<Scalars['Boolean']>;
  is_verified?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "user_extended_info" */
export type User_Extended_Info_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Extended_Info_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Extended_Info_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  is_superuser?: InputMaybe<Scalars['Boolean']>;
  is_verified?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** update columns of table "user_extended_info" */
export enum User_Extended_Info_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  IsSuperuser = 'is_superuser',
  /** column name */
  IsVerified = 'is_verified',
  /** column name */
  Locale = 'locale'
}

export type User_Extended_Info_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Extended_Info_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Extended_Info_Bool_Exp;
};

/** columns and relationships of "user_profile" */
export type User_Profile = {
  __typename?: 'user_profile';
  about: Scalars['String'];
  first_name: Scalars['String'];
  image: Scalars['String'];
  is_visible: Scalars['Boolean'];
  last_name: Scalars['String'];
  links: Scalars['json'];
  /** An object relationship */
  space: Space;
  space_id: Scalars['Int'];
  tags: Scalars['json'];
  telegram_username: Scalars['String'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "user_profile" */
export type User_ProfileLinksArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "user_profile" */
export type User_ProfileTagsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "user_profile" */
export type User_Profile_Aggregate = {
  __typename?: 'user_profile_aggregate';
  aggregate?: Maybe<User_Profile_Aggregate_Fields>;
  nodes: Array<User_Profile>;
};

export type User_Profile_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<User_Profile_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<User_Profile_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<User_Profile_Aggregate_Bool_Exp_Count>;
};

export type User_Profile_Aggregate_Bool_Exp_Bool_And = {
  arguments: User_Profile_Select_Column_User_Profile_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Profile_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Profile_Aggregate_Bool_Exp_Bool_Or = {
  arguments: User_Profile_Select_Column_User_Profile_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Profile_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Profile_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Profile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Profile_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_profile" */
export type User_Profile_Aggregate_Fields = {
  __typename?: 'user_profile_aggregate_fields';
  avg?: Maybe<User_Profile_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Profile_Max_Fields>;
  min?: Maybe<User_Profile_Min_Fields>;
  stddev?: Maybe<User_Profile_Stddev_Fields>;
  stddev_pop?: Maybe<User_Profile_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Profile_Stddev_Samp_Fields>;
  sum?: Maybe<User_Profile_Sum_Fields>;
  var_pop?: Maybe<User_Profile_Var_Pop_Fields>;
  var_samp?: Maybe<User_Profile_Var_Samp_Fields>;
  variance?: Maybe<User_Profile_Variance_Fields>;
};


/** aggregate fields of "user_profile" */
export type User_Profile_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Profile_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_profile" */
export type User_Profile_Aggregate_Order_By = {
  avg?: InputMaybe<User_Profile_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Profile_Max_Order_By>;
  min?: InputMaybe<User_Profile_Min_Order_By>;
  stddev?: InputMaybe<User_Profile_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Profile_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Profile_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Profile_Sum_Order_By>;
  var_pop?: InputMaybe<User_Profile_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Profile_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Profile_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_profile" */
export type User_Profile_Arr_Rel_Insert_Input = {
  data: Array<User_Profile_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Profile_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Profile_Avg_Fields = {
  __typename?: 'user_profile_avg_fields';
  space_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_profile" */
export type User_Profile_Avg_Order_By = {
  space_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_profile". All fields are combined with a logical 'AND'. */
export type User_Profile_Bool_Exp = {
  _and?: InputMaybe<Array<User_Profile_Bool_Exp>>;
  _not?: InputMaybe<User_Profile_Bool_Exp>;
  _or?: InputMaybe<Array<User_Profile_Bool_Exp>>;
  about?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  is_visible?: InputMaybe<Boolean_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  links?: InputMaybe<Json_Comparison_Exp>;
  space?: InputMaybe<Space_Bool_Exp>;
  space_id?: InputMaybe<Int_Comparison_Exp>;
  tags?: InputMaybe<Json_Comparison_Exp>;
  telegram_username?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_profile" */
export enum User_Profile_Constraint {
  /** unique or primary key constraint on columns "user_id", "space_id" */
  UserProfilePkey = 'user_profile_pkey'
}

/** input type for incrementing numeric columns in table "user_profile" */
export type User_Profile_Inc_Input = {
  space_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_profile" */
export type User_Profile_Insert_Input = {
  about?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  is_visible?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Scalars['json']>;
  space?: InputMaybe<Space_Obj_Rel_Insert_Input>;
  space_id?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Scalars['json']>;
  telegram_username?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Profile_Max_Fields = {
  __typename?: 'user_profile_max_fields';
  about?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  space_id?: Maybe<Scalars['Int']>;
  telegram_username?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_profile" */
export type User_Profile_Max_Order_By = {
  about?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
  telegram_username?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Profile_Min_Fields = {
  __typename?: 'user_profile_min_fields';
  about?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  space_id?: Maybe<Scalars['Int']>;
  telegram_username?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_profile" */
export type User_Profile_Min_Order_By = {
  about?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  space_id?: InputMaybe<Order_By>;
  telegram_username?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_profile" */
export type User_Profile_Mutation_Response = {
  __typename?: 'user_profile_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Profile>;
};

/** on_conflict condition type for table "user_profile" */
export type User_Profile_On_Conflict = {
  constraint: User_Profile_Constraint;
  update_columns?: Array<User_Profile_Update_Column>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};

/** Ordering options when selecting data from "user_profile". */
export type User_Profile_Order_By = {
  about?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  is_visible?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  links?: InputMaybe<Order_By>;
  space?: InputMaybe<Space_Order_By>;
  space_id?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  telegram_username?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_profile */
export type User_Profile_Pk_Columns_Input = {
  space_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};

/** select columns of table "user_profile" */
export enum User_Profile_Select_Column {
  /** column name */
  About = 'about',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Image = 'image',
  /** column name */
  IsVisible = 'is_visible',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Links = 'links',
  /** column name */
  SpaceId = 'space_id',
  /** column name */
  Tags = 'tags',
  /** column name */
  TelegramUsername = 'telegram_username',
  /** column name */
  UserId = 'user_id'
}

/** select "user_profile_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_profile" */
export enum User_Profile_Select_Column_User_Profile_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsVisible = 'is_visible'
}

/** select "user_profile_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_profile" */
export enum User_Profile_Select_Column_User_Profile_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsVisible = 'is_visible'
}

/** input type for updating data in table "user_profile" */
export type User_Profile_Set_Input = {
  about?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  is_visible?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Scalars['json']>;
  space_id?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Scalars['json']>;
  telegram_username?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Profile_Stddev_Fields = {
  __typename?: 'user_profile_stddev_fields';
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_profile" */
export type User_Profile_Stddev_Order_By = {
  space_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Profile_Stddev_Pop_Fields = {
  __typename?: 'user_profile_stddev_pop_fields';
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_profile" */
export type User_Profile_Stddev_Pop_Order_By = {
  space_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Profile_Stddev_Samp_Fields = {
  __typename?: 'user_profile_stddev_samp_fields';
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_profile" */
export type User_Profile_Stddev_Samp_Order_By = {
  space_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_profile" */
export type User_Profile_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Profile_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Profile_Stream_Cursor_Value_Input = {
  about?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  is_visible?: InputMaybe<Scalars['Boolean']>;
  last_name?: InputMaybe<Scalars['String']>;
  links?: InputMaybe<Scalars['json']>;
  space_id?: InputMaybe<Scalars['Int']>;
  tags?: InputMaybe<Scalars['json']>;
  telegram_username?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type User_Profile_Sum_Fields = {
  __typename?: 'user_profile_sum_fields';
  space_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_profile" */
export type User_Profile_Sum_Order_By = {
  space_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_profile" */
export enum User_Profile_Update_Column {
  /** column name */
  About = 'about',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Image = 'image',
  /** column name */
  IsVisible = 'is_visible',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Links = 'links',
  /** column name */
  SpaceId = 'space_id',
  /** column name */
  Tags = 'tags',
  /** column name */
  TelegramUsername = 'telegram_username',
  /** column name */
  UserId = 'user_id'
}

export type User_Profile_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Profile_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Profile_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Profile_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Profile_Var_Pop_Fields = {
  __typename?: 'user_profile_var_pop_fields';
  space_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_profile" */
export type User_Profile_Var_Pop_Order_By = {
  space_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Profile_Var_Samp_Fields = {
  __typename?: 'user_profile_var_samp_fields';
  space_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_profile" */
export type User_Profile_Var_Samp_Order_By = {
  space_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Profile_Variance_Fields = {
  __typename?: 'user_profile_variance_fields';
  space_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_profile" */
export type User_Profile_Variance_Order_By = {
  space_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_space" */
export type User_Space = {
  __typename?: 'user_space';
  is_admin: Scalars['Boolean'];
  is_owner: Scalars['Boolean'];
  is_staff: Scalars['Boolean'];
  /** An object relationship */
  space: Space;
  space_id: Scalars['Int'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_space" */
export type User_Space_Aggregate = {
  __typename?: 'user_space_aggregate';
  aggregate?: Maybe<User_Space_Aggregate_Fields>;
  nodes: Array<User_Space>;
};

export type User_Space_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<User_Space_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<User_Space_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<User_Space_Aggregate_Bool_Exp_Count>;
};

export type User_Space_Aggregate_Bool_Exp_Bool_And = {
  arguments: User_Space_Select_Column_User_Space_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Space_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Space_Aggregate_Bool_Exp_Bool_Or = {
  arguments: User_Space_Select_Column_User_Space_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Space_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Space_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Space_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<User_Space_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_space" */
export type User_Space_Aggregate_Fields = {
  __typename?: 'user_space_aggregate_fields';
  avg?: Maybe<User_Space_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Space_Max_Fields>;
  min?: Maybe<User_Space_Min_Fields>;
  stddev?: Maybe<User_Space_Stddev_Fields>;
  stddev_pop?: Maybe<User_Space_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Space_Stddev_Samp_Fields>;
  sum?: Maybe<User_Space_Sum_Fields>;
  var_pop?: Maybe<User_Space_Var_Pop_Fields>;
  var_samp?: Maybe<User_Space_Var_Samp_Fields>;
  variance?: Maybe<User_Space_Variance_Fields>;
};


/** aggregate fields of "user_space" */
export type User_Space_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Space_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_space" */
export type User_Space_Aggregate_Order_By = {
  avg?: InputMaybe<User_Space_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Space_Max_Order_By>;
  min?: InputMaybe<User_Space_Min_Order_By>;
  stddev?: InputMaybe<User_Space_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Space_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Space_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Space_Sum_Order_By>;
  var_pop?: InputMaybe<User_Space_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Space_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Space_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_space" */
export type User_Space_Arr_Rel_Insert_Input = {
  data: Array<User_Space_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Space_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Space_Avg_Fields = {
  __typename?: 'user_space_avg_fields';
  space_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_space" */
export type User_Space_Avg_Order_By = {
  space_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_space". All fields are combined with a logical 'AND'. */
export type User_Space_Bool_Exp = {
  _and?: InputMaybe<Array<User_Space_Bool_Exp>>;
  _not?: InputMaybe<User_Space_Bool_Exp>;
  _or?: InputMaybe<Array<User_Space_Bool_Exp>>;
  is_admin?: InputMaybe<Boolean_Comparison_Exp>;
  is_owner?: InputMaybe<Boolean_Comparison_Exp>;
  is_staff?: InputMaybe<Boolean_Comparison_Exp>;
  space?: InputMaybe<Space_Bool_Exp>;
  space_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_space" */
export enum User_Space_Constraint {
  /** unique or primary key constraint on columns "user_id", "space_id" */
  UserSpacePkey = 'user_space_pkey'
}

/** input type for incrementing numeric columns in table "user_space" */
export type User_Space_Inc_Input = {
  space_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_space" */
export type User_Space_Insert_Input = {
  is_admin?: InputMaybe<Scalars['Boolean']>;
  is_owner?: InputMaybe<Scalars['Boolean']>;
  is_staff?: InputMaybe<Scalars['Boolean']>;
  space?: InputMaybe<Space_Obj_Rel_Insert_Input>;
  space_id?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Space_Max_Fields = {
  __typename?: 'user_space_max_fields';
  space_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_space" */
export type User_Space_Max_Order_By = {
  space_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Space_Min_Fields = {
  __typename?: 'user_space_min_fields';
  space_id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_space" */
export type User_Space_Min_Order_By = {
  space_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_space" */
export type User_Space_Mutation_Response = {
  __typename?: 'user_space_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Space>;
};

/** on_conflict condition type for table "user_space" */
export type User_Space_On_Conflict = {
  constraint: User_Space_Constraint;
  update_columns?: Array<User_Space_Update_Column>;
  where?: InputMaybe<User_Space_Bool_Exp>;
};

/** Ordering options when selecting data from "user_space". */
export type User_Space_Order_By = {
  is_admin?: InputMaybe<Order_By>;
  is_owner?: InputMaybe<Order_By>;
  is_staff?: InputMaybe<Order_By>;
  space?: InputMaybe<Space_Order_By>;
  space_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_space */
export type User_Space_Pk_Columns_Input = {
  space_id: Scalars['Int'];
  user_id: Scalars['uuid'];
};

/** select columns of table "user_space" */
export enum User_Space_Select_Column {
  /** column name */
  IsAdmin = 'is_admin',
  /** column name */
  IsOwner = 'is_owner',
  /** column name */
  IsStaff = 'is_staff',
  /** column name */
  SpaceId = 'space_id',
  /** column name */
  UserId = 'user_id'
}

/** select "user_space_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_space" */
export enum User_Space_Select_Column_User_Space_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsAdmin = 'is_admin',
  /** column name */
  IsOwner = 'is_owner',
  /** column name */
  IsStaff = 'is_staff'
}

/** select "user_space_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_space" */
export enum User_Space_Select_Column_User_Space_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsAdmin = 'is_admin',
  /** column name */
  IsOwner = 'is_owner',
  /** column name */
  IsStaff = 'is_staff'
}

/** input type for updating data in table "user_space" */
export type User_Space_Set_Input = {
  is_admin?: InputMaybe<Scalars['Boolean']>;
  is_owner?: InputMaybe<Scalars['Boolean']>;
  is_staff?: InputMaybe<Scalars['Boolean']>;
  space_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Space_Stddev_Fields = {
  __typename?: 'user_space_stddev_fields';
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_space" */
export type User_Space_Stddev_Order_By = {
  space_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Space_Stddev_Pop_Fields = {
  __typename?: 'user_space_stddev_pop_fields';
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_space" */
export type User_Space_Stddev_Pop_Order_By = {
  space_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Space_Stddev_Samp_Fields = {
  __typename?: 'user_space_stddev_samp_fields';
  space_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_space" */
export type User_Space_Stddev_Samp_Order_By = {
  space_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_space" */
export type User_Space_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Space_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Space_Stream_Cursor_Value_Input = {
  is_admin?: InputMaybe<Scalars['Boolean']>;
  is_owner?: InputMaybe<Scalars['Boolean']>;
  is_staff?: InputMaybe<Scalars['Boolean']>;
  space_id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate sum on columns */
export type User_Space_Sum_Fields = {
  __typename?: 'user_space_sum_fields';
  space_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_space" */
export type User_Space_Sum_Order_By = {
  space_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_space" */
export enum User_Space_Update_Column {
  /** column name */
  IsAdmin = 'is_admin',
  /** column name */
  IsOwner = 'is_owner',
  /** column name */
  IsStaff = 'is_staff',
  /** column name */
  SpaceId = 'space_id',
  /** column name */
  UserId = 'user_id'
}

export type User_Space_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Space_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Space_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Space_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Space_Var_Pop_Fields = {
  __typename?: 'user_space_var_pop_fields';
  space_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_space" */
export type User_Space_Var_Pop_Order_By = {
  space_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Space_Var_Samp_Fields = {
  __typename?: 'user_space_var_samp_fields';
  space_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_space" */
export type User_Space_Var_Samp_Order_By = {
  space_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Space_Variance_Fields = {
  __typename?: 'user_space_variance_fields';
  space_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_space" */
export type User_Space_Variance_Order_By = {
  space_id?: InputMaybe<Order_By>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl: Scalars['String'];
  /** An array relationship */
  companies: Array<User_Company>;
  /** An aggregate relationship */
  companies_aggregate: User_Company_Aggregate;
  createdAt: Scalars['timestamptz'];
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  /** An array relationship */
  event_participants: Array<Event_Participant>;
  /** An aggregate relationship */
  event_participants_aggregate: Event_Participant_Aggregate;
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  /** An array relationship */
  my_tinder_swipes: Array<Tinder_Swipes>;
  /** An aggregate relationship */
  my_tinder_swipes_aggregate: Tinder_Swipes_Aggregate;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  profiles: Array<User_Profile>;
  /** An aggregate relationship */
  profiles_aggregate: User_Profile_Aggregate;
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokens_Aggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRoles_Aggregate;
  /** An array relationship */
  securityKeys: Array<AuthUserSecurityKeys>;
  /** An aggregate relationship */
  securityKeys_aggregate: AuthUserSecurityKeys_Aggregate;
  /** An array relationship */
  spaces: Array<User_Space>;
  /** An aggregate relationship */
  spaces_aggregate: User_Space_Aggregate;
  telegramId?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  /** An array relationship */
  tinder_swipes_to_me: Array<Tinder_Swipes>;
  /** An aggregate relationship */
  tinder_swipes_to_me_aggregate: Tinder_Swipes_Aggregate;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  uploaded_to_space_documents: Array<Space_Document>;
  /** An aggregate relationship */
  uploaded_to_space_documents_aggregate: Space_Document_Aggregate;
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProviders_Aggregate;
  /** An object relationship */
  user_extended_info?: Maybe<User_Extended_Info>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersCompaniesArgs = {
  distinct_on?: InputMaybe<Array<User_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Company_Order_By>>;
  where?: InputMaybe<User_Company_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersCompanies_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Company_Order_By>>;
  where?: InputMaybe<User_Company_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersEvent_ParticipantsArgs = {
  distinct_on?: InputMaybe<Array<Event_Participant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Participant_Order_By>>;
  where?: InputMaybe<Event_Participant_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersEvent_Participants_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Event_Participant_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Event_Participant_Order_By>>;
  where?: InputMaybe<Event_Participant_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMy_Tinder_SwipesArgs = {
  distinct_on?: InputMaybe<Array<Tinder_Swipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tinder_Swipes_Order_By>>;
  where?: InputMaybe<Tinder_Swipes_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMy_Tinder_Swipes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tinder_Swipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tinder_Swipes_Order_By>>;
  where?: InputMaybe<Tinder_Swipes_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersProfilesArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Profile_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Profile_Order_By>>;
  where?: InputMaybe<User_Profile_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokens_Order_By>>;
  where?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRoles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRoles_Order_By>>;
  where?: InputMaybe<AuthUserRoles_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeysArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSecurityKeys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserSecurityKeys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserSecurityKeys_Order_By>>;
  where?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSpacesArgs = {
  distinct_on?: InputMaybe<Array<User_Space_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Space_Order_By>>;
  where?: InputMaybe<User_Space_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersSpaces_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Space_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Space_Order_By>>;
  where?: InputMaybe<User_Space_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersTinder_Swipes_To_MeArgs = {
  distinct_on?: InputMaybe<Array<Tinder_Swipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tinder_Swipes_Order_By>>;
  where?: InputMaybe<Tinder_Swipes_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersTinder_Swipes_To_Me_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tinder_Swipes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tinder_Swipes_Order_By>>;
  where?: InputMaybe<Tinder_Swipes_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUploaded_To_Space_DocumentsArgs = {
  distinct_on?: InputMaybe<Array<Space_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Space_Document_Order_By>>;
  where?: InputMaybe<Space_Document_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUploaded_To_Space_Documents_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Space_Document_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Space_Document_Order_By>>;
  where?: InputMaybe<Space_Document_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProviders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProviders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProviders_Order_By>>;
  where?: InputMaybe<AuthUserProviders_Bool_Exp>;
};

/** aggregated selection of "auth.users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Users_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Bool_And = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "auth.users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "auth.users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Users_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  activeMfaType?: InputMaybe<String_Comparison_Exp>;
  avatarUrl?: InputMaybe<String_Comparison_Exp>;
  companies?: InputMaybe<User_Company_Bool_Exp>;
  companies_aggregate?: InputMaybe<User_Company_Aggregate_Bool_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  currentChallenge?: InputMaybe<String_Comparison_Exp>;
  defaultRole?: InputMaybe<String_Comparison_Exp>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Bool_Exp>;
  disabled?: InputMaybe<Boolean_Comparison_Exp>;
  displayName?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<Citext_Comparison_Exp>;
  emailVerified?: InputMaybe<Boolean_Comparison_Exp>;
  event_participants?: InputMaybe<Event_Participant_Bool_Exp>;
  event_participants_aggregate?: InputMaybe<Event_Participant_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isAnonymous?: InputMaybe<Boolean_Comparison_Exp>;
  lastSeen?: InputMaybe<Timestamptz_Comparison_Exp>;
  locale?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  my_tinder_swipes?: InputMaybe<Tinder_Swipes_Bool_Exp>;
  my_tinder_swipes_aggregate?: InputMaybe<Tinder_Swipes_Aggregate_Bool_Exp>;
  newEmail?: InputMaybe<Citext_Comparison_Exp>;
  otpHash?: InputMaybe<String_Comparison_Exp>;
  otpHashExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  otpMethodLastUsed?: InputMaybe<String_Comparison_Exp>;
  passwordHash?: InputMaybe<String_Comparison_Exp>;
  phoneNumber?: InputMaybe<String_Comparison_Exp>;
  phoneNumberVerified?: InputMaybe<Boolean_Comparison_Exp>;
  profiles?: InputMaybe<User_Profile_Bool_Exp>;
  profiles_aggregate?: InputMaybe<User_Profile_Aggregate_Bool_Exp>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Bool_Exp>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Bool_Exp>;
  roles?: InputMaybe<AuthUserRoles_Bool_Exp>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Bool_Exp>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Bool_Exp>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Bool_Exp>;
  spaces?: InputMaybe<User_Space_Bool_Exp>;
  spaces_aggregate?: InputMaybe<User_Space_Aggregate_Bool_Exp>;
  telegramId?: InputMaybe<String_Comparison_Exp>;
  ticket?: InputMaybe<String_Comparison_Exp>;
  ticketExpiresAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  tinder_swipes_to_me?: InputMaybe<Tinder_Swipes_Bool_Exp>;
  tinder_swipes_to_me_aggregate?: InputMaybe<Tinder_Swipes_Aggregate_Bool_Exp>;
  totpSecret?: InputMaybe<String_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploaded_to_space_documents?: InputMaybe<Space_Document_Bool_Exp>;
  uploaded_to_space_documents_aggregate?: InputMaybe<Space_Document_Aggregate_Bool_Exp>;
  userProviders?: InputMaybe<AuthUserProviders_Bool_Exp>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Bool_Exp>;
  user_extended_info?: InputMaybe<User_Extended_Info_Bool_Exp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "telegram_id" */
  UsersTelegramIdKey = 'users_telegram_id_key'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Users_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Users_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Users_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type Users_Insert_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  companies?: InputMaybe<User_Company_Arr_Rel_Insert_Input>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Obj_Rel_Insert_Input>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  event_participants?: InputMaybe<Event_Participant_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  my_tinder_swipes?: InputMaybe<Tinder_Swipes_Arr_Rel_Insert_Input>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  profiles?: InputMaybe<User_Profile_Arr_Rel_Insert_Input>;
  refreshTokens?: InputMaybe<AuthRefreshTokens_Arr_Rel_Insert_Input>;
  roles?: InputMaybe<AuthUserRoles_Arr_Rel_Insert_Input>;
  securityKeys?: InputMaybe<AuthUserSecurityKeys_Arr_Rel_Insert_Input>;
  spaces?: InputMaybe<User_Space_Arr_Rel_Insert_Input>;
  telegramId?: InputMaybe<Scalars['String']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  tinder_swipes_to_me?: InputMaybe<Tinder_Swipes_Arr_Rel_Insert_Input>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploaded_to_space_documents?: InputMaybe<Space_Document_Arr_Rel_Insert_Input>;
  userProviders?: InputMaybe<AuthUserProviders_Arr_Rel_Insert_Input>;
  user_extended_info?: InputMaybe<User_Extended_Info_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  telegramId?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type Users_Max_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  telegramId?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  telegramId?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type Users_Min_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  telegramId?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "auth.users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "auth.users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "auth.users". */
export type Users_Order_By = {
  activeMfaType?: InputMaybe<Order_By>;
  avatarUrl?: InputMaybe<Order_By>;
  companies_aggregate?: InputMaybe<User_Company_Aggregate_Order_By>;
  createdAt?: InputMaybe<Order_By>;
  currentChallenge?: InputMaybe<Order_By>;
  defaultRole?: InputMaybe<Order_By>;
  defaultRoleByRole?: InputMaybe<AuthRoles_Order_By>;
  disabled?: InputMaybe<Order_By>;
  displayName?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  emailVerified?: InputMaybe<Order_By>;
  event_participants_aggregate?: InputMaybe<Event_Participant_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  isAnonymous?: InputMaybe<Order_By>;
  lastSeen?: InputMaybe<Order_By>;
  locale?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  my_tinder_swipes_aggregate?: InputMaybe<Tinder_Swipes_Aggregate_Order_By>;
  newEmail?: InputMaybe<Order_By>;
  otpHash?: InputMaybe<Order_By>;
  otpHashExpiresAt?: InputMaybe<Order_By>;
  otpMethodLastUsed?: InputMaybe<Order_By>;
  passwordHash?: InputMaybe<Order_By>;
  phoneNumber?: InputMaybe<Order_By>;
  phoneNumberVerified?: InputMaybe<Order_By>;
  profiles_aggregate?: InputMaybe<User_Profile_Aggregate_Order_By>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokens_Aggregate_Order_By>;
  roles_aggregate?: InputMaybe<AuthUserRoles_Aggregate_Order_By>;
  securityKeys_aggregate?: InputMaybe<AuthUserSecurityKeys_Aggregate_Order_By>;
  spaces_aggregate?: InputMaybe<User_Space_Aggregate_Order_By>;
  telegramId?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticketExpiresAt?: InputMaybe<Order_By>;
  tinder_swipes_to_me_aggregate?: InputMaybe<Tinder_Swipes_Aggregate_Order_By>;
  totpSecret?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploaded_to_space_documents_aggregate?: InputMaybe<Space_Document_Aggregate_Order_By>;
  userProviders_aggregate?: InputMaybe<AuthUserProviders_Aggregate_Order_By>;
  user_extended_info?: InputMaybe<User_Extended_Info_Order_By>;
};

/** primary key columns input for table: auth.users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Users_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum Users_Select_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  TelegramId = 'telegramId',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** select "users_aggregate_bool_exp_bool_and_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** select "users_aggregate_bool_exp_bool_or_arguments_columns" columns of table "auth.users" */
export enum Users_Select_Column_Users_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Disabled = 'disabled',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified'
}

/** input type for updating data in table "auth.users" */
export type Users_Set_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  telegramId?: InputMaybe<Scalars['String']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  telegramId?: InputMaybe<Scalars['String']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum Users_Update_Column {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  TelegramId = 'telegramId',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type Users_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Users_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Users_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Users_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Users_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Users_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "storage.virus" */
export type Virus = {
  __typename?: 'virus';
  createdAt: Scalars['timestamptz'];
  /** An object relationship */
  file: Files;
  fileId: Scalars['uuid'];
  filename: Scalars['String'];
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  userSession: Scalars['jsonb'];
  virus: Scalars['String'];
};


/** columns and relationships of "storage.virus" */
export type VirusUserSessionArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "storage.virus" */
export type Virus_Aggregate = {
  __typename?: 'virus_aggregate';
  aggregate?: Maybe<Virus_Aggregate_Fields>;
  nodes: Array<Virus>;
};

/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_Fields = {
  __typename?: 'virus_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Virus_Max_Fields>;
  min?: Maybe<Virus_Min_Fields>;
};


/** aggregate fields of "storage.virus" */
export type Virus_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Virus_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Virus_Append_Input = {
  userSession?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "storage.virus". All fields are combined with a logical 'AND'. */
export type Virus_Bool_Exp = {
  _and?: InputMaybe<Array<Virus_Bool_Exp>>;
  _not?: InputMaybe<Virus_Bool_Exp>;
  _or?: InputMaybe<Array<Virus_Bool_Exp>>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  file?: InputMaybe<Files_Bool_Exp>;
  fileId?: InputMaybe<Uuid_Comparison_Exp>;
  filename?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  userSession?: InputMaybe<Jsonb_Comparison_Exp>;
  virus?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.virus" */
export enum Virus_Constraint {
  /** unique or primary key constraint on columns "id" */
  VirusPkey = 'virus_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Virus_Delete_At_Path_Input = {
  userSession?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Virus_Delete_Elem_Input = {
  userSession?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Virus_Delete_Key_Input = {
  userSession?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "storage.virus" */
export type Virus_Insert_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  file?: InputMaybe<Files_Obj_Rel_Insert_Input>;
  fileId?: InputMaybe<Scalars['uuid']>;
  filename?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userSession?: InputMaybe<Scalars['jsonb']>;
  virus?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Virus_Max_Fields = {
  __typename?: 'virus_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  fileId?: Maybe<Scalars['uuid']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  virus?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Virus_Min_Fields = {
  __typename?: 'virus_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  fileId?: Maybe<Scalars['uuid']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  virus?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "storage.virus" */
export type Virus_Mutation_Response = {
  __typename?: 'virus_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Virus>;
};

/** on_conflict condition type for table "storage.virus" */
export type Virus_On_Conflict = {
  constraint: Virus_Constraint;
  update_columns?: Array<Virus_Update_Column>;
  where?: InputMaybe<Virus_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.virus". */
export type Virus_Order_By = {
  createdAt?: InputMaybe<Order_By>;
  file?: InputMaybe<Files_Order_By>;
  fileId?: InputMaybe<Order_By>;
  filename?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  userSession?: InputMaybe<Order_By>;
  virus?: InputMaybe<Order_By>;
};

/** primary key columns input for table: storage.virus */
export type Virus_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Virus_Prepend_Input = {
  userSession?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "storage.virus" */
export enum Virus_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserSession = 'userSession',
  /** column name */
  Virus = 'virus'
}

/** input type for updating data in table "storage.virus" */
export type Virus_Set_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fileId?: InputMaybe<Scalars['uuid']>;
  filename?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userSession?: InputMaybe<Scalars['jsonb']>;
  virus?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "virus" */
export type Virus_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Virus_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Virus_Stream_Cursor_Value_Input = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  fileId?: InputMaybe<Scalars['uuid']>;
  filename?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userSession?: InputMaybe<Scalars['jsonb']>;
  virus?: InputMaybe<Scalars['String']>;
};

/** update columns of table "storage.virus" */
export enum Virus_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  FileId = 'fileId',
  /** column name */
  Filename = 'filename',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserSession = 'userSession',
  /** column name */
  Virus = 'virus'
}

export type Virus_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Virus_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Virus_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Virus_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Virus_Delete_Key_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Virus_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Virus_Set_Input>;
  /** filter the rows which have to be updated */
  where: Virus_Bool_Exp;
};

/** columns and relationships of "webhook_logs" */
export type Webhook_Logs = {
  __typename?: 'webhook_logs';
  error: Scalars['String'];
  id: Scalars['bigint'];
  params: Scalars['String'];
  response_body: Scalars['String'];
  status: Scalars['String'];
  url: Scalars['String'];
};

/** aggregated selection of "webhook_logs" */
export type Webhook_Logs_Aggregate = {
  __typename?: 'webhook_logs_aggregate';
  aggregate?: Maybe<Webhook_Logs_Aggregate_Fields>;
  nodes: Array<Webhook_Logs>;
};

/** aggregate fields of "webhook_logs" */
export type Webhook_Logs_Aggregate_Fields = {
  __typename?: 'webhook_logs_aggregate_fields';
  avg?: Maybe<Webhook_Logs_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Webhook_Logs_Max_Fields>;
  min?: Maybe<Webhook_Logs_Min_Fields>;
  stddev?: Maybe<Webhook_Logs_Stddev_Fields>;
  stddev_pop?: Maybe<Webhook_Logs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Webhook_Logs_Stddev_Samp_Fields>;
  sum?: Maybe<Webhook_Logs_Sum_Fields>;
  var_pop?: Maybe<Webhook_Logs_Var_Pop_Fields>;
  var_samp?: Maybe<Webhook_Logs_Var_Samp_Fields>;
  variance?: Maybe<Webhook_Logs_Variance_Fields>;
};


/** aggregate fields of "webhook_logs" */
export type Webhook_Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Webhook_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Webhook_Logs_Avg_Fields = {
  __typename?: 'webhook_logs_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "webhook_logs". All fields are combined with a logical 'AND'. */
export type Webhook_Logs_Bool_Exp = {
  _and?: InputMaybe<Array<Webhook_Logs_Bool_Exp>>;
  _not?: InputMaybe<Webhook_Logs_Bool_Exp>;
  _or?: InputMaybe<Array<Webhook_Logs_Bool_Exp>>;
  error?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  params?: InputMaybe<String_Comparison_Exp>;
  response_body?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "webhook_logs" */
export enum Webhook_Logs_Constraint {
  /** unique or primary key constraint on columns "id" */
  WebhookLogsPkey = 'webhook_logs_pkey'
}

/** input type for inserting data into table "webhook_logs" */
export type Webhook_Logs_Insert_Input = {
  error?: InputMaybe<Scalars['String']>;
  params?: InputMaybe<Scalars['String']>;
  response_body?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Webhook_Logs_Max_Fields = {
  __typename?: 'webhook_logs_max_fields';
  error?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  params?: Maybe<Scalars['String']>;
  response_body?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Webhook_Logs_Min_Fields = {
  __typename?: 'webhook_logs_min_fields';
  error?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  params?: Maybe<Scalars['String']>;
  response_body?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "webhook_logs" */
export type Webhook_Logs_Mutation_Response = {
  __typename?: 'webhook_logs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Webhook_Logs>;
};

/** on_conflict condition type for table "webhook_logs" */
export type Webhook_Logs_On_Conflict = {
  constraint: Webhook_Logs_Constraint;
  update_columns?: Array<Webhook_Logs_Update_Column>;
  where?: InputMaybe<Webhook_Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "webhook_logs". */
export type Webhook_Logs_Order_By = {
  error?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
  response_body?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: webhook_logs */
export type Webhook_Logs_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "webhook_logs" */
export enum Webhook_Logs_Select_Column {
  /** column name */
  Error = 'error',
  /** column name */
  Id = 'id',
  /** column name */
  Params = 'params',
  /** column name */
  ResponseBody = 'response_body',
  /** column name */
  Status = 'status',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "webhook_logs" */
export type Webhook_Logs_Set_Input = {
  error?: InputMaybe<Scalars['String']>;
  params?: InputMaybe<Scalars['String']>;
  response_body?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Webhook_Logs_Stddev_Fields = {
  __typename?: 'webhook_logs_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Webhook_Logs_Stddev_Pop_Fields = {
  __typename?: 'webhook_logs_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Webhook_Logs_Stddev_Samp_Fields = {
  __typename?: 'webhook_logs_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "webhook_logs" */
export type Webhook_Logs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Webhook_Logs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Webhook_Logs_Stream_Cursor_Value_Input = {
  error?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  params?: InputMaybe<Scalars['String']>;
  response_body?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Webhook_Logs_Sum_Fields = {
  __typename?: 'webhook_logs_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "webhook_logs" */
export enum Webhook_Logs_Update_Column {
  /** column name */
  Error = 'error',
  /** column name */
  Params = 'params',
  /** column name */
  ResponseBody = 'response_body',
  /** column name */
  Status = 'status',
  /** column name */
  Url = 'url'
}

export type Webhook_Logs_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Webhook_Logs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Webhook_Logs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Webhook_Logs_Var_Pop_Fields = {
  __typename?: 'webhook_logs_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Webhook_Logs_Var_Samp_Fields = {
  __typename?: 'webhook_logs_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Webhook_Logs_Variance_Fields = {
  __typename?: 'webhook_logs_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type InsertProviderRequestMutationVariables = Exact<{
  providerRequest: AuthProviderRequests_Insert_Input;
}>;


export type InsertProviderRequestMutation = { __typename?: 'mutation_root', insertAuthProviderRequest?: { __typename?: 'authProviderRequests', id: any, options?: any | null } | null };

export type DeleteProviderRequestMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteProviderRequestMutation = { __typename?: 'mutation_root', deleteAuthProviderRequest?: { __typename?: 'authProviderRequests', id: any, options?: any | null } | null };

export type ProviderRequestQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ProviderRequestQuery = { __typename?: 'query_root', authProviderRequest?: { __typename?: 'authProviderRequests', id: any, options?: any | null } | null };

export type InsertRefreshTokenMutationVariables = Exact<{
  refreshToken: AuthRefreshTokens_Insert_Input;
}>;


export type InsertRefreshTokenMutation = { __typename?: 'mutation_root', insertAuthRefreshToken?: { __typename?: 'authRefreshTokens', id: any } | null };

export type DeleteRefreshTokenMutationVariables = Exact<{
  refreshTokenHash: Scalars['String'];
}>;


export type DeleteRefreshTokenMutation = { __typename?: 'mutation_root', deleteAuthRefreshTokens?: { __typename?: 'authRefreshTokens_mutation_response', affected_rows: number } | null };

export type DeleteUserRefreshTokensMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type DeleteUserRefreshTokensMutation = { __typename?: 'mutation_root', deleteAuthRefreshTokens?: { __typename?: 'authRefreshTokens_mutation_response', affected_rows: number } | null };

export type DeleteExpiredRefreshTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type DeleteExpiredRefreshTokensMutation = { __typename?: 'mutation_root', deleteAuthRefreshTokens?: { __typename?: 'authRefreshTokens_mutation_response', affected_rows: number } | null };

export type TelegramBotTokenFieldsFragment = { __typename?: 'authTelegramBotTokens', id: string, createdAt: any, name: string, token: string };

export type AuthTelegramBotTokenQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type AuthTelegramBotTokenQuery = { __typename?: 'query_root', authTelegramBotToken?: { __typename?: 'authTelegramBotTokens', id: string, createdAt: any, name: string, token: string } | null };

export type UpsertRolesMutationVariables = Exact<{
  roles: Array<AuthRoles_Insert_Input> | AuthRoles_Insert_Input;
}>;


export type UpsertRolesMutation = { __typename?: 'mutation_root', insertAuthRoles?: { __typename?: 'authRoles_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'authRoles', role: string }> } | null };

export type GetUserSecurityKeysQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserSecurityKeysQuery = { __typename?: 'query_root', authUserSecurityKeys: Array<{ __typename?: 'authUserSecurityKeys', counter: any, credentialId: string, credentialPublicKey?: any | null, transports: string, id: any, user: { __typename?: 'users', id: any } }> };

export type GetUserChallengeQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetUserChallengeQuery = { __typename?: 'query_root', user?: { __typename?: 'users', id: any, currentChallenge?: string | null } | null };

export type UpdateUserChallengeMutationVariables = Exact<{
  userId: Scalars['uuid'];
  challenge: Scalars['String'];
}>;


export type UpdateUserChallengeMutation = { __typename?: 'mutation_root', updateUser?: { __typename?: 'users', id: any } | null };

export type AddUserSecurityKeyMutationVariables = Exact<{
  userSecurityKey: AuthUserSecurityKeys_Insert_Input;
}>;


export type AddUserSecurityKeyMutation = { __typename?: 'mutation_root', insertAuthUserSecurityKey?: { __typename?: 'authUserSecurityKeys', id: any } | null };

export type UpdateUserSecurityKeyMutationVariables = Exact<{
  id: Scalars['uuid'];
  counter: Scalars['bigint'];
}>;


export type UpdateUserSecurityKeyMutation = { __typename?: 'mutation_root', updateAuthUserSecurityKey?: { __typename?: 'authUserSecurityKeys', id: any } | null };

export type AuthUserProvidersQueryVariables = Exact<{
  provider: Scalars['String'];
  providerUserId: Scalars['String'];
}>;


export type AuthUserProvidersQuery = { __typename?: 'query_root', authUserProviders: Array<{ __typename?: 'authUserProviders', id: any, user: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, telegramId?: string | null, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } }> };

export type UserProviderQueryVariables = Exact<{
  userId: Scalars['uuid'];
  providerId: Scalars['String'];
}>;


export type UserProviderQuery = { __typename?: 'query_root', authUserProviders: Array<{ __typename?: 'authUserProviders', id: any, refreshToken?: string | null }> };

export type UpdateAuthUserproviderMutationVariables = Exact<{
  id: Scalars['uuid'];
  authUserProvider: AuthUserProviders_Set_Input;
}>;


export type UpdateAuthUserproviderMutation = { __typename?: 'mutation_root', updateAuthUserProvider?: { __typename?: 'authUserProviders', id: any } | null };

export type InsertUserRolesMutationVariables = Exact<{
  userRoles: Array<AuthUserRoles_Insert_Input> | AuthUserRoles_Insert_Input;
}>;


export type InsertUserRolesMutation = { __typename?: 'mutation_root', insertAuthUserRoles?: { __typename?: 'authUserRoles_mutation_response', affected_rows: number } | null };

export type DeleteUserRolesByUserIdMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type DeleteUserRolesByUserIdMutation = { __typename?: 'mutation_root', deleteAuthUserRoles?: { __typename?: 'authUserRoles_mutation_response', affected_rows: number } | null };

export type UserFieldsFragment = { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, telegramId?: string | null, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> };

export type UserQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type UserQuery = { __typename?: 'query_root', user?: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, telegramId?: string | null, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } | null };

export type UsersQueryVariables = Exact<{
  where: Users_Bool_Exp;
}>;


export type UsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, telegramId?: string | null, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> };

export type GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutationVariables = Exact<{
  refreshTokenHash: Scalars['String'];
  expiresAt: Scalars['timestamptz'];
}>;


export type GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutation = { __typename?: 'mutation_root', updateAuthRefreshTokens?: { __typename?: 'authRefreshTokens_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'authRefreshTokens', id: any }> } | null };

export type GetUsersByRefreshTokenQueryVariables = Exact<{
  refreshTokenHash: Scalars['String'];
}>;


export type GetUsersByRefreshTokenQuery = { __typename?: 'query_root', authRefreshTokens: Array<{ __typename?: 'authRefreshTokens', id: any, user: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, telegramId?: string | null, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } }> };

export type GetUsersByPatQueryVariables = Exact<{
  patHash: Scalars['String'];
}>;


export type GetUsersByPatQuery = { __typename?: 'query_root', authRefreshTokens: Array<{ __typename?: 'authRefreshTokens', id: any, user: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, telegramId?: string | null, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } }> };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['uuid'];
  user: Users_Set_Input;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', updateUser?: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, telegramId?: string | null, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } | null };

export type UpdateUserWhereMutationVariables = Exact<{
  where: Users_Bool_Exp;
  user: Users_Set_Input;
}>;


export type UpdateUserWhereMutation = { __typename?: 'mutation_root', updateUsers?: { __typename?: 'users_mutation_response', affected_rows: number } | null };

export type RotateUsersTicketMutationVariables = Exact<{
  oldTicket: Scalars['String'];
  newTicket: Scalars['String'];
  newTicketExpiresAt: Scalars['timestamptz'];
}>;


export type RotateUsersTicketMutation = { __typename?: 'mutation_root', updateUsers?: { __typename?: 'users_mutation_response', affected_rows: number } | null };

export type ChangeEmailsByTicketMutationVariables = Exact<{
  ticket: Scalars['String'];
  email: Scalars['citext'];
  newTicket: Scalars['String'];
  now: Scalars['timestamptz'];
}>;


export type ChangeEmailsByTicketMutation = { __typename?: 'mutation_root', updateUsers?: { __typename?: 'users_mutation_response', returning: Array<{ __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, telegramId?: string | null, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> } | null };

export type InsertUserMutationVariables = Exact<{
  user: Users_Insert_Input;
}>;


export type InsertUserMutation = { __typename?: 'mutation_root', insertUser?: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, telegramId?: string | null, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } | null };

export type DeleteUserMutationVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type DeleteUserMutation = { __typename?: 'mutation_root', deleteAuthUserRoles?: { __typename?: 'authUserRoles_mutation_response', affected_rows: number } | null, deleteUser?: { __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, telegramId?: string | null, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> } | null };

export type DeanonymizeUserMutationVariables = Exact<{
  userId: Scalars['uuid'];
  avatarUrl?: InputMaybe<Scalars['String']>;
  role: Scalars['String'];
}>;


export type DeanonymizeUserMutation = { __typename?: 'mutation_root', updateAuthUserRoles?: { __typename?: 'authUserRoles_mutation_response', affected_rows: number } | null, updateUser?: { __typename?: 'users', id: any } | null };

export type InsertUserProviderToUserMutationVariables = Exact<{
  userProvider: AuthUserProviders_Insert_Input;
}>;


export type InsertUserProviderToUserMutation = { __typename?: 'mutation_root', insertAuthUserProvider?: { __typename?: 'authUserProviders', id: any } | null };

export type GetUserByTicketQueryVariables = Exact<{
  ticket: Scalars['String'];
}>;


export type GetUserByTicketQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, telegramId?: string | null, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> };

export type UpdateUsersByTicketMutationVariables = Exact<{
  ticket: Scalars['String'];
  user: Users_Set_Input;
}>;


export type UpdateUsersByTicketMutation = { __typename?: 'mutation_root', updateUsers?: { __typename?: 'users_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'users', id: any, createdAt: any, disabled: boolean, displayName: string, avatarUrl: string, email?: any | null, passwordHash?: string | null, emailVerified: boolean, telegramId?: string | null, phoneNumber?: string | null, phoneNumberVerified: boolean, defaultRole: string, isAnonymous: boolean, ticket?: string | null, otpHash?: string | null, totpSecret?: string | null, activeMfaType?: string | null, newEmail?: any | null, locale: string, metadata?: any | null, roles: Array<{ __typename?: 'authUserRoles', role: string }> }> } | null };

export const TelegramBotTokenFieldsFragmentDoc = gql`
    fragment telegramBotTokenFields on authTelegramBotTokens {
  id
  createdAt
  name
  token
}
    `;
export const UserFieldsFragmentDoc = gql`
    fragment userFields on users {
  id
  createdAt
  disabled
  displayName
  avatarUrl
  email
  passwordHash
  emailVerified
  telegramId
  phoneNumber
  phoneNumberVerified
  defaultRole
  isAnonymous
  ticket
  otpHash
  totpSecret
  activeMfaType
  newEmail
  locale
  metadata
  roles {
    role
  }
}
    `;
export const InsertProviderRequestDocument = gql`
    mutation insertProviderRequest($providerRequest: authProviderRequests_insert_input!) {
  insertAuthProviderRequest(
    object: $providerRequest
    on_conflict: {constraint: provider_requests_pkey, update_columns: [options]}
  ) {
    id
    options
  }
}
    `;
export const DeleteProviderRequestDocument = gql`
    mutation deleteProviderRequest($id: uuid!) {
  deleteAuthProviderRequest(id: $id) {
    id
    options
  }
}
    `;
export const ProviderRequestDocument = gql`
    query providerRequest($id: uuid!) {
  authProviderRequest(id: $id) {
    id
    options
  }
}
    `;
export const InsertRefreshTokenDocument = gql`
    mutation insertRefreshToken($refreshToken: authRefreshTokens_insert_input!) {
  insertAuthRefreshToken(object: $refreshToken) {
    id
  }
}
    `;
export const DeleteRefreshTokenDocument = gql`
    mutation deleteRefreshToken($refreshTokenHash: String!) {
  deleteAuthRefreshTokens(where: {refreshTokenHash: {_eq: $refreshTokenHash}}) {
    affected_rows
  }
}
    `;
export const DeleteUserRefreshTokensDocument = gql`
    mutation deleteUserRefreshTokens($userId: uuid!) {
  deleteAuthRefreshTokens(where: {user: {id: {_eq: $userId}}}) {
    affected_rows
  }
}
    `;
export const DeleteExpiredRefreshTokensDocument = gql`
    mutation deleteExpiredRefreshTokens {
  deleteAuthRefreshTokens(where: {expiresAt: {_lt: now}}) {
    affected_rows
  }
}
    `;
export const AuthTelegramBotTokenDocument = gql`
    query authTelegramBotToken($id: String!) {
  authTelegramBotToken(id: $id) {
    ...telegramBotTokenFields
  }
}
    ${TelegramBotTokenFieldsFragmentDoc}`;
export const UpsertRolesDocument = gql`
    mutation upsertRoles($roles: [authRoles_insert_input!]!) {
  insertAuthRoles(
    objects: $roles
    on_conflict: {constraint: roles_pkey, update_columns: []}
  ) {
    affected_rows
    returning {
      role
    }
  }
}
    `;
export const GetUserSecurityKeysDocument = gql`
    query getUserSecurityKeys($id: uuid!) {
  authUserSecurityKeys(where: {userId: {_eq: $id}}) {
    counter
    credentialId
    credentialPublicKey
    transports
    id
    user {
      id
    }
  }
}
    `;
export const GetUserChallengeDocument = gql`
    query getUserChallenge($id: uuid!) {
  user(id: $id) {
    id
    currentChallenge
  }
}
    `;
export const UpdateUserChallengeDocument = gql`
    mutation updateUserChallenge($userId: uuid!, $challenge: String!) {
  updateUser(pk_columns: {id: $userId}, _set: {currentChallenge: $challenge}) {
    id
  }
}
    `;
export const AddUserSecurityKeyDocument = gql`
    mutation addUserSecurityKey($userSecurityKey: authUserSecurityKeys_insert_input!) {
  insertAuthUserSecurityKey(object: $userSecurityKey) {
    id
  }
}
    `;
export const UpdateUserSecurityKeyDocument = gql`
    mutation updateUserSecurityKey($id: uuid!, $counter: bigint!) {
  updateAuthUserSecurityKey(pk_columns: {id: $id}, _set: {counter: $counter}) {
    id
  }
}
    `;
export const AuthUserProvidersDocument = gql`
    query authUserProviders($provider: String!, $providerUserId: String!) {
  authUserProviders(
    where: {_and: {provider: {id: {_eq: $provider}}, providerUserId: {_eq: $providerUserId}}}
    limit: 1
  ) {
    id
    user {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const UserProviderDocument = gql`
    query userProvider($userId: uuid!, $providerId: String!) {
  authUserProviders(
    where: {_and: [{userId: {_eq: $userId}}, {providerId: {_eq: $providerId}}]}
    limit: 1
  ) {
    id
    refreshToken
  }
}
    `;
export const UpdateAuthUserproviderDocument = gql`
    mutation updateAuthUserprovider($id: uuid!, $authUserProvider: authUserProviders_set_input!) {
  updateAuthUserProvider(pk_columns: {id: $id}, _set: $authUserProvider) {
    id
  }
}
    `;
export const InsertUserRolesDocument = gql`
    mutation insertUserRoles($userRoles: [authUserRoles_insert_input!]!) {
  insertAuthUserRoles(objects: $userRoles) {
    affected_rows
  }
}
    `;
export const DeleteUserRolesByUserIdDocument = gql`
    mutation deleteUserRolesByUserId($userId: uuid!) {
  deleteAuthUserRoles(where: {userId: {_eq: $userId}}) {
    affected_rows
  }
}
    `;
export const UserDocument = gql`
    query user($id: uuid!) {
  user(id: $id) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const UsersDocument = gql`
    query users($where: users_bool_exp!) {
  users(where: $where) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtDocument = gql`
    mutation getUsersByRefreshTokenAndUpdateRefreshTokenExpiresAt($refreshTokenHash: String!, $expiresAt: timestamptz!) {
  updateAuthRefreshTokens(
    _set: {expiresAt: $expiresAt}
    where: {_and: [{refreshTokenHash: {_eq: $refreshTokenHash}}, {user: {disabled: {_eq: false}}}, {expiresAt: {_gte: now}}]}
  ) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export const GetUsersByRefreshTokenDocument = gql`
    query getUsersByRefreshToken($refreshTokenHash: String!) {
  authRefreshTokens(
    where: {_and: [{refreshTokenHash: {_eq: $refreshTokenHash}}, {user: {disabled: {_eq: false}}}, {expiresAt: {_gte: now}}]}
  ) {
    id
    user {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const GetUsersByPatDocument = gql`
    query getUsersByPAT($patHash: String!) {
  authRefreshTokens(
    where: {_and: [{refreshTokenHash: {_eq: $patHash}}, {user: {disabled: {_eq: false}}}, {expiresAt: {_gte: now}}, {type: {_eq: pat}}]}
  ) {
    id
    user {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const UpdateUserDocument = gql`
    mutation updateUser($id: uuid!, $user: users_set_input!) {
  updateUser(pk_columns: {id: $id}, _set: $user) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const UpdateUserWhereDocument = gql`
    mutation updateUserWhere($where: users_bool_exp!, $user: users_set_input!) {
  updateUsers(where: $where, _set: $user) {
    affected_rows
  }
}
    `;
export const RotateUsersTicketDocument = gql`
    mutation rotateUsersTicket($oldTicket: String!, $newTicket: String!, $newTicketExpiresAt: timestamptz!) {
  updateUsers(
    _set: {ticket: $newTicket, ticketExpiresAt: $newTicketExpiresAt}
    where: {ticket: {_eq: $oldTicket}}
  ) {
    affected_rows
  }
}
    `;
export const ChangeEmailsByTicketDocument = gql`
    mutation changeEmailsByTicket($ticket: String!, $email: citext!, $newTicket: String!, $now: timestamptz!) {
  updateUsers(
    where: {_and: [{ticket: {_eq: $ticket}}, {ticketExpiresAt: {_gt: $now}}]}
    _set: {email: $email, newEmail: null, ticket: $newTicket, ticketExpiresAt: $now}
  ) {
    returning {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;
export const InsertUserDocument = gql`
    mutation insertUser($user: users_insert_input!) {
  insertUser(object: $user) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const DeleteUserDocument = gql`
    mutation deleteUser($userId: uuid!) {
  deleteAuthUserRoles(where: {userId: {_eq: $userId}}) {
    affected_rows
  }
  deleteUser(id: $userId) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const DeanonymizeUserDocument = gql`
    mutation deanonymizeUser($userId: uuid!, $avatarUrl: String, $role: String!) {
  updateAuthUserRoles(where: {user: {id: {_eq: $userId}}}, _set: {role: $role}) {
    affected_rows
  }
  updateUser(
    pk_columns: {id: $userId}
    _set: {avatarUrl: $avatarUrl, defaultRole: $role}
  ) {
    id
  }
}
    `;
export const InsertUserProviderToUserDocument = gql`
    mutation insertUserProviderToUser($userProvider: authUserProviders_insert_input!) {
  insertAuthUserProvider(object: $userProvider) {
    id
  }
}
    `;
export const GetUserByTicketDocument = gql`
    query getUserByTicket($ticket: String!) {
  users(where: {ticket: {_eq: $ticket}}) {
    ...userFields
  }
}
    ${UserFieldsFragmentDoc}`;
export const UpdateUsersByTicketDocument = gql`
    mutation updateUsersByTicket($ticket: String!, $user: users_set_input!) {
  updateUsers(
    where: {_and: [{ticket: {_eq: $ticket}}, {ticketExpiresAt: {_gt: now}}]}
    _set: $user
  ) {
    affected_rows
    returning {
      ...userFields
    }
  }
}
    ${UserFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    insertProviderRequest(variables: InsertProviderRequestMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertProviderRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertProviderRequestMutation>(InsertProviderRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertProviderRequest', 'mutation');
    },
    deleteProviderRequest(variables: DeleteProviderRequestMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteProviderRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteProviderRequestMutation>(DeleteProviderRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteProviderRequest', 'mutation');
    },
    providerRequest(variables: ProviderRequestQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ProviderRequestQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProviderRequestQuery>(ProviderRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'providerRequest', 'query');
    },
    insertRefreshToken(variables: InsertRefreshTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertRefreshTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertRefreshTokenMutation>(InsertRefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertRefreshToken', 'mutation');
    },
    deleteRefreshToken(variables: DeleteRefreshTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteRefreshTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteRefreshTokenMutation>(DeleteRefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteRefreshToken', 'mutation');
    },
    deleteUserRefreshTokens(variables: DeleteUserRefreshTokensMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserRefreshTokensMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserRefreshTokensMutation>(DeleteUserRefreshTokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUserRefreshTokens', 'mutation');
    },
    deleteExpiredRefreshTokens(variables?: DeleteExpiredRefreshTokensMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteExpiredRefreshTokensMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteExpiredRefreshTokensMutation>(DeleteExpiredRefreshTokensDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteExpiredRefreshTokens', 'mutation');
    },
    authTelegramBotToken(variables: AuthTelegramBotTokenQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AuthTelegramBotTokenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthTelegramBotTokenQuery>(AuthTelegramBotTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'authTelegramBotToken', 'query');
    },
    upsertRoles(variables: UpsertRolesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertRolesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertRolesMutation>(UpsertRolesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertRoles', 'mutation');
    },
    getUserSecurityKeys(variables: GetUserSecurityKeysQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserSecurityKeysQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserSecurityKeysQuery>(GetUserSecurityKeysDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserSecurityKeys', 'query');
    },
    getUserChallenge(variables: GetUserChallengeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserChallengeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserChallengeQuery>(GetUserChallengeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserChallenge', 'query');
    },
    updateUserChallenge(variables: UpdateUserChallengeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserChallengeMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserChallengeMutation>(UpdateUserChallengeDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserChallenge', 'mutation');
    },
    addUserSecurityKey(variables: AddUserSecurityKeyMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddUserSecurityKeyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<AddUserSecurityKeyMutation>(AddUserSecurityKeyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'addUserSecurityKey', 'mutation');
    },
    updateUserSecurityKey(variables: UpdateUserSecurityKeyMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserSecurityKeyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserSecurityKeyMutation>(UpdateUserSecurityKeyDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserSecurityKey', 'mutation');
    },
    authUserProviders(variables: AuthUserProvidersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AuthUserProvidersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AuthUserProvidersQuery>(AuthUserProvidersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'authUserProviders', 'query');
    },
    userProvider(variables: UserProviderQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserProviderQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserProviderQuery>(UserProviderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userProvider', 'query');
    },
    updateAuthUserprovider(variables: UpdateAuthUserproviderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateAuthUserproviderMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateAuthUserproviderMutation>(UpdateAuthUserproviderDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateAuthUserprovider', 'mutation');
    },
    insertUserRoles(variables: InsertUserRolesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertUserRolesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertUserRolesMutation>(InsertUserRolesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertUserRoles', 'mutation');
    },
    deleteUserRolesByUserId(variables: DeleteUserRolesByUserIdMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserRolesByUserIdMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserRolesByUserIdMutation>(DeleteUserRolesByUserIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUserRolesByUserId', 'mutation');
    },
    user(variables: UserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserQuery>(UserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'user', 'query');
    },
    users(variables: UsersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersQuery>(UsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'users', 'query');
    },
    getUsersByRefreshTokenAndUpdateRefreshTokenExpiresAt(variables: GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtMutation>(GetUsersByRefreshTokenAndUpdateRefreshTokenExpiresAtDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsersByRefreshTokenAndUpdateRefreshTokenExpiresAt', 'mutation');
    },
    getUsersByRefreshToken(variables: GetUsersByRefreshTokenQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersByRefreshTokenQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersByRefreshTokenQuery>(GetUsersByRefreshTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsersByRefreshToken', 'query');
    },
    getUsersByPAT(variables: GetUsersByPatQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersByPatQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUsersByPatQuery>(GetUsersByPatDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUsersByPAT', 'query');
    },
    updateUser(variables: UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserMutation>(UpdateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUser', 'mutation');
    },
    updateUserWhere(variables: UpdateUserWhereMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserWhereMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUserWhereMutation>(UpdateUserWhereDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUserWhere', 'mutation');
    },
    rotateUsersTicket(variables: RotateUsersTicketMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RotateUsersTicketMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RotateUsersTicketMutation>(RotateUsersTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'rotateUsersTicket', 'mutation');
    },
    changeEmailsByTicket(variables: ChangeEmailsByTicketMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ChangeEmailsByTicketMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ChangeEmailsByTicketMutation>(ChangeEmailsByTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'changeEmailsByTicket', 'mutation');
    },
    insertUser(variables: InsertUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertUserMutation>(InsertUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertUser', 'mutation');
    },
    deleteUser(variables: DeleteUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteUserMutation>(DeleteUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteUser', 'mutation');
    },
    deanonymizeUser(variables: DeanonymizeUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeanonymizeUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeanonymizeUserMutation>(DeanonymizeUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deanonymizeUser', 'mutation');
    },
    insertUserProviderToUser(variables: InsertUserProviderToUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertUserProviderToUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertUserProviderToUserMutation>(InsertUserProviderToUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertUserProviderToUser', 'mutation');
    },
    getUserByTicket(variables: GetUserByTicketQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserByTicketQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUserByTicketQuery>(GetUserByTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUserByTicket', 'query');
    },
    updateUsersByTicket(variables: UpdateUsersByTicketMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUsersByTicketMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateUsersByTicketMutation>(UpdateUsersByTicketDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateUsersByTicket', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;