/**
 * Created by daton on 07/08/16.
 */
'use strict'

const REST = {

  respondWithResult (res, statusCode) {
    statusCode = statusCode || 200
    return function (entity) {
      if (entity) {
        return res.status(statusCode).json(entity)
      }
      return null
    }
  },

  handleEntityNotFound (res) {
    return function (entity) {
      if (!entity || entity.length) {
        res.status(404).end()
        return null
      }
      return entity
    }
  }

}

module.exports = REST
