'use strict'

const {readdirSync} = require('fs')
const {XIterable} = require('x-iterable-base')
const {iterator} = Symbol
const regex = /(^|(^\..*))\.regional-environment($|(\.[^\.]*$))/

function ItemList (dirname, suffix) {
  const list = readdirSync(dirname).filter(item => regex.test(item))
  this[iterator] = function * () {
    for (const item of list) {
      yield * readdirSync(item)
    }
  }
}

module.exports = XIterable(ItemList)
