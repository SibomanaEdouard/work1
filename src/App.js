
import './App.css';
// import Header from './components/Header';
//import {Router}
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import Form from './components/TaskForm';
import SignInForm from './components/sign';
import LoginForm from './components/login';
// import { useEffect,useState } from 'react';

// import TodoList from './components/TodoList';

function App() {
  return(
    <Router>
      <Routes>
      <Route path='/tasks' element={<Form/>}/>
      <Route path='/sign' element={<SignInForm/>}/>
      <Route path='/' element={<LoginForm/>}/>
      </Routes>
    </Router>

  )

  // // This is for saving in the local memory
  // const initialStorage = JSON.parse(localStorage.getItem("todos")) || [];
  // const [inputs, setInputs] = useState("");
  // const [todos, setTodos] = useState(initialStorage);
  // const [editTodo, setEditTodo] = useState(null);

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  // return (
  //   <div className="App">
  //     <Header />
  //     <div className='border border-primary rounded border-1 w-75 ms-5 pt-3' >
  //     <Form
  //       input={inputs}
  //       setInput={setInputs}
  //       todo={todos}
  //       setTodo={setTodos}
  //       editTodo={editTodo}
  //       setEditTodo={setEditTodo}
  //     />
  //     <TodoList
  //       todo={todos}
  //       setTodo={setTodos}
  //       editTodo={editTodo}
  //       setEditTodo={setEditTodo}
  //     />
  //     </div>
  //   </div>
  // );
  
}

export default App;

