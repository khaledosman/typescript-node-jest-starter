import { createConnection } from 'mongoose'
import { log } from './logger'

const connectionOptions = {
  dbName: 'app'
}
const MONGO_URL = process.env.MONGO_URL
log.info('MONGO_URL: ', MONGO_URL)
export const db = createConnection(MONGO_URL, connectionOptions)
// CONNECTION EVENTS
// When successfully connected
db.on('connected', () => {
  log.info('Mongoose default connection open to ' + MONGO_URL)
})

// If the connection throws an error
db.on('error', (err) => {
  log.info('Mongoose default connection error: ' + err)
})

// When the connection is disconnected
db.on('disconnected', () => {
  log.info('Mongoose default connection disconnected')
})

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
  db.close(() => {
    log.info('Mongoose default connection disconnected through app termination')
    process.exit(0)
  })
  .catch((err) => { throw err })
})
