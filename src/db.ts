import { Connection, createConnection } from 'mongoose'
// import { log } from './logger'

const connectionOptions = {
  dbName: 'app',
  useNewUrlParser: true,
  useUnifiedTopology: true
}
const MONGO_URL: string = process.env.MONGO_URL
console.log('MONGO_URL: ', MONGO_URL)
export const db: Connection = createConnection(MONGO_URL, connectionOptions)

// CONNECTION EVENTS
// When successfully connected
db.on('connected', () => {
  console.log('Mongoose default connection open to ' + MONGO_URL)
})

// If the connection throws an error
// db.on('error', (err) => {
//   console.log('Mongoose default connection error: ' + err)
// })

// When the connection is disconnected
db.on('disconnected', () => {
  console.log('Mongoose default connection disconnected')
})

const sigs: any = ['SIGINT', 'SIGTERM', 'SIGQUIT']
// If the Node process ends, close the Mongoose connection
sigs.forEach((signal) => process.on(signal, () => {
  db.close(() => {
    console.log('Mongoose default connection disconnected through app termination')
    process.exit(0)
  })
    // .catch((err) => { throw err })
}))
