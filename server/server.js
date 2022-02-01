import express from 'express'
import cors from 'cors'
import { dbConnection } from './lib/db/db-connection.js'
import taskRouter from './lib/routes/task-routes.js'

const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

dbConnection()

app.use("/task", taskRouter)

app.listen(8000)