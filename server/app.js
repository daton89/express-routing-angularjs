/**
 * Main application file
 */

'use strict'

const Express = require('express')
const config = require('./config/environment')
const http = require('http')
const errorNotification = require('./components/errors/index').errorNotification

// Note we don't use a port here because the master listens on it for us.
const app = new Express()

// Here you might use middleware, attach routes, etc.
require('./config/express')(app)

require('./routes')(app)

app.use(errorNotification)
// END of middleware, attach routes, etc.

var server = http.createServer(app)

server.listen(config.port, config.ip, function onListen () {
  console.log('Express App listening on %d, in %s mode on ip %s', config.port, app.get('env'), config.ip)
})
