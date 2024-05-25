import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// create product
const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);
  return result;
};
// get all products and search products by name
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
// delete a single product
const deleteSingleProduct = async (productId: string) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId).exec();
    return deletedProduct;
  } catch (err: any) {
    throw new Error(`Could not delete product: ${err.message}`);
  }
};

// search products by name
const searchProductsByName = async (query: string) => {
  try {
    const searchResults = await Product.find({
      name: { $regex: query, $options: "i" },
    }).exec();

    return searchResults;
  } catch (err: any) {
    throw new Error(
      `An error occurred while searching products: ${err.message}`
    );
  }
};

export const ProductServices = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
  searchProductsByName,
};
