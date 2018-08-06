const {addModel} = require('poster/models')

const UserTypes = {
  HUMAN: 'HUMAN',
  ROBOT: 'ROBOT'
}

class User {

  constructor(type, access, secret) {
    this.type = UserTypes.HUMAN
    this.access = access //username
    this.secret = secret //password
  }

}

addModel(User)

exports = {User, UserTypes}