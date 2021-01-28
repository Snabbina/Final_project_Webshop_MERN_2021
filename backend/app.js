const express = require('express')
const app = express()

const errorMiddleware = require('./middlewares/errors')

app.use(express.json())

// import all the routes
const products = require('./routes/product')


app.use('/api/v1', products)

app.use(errorMiddleware)


//Middleware to handle errors


module.exports = app

