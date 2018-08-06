const Poster = require('poster')
const Hackable = require('hackable')

const context = {
  hooks: new Hackable()
}

const typeDefs =  {}

const resolvers = {}

const app = new Poster({
  typeDefs, resolvers, context
})

app.start()
