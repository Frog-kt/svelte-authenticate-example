import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import cookieParser from 'cookie-parser'
import config from './config'
import { registerRoutes } from './routes'

const app = express()

app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(cookieParser())
app.use(morgan('tiny'))

registerRoutes(app)

app.listen(config.port, () => {
  console.log(`Server listen on port ${config.port}`)
  console.log(`Runnning mode:${config.node_env}`)
})
