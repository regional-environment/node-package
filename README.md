# Node.js regional-environment library
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![dependencies status](https://david-dm.org/regional-environment/node-package.svg)](https://david-dm.org/regional-environment/node-package#info=dependencies)
[![devDependencies status](https://david-dm.org/regional-environment/node-package/dev-status.svg)](https://david-dm.org/regional-environment/node-package#info=devDependencies)
![downloads](https://img.shields.io/npm/dt/regional-environment.svg)
![version](https://img.shields.io/npm/v/regional-environment.svg)
[![license](https://img.shields.io/npm/l/regional-environment.svg)](http://spdx.org/licenses/MIT)

## Requirements

 * ECMAScript 6

## Usage

```javascript

// import the module
const regionalenv = require('regional-environment')

// get all items
const allitems = regionalenv.getAllItems(dirname)

// get some items whose name contains '.myfiletype', '.atom' and '.x86'
const myitems = regionalenv.getItems(dirname, {
  classes: ['myfiletype', 'atom', 'x86'],
  suffix: 'myext'
})

```

## License

MIT
