import * as mongoose from 'mongoose'
import { db } from '../db'

export const Dog = db.model('Dog', new mongoose.Schema({
  name: String
}))
