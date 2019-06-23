
import ApolloClient from "apollo-boost";

// points to prisma server that exposes the graphql API generate by the datamodel
const client = new ApolloClient({
    uri: "http://localhost:4000/"
});

export default client;
  