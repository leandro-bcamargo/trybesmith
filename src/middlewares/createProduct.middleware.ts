import { NextFunction, Request, Response } from "express";
import createProductSchema from "./schemas/createProductSchema";
import CustomError from "../utils/CustomError";

function createProductMiddleware(req: Request, res: Response, next: NextFunction) {
  const { name, amount } = req.body;
  const { error } = createProductSchema.validate({ name, amount });
  if (error) {
    let status = 'GENERIC';
    const type = error.details[0].type;
    const message = error.details[0].message;
    if (type === 'any.required') {
      status = 'INVALID_DATA';
    } else if (type === 'string.base' || type === 'string.min') {
      status = 'UNPROCESSABLE';
    }
    throw new CustomError(status, message);
  }

  next();
}

export default createProductMiddleware;
