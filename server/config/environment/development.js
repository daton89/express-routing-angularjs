'use strict'
const path = require('path')

// Development specific configuration
// ==================================
module.exports = {
  port: process.env.PORT || 9000,

  client: path.resolve(__dirname, '../../../', 'client', '.tmp')
}
