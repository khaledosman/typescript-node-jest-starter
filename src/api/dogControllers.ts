import { Router } from 'express'
import { Dog } from '../models/dog'

export const dogControllers: Router = Router()

dogControllers.get('/', (req, res) => {
  Dog.find({})
    .then((docs) => res.send({ randomNumber: Math.random() * 100, dogs: docs }))
    .catch((err) => res.status(500).send(err))
})
