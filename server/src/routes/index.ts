import { Express } from 'express'
import authRouter from './auth.route'

export function registerRoutes(app: Express) {
  app.use('/auth', authRouter)
}
