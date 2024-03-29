import { NextFunction, Request, Response } from "express";
import { TokenPayload } from "../types/TokenPayload";
import jwtUtils from "../utils/jwtUtils";
import CustomError from "../utils/CustomError";
import { userModel } from "../models";
import { RequestWithUser } from "../types/Request";

async function authMiddleware(req: RequestWithUser, res: Response, next: NextFunction) {
  const { authorization: token } = req.headers;

  if (!token) {
    throw new CustomError('UNAUTHORIZED', 'Token not found')
  }

  const { username }: TokenPayload = jwtUtils.verify(token);
  const user = await userModel.getByUsername(username);

  if (!user) {
    throw new CustomError('UNAUTHORIZED', 'Invalid token')
  }

  req.user = user;
  next()
}

export default authMiddleware;