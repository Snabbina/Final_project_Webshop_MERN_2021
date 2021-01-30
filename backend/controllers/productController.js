const Product = require("../models/product");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures")

//Create new product => /api/v1/admin/product/new
exports.newProduct = catchAsyncErrors(async (req, res, next) => {

  req.body.user = req.user.id

  const product = await Product.create(req.body)

  //Images and links later with Clodunary
  res.status(201).json({
    success: true,
    product,
  });
});

//Get all products => /api/v1/products?keyword=shirt
//Calling Search() and Filter() here the logic is found in prodController
exports.getProducts = catchAsyncErrors(async (req, res, next) => {

  const resPerPage = 4;
  const productCount = await Product.countDocuments()

  const apiFeatures = new APIFeatures(Product.find(), req.query)
                      .search()
                      .filter()
                      .pagination(resPerPage)

  const products = await apiFeatures.query
  res.status(200).json({
    success: true,
    count: products.length,
    productCount,
    products,
    message: "this route will show all the products in the databas"
  })
})

//Get singel product details =>  /api/v1/product/:id
exports.getSingleProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

//Update Product  =>  /api/v1/admin/product/:id
//Needs to be tested in Postman
exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    //To avoid some warnings
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

//Delete Product  =>  /api/v1/admin/product/:id
exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  await product.remove();

  res.status(200).json({
    success: true,
    message: "Product is deleted.",
  });
});
