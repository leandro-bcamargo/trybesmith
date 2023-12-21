import { NextFunction, Request, Response } from "express";
import CustomError from "../utils/CustomError";
import httpStatusMap from "../utils/httpStatusMap";

function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof CustomError) {
    const { status, message } = err;
    return res.status(httpStatusMap(status)).json({ message })
  }
  const { message } = err;
  return res.status(500).json({ message })
}

export default errorMiddleware;