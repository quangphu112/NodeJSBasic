const Product = require("../models/products");
const Category = require("../models/category");

const productController = {
  getAllProduct: async (req, res) => {
    try {
      const products = await Product.find().populate("category");
      res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getProductById: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id).populate("category");
      res.status(200).json(product);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  createProduct: async (req, res) => {
    try {
      const product = new Product(req.body);
      const newProduct = await product.save();
      if(req.body.category) {
        const category = Category.findById(req.body.category);
        await category.updateOne({ $push: { products: newProduct._id } });
      }
      res.status(200).json(newProduct);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  updateProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      await product.updateOne({ $set: req.body });
      res.status(200).json("Update success");
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  deleteProduct: async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Product removed" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = productController;
