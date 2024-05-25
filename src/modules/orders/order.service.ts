import { TOrder } from "./order.interface";
import { Order } from "./order.model";

// create product
const createOrder = async (payLoad: TOrder) => {
  const result = await Order.create(payLoad);
  return result;
};

// get all orders and search orders by email
const getAllOrders = async () => {
  const result = await Order.find();
  return result;
};

// Search orders by email
const searchOrdersByEmail = async (email: string) => {
  try {
    const searchResults = await Order.find({
      email: { $regex: email, $options: "i" },
    }).exec();

    return searchResults;
  } catch (err: any) {
    throw new Error(`An error occurred while searching orders: ${err.message}`);
  }
};

export const OrderServices = {
  createOrder,
  getAllOrders,
  searchOrdersByEmail,
};
