'use strict'

const path = require('path')
const _ = require('lodash')

function requiredProcessEnv () {
  process.env.NODE_ENV = process.env.NODE_ENV || 'development'
  return process.env.NODE_ENV
}

// All configurations will extend these options
// ============================================
var all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.resolve(__dirname, '../../..'),

  // Server port
  port: process.env.PORT || 9000,

  // Server IP
  ip: process.env.IP || '0.0.0.0'
}

// Export the config object based on the NODE_ENV
// ==============================================

requiredProcessEnv()

module.exports = _.merge(
  all,
  require('./shared'),
  require('./' + process.env.NODE_ENV + '.js') || {})
