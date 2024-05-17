import ProductService from "../services/product.services.js";
import { Request, Response } from "express";
import { injectable, inject } from "inversify";


class ProductsController {
  private service: ProductService = new ProductService();
  // Get all products
  async getProducts(req: Request, res: Response) {
    try {
      const products = await this.service.getProducts();
      res.status(200).json(products);
    } catch (error) {
      console.log(error);
    }
  }

  // Get product by id
  async getProductById(req: Request, res: Response) {
    try {
      const product = await this.service.getProductById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
  }

  // Create a new product
  async createProduct(req: Request, res: Response) {
    try {
      const product = await this.service.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      console.log(error);
    }
  }
}

export default ProductsController;