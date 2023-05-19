
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';

function App() {
  // This is for saving in the local memory
  const initialStorage = JSON.parse(localStorage.getItem("todos")) || [];
  const [inputs, setInputs] = useState("");
  const [todos, setTodos] = useState(initialStorage);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Header />
      <div className='border border-primary rounded border-1 w-75 ms-5 pt-3' >
      <Form
        input={inputs}
        setInput={setInputs}
        todo={todos}
        setTodo={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <TodoList
        todo={todos}
        setTodo={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      </div>
    </div>
  );
}

export default App;

