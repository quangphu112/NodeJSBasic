import { Router } from 'express';
import ProductsController from "../controllers/productsController.js";

const router = Router();
const productController = new ProductsController();

// Get all product
router.get("/", productController.getProducts.bind(productController));

// Get product by id
router.get("/:id", productController.getProductById.bind(productController));

export default router;
