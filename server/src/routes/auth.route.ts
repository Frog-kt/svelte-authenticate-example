import { isAuth } from '@/middlewares'
import { Router } from 'express'
import { signup, login, me } from '../controllers'

const router = Router()

router.post('/signup', signup)
router.post('/login', login)
router.get('/me', isAuth, me)

export default router
