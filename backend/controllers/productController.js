
const Product = require('../models/product')

//Create new product => /api/v1/product/new
exports.newProduct =  async (req, res, next) => {
    const product = await Product.create(req.body)

    res.status(201).json({
        sucess: true,
        product
    })
}


//Get all products => /api/v1/products
exports.getProducts = (req, res, next) => {

    //find will give as all products in the DB/product collection
    const products = await Product.find()
    res.status(200).json({
        sucess: true, 
        count: products.length,
        products,
        message: 'this route will show all the products in the databas'
    })
}


//Get singel product details =>  /api/v1/products/:id

exports.getSingleProduct = async (req, res, next) => { 
    
    const product = await findById(req.params.id)

    if (!product) {
        return res.status(404).json({
            sucess: false,
            message: 'Product not found'
        })
    }

    res.status(200).json ({
        sucess: true,
        product
    })


}


        