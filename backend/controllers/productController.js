
const Product = require('../models/product')

const ErrorHandler = require('../utils/errorHandler')

//Create new product => /api/v1/admin/product/new
exports.newProduct =  async (req, res, next) => {
    const product = await Product.create(req.body)

    //Images and links later with Clodunary

    res.status(201).json({
        success: true,
        product
    })
}


//Get all products => /api/v1/products
exports.getProducts = async (req, res, next) => {

    //find will give as all products in the DB/product collection
    const products = await Product.find()
    res.status(200).json({
        success: true, 
        count: products.length,
        products,
        message: 'this route will show all the products in the databas'
    })
}

//Get singel product details =>  /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => { 
    
    const product = await Product.findById(req.params.id)

    if (!product) {
        return next(new ErrorHandler('Product not found', 404))
        
        // res.status(404).json({
        //     success: false,
        //     message:
        // })
    }

    res.status(200).json ({
        success: true,
        product
    })

}

//Update Product  =>  /api/v1/admin/product/:id
//Needs to be tested in Postman
exports.updateProduct = async (req, res, next) => {

    let product = await Product.findById(req.params.id)

if (!product) {
    return res.status(404).json({
        success: false,
        message: 'Product not found'
    })
}
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        //To avoid some warnings
        new: true,
        runValidators: true,
        useFindAndModify: false
    })

    res.status(200).json({
        success: true,
        product
    })
}

//Delete Product  =>  /api/v1/admin/product/:id
exports.deleteProduct = async (req, res, next) => {
    
    const product = await Product.findById(req.params.id)

    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }
 
    await product.remove()

res.status(200).json({
    success: true,
    message: 'Product is deleted.'
})
}
