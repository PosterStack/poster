const {ApolloServer} = require('apollo-server');

class Poster {

  constructor(typeDefs, resolvers) {
    this.server = new ApolloServer({
      typeDefs,
      resolvers
    })
  }

  getServer() {
    return this.server
  }

  start() {
    this.server.listen().then(({url}) => {
      console.log(`Server ready at ${url}`)
    });
  }

}

exports = Poster