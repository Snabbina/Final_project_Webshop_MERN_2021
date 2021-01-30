const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')

const errorMiddleware = require('./middlewares/errors')

app.use(express.json())
app.use(cookieParser())

// import all the routes
const products = require('./routes/product')
const user = require('./routes/user')


app.use('/api/v1', products)
app.use('/api/v1', user)


//Middleware to handle errors
app.use(errorMiddleware)


module.exports = app

