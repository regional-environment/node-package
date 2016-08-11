'use strict'

const {readdirSync} = require('fs')
const {join} = require('path')
const {XIterable} = require('x-iterable-base')
const {iterator} = Symbol
const regex = /(^|(^\..*))\.regional-environment($|(\.[^\.]*$))/

function ItemList (dirname, suffix) {
  const list = readdirSync(dirname).filter(container => regex.test(container))
  this[iterator] = function * () {
    for (const container of list) {
      const subdirname = join(dirname, container)
      yield * readdirSync(subdirname)
        .map(name => ({dirname, container, subdirname, name}))
    }
  }
}

module.exports = XIterable(ItemList)
