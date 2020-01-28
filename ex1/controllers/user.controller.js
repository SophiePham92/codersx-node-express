const shortId = require('shortid')
const db = require('../db')

module.exports = {
    index: (req, res) => {
        res.render('users', {
            users: db.get('users').value()
        })
    },
    search: (req, res) => {
        const matchedUsers = db.get('users').value().filter(u => (
            u.name.toLowerCase().indexOf(req.query.q.toLowerCase()) !== -1
        ))
        res.render('users', {
            users: matchedUsers
        })
    },
    create: (req, res) => {
        res.render('createUser')
    },
    postCreate: (req, res) => {
        req.body.id = shortId.generate()
        const errors = []
        if (!req.body.name) errors.push('Name is required!')
        if (!req.body.phone) errors.push('Phone is required!')
        if (errors.length) {
            return res.render('createUser', {
                errors,
                user: req.body
            })
        }
        db.get('users').push(req.body).write()
        res.redirect('/users')
    },
    get: (req, res) => {
        const user = db.get('users').find({ id: req.params.id }).value()
        res.render('user', {
            user: user
        })
    }
}