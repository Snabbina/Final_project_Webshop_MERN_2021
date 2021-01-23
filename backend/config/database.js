// import mongoose from "mongoose" --- sätte vi lärt oss på, bara att implemnetera den syntaxen?

const mongoose = require('mongoose')



const connectDatabase = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })   
}
  
module.exports = connectDatabase



// ------ implementera den syntax sen? -------
// const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-books";
// mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.Promise = Promise;

// const port = process.env.PORT || 8080;
// const app = express()