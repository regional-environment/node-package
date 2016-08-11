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
  classes = adddelimiter(classes)
  except = adddelimiter(except)
  return new ItemList(dirname).filter(
    ({name}) => {
      if (hasPrefix(name, prefix) && hasSuffix(name, suffix)) {
        const contains = classname =>
          name.indexOf(classname) !== -1
        return classes.every(contains) && !except.some(contains)
      }
      return false
    }
  )
}

module.exports = {
  getAllItems,
  getItems
}
