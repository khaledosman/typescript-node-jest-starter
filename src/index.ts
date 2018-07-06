
import * as compression from 'compression'
import { config } from 'dotenv'
import * as express from 'express'
import * as expressBunyanLogger from 'express-bunyan-logger'
import * as RateLimit from 'express-rate-limit'
import * as ExpressRedisCache from 'express-redis-cache'
import * as helmet from 'helmet'
import { log } from './logger'

config()

const cache = ExpressRedisCache(
  // {
  //   host: process.env.REDIS_HOST,
  //   port: process.env.REDIS_PORT,
  //   auth_pass: process.env.REDIS_PASSWORD
  // }
)

export const app = express()

// only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)
app.enable('trust proxy')

const apiLimiter = new RateLimit({
  delayMs: 0, // disabled
  max: 100,
  windowMs: 15 * 60 * 1000 // 15 minutes
})

// only apply to requests that begin with /api/
app.use('/api/', apiLimiter)
app.use(expressBunyanLogger({
  name: 'AppName'
    //   streams: [{
    // type: 'rotating-file'
    // level: 'info',                  // loging level
    // path: './logs/AppName.log',
    // period: '1d',   // daily rotation
    // count: 3        // keep 3 back copies
    //   }]
}))
app.use(compression())
app.use(helmet())
app.use(express.json())

app.get('/', cache.route(), (req, res) => res.send({ message: 'Hello world!' }))
app.listen(process.env.PORT, () => log.info(`Server running on ${process.env.PORT}!`))
