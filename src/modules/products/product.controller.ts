import { Request, Response } from "express";
import { ProductServices } from "./product.service";

// create prosuct
const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductServices.createProduct(productData);
  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

// get products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProduct();
    res.status(200).json({
      success: true,
      message: "Products are fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not match product!",
      error: err,
    });
  }
};
// get single product
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProduct(productId);
    res.status(200).json({
      success: true,
      message: "Product is retrieved successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Could not match product!",
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
};
