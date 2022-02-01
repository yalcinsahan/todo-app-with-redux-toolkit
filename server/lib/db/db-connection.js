import mongoose from 'mongoose'

export const dbConnection = () => {
    mongoose.connect('mongodb://0.0.0.0:27017/todo-app')
        .then(() => console.log("database connecction successful"))
        .catch((err) => console.log(err));
}