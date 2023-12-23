import { NextFunction, Request, Response } from "express";
import CustomError from "../utils/CustomError";
import httpStatusMap from "../utils/httpStatusMap";

function errorMiddleware(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof CustomError) {
    const { status, message } = err;
    console.log('customerror:', status, message)
    return res.status(httpStatusMap(status)).json({ message })
  }
  const { message } = err;
  console.log('normalerror:', 500, message)
  return res.status(500).json({ message })
}

export default errorMiddleware;