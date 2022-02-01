import mongoose from 'mongoose'
const { Schema } = mongoose

const taskSchema = new Schema({
    id: { type: Number, required: true },
    text: { type: String, required: true },
})


export default mongoose.model("Task", taskSchema)