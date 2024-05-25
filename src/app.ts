import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/products/product.route";

const app = express();
// parser
app.use(express.json());

app.use("/api/products", ProductRoutes);
app.use("/api/orders", ProductRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Akhi!");
});

export default app;
