import { NextFunction, Request, Response } from "express";
import orderService from "../services/order.service";
import httpStatusMap from "../utils/httpStatusMap";

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const {status, data} = await orderService.getAll();
    
    return res.status(httpStatusMap(status)).json(data);
  } catch (error) {
    next(error)
  }
}

export default {
  getAll,
}