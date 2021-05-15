import { sendTokenResponse } from '../libs/tokenResponse';
import express, { Request, Response, NextFunction } from 'express'

const user = { id: 'id_xxxxx', username: "hoge", password: "foo", secret: "This message is secret!!" }

export async function signup(req: Request, res: Response, next: NextFunction) {


  res.status(200).json({})
}

export async function login(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;

  if (username == user.username && password == user.password) {
    // トークンの生成
    sendTokenResponse(user.id, res);
  } else {
    res.status(401).json({ error: "Invalid username or password" })
  }
}

export async function me(req: Request, res: Response, next: NextFunction) {
  console.log(req.user);
  res.status(200).json({
    success: true,
    secret: user.secret
  })
}
