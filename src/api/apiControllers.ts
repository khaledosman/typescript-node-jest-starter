import { Router } from 'express'
import { dogControllers } from './dogControllers'

export const apiControllers: Router = Router()

apiControllers.get('/', (req, res) => {
  res.send({ name: 'API endpoints' })
})

apiControllers.use('/dogs', dogControllers)
