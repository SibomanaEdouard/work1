
import './App.css';
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import Form from './components/TaskForm';
import SignInForm from './components/sign';
import LoginForm from './components/login';
import NewTask from './components/newTask';
import { UpdateTask } from './components/updateTask';
import { useEffect } from 'react';
// import { TaskProvider } from './TaskContext';

function App() {
  useEffect(() => {
    // Get the current route path
    const currentPath = window.location.pathname;

    // Set different background colors based on the current route path
    switch (currentPath) {
      case "/addtask":
        document.body.style.backgroundColor = "#DEDEDE"; 
        break;
      case "/tasks":
        document.body.style.backgroundColor = "#ffffff"; 
        break;
      case "/sign":
        document.body.style.backgroundColor = "#DEDEDE"; 
        break;
        case "/":
          document.body.style.backgroundColor = "#DEDEDE"; 
          break;
          case "/updatetask":
            document.body.style.backgroundColor = "#DEDEDE"; 
            break;
      default:
        document.body.style.backgroundColor = "##DEDEDE"; 
        break;
    }

    // Clean up the effect
    return () => {
      document.body.style.backgroundColor = "##DEDEDE"; 
    };
  }, []);
  return(
    <Router basename="/">
      {/* <TaskProvider> */}
      <Routes>
      <Route path='/tasks' element={<Form/>}/>
      <Route path='/sign' element={<SignInForm/>}/>
      <Route path='/' element={<LoginForm/>}/>
      <Route path="/addtask" element={<NewTask/>}/>
      <Route path="/updatetask" element={<UpdateTask/>}/>
      </Routes>
      {/* </TaskProvider> */}
    </Router>

  )  
}

export default App;

