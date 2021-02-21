import mongoose from 'mongoose'
// import { log } from './logger'

export function initDB (): Promise<typeof mongoose> {
  return mongoose.connect(String(process.env.MONGO_URL), {
    dbName: 'app',
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    // bufferCommands: false,
    serverSelectionTimeoutMS: 2000
  })
}
