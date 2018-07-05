
import * as compression from 'compression'
import { config } from 'dotenv'
import * as express from 'express'
import * as helmet from 'helmet'

config()
const app = express()

app.use(compression())
app.use(helmet())
app.use(express.json())

app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}!`))
