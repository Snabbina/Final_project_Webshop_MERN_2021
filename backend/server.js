
const app = require('./app')
const connectDatabase = require('./config/database')

const dotenv = require('dotenv')
const cloudinary = require('cloudinary')


//Handle the uncaught exeptions
process.on('uncaughtException', err => {
  console.log(`ERROR: ${err.stack}`)
  console.log('Shutting down the server due to uncaught exeption')
  process.exit
})

//Setting upp config file
dotenv.config({ path: 'backend/config/config.env' })


// connecting to database
connectDatabase();

//Setting up cloudinary Configuration
cloudinary.config ({ 
  cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
  api_key : process.env.CLOUDINARY_CLOUD_KEY,
  api_secret : process.env.CLOUDINARY_CLOUD_SECRET 
})


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


