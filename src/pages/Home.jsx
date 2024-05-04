import React, { useEffect } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { useDispatch } from "react-redux";
import { todoActions } from "../store/todoSlice";

// The home page
const Home = () => {
  const dispatch = useDispatch();

  // get tasks saved in localstorage when component mounts
  useEffect(() => {
    let tasks = localStorage.getItem("tasks");
    if (tasks) {
      tasks = JSON.parse(tasks);
      for (let i of tasks) {
        // add tasks to redux state
        dispatch(todoActions.addTaskFromLocal(i));
      }
    }
  }, []);

  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  );
};

export default Home;
