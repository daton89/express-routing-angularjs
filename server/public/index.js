const router = require('express').Router()
const techs = require('../api/tech/techs.json')

router.get('/', (req, res) => {
  res.render('index.html', {
    description: 'ExpressJS and AngularJS with UI-Router server side rendered',
    title: 'Express Routing AngularJS'
  })
})

router.get('/tech/:key', (req, res) => {
  const tech = techs.find(tech => tech.key === req.params.key)
  res.render('index.html', {
    title: tech.title,
    description: tech.text1
  })
})

module.exports = router
