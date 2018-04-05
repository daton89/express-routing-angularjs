'use strict'

// Development specific configuration
// ==================================
module.exports = {

  port: process.env.PORT || 9000,

  // Seed database on startup
  seedDB: true,

  user: {
    roles: [],
    avatar: ''
  }

}
