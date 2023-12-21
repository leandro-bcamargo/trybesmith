import { NextFunction, Request, Response } from "express"
import productService from "../services/product.service"
import httpStatusMap from "../utils/httpStatusMap";

async function create(req: Request, res: Response) {
  const { name, amount } = req.body;
  const {status, data} = await productService.create(name, amount);
  return res.status(httpStatusMap(status)).json(data);
}

export default {
  create,
}