import jwt from 'jsonwebtoken';
import config from '../config'

export type AuthUser = {
  userId: string;
};

export function createSecureToken(payload: AuthUser) {
  const token = jwt.sign(payload, config.jwtSecret);
  return token;
}

export async function parseSecureToken(token: string): Promise<AuthUser | null> {
  try {
    return jwt.verify(token, config.jwtSecret) as AuthUser;
  } catch (error) {
    console.error('auth error', error);
    return null;
  }
}
