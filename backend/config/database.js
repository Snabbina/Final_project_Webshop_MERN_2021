// import mongoose from "mongoose" --- sätte vi lärt oss på, bara att implemnetera den syntaxen?

const mongoose = require('mongoose')



const connectDatabase = () => {
    mongoose.connect("mongodb://localhost/project-webshop", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
    })   
}
  
module.exports = connectDatabase



// HOW WE HAVE DONE IT BEFORE:
// const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/project-books";
// mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.Promise = Promise;

// const port = process.env.PORT || 8080;
// const app = express()





// EXAMPLE FROM INIT:
// const connectDatabase = () => {
//     mongoose.connect(process.env.DB_LOCAL_URI, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true
//     }).then(con => {
//         console.log(`MongoDB Database connected with HOST: ${con.connection.host}`)
//     })
// }

// module.exports = connectDatabase