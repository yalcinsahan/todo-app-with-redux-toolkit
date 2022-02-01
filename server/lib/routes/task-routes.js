import express from 'express'
import { createTask, deleteTask, getAllTasks, getTask, updateTask } from '../controllers/task-controller.js'

const router = express.Router()

router.get("/tasks/:id", getTask)

router.get("/tasks", getAllTasks)

router.post("/add", createTask)

router.delete("/delete/:id", deleteTask)

router.put("/update/:id", updateTask)

export default router