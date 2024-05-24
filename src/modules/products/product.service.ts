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
// update single product
const updateSingleProduct = async (_id: string, updateData: any) => {
  const updatedProduct = await Product.findOneAndUpdate({ _id }, updateData, {
    new: true,
  });
  return updatedProduct;
};

export const ProductServices = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
};
