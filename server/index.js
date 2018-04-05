'use strict'

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

process.on('uncaughtException', function (err) {
  console.error('Uncaught Exception:', err.message)
  console.error(err.stack)
  process.exit(1)
})

module.exports = require('./app')
