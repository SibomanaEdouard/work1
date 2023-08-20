


import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Form from "./components/TaskForm";
import SignInForm from "./components/sign";
import LoginForm from "./components/login";
import NewTask from "./components/newTask";
import { UpdateTask } from "./components/updateTask";
import Appearance from "./settings/settingComponents/appear";
import History from "./settings/settingComponents/history";
import Profile from "./settings/settingComponents/profile";
import Secure from "./settings/settingComponents/secure";


function App() {

    const currentPath = window.location.pathname;

    // Update the body's background color based on the current route path
    switch (currentPath) {
        case "/addtask":
          document.body.style.backgroundColor = "#DEDEDE";
          break;
        case "/":
          document.body.style.backgroundColor = "#DEDEDE";
          break;
        case "/updatetask":
          document.body.style.backgroundColor = "#DEDEDE";
          break;
          case "/sign":
            document.body.style.backgroundColor = "#DEDEDE";
            break;

        case "/tasks":
          document.body.style.backgroundColor = "#ffffff";
            break;
        case "/appearance":
          document.body.style.backgroundColor = "#ffffff";
            break;
        case "/profile":
          document.body.style.backgroundColor = "#ffffff";
            break;
        case "/security":
        case "/history":
            document.body.style.backgroundColor = "#ffffff";
            break;
        default:
            document.body.style.backgroundColor = "#ffffff";
            break;
    }

  return (
    <Router basename="/">
      <div>
        </div>
      <Routes>
        <Route path='/tasks' element={<Form />} />
        <Route path='/sign' element={<SignInForm />} />
        <Route path='/' element={<LoginForm />} />
        <Route path="/addtask" element={<NewTask />} />
        <Route path="/updatetask" element={<UpdateTask />} />
        <Route path="/appearance" element={<Appearance />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/security" element={<Secure />} />
      </Routes>
    
    </Router>
  );
}

export default App;
