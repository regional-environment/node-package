'use strict'

module.exports = (string, prefix) =>
  !prefix || string.slice(0, prefix.length) === prefix
