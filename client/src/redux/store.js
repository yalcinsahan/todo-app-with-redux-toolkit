import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './slices/task-slice'

export default configureStore({
    reducer: {
        tasks: taskReducer,
    },
})