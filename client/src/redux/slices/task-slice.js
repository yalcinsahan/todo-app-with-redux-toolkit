import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
    const response = await axios.get('http://localhost:8000/task/tasks')
    return response.data
})

export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
    const response = await axios.post('http://localhost:8000/task/add', task)
    return response.data
})

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (_id) => {
    await axios.delete(`http://localhost:8000/task/delete/${_id}`)
    return _id
})

export const updateTask = createAsyncThunk('tasks/updateTask', async (task) => {
    const response = await axios.put(`http://localhost:8000/task/update/${task._id}`, task)
    return response.data
})

export const taskSlice = createSlice({
    name: "taskSlice",
    initialState: {
        tasks: [],
        status: 'idle',
        input: { _id: '', text: '' },
        error: null
    },

    reducers: {
        changeText: (state, action) => {
            state.input = action.payload
        }
    },

    extraReducers: {
        //fetchTasks
        [fetchTasks.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchTasks.fulfilled]: (state, action) => {
            state.tasks = action.payload
            state.status = 'succeeded'
        },
        [fetchTasks.rejected]: (state, action) => {
            state.error = action.error.message
        },

        //addTask
        [addTask.pending]: (state, action) => {
            state.status = 'loading'
        },
        [addTask.fulfilled]: (state, action) => {
            state.tasks.push(action.payload)
            state.input = { _id: '', text: '' }
            state.status = 'succeeded'
        },
        [addTask.rejected]: (state, action) => {
            state.error = action.error.message
        },

        //deleteTask
        [deleteTask.pending]: (state, action) => {
            state.status = 'loading'
        },
        [deleteTask.fulfilled]: (state, action) => {
            state.tasks = state.tasks.filter((item) => item._id !== action.payload)
            state.status = 'succeeded'
        },
        [deleteTask.rejected]: (state, action) => {
            state.error = action.error.message
        },

        //updateTask
        [updateTask.pending]: (state, action) => {
            state.status = 'loading'
        },
        [updateTask.fulfilled]: (state, action) => {
            state.tasks = state.tasks.map((element) => element._id === action.payload._id ? action.payload : element)
            state.input = { _id: '', text: '' }
            state.status = 'succeeded'
        },
        [updateTask.rejected]: (state, action) => {
            state.error = action.error.message
        },
    }

})

export const { changeText } = taskSlice.actions

export default taskSlice.reducer