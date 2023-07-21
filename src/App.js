
import './App.css';
import { BrowserRouter as Router , Route,Routes } from 'react-router-dom';
import Form from './components/TaskForm';
import SignInForm from './components/sign';
import LoginForm from './components/login';
import NewTask from './components/newTask';
import { UpdateTask } from './components/updateTask';
// import { TaskProvider } from './TaskContext';

function App() {
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

