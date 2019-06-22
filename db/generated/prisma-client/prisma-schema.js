module.exports = {
        typeDefs: /* GraphQL */ `type AggregateDomain {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Domain {
  id: ID!
  url: String!
  urlHash: String!
}

type DomainConnection {
  pageInfo: PageInfo!
  edges: [DomainEdge]!
  aggregate: AggregateDomain!
}

input DomainCreateInput {
  url: String!
  urlHash: String!
}

type DomainEdge {
  node: Domain!
  cursor: String!
}

enum DomainOrderByInput {
  id_ASC
  id_DESC
  url_ASC
  url_DESC
  urlHash_ASC
  urlHash_DESC
}

type DomainPreviousValues {
  id: ID!
  url: String!
  urlHash: String!
}

type DomainSubscriptionPayload {
  mutation: MutationType!
  node: Domain
  updatedFields: [String!]
  previousValues: DomainPreviousValues
}

input DomainSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: DomainWhereInput
  AND: [DomainSubscriptionWhereInput!]
  OR: [DomainSubscriptionWhereInput!]
  NOT: [DomainSubscriptionWhereInput!]
}

input DomainUpdateInput {
  url: String
  urlHash: String
}

input DomainUpdateManyMutationInput {
  url: String
  urlHash: String
}

input DomainWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  url: String
  url_not: String
  url_in: [String!]
  url_not_in: [String!]
  url_lt: String
  url_lte: String
  url_gt: String
  url_gte: String
  url_contains: String
  url_not_contains: String
  url_starts_with: String
  url_not_starts_with: String
  url_ends_with: String
  url_not_ends_with: String
  urlHash: String
  urlHash_not: String
  urlHash_in: [String!]
  urlHash_not_in: [String!]
  urlHash_lt: String
  urlHash_lte: String
  urlHash_gt: String
  urlHash_gte: String
  urlHash_contains: String
  urlHash_not_contains: String
  urlHash_starts_with: String
  urlHash_not_starts_with: String
  urlHash_ends_with: String
  urlHash_not_ends_with: String
  AND: [DomainWhereInput!]
  OR: [DomainWhereInput!]
  NOT: [DomainWhereInput!]
}

input DomainWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createDomain(data: DomainCreateInput!): Domain!
  updateDomain(data: DomainUpdateInput!, where: DomainWhereUniqueInput!): Domain
  updateManyDomains(data: DomainUpdateManyMutationInput!, where: DomainWhereInput): BatchPayload!
  upsertDomain(where: DomainWhereUniqueInput!, create: DomainCreateInput!, update: DomainUpdateInput!): Domain!
  deleteDomain(where: DomainWhereUniqueInput!): Domain
  deleteManyDomains(where: DomainWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  domain(where: DomainWhereUniqueInput!): Domain
  domains(where: DomainWhereInput, orderBy: DomainOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Domain]!
  domainsConnection(where: DomainWhereInput, orderBy: DomainOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): DomainConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  domain(where: DomainSubscriptionWhereInput): DomainSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    