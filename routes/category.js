const route = require('express').Router();
const categoryController = require('../controllers/categoryController');

// Get all category
route.get('/', categoryController.getAllCategory);

// Get category by id
route.get('/:id', categoryController.getCategoryById);

// Create category
route.post('/', categoryController.createCategory);

// Update category
route.put('/:id', categoryController.updateCategory);

// Delete category
route.delete('/:id', categoryController.deleteCategory);

module.exports = route;