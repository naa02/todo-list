import './App.css';
import TodoPage from "./todo-js/TodoPage";
import TodoPageTs from "./todo-ts/TodoPage";
import {useState} from "react";

function App() {
  const [isTs, setIsTs] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setIsTs(!isTs)}>{ isTs ? 'Toggle to JS' : 'Toggle to TS' }</button>
      { isTs
        ? <TodoPageTs />
        : <TodoPage /> }
    </div>
  );
}

export default App;
