import { Router } from 'express'
import { Dog } from '../models/dog'

export const dogControllers: Router = Router()

dogControllers.get('/', (req, res) => {
  setTimeout(() => {
    Dog.find({}).lean()
      .then((docs) => res.send({ randomNumber: Math.random() * 100, dogs: docs }))
      .catch((err) => res.status(500).send(err))
  }, 5000)
})

dogControllers.post('/', async (req, res) => {
  await new Dog({ name: 'woof' })
    .save()
  res.send('OK')
})
