import { Request, Response } from "express";
import { OrderServices } from "./order.service";

// create order
const createOrder = async (req: Request, res: Response) => {
  const OrderData = req.body;
  const result = await OrderServices.createOrder(OrderData);
  res.json({
    success: true,
    message: "Order created successfully!",
    data: result,
  });
};

// Get all orders or search orders by email
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;

    let result;
    if (email && typeof email === "string") {
      // Search orders by email if email parameter is provided
      result = await OrderServices.searchOrdersByEmail(email);
      res.status(200).json({
        success: true,
        message: `Orders fetched successfully for '${email}' email!`,
        data: result,
      });
    } else {
      // Fetch all orders if no email parameter is provided
      result = await OrderServices.getAllOrders();
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: result,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching orders.",
      error: err.message,
    });
  }
};

export const OrderControllers = {
  createOrder,
  getAllOrders,
};
