
// //this is to retrieve all tasks from the backend
// export const AllTasks=()=>{
//  //this is to get the mode from localstorage
//  const mode=localStorage.getItem("darkmode");
//   const[tasks,setTasks]=useState([]);
// const fetchTasks = async () => {
//   try {
//     const response = await axios.get(`http://localhost:5000/tasks?sender=${sender}`);
//     const Task=response.data;
//     setTasks(Task);
//   } catch (error) {
//     console.error(error);
//   }
// };
// const handleDeleteOne=async(taskId,senderId)=>{
//   try{
  
//   const Response = await axios.delete('http://localhost:5000/one', {
//     data:{
//     sender: senderId,
//     taskId: taskId
//     }
//   })
//   if(Response.status===200){
//     alert(Response.data.message);
//   }
//   else if(Response.status===404){
//     alert(Response.data.message);
//   }
//   else{
//     alert(Response.data.error);
//   }
// }catch(error){
// alert(error);
// }
// }
// //go to update task using id 
// const updatetask=(taskId)=>{
//   localStorage.setItem('taskId',taskId);
//   window.location.href='/updatetask'
// }
// fetchTasks();
// return(<div  
// style={{backgroundColor:mode=="true"?("white"):("#0D0E17")}}>
// <div 
// style={{backgroundColor:mode=="true"?("white"):("#0D0E17")}}
// >
//   <table  style={{width:"95%",marginRight:"3.3%",
//   marginLeft:"1.7%",
//   backgroundColor: mode=="true"?("white"):("#0D0E17")}}>
//   <tr 
//   style={{width:"95%",
//   marginRight:"3.3%",
//   marginLeft:"1.7%",
//   backgroundColor:mode=="true"?("white"):("#0D0E17")}}>
//       <th className="p-2">status</th>
//       <th className="p-2">tasks</th>
//       <th className="p-2">action</th>
//     </tr>
//     {tasks.map((task) => (
//       <tr key={task._id} 
//       style={{backgroundColor:mode=="true"?("white"):("#0D0E17")}}>
//         <td className="p-2" 
//         style={{backgroundColor:mode=="true"?("white"):("#0C1737")}}>{task.status==="uncompleted"?(<div className="text-black text-center" 
//         style={{backgroundColor:"yellow"
//         ,width:"35%",borderRadius:"6px"}}><IoMdTime style={{backgroundColor:"#FFA500"}}/></div>):
//         ( <div className="text-white text-center" style={{backgroundColor:"#1959B7",width:"35%",borderRadius:"6px"}}>
//           <BsCheckCircle style={{backgroundColor:"#1959B7"}}/></div>)}</td>
//        <td className="" style={{backgroundColor:mode=="true"?("white"):("#0C1737")}}>
//          {task.task}</td>
//         {/* This is for deleting */}
//         <td className="p-2" style={{backgroundColor:mode=="true"?("white"):("#0C1737")}}>
//         <LuEdit style={{color:"#FFA500"}}
//               onClick={() => updatetask(task._id)} 
//             />
//        <AiFillDelete onClick={() => handleDeleteOne(task._id, senderId)} className="text-danger fs-4"/>
        
//             </td>
//          </tr>
//     ))}
// </table>
//   {tasks.length === 0 && <h1>You have n't any task! Please add task</h1>}
// </div>

// </div>)
// }

import { useState,useEffect } from "react";
import { CiSearch } from "react-icons/ci"
import axios from "axios";
import {AiFillDelete} from 'react-icons/ai'
import {IoMdTime} from "react-icons/io"
import {BsCheckCircle} from "react-icons/bs"
import {BsSun} from "react-icons/bs"
import {FaUserCircle} from "react-icons/fa"
import UserInfor from "./aboutSettings";
import useDarkMode from "../useDarkMode";

// import { UpdateTask } from "./updateTask";
import {LuEdit} from "react-icons/lu"

