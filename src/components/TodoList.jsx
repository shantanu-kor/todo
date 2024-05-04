import { ListGroup } from "react-bootstrap";
import React from "react";
import { MdPending } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store/todoSlice";
import { useDeleteFromStorage, useSetCompleted, useSetPending } from "../hooks/useStorage";

// Component to display the todos
const TodoList = () => {
  // get todos state
  const todos = useSelector((state) => state.todo.todos);

  const dispatch = useDispatch();

  // style the list item for according to if completed or not
  const isComplete = (completed) => {
    if (completed) {
      return "bg-lime-600 text-white";
    }
  };

  // mark task as not completed
  const markPendingHandler = (id) => {
    // update redux
    dispatch(todoActions.markPending(id));

    // update local storage
    useSetPending(id);
  };

  // mark task as completed
  const markDoneHandler = (id) => {
    // update redux
    dispatch(todoActions.markCompleted(id));

    // update local storage
    useSetCompleted(id);
  };

  const deleteTaskHandler = (id) => {
    // update redux
    dispatch(todoActions.removeTask(id));

    // update local storage
    useDeleteFromStorage(id);
  };

  return (
    <div>
      <ListGroup className="md:mx-14 mx-2">
        {todos.map((item, index) => (
          <ListGroup.Item
            className={`${isComplete(
              item.completed
            )} rounded-md p-1 border flex justify-between`}
            key={index}
          >
            <span>{isComplete(item.completed) ? <IoCheckmarkDoneCircle />  : <MdPending /> }</span>
            <span className="mt-1">{item.task}</span>
            <div>
              {item.completed ? (
                <button
                  className="border border-blue-600 rounded p-1 text-white bg-cyan-800"
                  onClick={markPendingHandler.bind(null, index)}
                >
                  Mark Pending
                </button>
              ) : (
                <button
                  className="border border-lime-600 rounded p-1 text-white bg-green-800"
                  onClick={markDoneHandler.bind(null, index)}
                >
                  Mark Done
                </button>
              )}
              <button
                className="border border-red-600 rounded p-1 text-white bg-rose-800 mx-2"
                onClick={deleteTaskHandler.bind(null, index)}
              >
                Delete
              </button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default TodoList;
