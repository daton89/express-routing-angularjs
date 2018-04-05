/**
 * Main application routes
 */

'use strict'

const errors = require('./components/errors')
const express = require('express')
const path = require('path')
const config = require('./config/environment')

module.exports = function (app) {
  // Insert routes below
  app.use('/api/techs', require('./api/tech'))

  // ############################################################################

  app.use('/', require('./public'))

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|node_modules|assets)/*')
    .get(errors['pageNotFound'])

  app.use(express.static(path.resolve(config.root, 'client', 'dist')))

  app.route('/*')
    .get((req, res) => {
      res.redirect('/')
    })
}
