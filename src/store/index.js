import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice';

// the redux store
const store = configureStore({
    reducer: {
        // the todo state values can be accessed by ".todo"
        todo: todoReducer,
    }
})

export default store;