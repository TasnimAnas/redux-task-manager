import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div className="p-3 flex flex-col items-center w-full">
        <AddTodo />
        <Todo />
      </div>
    </>
  );
}

export default App;

