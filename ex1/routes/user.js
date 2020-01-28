const express = require('express')
const controllers = require('../controllers/user.controller')
const router = express.Router()

router.get('/', controllers.index)

router.get('/search', controllers.search)

router.get('/create', controllers.create)

router.post('/create', controllers.postCreate)

router.get('/:id', controllers.get)

module.exports = router