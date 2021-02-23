const express = require("express");
const app = express();
const cors = require("cors");

const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const path = require("path");

const errorMiddleware = require("./middlewares/errors");

// Setting up config file
// if (process.env.NODE_ENV !== "PRODUCTION")
//   require("dotenv").config({ path: "backend/config/config.env" });
dotenv.config({ path: "backend/config/config.env" });

app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());
app.use(cors());

// import all the routes
const products = require("./routes/product");
const user = require("./routes/user");
const order = require("./routes/order");

app.use("/api/v1", products);
app.use("/api/v1", user);
app.use("/api/v1", order);

if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
