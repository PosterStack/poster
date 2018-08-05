'use strict'

class Hackable {

  actions: []

  filters: []

  addActions(name, handler) {
    let action = new Action(name)
    action.addHandler(handler)
    this.actions[action.name] = action
  }

  doAction(name, data) {
    this.actions[name](data)
  }

  addFilter(name, handler) {
    let filter = new Filter(name)
    filter.addHandler(handler)
    this.filters[name] = filter
  }

  async doFilter(name, data) {
    return await this.filters[name](data)
  }

}

class Hook {

  name: ''

  handlers = []

  constructor(name) {
    this.name = name;
  }

  addHandler(handler) {
    this.handlers.push(handler)
  }

  invoke(data) {
    throw new Error('No default implementation found.')
  }

}

class Action extends Hook {

  constructor(name) {
    super(name)
  }

  invoke(data) {
    this.handlers.forEach((handler) => {
      handler(data)
    })
  }

}

class Filter extends Hook {

  cursorIdx = 0;

  constructor(name) {
    super(name);
  }

  async invoke(data) {
    let ndata = data;
    for (;;) {
      if (this.cursorIdx === this.handlers.length) return ndata;
      ndata = this.next(ndata)
    }
  }

  async next(data) {
    let ndata = Object.assign({}, data)
    ndata = await this.handlers[this.cursorIdx++](ndata, this.next)
    return ndata;
  }

}

export {Hackable};