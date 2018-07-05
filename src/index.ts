
import * as compression from 'compression'
import { config } from 'dotenv'
import * as express from 'express'
import * as helmet from 'helmet'

config()
export const app = express()

app.use(compression())
app.use(helmet())
app.use(express.json())

app.get('/', (req, res) => res.send({ message: 'Hello world!' }))

app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}!`))
