'use strict'

const {readdirSync, statSync} = require('fs')

function getAllItems (path) {

}

function getItemsByClasses (path, {
  required = [], optional = [],
  prefix = '', suffix = ''
} = {}) {
  
}

module.exports = {
  getAllItems,
  getItemsByClasses
}
