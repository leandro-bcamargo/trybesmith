import { NextFunction, Request, Response } from "express";
import orderService from "../services/order.service";
import httpStatusMap from "../utils/httpStatusMap";
import { RequestUser, RequestWithUser } from "../types/Request";

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const { status, data } = await orderService.getAll();

    return res.status(httpStatusMap(status)).json(data);
  } catch (error) {
    next(error)
  }
}

async function create(req: RequestWithUser, res: Response, next: NextFunction) {
  try {
    const { productsIds } = req.body;
    const { id: userId } = req.user as RequestUser;
    const { status, data } = await orderService.create({ userId, productsIds })

    return res.status(httpStatusMap(status)).json(data);
  } catch (error) {
    next(error)
  }
}

export default {
  getAll,
  create,
}