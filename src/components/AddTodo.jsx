import { Button, Label, TextInput } from "flowbite-react";
import { LuListTodo } from "react-icons/lu";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todoSlice";
import { useAddToStorage } from "../hooks/useStorage";

// Component to add a task
const AddTodo = () => {
  // the ref for the task
  const taskRef = useRef();

  // the todos from redux
  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();

  // Function to be executed on submitting the form
  const addTodoHandler = (event) => {
    // prevent page reload
    event.preventDefault();

    // get the task entered
    const task = taskRef.current.value;

    // add the new task
    dispatch(todoActions.addTask({ task, completed: false }));

    // save tasks to local storage
    useAddToStorage(task);
    
    taskRef.current.value = "";
  };

  return (
    <form
      className="flex flex-col gap-4 md:max-w-md max-w-sm mx-auto md:my-14 my-7"
      onSubmit={addTodoHandler}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="todo" value="Enter a Task" />
        </div>
        <TextInput
          id="todo"
          type="text"
          addon={<LuListTodo />}
          placeholder="To-Do"
          ref={taskRef}
          required
        />
      </div>
      <Button className="bg-blue-950" type="submit">
        Add Task
      </Button>
    </form>
  );
};

export default AddTodo;
