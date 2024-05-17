const express = require("express");
const app = express();
const cors= require("cors");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
import productRoutes from "./routes/products.routes.js";
// import userRoutes from "./routes/users.routes";
// import categoryRoutes from "./routes/categories.routes";

app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(morgan("dev"));
dotenv.config();
const PORT: any = process.env.PORT || 3000;
const MONGODB_URL: any = process.env.MONGODB_URL;

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err: any) => {
    console.log("Error connecting to MongoDB", err);
  });


app.use("/v1/products", productRoutes);
// app.use("/v1/users", userRoutes);
// app.use("/v1/categories", categoryRoutes);
