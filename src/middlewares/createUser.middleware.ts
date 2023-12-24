import { NextFunction, Request, Response } from "express";
import createUserSchema from "./schemas/createUserSchema";
import { number } from "joi";
import CustomError from "../utils/CustomError";

function createUserMiddleware(req: Request, res: Response, next: NextFunction) {
  const { username, vocation, level, password } = req.body;
  const { error } = createUserSchema.validate({ username, vocation, level, password });
  if (error) {
    let status = 'GENERIC';
    const message = error.details[0].message;
    const type = error.details[0].type;
    if (type === 'any.required') {
      status = 'INVALID_DATA';
    } else if (['number.base', 'number.min', 'string.min', 'string.base'].includes('number.min')) {
      status = 'UNPROCESSABLE';
    }
    throw new CustomError(status, message);
  }

  next()
}

export default createUserMiddleware;