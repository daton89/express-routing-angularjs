'use strict'
const path = require('path')

// Production specific configuration
// =================================
module.exports = {

  port: process.env.PORT || 8080,

  client: path.resolve(__dirname, '../../../', 'client', 'dist')

}
