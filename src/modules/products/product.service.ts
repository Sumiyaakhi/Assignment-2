import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// create product
const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);
  return result;
};
// get all product
const getAllProduct = async () => {
  const result = await Product.find();
  return result;
};
// get single product
const getSingleProduct = async (_id: string) => {
  const result = await Product.findOne({ _id });
  return result;
};

export const ProductServices = {
  createProduct,
  getAllProduct,
  getSingleProduct,
};
