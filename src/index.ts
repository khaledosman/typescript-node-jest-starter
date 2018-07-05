
import * as express from 'express'
import * as compression from 'compression'
import * as helmet from 'helmet'
import { config } from 'dotenv'

config()
const app = express()

app.use(compression())
app.use(helmet())
app.use(express.json())

app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}!`))
