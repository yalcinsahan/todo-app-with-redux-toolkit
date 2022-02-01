import Task from '../models/task.js'

export const createTask = (req, res) => {
    Task.create({
        text: req.body.text,
    })
        .then(response => res.send(response))
        .catch(err => res.send(err))
}

export const getTask = (req, res) => {
    Task.findById(req.params.id)
        .then(response => res.send(response))
        .catch(err => res.send(err))
}

export const getAllTasks = (req, res) => {
    Task.find({})
        .then(response => res.send(response))
        .catch(err => res.send(err))
}

export const deleteTask = (req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(response => res.send({ message: "Task was deleted successfully" }))
        .catch(err => res.send(err))
}

export const updateTask = (req, res) => {
    Task.findByIdAndUpdate(req.params.id, req.body)
        .then(() => getTask(req, res))
        .catch(err => res.send(err))
}