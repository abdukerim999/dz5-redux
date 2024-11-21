import { createSlice } from "@reduxjs/toolkit";


const titleSlice = createSlice({
    name: 'titleSlice',
    initialState: {
        title: 'old title',
        inputValue: ''
    },
    reducers: {
        changeTitle: (state, action) => {
            state.title = 'new title'
        },
        changeTitleWithParams: (state, action) => {
            state.title = action.payload
            state.inputValue = ''
        },
        changeInputAction: (state, action) => {
            state.inputValue = action.payload
        },
        clearInput: (state, action) => {
            state.inputValue = ''
        },
        deleteTitle: (state, action) => {
            state.title = ''
            state.inputValue = ''
        }
    }
})

export const {
    changeTitle,
    changeTitleWithParams,
    changeInputAction, clearInput, deleteTitle } = titleSlice.actions

export default titleSlice.reducer