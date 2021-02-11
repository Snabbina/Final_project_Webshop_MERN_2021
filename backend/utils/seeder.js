const Product = require("../models/product");
const dotenv = require("dotenv");
const connectDatabase = require("../config/database");

// created seeder script to post and test data to the API
const products = require("../data/products");

//Setting dotenv filename
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("All products are added");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();
