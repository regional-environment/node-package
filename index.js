'use strict'

const ItemList = require('./items.js')
const hasPrefix = require('./prefix.js')
const hasSuffix = require('./suffix.js')

const getAllItems = dirname => new ItemList(dirname)

function getItems (dirname, {
  classes = [], except = [], delimiter = '.',
  prefix = '', suffix = ''
} = {}) {
  const adddelimiter = array =>
    array.map(classname => delimiter + classname)
  const strcontains = str =>
    substr => str.indexOf(substr) !== -1
  classes = adddelimiter(classes)
  except = adddelimiter(except)
  return new ItemList(dirname)
    .filter(item => hasPrefix(item, prefix))
    .filter(item => hasSuffix(item, suffix))
    .filter(item => classes.every(strcontains(item)))
    .filter(item => !except.some(strcontains(item)))
}

module.exports = {
  getAllItems,
  getItems
}
