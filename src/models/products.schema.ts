import mongoose, { ObjectId } from "mongoose";
interface ProductType {
  name: string;
  description: string;
  price: number;
  countInStock: number;
  image: string;
  created_at: Date;
  updated_at: Date;
}

const productSchema = new mongoose.Schema<ProductType>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  countInStock: { type: Number, required: true },
  image: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

export default mongoose.model<ProductType>("Product", productSchema);