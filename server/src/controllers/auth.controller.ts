import { sendTokenResponse } from '../libs/tokenResponse'
import express, { Request, Response, NextFunction } from 'express'

const user = { id: 'id_xxxxx', username: 'hoge', password: 'foo', secret: 'This message is secret!!' }

export async function signup(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({})
}

export async function login(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body

  console.log(req.body)

  if (username == user.username && password == user.password) {
    // トークンの生成
    console.log('create Token!')
    // await sendTokenResponse(user.id, res)
    res.status(200).json({ text: 'hello' })
  } else {
    res.status(401).json({ error: 'Invalid username or password' })
  }
}

export async function me(req: Request, res: Response, next: NextFunction) {
  console.log(req.user)
  res.status(200).json({
    success: true,
    secret: user.secret,
  })
}

export async function test(req: Request, res: Response, next: NextFunction) {
  const continents = [
    {
      id: 1,
      name: 'Asia',
      population: '4,624,520,000',
      no_of_countries: 50,
      area: '44,579,000',
    },
    {
      id: 2,
      name: 'Africa',
      population: '1,327,042,300',
      no_of_countries: 54,
      area: '30,370,000',
    },
    {
      id: 3,
      name: 'North America',
      population: '590,176,500',
      no_of_countries: 23,
      area: '24,709,000',
    },
    {
      id: 4,
      name: 'South America',
      population: '429,276,300',
      no_of_countries: 12,
      area: '17,840,000',
    },
    {
      id: 5,
      name: 'Antartica',
      population: 'No real data on populants',
      no_of_countries: 0,
      area: '14,000,000',
    },
    {
      id: 6,
      name: 'Europe',
      population: '747,447,200',
      no_of_countries: 51,
      area: '10,180,000',
    },
    {
      id: 7,
      name: 'Australia',
      population: '42,448,700',
      no_of_countries: 14,
      area: '8,600,000',
    },
  ]

  res.status(200).send(continents)
}
