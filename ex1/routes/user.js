const express = require('express')
const shortId = require('shortid')

const db = require('../db')
const router = express.Router()

router.get('/search', (req, res) => {
    const matchedUsers = USERS.filter(u => (
        u.name.toLowerCase().indexOf(req.query.q.toLowerCase()) !== -1
    ))
    res.render('users', {
        users: matchedUsers
    })
})

router.get('/', (req, res) => {
    res.render('users', {
        users: db.get('users').value()
    })
})

router.get('/create', (req, res) => {
    res.render('createUser')
})

router.post('/create', (req, res) => {
    req.body.id = shortId.generate()
    db.get('users').push(req.body).write()
    res.redirect('/users')
})

router.get('/:id', (req, res) => {
    const user = db.get('users').find({ id: req.params.id }).value()
    res.render('user', {
        user: user
    })
})

module.exports = router