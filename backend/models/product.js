const mongoose = require('mongoose')


//The product model
const productSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, 'Plz enter product here'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Plz enter product price here'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Plz enter product discription'],
    },
    ratings: {
        type: Number,
        default: 0
    },
    // Array of Img, the img values is from the Cloudinary.com when uploaded
    images: [
        {
            public_id: {
                type: String,
                requried: true
            },
            url: {
                type: String,
                requried: true
            }
        }
    ],
    //Directing user to only choose from these categories, enum
    category: {
        type: String,
        required: [true, 'Plz select category for this product'],
        enum: {
            values:[ //placeholder values so far, will be changed later
                'Dresses',
                'Shirts',
                'Shoes',
                'Pants',
                'Socks',
                'Books',
                'Items',
                'Clothes/shoes',
                'Outdoor',
                'Sports'
            ],
            message: 'Plz select correct catagory for product'
        },
    },
    seller: {
        type: String,
        requried: [true, 'Plz enter product seller']
    },
    stock: {
        type: String,
        requried: [true, 'Plz enter product stock'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0
    },
    numOfReviews:{
        type: Number
    },
    //Reviews array, will add user id later on, when I make that model
    reviews: [
        {
            name: {
                type: String,
                requried: true
            },
            rating: {
                type: Number,
                requried: true
            },
            comment: {
                type: String,
                requried: true
            },
        }
    ],
    creatdeAt: {
        type: Date,
        default: Date.now
    },
})
    
    module.exports = mongoose.model('Product', productSchema)
   

