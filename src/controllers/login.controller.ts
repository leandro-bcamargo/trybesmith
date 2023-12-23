import { NextFunction, Request, Response } from "express";
import loginService from "../services/login.service";
import httpStatusMap from "../utils/httpStatusMap";

async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const {username, password} = req.body;
    const {status, data} = await loginService.verifyLogin({username, password});
    
    return res.status(httpStatusMap(status)).json(data);
  } catch (error) {
    next(error);
  }
}

export default {
  login,
}