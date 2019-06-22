// Code generated by Prisma (prisma@1.23.4). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  domain: (where?: DomainWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  domain: (where: DomainWhereUniqueInput) => DomainPromise;
  domains: (
    args?: {
      where?: DomainWhereInput;
      orderBy?: DomainOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Domain>;
  domainsConnection: (
    args?: {
      where?: DomainWhereInput;
      orderBy?: DomainOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => DomainConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createDomain: (data: DomainCreateInput) => DomainPromise;
  updateDomain: (
    args: { data: DomainUpdateInput; where: DomainWhereUniqueInput }
  ) => DomainPromise;
  updateManyDomains: (
    args: { data: DomainUpdateManyMutationInput; where?: DomainWhereInput }
  ) => BatchPayloadPromise;
  upsertDomain: (
    args: {
      where: DomainWhereUniqueInput;
      create: DomainCreateInput;
      update: DomainUpdateInput;
    }
  ) => DomainPromise;
  deleteDomain: (where: DomainWhereUniqueInput) => DomainPromise;
  deleteManyDomains: (where?: DomainWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  domain: (
    where?: DomainSubscriptionWhereInput
  ) => DomainSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type DomainOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "url_ASC"
  | "url_DESC"
  | "urlHash_ASC"
  | "urlHash_DESC";

export type UserOrderByInput = "id_ASC" | "id_DESC" | "name_ASC" | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserCreateInput {
  name: String;
}

export type DomainWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  url?: String;
  urlHash?: String;
}>;

export interface DomainUpdateInput {
  url?: String;
  urlHash?: String;
}

export interface DomainSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: DomainWhereInput;
  AND?: DomainSubscriptionWhereInput[] | DomainSubscriptionWhereInput;
  OR?: DomainSubscriptionWhereInput[] | DomainSubscriptionWhereInput;
  NOT?: DomainSubscriptionWhereInput[] | DomainSubscriptionWhereInput;
}

export interface DomainWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  url?: String;
  url_not?: String;
  url_in?: String[] | String;
  url_not_in?: String[] | String;
  url_lt?: String;
  url_lte?: String;
  url_gt?: String;
  url_gte?: String;
  url_contains?: String;
  url_not_contains?: String;
  url_starts_with?: String;
  url_not_starts_with?: String;
  url_ends_with?: String;
  url_not_ends_with?: String;
  urlHash?: String;
  urlHash_not?: String;
  urlHash_in?: String[] | String;
  urlHash_not_in?: String[] | String;
  urlHash_lt?: String;
  urlHash_lte?: String;
  urlHash_gt?: String;
  urlHash_gte?: String;
  urlHash_contains?: String;
  urlHash_not_contains?: String;
  urlHash_starts_with?: String;
  urlHash_not_starts_with?: String;
  urlHash_ends_with?: String;
  urlHash_not_ends_with?: String;
  AND?: DomainWhereInput[] | DomainWhereInput;
  OR?: DomainWhereInput[] | DomainWhereInput;
  NOT?: DomainWhereInput[] | DomainWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface DomainCreateInput {
  url: String;
  urlHash: String;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserUpdateManyMutationInput {
  name?: String;
}

export interface DomainUpdateManyMutationInput {
  url?: String;
  urlHash?: String;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserUpdateInput {
  name?: String;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface DomainConnection {
  pageInfo: PageInfo;
  edges: DomainEdge[];
}

export interface DomainConnectionPromise
  extends Promise<DomainConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<DomainEdge>>() => T;
  aggregate: <T = AggregateDomainPromise>() => T;
}

export interface DomainConnectionSubscription
  extends Promise<AsyncIterator<DomainConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<DomainEdgeSubscription>>>() => T;
  aggregate: <T = AggregateDomainSubscription>() => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface DomainSubscriptionPayload {
  mutation: MutationType;
  node: Domain;
  updatedFields: String[];
  previousValues: DomainPreviousValues;
}

export interface DomainSubscriptionPayloadPromise
  extends Promise<DomainSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = DomainPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = DomainPreviousValuesPromise>() => T;
}

export interface DomainSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<DomainSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = DomainSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = DomainPreviousValuesSubscription>() => T;
}

export interface Domain {
  id: ID_Output;
  url: String;
  urlHash: String;
}

export interface DomainPromise extends Promise<Domain>, Fragmentable {
  id: () => Promise<ID_Output>;
  url: () => Promise<String>;
  urlHash: () => Promise<String>;
}

export interface DomainSubscription
  extends Promise<AsyncIterator<Domain>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  url: () => Promise<AsyncIterator<String>>;
  urlHash: () => Promise<AsyncIterator<String>>;
}

export interface DomainEdge {
  node: Domain;
  cursor: String;
}

export interface DomainEdgePromise extends Promise<DomainEdge>, Fragmentable {
  node: <T = DomainPromise>() => T;
  cursor: () => Promise<String>;
}

export interface DomainEdgeSubscription
  extends Promise<AsyncIterator<DomainEdge>>,
    Fragmentable {
  node: <T = DomainSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface DomainPreviousValues {
  id: ID_Output;
  url: String;
  urlHash: String;
}

export interface DomainPreviousValuesPromise
  extends Promise<DomainPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  url: () => Promise<String>;
  urlHash: () => Promise<String>;
}

export interface DomainPreviousValuesSubscription
  extends Promise<AsyncIterator<DomainPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  url: () => Promise<AsyncIterator<String>>;
  urlHash: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface AggregateDomain {
  count: Int;
}

export interface AggregateDomainPromise
  extends Promise<AggregateDomain>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateDomainSubscription
  extends Promise<AsyncIterator<AggregateDomain>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Domain",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
