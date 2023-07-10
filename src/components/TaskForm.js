import React, { useState } from "react";
import axios from "axios";
import {BsTrash} from 'react-icons/bs'
import {GrEdit} from "react-icons/gr"
import {AiFillDelete} from 'react-icons/ai'
import {TiTick}from 'react-icons/ti'
// import { Fragment } from "react";

const senderId = localStorage.getItem("id");

// This the components to receive the data
const Form = () => {
  const [task, setTask] = useState("");
  const sender = senderId;
  const [tasks, setTasks] = useState([]);
  const [isUpdateMode,setIsUpdateMode]=useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState('');
  const [completedTasks, setCompletedTasks] = useState([]);
 


  const handleChanges = (e) => {
    setTask(e.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:5000/tasks", { task, sender });
      console.log(response.data);
      alert("Task was saved successfully");
      setTask('');
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };


//this is to retrieve the tasks from the backend
  const fetchTasks = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/tasks?sender=${sender}`);
      console.log(response.data);
      const Task=response.data;
      setTasks(Task);
      console.log(task._id);
    } catch (error) {
      console.error(error);
      alert("Error fetching tasks");
    }
  };


//this is to delete all tasks
const DeleteTasks = async () => {
  try {
    const response = await axios.delete('http://localhost:5000', {
      data: {
        sender: senderId
      }
    });
   if(response.status===200){
    setTasks([]); // Update to an empty array instead of an empty string
   
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


//This is how to delete task one by one
// const handleDeleteOne=async(taskId,senderId)=>{
  
//   const Response = await axios.delete('http://localhost:5000/one', {
//     data:{
//     sender: senderId,
//     taskId: taskId
//     }
//   })
//     .then(Res => {
//       // Response.json();
//     alert("The task was deleted successfully");
//     })
//     .catch(error => {
//       console.error(error);
//       console.log('Sender ID:', senderId);
// console.log('Task ID:', taskId);

//       alert("Something went wrong!");
//     });
// }

const handleDeleteOne=async(taskId,senderId)=>{
  try{
  
  const Response = await axios.delete('http://localhost:5000/one', {
    data:{
    sender: senderId,
    taskId: taskId
    }
  })
  if(Response.status===200){
    alert(Response.data.message);
  }
  else if(Response.status===404){
    alert(Response.data.message);
  }
  else{
    alert(Response.data.error);
  }
}catch(error){
alert(error);
}
}

// //this is the function to update the task one by one
const handleEdit = async () => {
  try {
    const response = await axios.put('http://localhost:5000', {
      sender: senderId,
      taskId: selectedTaskId,
      updatedtask: task
    });

    if (response.status === 200) {
      alert('Task updated successfully');
    } else {
      throw new Error(response.data.message);
    }

    setIsUpdateMode(false);
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 300) {
      alert(error.response.data.message);
    } else {
      alert('Failed to update the task');
    }
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



  return (
    <div>
    <div className="taskform container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
      <form>
        <input type="text" name="task" value={task} onChange={handleChanges} />
        <button onClick={isUpdateMode? handleEdit:fetchData} className="bg-primary text-white">{isUpdateMode ? "Update Task":"Add Task"}</button>
       
      
      </form>
    
      </div>
      <div className="col-md-8 deleteAll">
        <div  className="bg-danger w-25">
      <AiFillDelete onClick={DeleteTasks} className="fs-3"/>
      <button className="text-white btn border-0">Delete All tasks</button>
      </div>
      </div>
      </div>
      </div>
     
    
       
{/* This is to render the tasks */}
<div className="row m-5">
  <div className="col-md-6">
    {/* Tasks section */}
    <div className="border ">
    <div className="tasksInvoker">
      <button onClick={fetchTasks} className="bg-primary taskDsbutton text-white">Tasks</button>
    </div>

   




      <div>
  <ul>
    {tasks.map((task) => (
      <li key={task._id}>
        {task.task}
        {/* This is for deleting */}
        <BsTrash onClick={() => handleDeleteOne(task._id, senderId)} className="bg-danger"/>
        
        {/* This is for editing */}
        <GrEdit
          onClick={() => {
            setSelectedTaskId(task._id);
            setTask(task.task);
            setIsUpdateMode(true);
          }}
          className="bg-primary"
        />

        {/* This is for completing */}
        <TiTick
          onClick={() => SaveCompleted(senderId, task._id)}
          className="bg-success"
        />
      </li>
    ))}
  </ul>
  {tasks.length === 0 && <h1>Click to see the tasks</h1>}
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









