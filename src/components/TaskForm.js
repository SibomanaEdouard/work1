import React, { useState } from "react";
import axios from "axios";
import {BsTrash} from 'react-icons/bs'
import {GrEdit} from "react-icons/gr"
import {AiFillDelete} from 'react-icons/ai'
import {TiTick}from 'react-icons/ti'
import { Fragment } from "react";

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


  //this is the components to delete data
const DeleteTasks = async () => {
  try {
    const sender = localStorage.getItem("id");
    const response = await axios.delete('http://localhost:5000',{
      data:{
       sender:senderId 
      }
    });
    console.log(response.data);
    setTasks("");
    alert('All tasks were deleted');
  } catch (error) {
    console.error(error);
    alert("Error in deleting tasks");
  }
};

//This is how to delete task one by one
const handleDeleteOne=async(taskId,senderId)=>{
  const Response = await axios.delete('http://localhost:5000/one', {
    data:{
    sender: senderId,
    taskId: taskId
    }
  })
    .then(Res => {
    alert("The task was deleted successfully");
    })
    .catch(error => {
      console.error(error);
      console.log('Sender ID:', senderId);
console.log('Task ID:', taskId);

      alert("Something went wrong!");
    });
}

//this is the function to update the task one by one
const handleEdit= async () => {
  try {
    const response = await axios.put('http://localhost:5000', {
      sender: senderId,
      taskId: selectedTaskId,
      updatedtask: task
    });
    alert('Task updated successfully');
    

    setTask('');
    setIsUpdateMode(false);
  } catch (error) {
    console.error(error);
    console.log('Sender ID:', senderId);
   
    alert('Failed to update the task');
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
    
  } catch (error) {
    console.error(error);
    console.log('Sender ID:', senderId);
   
    alert('Failed to be completed the task');
  }
};
// show the completed tasks
const showCompletedTask = async () => {
  try {


    
    const response = await fetch('http://localhost:5000/completed', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const completedTasks = await response.json();
      console.log(completedTasks);
      const taskList = completedTasks.map((task) => task.task);
      setCompletedTasks(taskList);
    
    } else {
      alert('Something went wrong while retrieving completed tasks');
    }
  } catch (error) {
    console.log(error);
    alert('Failed to retrieve completed tasks');
  }
};


  return (
    <div>
    <div className="taskform container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
      <form>
        <input type="text" name="task" value={task} onChange={handleChanges} />
        <button onClick={isUpdateMode? handleEdit:fetchData} className="bg-primary">{isUpdateMode ? "Update Task":"Add Task"}</button>
       
      
      </form>
    
      </div>
      <div className="col-md-8 deleteAll">
        <div  className="bg-danger w-25">
      <AiFillDelete onClick={DeleteTasks} className="fs-3"/>
      <Fragment className="text-success">Delete All tasks</Fragment>
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
      <button onClick={fetchTasks} className="bg-primary taskDsbutton">Tasks</button>
    </div>
    <div>
      {tasks.length > 0 ? (
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
                className="bg-primary "
              />
              {/* This is for completing */}
              <TiTick
                onClick={() => SaveCompleted(senderId, task._id)}
                className="bg-success"
              />
            </li>
          ))}
        </ul>
      ) : (
        <h1>No tasks</h1>
      )}
      </div>
    </div>
  </div>
  
  <div className="col-md-6">
    {/*This is for Completed tasks section */}
    <div className="border">
    <div className="completedTasks  ">
      <button onClick={showCompletedTask} className="bg-primary">Completed Tasks</button>
    </div>
    <div>
      {completedTasks.length > 0 ? (
        <ul>
          {completedTasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      ) : (
        <h1>No completed tasks</h1>
      )}
    </div>
  </div>
</div>
</div>

    </div>
  );
};


export default Form;










