
import * as compression from 'compression'
import { config } from 'dotenv'
import * as express from 'express'
import * as ExpressBunyanLogger from 'express-bunyan-logger'
import * as RateLimit from 'express-rate-limit'
// import * as ExpressRedisCache from 'express-redis-cache'
import * as helmet from 'helmet'
import { log, loggerOptions } from './logger'

config()

export const app = express()

/** Caching */
// const cache = ExpressRedisCache(
// {
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT,
//   auth_pass: process.env.REDIS_PASSWORD
// }
// )

/** Rate Limiter */
// only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)
app.enable('trust proxy')

const apiLimiter = new RateLimit({
  delayMs: 0, // disabled
  max: 100,
  windowMs: 15 * 60 * 1000 // 15 minutes
})

// only apply to requests that begin with /api/
app.use('/api/', /*cache.route(),*/ apiLimiter)

/** Logging */
app.use(ExpressBunyanLogger(loggerOptions))

/** Gzip compression */
app.use(compression())
/** Security headers */
app.use(helmet())
app.use(express.json())

app.get('/', (req, res) => res.send({ message: 'Hello world!' }))
app.listen(process.env.PORT, () => log.info(`Server running on ${process.env.PORT}!`))
