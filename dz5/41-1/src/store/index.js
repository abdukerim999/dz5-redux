import { configureStore } from "@reduxjs/toolkit";
import titleReducer from './titleSlice'
import tasksReducer from './tasksSlice'

export const store = configureStore({
    reducer: {
        titleReducer,
        tasksReducer
    },
})