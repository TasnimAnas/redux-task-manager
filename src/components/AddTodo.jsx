import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../slices/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="bg-slate-500 p-5 rounded w-11/12 max-w-2xl text-center mt-7">
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          name="todo"
          placeholder="Add new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="px-2 py-1 bg-white rounded w-1/2 border-none"
        />
        <button
          type="submit"
          className="bg-red-500 px-3 py-1 rounded text-white font-semibold hover:bg-black border-none"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};
export default AddTodo;
