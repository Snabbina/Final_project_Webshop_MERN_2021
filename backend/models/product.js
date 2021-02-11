const mongoose = require("mongoose");

//The product model
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product here"],
    trim: true,
    maxLength: [100, "Product name cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price here"],
    maxLength: [5, "Product name cannot exceed 5 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please enter product discription"],
  },
  size: {
    type: String,
    required: [true, "Please enter product size"],
  },
  // Array of Img, the img values is from the Cloudinary.com when uploaded
  images: [
    {
      public_id: {
        type: String,
        requried: true,
      },
      url: {
        type: String,
        requried: true,
      },
    },
  ],
  //Directing user to only choose from these categories, enum
  category: {
    type: String,
    required: [true, "Please select category for this product"],
    enum: {
      values: [
        "Casual",
        "Festive",
        "Colorfull",
        "Summer",
        "Winter",
        "Monochrome",
        "Sporty",
        "M",
        "S",
        "L",
      ],
      message: "Please select correct catagory for product",
    },
  },
  stock: {
    type: String,
    requried: [true, "Please enter product stock"],
    maxLength: [5, "Product name cannot exceed 5 characters"],
    default: 0,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  creatdeAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Product", productSchema);
