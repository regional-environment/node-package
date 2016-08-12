'use strict'

module.exports = (string, prefix) =>
  string.slice(0, prefix.length) === prefix
