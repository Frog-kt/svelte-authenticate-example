import { parseSecureToken } from '../libs/auth';
import { Request, Response, NextFunction } from 'express'

export function exampleMiddleware() { }

export async function isAuth(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies[process.env.AUTH_COOKIE_NAME];
    if (!token) res.status(401).json({ success: false });

    const authUser = await parseSecureToken(token);
    if (!authUser) res.status(401).json({ success: false });

    req.user = authUser.userId;
    next();
}