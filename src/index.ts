import './helpers/load-env'
import express from 'express'
import compression from 'compression'
// import ExpressBunyanLogger from 'express-bunyan-logger'
import ExpressRateLimit from 'express-rate-limit'
import ExpressRedisCache from 'express-redis-cache'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
import http from 'http'
import { initDB } from './db'
import { apiControllers } from './api/apiControllers'
import { handleGracefulShutdown } from './helpers/handle-graceful-shutdown'

// import { log, loggerOptions } from './logger'

export const app = express()

// Cache Setup
const cache = ExpressRedisCache({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  expire: 60 * 60 * 2 // 2 hours
  //   auth_pass: process.env.REDIS_PASSWORD
})

// Rate limit setup
// only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)
app.enable('trust proxy')
const apiLimiter = new ExpressRateLimit({
  // delayMs: 0, // disabled
  max: 100
  // windowMs: 15 * 60 * 1000 // 15 minutes
})

// Middleware
// app.use(ExpressBunyanLogger(loggerOptions))
app.use(compression())
app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/', apiLimiter, cache.route({ expire: 5 }))

app.use('/api', apiControllers)
app.get('/', (req, res) => res.send({ message: 'Hello world!' }))

const server = http.createServer(app)

// graceful start
initDB()
  .then((connection) => {
    console.log('connected to db')
    server.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}!`))
    handleGracefulShutdown(server, connection)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
