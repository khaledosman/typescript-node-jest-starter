import { Model, Schema } from 'mongoose'
import { db } from '../db'

const DogSchema: Schema = new Schema({
  name: String
})

export const Dog: Model<any> = db.model('Dog', DogSchema)

new Dog({ name: 'Woof' })
  .save()
