import jwt from 'jsonwebtoken'
import { User } from '../types/User';
import { TokenPayload } from '../types/TokenPayload';
import CustomError from './CustomError';

const secret = process.env.JWT_SECRET || 'secret';

function sign(payload: TokenPayload): string {
  const token = jwt.sign(payload, secret);

  return token;
}

function verify(token: string): TokenPayload {
  try {
    const payload = jwt.verify(token, secret);

    return payload as TokenPayload;
  } catch (error) {
    throw new CustomError('UNAUTHORIZED', 'Invalid token');
  }
}

export default {
  sign,
  verify,
}