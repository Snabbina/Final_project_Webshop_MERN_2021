const app = require('./app')
const connectDatabase = require('./config/database')

const dotenv = require('dotenv')

//Handle the uncaught exeptions
process.on('uncaughtException', err => {
  console.log(`ERROR: ${err.stack}`)
  console.log('Shutting down the server due to uncaught exeption')
  process.exit
})

//Setting upp config file
dotenv.config({ path: 'backend/config/config.env' })
// console.log(a)

// connecting to database
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(
    `server started on PORT: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  )
})

//Handle Unhandled Promise rejection
process.on('unhandledRejection', err => {
  console.log(`ERROR: ${err.message}`)
  console.log('Shutting down the server due to Unhandled Promise rejection')
  server.close(() => {
    process.exit()
  })
})


