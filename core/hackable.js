'use strict'

const actions = {}
const filters = {}

class Hook {

  cursorIndex = 0;

  name: ''

  handlers = []

  constructor(name) {
    this.name = name;
  }

  addHandler(handler) {
    this.handlers.push(handler)
  }

  next(data) {
    if (typeof this.handlers[this.cursorIndex] === 'undefined') return
    throw new Error('Unsupported operation.')
  }

  invoke(data) {

  }

}

class Action extends Hook {

  constructor(name) {
    super(name)
  }

  next(data) {
    super.next(data)
    this.handlers[this.cursorIndex++].call(data, next)
  }

}

function addAction(name, handler) {
  let action = new Action(name)
  action.addHandler(handler)
  actions[action.name] = action;
}

function doAction(name, data) {

}

function addFilter(name, handler) {

}

function doFilter(name, data) {

}

export {addAction, doAction, addFilter, doFilter}