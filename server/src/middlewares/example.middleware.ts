import { parseSecureToken } from '../libs/auth'
import { Request, Response, NextFunction } from 'express'

export function exampleMiddleware() {}

export async function isAuth(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies["Bearer"];
    if (!token) return res.status(401).json({ success: false, error: 'token notfound', });

    const authUser = await parseSecureToken(token);
    if (!authUser) return res.status(401).json({ success: false, error: 'token invalid', });

  req.user = authUser.userId
  next()
}
