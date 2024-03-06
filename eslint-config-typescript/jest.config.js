'use strict'

const base = require('../../jest.config.base.js')
const pack = require('./package')

const shortName = pack.name.split('/')[1]

module.exports = {
  ...base,
  'displayName': pack.name,
  'id': shortName,
  'rootDir': '../..',
  'testMatch': [`<rootDir>/packages/${shortName}/**/*.spec.js`],
}
