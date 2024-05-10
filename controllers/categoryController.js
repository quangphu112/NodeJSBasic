const Category = require("../models/category");

const categoryController = {
  getAllCategory: async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  getCategoryById: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      res.status(200).json(category);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  createCategory: async (req, res) => {
    try {
      const category = new Category(req.body);
      const newCategory = await category.save();
      res.status(200).json(newCategory);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  updateCategory: async (req, res) => {
    try {
      const category = await Category.findById(req.params.id);
      await category.updateOne({ $set: req.body });
      res.status(200).json("Update success");
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  deleteCategory: async (req, res) => {
    try {
      await Category.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Category removed" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports = categoryController;