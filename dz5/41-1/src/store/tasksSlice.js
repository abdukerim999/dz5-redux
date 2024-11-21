import {createSlice} from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        activeTask: null
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                title: action.payload,
                timeSpent: 0,
                status: 'Pending'
            });
        },
        setActiveTask: (state, action) => {
            state.tasks.forEach(task => {
                if (task.id === action.payload) {
                    task.status = 'Active';
                } else if (task.status === 'Active') {
                    task.status = 'Paused';
                }
            });
            state.activeTask = action.payload;
        },
        incrementTimeSpent: (state) => {
            if (state.activeTask) {
                const task = state.tasks.find(task => task.id === state.activeTask);
                if (task) {
                    task.timeSpent += 1;
                }
            }
        },
        completeTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.status = 'Completed';
            }
            if (state.activeTask === action.payload) {
                state.activeTask = null;
            }
        },
        editTask: (state, action) => {
            const { id, newTitle } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.title = newTitle;
            }
        }
    }
});

export const { addTask, setActiveTask, incrementTimeSpent, completeTask, editTask } = tasksSlice.actions;
export default tasksSlice.reducer;
