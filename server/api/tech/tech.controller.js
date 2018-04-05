
const rest = require('../../util/rest')
const techs = require('./techs.json')

module.exports = {
  index (req, res, next) {
    rest.respondWithResult(res)(techs)
  },
  show (req, res, next) {
    const tech = techs.find(tech => tech.key === req.params.key)
    rest.respondWithResult(res)(tech)
  }
}
