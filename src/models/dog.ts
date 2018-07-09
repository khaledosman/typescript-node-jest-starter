import { Schema } from 'mongoose'
import { db } from '../db'

export const Dog = db.model('Dog', new Schema({
  name: String
}))
