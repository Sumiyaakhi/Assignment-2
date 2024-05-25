import express, { Request, Response, NextFunction } from "express";
import { ProductRoutes } from "./modules/products/product.route";
import { OrdersRoutes } from "./modules/orders/order.route";

const app = express();

app.use(express.json());

app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrdersRoutes);

// Catch all undefined routes
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Error-handling middleware
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "An internal server error occurred",
    error: err.message,
  });
});

export default app;
