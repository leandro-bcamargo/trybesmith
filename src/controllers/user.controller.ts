import { NextFunction, Request, Response } from "express";
import httpStatusMap from "../utils/httpStatusMap";
import { userService } from "../services";

async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const { username, vocation, level, password } = req.body;
    const { status, data } = await userService.create({ username, vocation, level, password });

    return res.status(httpStatusMap(status)).json(data);
  } catch (error) {
    next(error);
  }
}

export default {
  create,
}