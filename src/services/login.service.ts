import { Login } from "../types/Login";
import jwtUtils from "../utils/jwtUtils";
import { userModel } from "../models";
import CustomError from "../utils/CustomError";
import { UserDB } from "../types/User";

async function verifyLogin({ username, password }: Login) {
  const user: UserDB = await userModel.getByUsername(username);

  if (!user || user.password !== password) throw new CustomError('UNAUTHORIZED', 'Username or password invalid');

  const { id } = user;

  const token = jwtUtils.sign({ id, username });

  return { status: 'SUCCESSFUL', data: { token } }
}

export default {
  verifyLogin,
}