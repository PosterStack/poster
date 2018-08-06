const models = {}

function addModel(type, alias) {
  models[alias || type.name] = type
}

exports = {...models, addModel};