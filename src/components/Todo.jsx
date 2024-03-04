import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../slices/todoSlice";
const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <li className="mt-6 w-full text-white flex flex-col items-center gap-1">
      {todos.length > 0 ? (
        todos.map((todo, index) => {
          return (
            <ul
              key={todo.id}
              className="bg-slate-500 rounded w-11/12 max-w-2xl px-3 py-1 flex justify-between"
            >
              <div>{`${index + 1}. ${todo.text}`}</div>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                <MdOutlineDelete />
              </button>
            </ul>
          );
        })
      ) : (
        <h2 className="text-black text-2xl">{"No tasks yet 😢"}</h2>
      )}
    </li>
  );
};
export default Todo;
