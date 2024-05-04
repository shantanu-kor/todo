import { createSlice } from "@reduxjs/toolkit";

const todoInitialState = { todos: [] }

// the slice for todo related actions and state
const todoSlice = createSlice({

    // the slice name
    name: "Tasks",

    // the slice initial state
    initialState: todoInitialState,

    // the slice reducers
    reducers: {

        // add a new task
        addTask(state, action) {
            state.todos = [action.payload, ...state.todos];
        },

        // add from local storage
        addTaskFromLocal(state, action) {
            state.todos = [...state.todos, action.payload];
        },

        // remove existing task
        removeTask(state, action) {
            const id = action.payload;
            const prevState = [...state.todos];
            prevState.splice(id, 1);
            state.todos = prevState;
        },

        // mark task as completed
        markCompleted(state, action) {
            const id = action.payload;
            const prevState = [...state.todos];
            prevState[id] = { ...prevState[id], completed: true }
            state.todos = prevState;
        },

        // mark task as not completed
        markPending(state, action) {
            const id = action.payload;
            const prevState = [...state.todos];
            prevState[id] = { ...prevState[id], completed: false }
            state.todos = prevState;
        }
    }
})

export default todoSlice.reducer;

export const todoActions = todoSlice.actions;