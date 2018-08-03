const {ApolloServer, gql} = require('apollo-server');

const typeDefs =  gql`
  type Query {
    hello: String
  }
`;

const resolvers = {}

const app = new ApolloServer({
  typeDefs, resolvers
})

app.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
});