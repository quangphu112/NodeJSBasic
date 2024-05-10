const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");
const categoryRoutes = require("./routes/category");

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan("dev"));
dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.use("/v1/product", productRoutes);
app.use("/v1/user", userRoutes);
app.use("/v1/category", categoryRoutes);

