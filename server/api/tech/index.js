'use strict'

const router = require('express').Router()
const controller = require('./tech.controller')

router.get('/', controller.index)
router.get('/:key', controller.show)

module.exports = router
