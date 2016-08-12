'use strict'

const ItemList = require('./items.js')
const hasPrefix = require('./prefix.js')
const hasSuffix = require('./suffix.js')

const getAllItems = dirname => new ItemList(dirname)

function getItems (dirname, {
  required = [], optional = [], delimiter = '.',
  prefix = '', suffix = ''
} = {}) {
  return new ItemList(dirname).filter(
    ({name}) => {
      if (hasPrefix(name, prefix) && hasSuffix(name, suffix)) {
        const classes = name
          .slice(prefix.length, -suffix.length || name.length)
          .split(delimiter)
        return (
          required.every(
            classname =>
              classes.indexOf(classname) !== -1
          ) &&
          !classes.some(
            classname =>
              required.indexOf(classname) === -1 && optional.indexOf(classname) === -1
          )
        )
      }
      return false
    }
  )
}

module.exports = {
  getAllItems,
  getItems
}
