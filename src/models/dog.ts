import { Model, Schema, model } from 'mongoose'

const DogSchema: Schema = new Schema({
  name: String
})

export const Dog: Model<any> = model('Dog', DogSchema)