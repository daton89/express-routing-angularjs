'use strict'

// Production specific configuration
// =================================
module.exports = {

  port: process.env.PORT || 8080,

  // Seed database on startup
  seedDB: false

}
