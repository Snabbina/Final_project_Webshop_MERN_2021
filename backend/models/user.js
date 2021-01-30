const mongoose = require('mongoose')
const validator = require('validator')



const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Plz enter your name'],
        maxlength: [30, 'Name cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Plz enter youe email'],
        unique: true,
        validate: [valitator.isEmail, 'Plz enter valid email adress']
    },
    password: {
        type: String,
        required: [true, 'Plz enter your password'],
        minlength: [6, 'Password must be longer than 6 characters']
    },
    avatar: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true
         }   
        },
        role:{
            type: String,
            default: 'user'
        },
        creatdeAt: {
            type: Date,
            default: Date.now
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date

})


module.exports = mongoose.model('User', userSchema)