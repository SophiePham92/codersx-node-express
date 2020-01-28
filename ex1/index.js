const express = require('express')
const bodyParser = require('body-parser')

const userRouter = require('./routes/user')
const app = express()

app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'pug')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index', {
        name: 'Choe'
    })
})

app.use('/users', userRouter)


const PORT = 3000
app.listen(PORT, () => {
    console.log('App is running on port ' + PORT)
})