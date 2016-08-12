'use strict'

module.exports = (string, suffix) =>
  !suffix || string.slice(-suffix.length, string.length) === suffix
