
import * as compression from 'compression'
import { config } from 'dotenv'
config()
import * as express from 'express'
// import * as ExpressBunyanLogger from 'express-bunyan-logger'
import * as ExpressRateLimit from 'express-rate-limit'
import * as ExpressRedisCache from 'express-redis-cache'
import * as helmet from 'helmet'
import { apiControllers } from './api/controllers'
// import { log, loggerOptions } from './logger'

export const app = express()

// Cache Setup
const cache = ExpressRedisCache({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
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
app.use(express.json())

app.use('/api/', apiLimiter, cache.route({ expire: 5 }))

app.use('/api', apiControllers)
app.get('/', (req, res) => res.send({ message: 'Hello world!' }))

app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}!`))
