import { userModel } from "../models";
import { User } from "../types/User";
import CustomError from "../utils/CustomError";
import jwtUtils from "../utils/jwtUtils";

async function create({ username, vocation, level, password }: User) {
  const { insertId } = await userModel.create({ username, vocation, level, password });

  if (!insertId) throw new CustomError('INVALID_DATA', "Couldn't create user");

  const token = jwtUtils.sign({ id: insertId, username });

  return { status: 'CREATED', data: { token } };
}

export default {
  create,
}