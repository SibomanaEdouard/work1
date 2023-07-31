// import React, { useState, useEffect } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Form from "./components/TaskForm";
// import SignInForm from "./components/sign";
// import LoginForm from "./components/login";
// import NewTask from "./components/newTask";
// import { UpdateTask } from "./components/updateTask";
// import Appearance from "./settings/settingComponents/appear";
// import History from "./settings/settingComponents/history";
// import Profile from "./settings/settingComponents/profile";
// import Secure from "./settings/settingComponents/secure";
// import { WiMoonWaxingCrescent5 } from "react-icons/wi";
// import { BsSun } from "react-icons/bs";
// import { getDarkMode } from "./mode";


// function App() {
//   // const [darkmode, setDarkmode] = useState(false);
//   const [darkmode, setDarkmode] = useState(localStorage.getItem("darkmode") === "true");
//   useEffect(() => {
//     // Get the current route path
   
//     const currentPath = window.location.pathname;
//     // Set different background colors based on the current route path
//     switch (currentPath) {
//       case "/addtask":
//         {document.body.style.backgroundColor=(darkmode ? "#0D0E17":"#DEDEDE")}
//         {document.body.style.color=(darkmode ? "#ffffff":"#000000")}
//         break;
//       case "/tasks":
//         {document.body.style.backgroundColor=(darkmode ? "#0D0E17":"#ffffff")}
//         {document.body.style.color=(darkmode ? "#ffffff":"#000000")}
//         break;
//       case "/sign":
//         {document.body.style.backgroundColor="#DEDEDE";}
//         break;
//       case "/":

// {document.body.style.backgroundColor="#DEDEDE";}
//         break;
//       case "/updatetask":
        
//         {document.body.style.backgroundColor=(darkmode ? "#0D0E17":"#DEDEDE")}
//         {document.body.style.color=(darkmode ? "#ffffff":"#000000")}
//         break;
//       case "/appearance":
//         {document.body.style.backgroundColor=(darkmode ? "#0D0E17":"#ffffff")}
//         {document.body.style.color=(darkmode ? "#ffffff":"#000000")}
//         break;
//       case "/profile":
//         {document.body.style.backgroundColor=(darkmode ? "#0D0E17":"#ffffff")}
//         {document.body.style.color=(darkmode ? "#ffffff":"#000000")}
//         break;
//       case "/security":
//         {document.body.style.backgroundColor=(darkmode ? "#0D0E17":"#ffffff")}
//         {document.body.style.color=(darkmode ? "#ffffff":"#000000")}
//         break;
//       case "/history":
//         {document.body.style.backgroundColor=(darkmode ? "#0D0E17":"#ffffff")}
//         {document.body.style.color=(darkmode ? "#ffffff":"#000000")}
//         break;
//       default:
//         {document.body.style.backgroundColor=(darkmode ? "#0D0E17":"#ffffff")}
//         {document.body.style.color=(darkmode ? "#ffffff":"#000000")}
//         break;
//     }
//   }, [darkmode]);


//   const handleDarkmodeToggle = () => {  
// // localStorage.setItem('darkmode',darkmode);
// //     setDarkmode((prevMode) => !prevMode);
// setDarkmode((prevMode) => !prevMode);
//     localStorage.setItem("darkmode", !darkmode);
//   };

//   return (
//     <Router basename="/">
//       <div>
//         <button onClick={handleDarkmodeToggle}>
//           {/* {darkmode ?<WiMoonWaxingCrescent5/>: <BsSun /> } */}
//           {darkmode ? <WiMoonWaxingCrescent5 /> : <BsSun />}
//         </button>
//       </div>

//       <Routes>
//       <Route path='/tasks' element={<Form/>}/>
//       <Route path='/sign' element={<SignInForm/>}/>
//       <Route path='/' element={<LoginForm/>}/>
//       <Route path="/addtask" element={<NewTask/>}/>
//       <Route path="/updatetask" element={<UpdateTask/>}/>
//       <Route path="/appearance" element={<Appearance/>}/>
//       <Route path="/history" element={<History/>}/>
//       <Route path="/profile" element={<Profile/>}/>
//       <Route path="/security" element={<Secure/>}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
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
import { WiMoonWaxingCrescent5 } from "react-icons/wi";
import { BsSun } from "react-icons/bs";
import { getDarkMode } from "./mode";
// import useDarkMode from "./useDarkMode";
import { AllTasks } from "./components/Forms";
function App() {
  const [darkmode, setDarkmode] = useState(getDarkMode());
  // const [darkmode, setDarkmode] = useDarkMode();
  useEffect(() => {
    setBodyBackground();
  }, [darkmode]);
  const setBodyBackground = () => {
    const currentPath = window.location.pathname;
    switch (currentPath) {
      case "/addtask":
        document.body.style.backgroundColor = darkmode ? "#0D0E17" : "#DEDEDE";
        document.body.style.color = darkmode ? "#ffffff" : "#000000";
        break;
      case "/tasks":
        document.body.style.backgroundColor = darkmode ? "#0D0E17" : "#ffffff";
        document.body.style.color = darkmode ? "#ffffff" : "#000000";
        break;
      case "/sign":
      case "/":
        document.body.style.backgroundColor = "#DEDEDE";
        break;
      case "/updatetask":
        document.body.style.backgroundColor = darkmode ? "#0D0E17" : "#DEDEDE";
        document.body.style.color = darkmode ? "#ffffff" : "#000000";
        break;
      case "/appearance":
      case "/profile":
      case "/security":
      case "/history":
        document.body.style.backgroundColor = darkmode ? "#0D0E17" : "#ffffff";
        document.body.style.color = darkmode ? "#ffffff" : "#000000";
        break;
      default:
        document.body.style.backgroundColor = darkmode ? "#0D0E17" : "#ffffff";
        document.body.style.color = darkmode ? "#ffffff" : "#000000";
        break;
    }
  };

  const handleDarkmodeToggle = () => {
    setDarkmode((prevMode) => !prevMode);
    localStorage.setItem("darkmode", !darkmode);
    setBodyBackground(); // Call the function to update the background color

    // setDarkmode((prevMode) => !prevMode);
  };

  return (
    <Router basename="/">
      <div>
        <button onClick={handleDarkmodeToggle}>
          {darkmode ? <WiMoonWaxingCrescent5 /> : <BsSun />}
        </button>
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
