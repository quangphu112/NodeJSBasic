const router = require("express").Router();
const productController = require("../controllers/productsController");

// Get all product
router.get("/", productController.getAllProduct);

// Get product by id
router.get("/:id", productController.getProductById);

// Create product
router.post("/", productController.createProduct);

// Update product
router.put("/:id", productController.updateProduct);

// Delete product
router.delete("/:id", productController.deleteProduct);

module.exports = router;
