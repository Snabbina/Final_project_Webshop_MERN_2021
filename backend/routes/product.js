const express = require('express')
const router = express.Router()

const { 
    getProducts, 
    newProduct, 
    getSingleProduct, 
    updateProduct,
    deleteProduct

} = require('../controllers/productController')

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

router.route('/products').get(getProducts) 
router.route('/product/:id').get(getSingleProduct)

//User can never acess this route
router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), newProduct) 

//URL is the same therfore on the same line here
router.route('/admin/product/:id')
.put(isAuthenticatedUser, authorizeRoles('admin'), updateProduct)
.delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct)


module.exports = router

