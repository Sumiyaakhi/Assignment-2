import { Schema, model, Document } from "mongoose";
import { TOrder } from "./order.interface";

// Define the OrderItem Schema
const OrderItemSchema: Schema = new Schema<TOrder & Document>({
  email: { type: String, required: true },
  productId: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
});

export const Order = model<TOrder & Document>("OrderItem", OrderItemSchema);
