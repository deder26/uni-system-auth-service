import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { generateUserID } from './modules/users/users.utils'
import usersrouter from './modules/users/users.route'
const app: Application = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes

app.use('/api/v1/users/', usersrouter)

//testing routes
app.get('/', async (req: Request, res: Response) => {
  res.send(await generateUserID())
})

export default app
