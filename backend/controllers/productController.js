//dummy route
exports.getProducts = (req, res, next) => {
    res.status(200).json({
        sucess: true, 
        message: 'this route will show all the products in the databas'
    })
}
