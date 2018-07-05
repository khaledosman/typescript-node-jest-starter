
import * as compression from 'compression'
import { config } from 'dotenv'
import * as express from 'express'
import * as expressBunyanLogger from 'express-bunyan-logger'
import * as helmet from 'helmet'
import { log } from './logger'
config()
export const app = express()

app.use(compression())
app.use(helmet())
app.use(express.json())

app.use(expressBunyanLogger({name: 'AppName',
  streams: [{
    type: 'rotating-file'
    // level: 'info',                  // loging level
    // path: './logs/AppName.log',
    // period: '1d',   // daily rotation
    // count: 3        // keep 3 back copies
  }]
}))

app.get('/', (req, res) => res.send({ message: 'Hello world!' }))
app.listen(process.env.PORT, () => log.info(`Server running on ${process.env.PORT}!`))
