const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const crypto = require('crypto')



const userSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Plz enter your name'],
        maxLength: [30, 'Name cannot exceed 30 characters']
    },
    email: {
        type: String,
        required: [true, 'Plz enter youe email'],
        unique: true,
        validate: [validator.isEmail, 'Plz enter valid email adress']
    },
    password: {
        type: String,
        required: [true, 'Plz enter your password'],
        minLength: [6, 'Password must be longer than 6 characters']
    },
    avatar: {
        public_id: {
            type: String,
            // required: true,
        },
        url: {
            type: String,
            // required: true,
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

//Encrypting password before saving use!!!
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        next()
    }

    this.password = await bcrypt.hash(this.password, 10)
})


//Compare user password, compare is a bcrypt method and this.password is the entered password of the user
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


//Return JWT Token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_TIME
    })
}

// Generate password reset token shown 37
// userSchema.methods.getResetPasswordToken = function () {
//     // Generate token
//     const resetToken = crypto.randomBytes(20).toString('hex');

//     // Hash and set to resetPasswordToken
//     this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

//     // Set token expire time
//     this.resetPasswordExpire = Date.now() + 30 * 60 * 1000

//     return resetToken

// }

module.exports = mongoose.model('User', userSchema)