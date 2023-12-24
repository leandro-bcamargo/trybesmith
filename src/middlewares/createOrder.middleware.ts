import { NextFunction, Request, Response } from "express";
import createOrderSchema from "./schemas/createOrderSchema";
import CustomError from "../utils/CustomError";

function createOrderMiddleware(req: Request, res: Response, next: NextFunction) {
  const { productsIds } = req.body;
  const { error } = createOrderSchema.validate({ productsIds })

  if (error) {
    let status = 'GENERIC';
    const message = error.details[0].message;
    const type = error.details[0].type;
    if (type === 'any.required') {
      status = 'INVALID_DATA';
    } else if (['array.base', 'array.min', 'number.base'].includes(type)) {
      status = 'UNPROCESSABLE';
    }
    throw new CustomError(status, message);
  }

  next();
}

export default createOrderMiddleware;