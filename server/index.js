const { prisma } = require('../db/generated/prisma-client')
const { GraphQLServer } = require('graphql-yoga')

const resolvers = {
  Query: {
    domains(root, args, context) {
      return context.prisma.domains()
    }
  },
  Mutation: {
    createDomain(root, args, context) {
      return context.prisma.createDomain({
        url: args.url,
        urlHash: args.urlHash
      })
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: {
    prisma,
  },
})
server.start(() => console.log('Server is running on http://localhost:4000'))