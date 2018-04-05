/**
 * Error responses
 */

'use strict'

const VError = require('verror').VError

module.exports = {

  pageNotFound (req, res) {
    var viewFilePath = '404'
    var statusCode = 404
    var result = {
      status: statusCode
    }

    res.status(result.status)
    res.render(viewFilePath, {}, function (err, html) {
      if (err) {
        return res.json(result, result.status)
      }

      res.send(html)
    })
  },

  errorNotification (err, req, res, next) {
    const name = err.name
    const message = err.message
    const cause = VError.cause(err)
    const info = VError.info(err)

    const status = info.clientSide ? 400 : 500

    res.status(status).json({
      name,
      message,
      cause,
      info
    })

    next()
  }

}