//this is to get the taskId and senderId from the local storage
const sender=localStorage.getItem('id')
// const senderId=localStorage.getItem('id')
//this is the components to search 
const SearchForm = ({ darkmode }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    // Update the background color when darkmode prop changes
    document.body.style.backgroundColor = darkmode ? "#0D0E17" : "#DEDEDE";
    document.body.style.color = darkmode ? "white" : "black";
  }, [darkmode]);

  return (
    <div className="d-flex justify-content-center" style={{ backgroundColor: darkmode ? "white" : "#0D0E17" }}>
      <form className="w-100" style={{ backgroundColor: darkmode ? "white" : "#0D0E17" }}>
        <div className="input-group d-flex justify-content-center" style={{ backgroundColor: darkmode ? "white" : "#0D0E17" }}>
          {/* Add justify-content-center class */}
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            value={search}
            className="form-control rounded pr-5"
            style={{ color: "#828282", borderRight: "0px", backgroundColor: darkmode ? "white" : "#0D0E17" }}
          />
          <div className="input-group-append text-white">
            <span className="input-group-text bg-transparent border-0 text-white">
              <CiSearch style={{ backgroundColor: darkmode ? "#1959B7" : "#5D6B80", fontSize: "33px" }} />
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

// export const AllTasks = ({ darkmode }) => {
//   const [tasks, setTasks] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchTasks = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/tasks?sender=${sender}`);
//       const Task = response.data;
//       setTasks(Task);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   const handleDeleteOne = async (taskId, senderId) => {
//     try {
//       const Response = await axios.delete("http://localhost:5000/one", {
//         data: {
//           sender: senderId,
//           taskId: taskId,
//         },
//       });
//       if (Response.status === 200) {
//         alert(Response.data.message);
//       } else if (Response.status === 404) {
//         alert(Response.data.message);
//       } else {
//         alert(Response.data.error);
//       }
//     } catch (error) {
//       alert(error);
//     }
//   };

//   const updatetask = (taskId) => {
//     localStorage.setItem("taskId", taskId);
//     window.location.href = "/updatetask";
//   };

//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   return (
//     <div style={{ backgroundColor: darkmode ? "white" : "#0D0E17" }}>
//       {loading ? (
//         <div>Loading...</div>
//       ) : (
//         <div>
//           <table
//             style={{
//               width: "95%",
//               marginRight: "3.3%",
//               marginLeft: "1.7%",
//               backgroundColor: darkmode ? "white" : "#0D0E17",
//             }}
//           >
//             <tr
//               style={{
//                 width: "95%",
//                 marginRight: "3.3%",
//                 marginLeft: "1.7%",
//                 backgroundColor: darkmode ? "white" : "#0D0E17",
//               }}
//             >
//               <th className="p-2">status</th>
//               <th className="p-2">tasks</th>
//               <th className="p-2">action</th>
//             </tr>
//             {tasks.map((task) => (
//               <tr key={task._id} style={{ backgroundColor: darkmode ? "white" : "#0D0E17" }}>
//                 <td className="p-2" style={{ backgroundColor: darkmode ? "white" : "#0C1737" }}>
//                   {task.status === "uncompleted" ? (
//                     <div className="text-black text-center" style={{ backgroundColor: "yellow", width: "35%", borderRadius: "6px" }}>
//                       <IoMdTime style={{ backgroundColor: "#FFA500" }} />
//                     </div>
//                   ) : (
//                     <div className="text-white text-center" style={{ backgroundColor: "#1959B7", width: "35%", borderRadius: "6px" }}>
//                       <BsCheckCircle style={{ backgroundColor: "#1959B7" }} />
//                     </div>
//                   )}
//                 </td>
//                 <td className="" style={{ backgroundColor: darkmode ? "white" : "#0C1737" }}>
//                   {task.task}
//                 </td>
//                 <td className="p-2" style={{ backgroundColor: darkmode ? "white" : "#0C1737" }}>
//                   <LuEdit style={{ color: "#FFA500" }} onClick={() => updatetask(task._id)} />
//                   <AiFillDelete onClick={() => handleDeleteOne(task._id, sender)} className="text-danger fs-4" />
//                 </td>
//               </tr>
//             ))}
//           </table>
//           {tasks.length === 0 && <h1>You haven't any task! Please add task</h1>}
//         </div>
//       )}
//     </div>
//   );
// };

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { IoMdTime } from "react-icons/io";
// import { BsCheckCircle } from "react-icons/bs";

// const sender = localStorage.getItem("id");



export const AllTasks = ({ darkmode }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/tasks?sender=${sender}`);
      const Task = response.data;
      setTasks(Task);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleDeleteOne = async (taskId, senderId) => {
    try {
      const Response = await axios.delete("http://localhost:5000/one", {
        data: {
          sender: senderId,
          taskId: taskId,
        },
      });
      if (Response.status === 200) {
        alert(Response.data.message);
      } else if (Response.status === 404) {
        alert(Response.data.message);
      } else {
        alert(Response.data.error);
      }
    } catch (error) {
      alert(error);
    }
  };

  const updatetask = (taskId) => {
    localStorage.setItem("taskId", taskId);
    window.location.href = "/updatetask";
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    // Update the background color when darkmode prop changes
    document.body.style.backgroundColor = darkmode ? "#0D0E17" : "#DEDEDE";
    document.body.style.color = darkmode ? "white" : "black";
  }, [darkmode]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ backgroundColor: darkmode ? "white" : "#0D0E17" }}>
          <table
            style={{
              width: "95%",
              marginRight: "3.3%",
              marginLeft: "1.7%",
              backgroundColor: darkmode ? "white" : "#0D0E17",
            }}
          >
            <tr
              style={{
                width: "95%",
                marginRight: "3.3%",
                marginLeft: "1.7%",
                backgroundColor: darkmode ? "white" : "#0D0E17",
              }}
            >
              <th className="p-2">status</th>
              <th className="p-2">tasks</th>
              <th className="p-2">action</th>
            </tr>
            {tasks.map((task) => (
              <tr key={task._id} style={{ backgroundColor: darkmode ? "white" : "#0D0E17" }}>
                <td className="p-2" style={{ backgroundColor: darkmode ? "white" : "#0C1737" }}>
                  {task.status === "uncompleted" ? (
                    <div className="text-black text-center" style={{ backgroundColor: "yellow", width: "35%", borderRadius: "6px" }}>
                      <IoMdTime style={{ backgroundColor: "#FFA500" }} />
                    </div>
                  ) : (
                    <div className="text-white text-center" style={{ backgroundColor: "#1959B7", width: "35%", borderRadius: "6px" }}>
                      <BsCheckCircle style={{ backgroundColor: "#1959B7" }} />
                    </div>
                  )}
                </td>
                <td className="" style={{ backgroundColor: darkmode ? "white" : "#0C1737" }}>
                  {task.task}
                </td>
                <td className="p-2" style={{ backgroundColor: darkmode ? "white" : "#0C1737" }}>
                  <LuEdit style={{ color: "#FFA500" }} onClick={() => updatetask(task._id)} />
                  <AiFillDelete onClick={() => handleDeleteOne(task._id, sender)} className="text-danger fs-4" />
                </td>
              </tr>
            ))}
          </table>
          {tasks.length === 0 && <h1>You haven't any task! Please add task</h1>}
        </div>
      )}
    </div>
  );
};

// export const Header=()=>{
//   //this is to get the mode from localstorage
// const mode=localStorage.getItem("darkmode");
//   const [showInfo,setShowInfo]=useState(false);
//   const handleShow=()=>{
//     setShowInfo(true);
//   }
//   return(<div
//     style={{backgroundColor: mode=="true"?("white"):("#0D0E17")}}
//   >

// <div className="d-flex align-items-center pt-0" 
// style={{backgroundColor: mode=="true"?("white"):("#0D0E17")}}>
//   <h1 style={{ color: mode=="true"?("#1959B7"):("white"),
//    marginLeft: "2%",
//    backgroundColor: mode=="true"?("white"):("#0D0E17")}}>
//     To do
//   </h1>
//   <div style={{ marginLeft: "20%",backgroundColor: mode=="true"?("white"):("#0D0E17") }}>
//     <SearchForm  style={{ marginLeft: "20%",backgroundColor: mode=="true"?("white"):("#0D0E17")}}/>
//   </div>
// <div className="ms-auto" style={{backgroundColor: mode=="true"?("white"):("#0D0E17")}}>
//     <BsSun  style={{color: mode=="true"?("black"):("white")}}/>
//   </div>
//   <div className="ml-3 p-4 " onClick={handleShow} style={{backgroundColor: mode=="true"?("white"):("#0D0E17")}}>
//     {showInfo && <UserInfor/>}
//     <FaUserCircle style={{ color: mode=='true'?("#1959B7"):("white") }} className="fs-4" />
//   </div>
// </div>

//   </div>)

// }

export const Header = ({ darkmode }) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleShow = () => {
    setShowInfo(true);
  };

  return (
    <div style={{ backgroundColor: darkmode ? "white" : "#0D0E17" }}>
      <div className="d-flex align-items-center pt-0" style={{ backgroundColor: darkmode ? "white" : "#0D0E17" }}>
        <h1 style={{ color: darkmode ? "#1959B7" : "white", marginLeft: "2%", backgroundColor: darkmode ? "white" : "#0D0E17" }}>
          To do
        </h1>
        <div style={{ marginLeft: "20%", backgroundColor: darkmode ? "white" : "#0D0E17" }}>
          <SearchForm style={{ marginLeft: "20%", backgroundColor: darkmode ? "white" : "#0D0E17" }} />
        </div>
        <div className="ms-auto" style={{ backgroundColor: darkmode ? "white" : "#0D0E17" }}>
          <BsSun style={{ color: darkmode ? "black" : "white" }} />
        </div>
        <div className="ml-3 p-4" onClick={handleShow} style={{ backgroundColor: darkmode ? "white" : "#0D0E17" }}>
          {showInfo && <UserInfor />}
          <FaUserCircle style={{ color: darkmode ? "#1959B7" : "white" }} className="fs-4" />
        </div>
      </div>
    </div>
  );
};

export default SearchForm;

