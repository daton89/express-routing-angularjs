'use strict'

const config = require('../config/environment')
const nunjucks = require('nunjucks')

const logger = require('morgan')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const moment = require('moment')

logger.token('time', function time () {
  return moment().format('YY/MM/DD-HH:mm:sss')
})

module.exports = function (app) {
  app.locals.ENV = process.env.NODE_ENV
  app.locals.ENV_DEVELOPMENT = process.env.NODE_ENV === 'development'

  nunjucks.configure(config.client, {
    express: app,
    autoescape: true,
    noCache: true
  })

  app.use(bodyParser.json({
    strict: true,
    inflate: true,
    limit: '5mb'
  }))

  app.use(bodyParser.urlencoded({
    extended: false,
    inflate: true,
    limit: '5mb',
    parameterLimit: 1000
  }))

  app.use(methodOverride())

  app.use(logger(':time :remote-addr :method :status :url :res[content-length] :response-time ms'))
}
