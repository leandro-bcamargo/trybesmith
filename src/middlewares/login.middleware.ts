import { NextFunction, Request, Response } from "express";
import { Login } from "../types/Login";
import validateLoginSchema from "./schemas/validateLoginSchema";
import CustomError from "../utils/CustomError";

function loginMiddleware(req: Request, res: Response, next: NextFunction) {
  const login: Login = req.body;
  const { error } = validateLoginSchema.validate(login);
  if (error) {
    let status = 'GENERIC';
    const type = error.details[0].type;
    const message = error.details[0].message;
    if (type === 'any.required') {
      status = 'INVALID_DATA';
    }
    throw new CustomError(status, message)
  }
  next();
}

export default loginMiddleware;