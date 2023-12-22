import { NextFunction, Request, Response } from "express"
import productService from "../services/product.service"
import httpStatusMap from "../utils/httpStatusMap";
import { nextTick } from "process";

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { name, amount } = req.body;
    const { status, data } = await productService.create(name, amount);

    return res.status(httpStatusMap(status)).json(data);  
  } catch (error) {
    next(error)
  }
}

async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const { status, data } = await productService.getAll();
  
    return res.status(httpStatusMap(status)).json(data);   
  } catch (error) {
    next(error)
  }
}

export default {
  create,
  getAll,
}