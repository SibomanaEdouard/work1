import React, { useState } from "react";
import axios from "axios";
import {AiFillDelete} from 'react-icons/ai'
import {TiTick}from 'react-icons/ti'
import {BsSun} from "react-icons/bs"
import {FaUserCircle} from "react-icons/fa"
import SearchForm  from "./Forms";
import {AiOutlinePlus} from "react-icons/ai"
import { AllTasks } from "./Forms";


const senderId = localStorage.getItem("id");
// This the components to receive the data
const Form = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
//this is to delete all tasks
const DeleteTasks = async () => {
  try {
    const response = await axios.delete('http://localhost:5000', {
      data: {
        sender: senderId
      }
    });
   if(response.status===200){
    setTasks([]); 
   
    alert(response.data.message);
   }
else if(response.status===404){
  const resMess=response.data;
  alert(resMess.message);
}  else{
  alert(response.data.error)
} 
  } catch (error) {
    console.error(error);
    alert(error);
  }
};





//this is to mark the task as completed
const SaveCompleted= async (senderId,taskId) => {
  try {
    const response = await fetch('http://localhost:5000/completed', {
      method:'POST',
      headers:{
        'Content-Type':'application/json'

      },
      body:JSON.stringify({
        sender: senderId,
        taskId: taskId
  
      })
    });
    if(response.ok){
      const data= await response.json();
   
      console.log(data);
      alert(data.message);
    }else{
      const data= await response.json();
      alert(data.error);
    }
  } catch (error) {
    console.error(error);
    console.log('Sender ID:', senderId);
   
    alert(error);
  }
};

//this is the login to retrieve completed task for the user
const showCompletedTask = async () => {
  try {
    const response = await axios.post('http://localhost:5000/completedTasks', {
      sender:senderId
    });

    if (response.status === 200) {
      const completedTasks = response.data;
      console.log(completedTasks);
      const taskList = completedTasks.map((task) => task.task);
      setCompletedTasks(taskList);
    } else {
      throw new Error('Something went wrong while retrieving completed tasks');
    }
  } catch (error) {
    console.log(error);
    alert('There is no completed tasks to be retrieved');
  }
};

//this is to orient the user to add new task form
const addnew=(e)=>{
  e.preventDefault();
window.location.href='/addtask'
}


  return (
    <div className="bg-white w-100 h-100">
<div className=" row d-flex align-items-center">
  <div className="col-md-6">
  <h1 style={{ color: "#1959B7" }} className="">To do</h1>
  <div className="ml-auto">
    <SearchForm/>
  </div>
  </div>
  <div className="col-md-6">
  <div className="">
    <BsSun />
  </div>
  <div className="">
    <FaUserCircle style={{ color: "#1959B7" }} />
  </div>
  </div>
</div>
    <div className="taskform container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
<div onClick={addnew}>
<p>New</p>
<AiOutlinePlus style={{backgroundColor:"#1959B7"}}/>
  
</div>
    
      </div>
      <div className="col-md-8  deleteAll">
     
      <AiFillDelete onClick={DeleteTasks} className="fs-3"/>
      <h1 className="fs-2 ">Delete All tasks</h1>
  
      </div>
      </div>
      </div>
     
    
       

<div className="row m-5">
  <div className="col-md-6">
    {/* Tasks section */}
    <div className="border ">
    <div className="tasksInvoker">
      
    </div>
    {/* This is to render all tasks */}
<AllTasks/>
      <div>
  <ul>
    {tasks.map((task) => (
      <li key={task._id}>
        {task.task}
        
        {/* This is for completing */}
        <TiTick
          onClick={() => SaveCompleted(senderId, task._id)}
          className="bg-success"
        />
      </li>
    ))}
  </ul>
  {/* {tasks.length === 0 && <h1>Click to see the tasks</h1>} */}
</div>


    </div>
  </div>
  
  <div className="col-md-6">
    {/*This is for Completed tasks section */}
    <div className="border">
    <div className="completedTasks  ">
      <button onClick={showCompletedTask} className="bg-primary text-white">Completed Tasks</button>
    </div>
    <div>
      {completedTasks.length > 0 ? (
        <ul>
          {completedTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      ) : (
        <h1>Click button to see tasks</h1>
      )}
    </div>
  </div>
</div>
</div>

    </div>
  );
};


export default Form;









