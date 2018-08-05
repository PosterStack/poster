import {ApolloServer} from 'apollo-server';

const typeDefs =  ''

const resolvers = {}

const app = new ApolloServer({
  typeDefs, resolvers
})

app.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
});