const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const shortId = require('shortid')

const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({ users: [] }).write()

module.exports = db