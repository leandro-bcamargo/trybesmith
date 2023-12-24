import { Request } from "express";

export type RequestUser = {
  id: number,
  username: string,
}

export type RequestWithUser = Request & {user?: RequestUser}