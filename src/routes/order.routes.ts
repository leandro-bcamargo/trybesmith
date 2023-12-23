import { Router } from "express";
import { orderController } from "../controllers";

const orderRouter = Router();

orderRouter.get('/orders', orderController.getAll);

export default orderRouter;