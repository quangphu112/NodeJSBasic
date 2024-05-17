import Product from '../models/products.schema.js';
class ProductService {
  // Get all products
  async getProducts() {
    try {
      return await Product.find();
    } catch (error) {
      console.log(error);
    }
  }

  // Get product by id
  async getProductById(id: any) {
    try {
        const product = await Product.findById(id);
        return product;
    } catch (error) {
        console.log(error);
    }
  }

  // Create a new product
  async createProduct(product: any) {
    try {
      return await Product.create(product);
    } catch (error) {
      console.log(error);
    }
  }
}

export default ProductService ;
