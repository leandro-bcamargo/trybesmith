import { Router } from "express";
import { orderController } from "../controllers";
import authMiddleware from "../middlewares/authMiddleware";
import createOrderMiddleware from "../middlewares/createOrder.middleware";

const orderRouter = Router();

orderRouter.get('/orders', orderController.getAll);
orderRouter.post('/orders', authMiddleware, createOrderMiddleware, orderController.create);

export default orderRouter;