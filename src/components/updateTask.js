import React from "react";
import {RxCross1} from "react-icons/rx"
import axios from "axios";
import { useState,useEffect } from "react";
export const UpdateTask=()=>{
//let me get the mode from local storage
const mode=localStorage.getItem('darkmode');    
    const taskId=localStorage.getItem('taskId');
    const senderId=localStorage.getItem('id');
const[task,setTask]=useState("");
const[status,setStatus]=useState("");
const options=[
  {value:"uncompleted",label:"uncompleted"},
  {value:"completed",label:"completed"}
]

//this is the function to handle change
const handleChange=(e)=>{
setTask(e.target.value);
}

//this is to handle change of the status
const handleStatusChange=(e)=>{
  setStatus(e.target.value);
}
//this is the funnction to fetchdata from the backend
useEffect(()=>{
  const sender=senderId
const fetchdata=async()=>{
  try {
    const response = await axios.get(`http://localhost:5000/update/${taskId}?sender=${sender}`);
    const taskData = response.data;
    setTask(taskData.task);
    setStatus(taskData.status);
  } catch (error) {
    console.error('Error fetching task data:', error);
  }

}
fetchdata();
},[taskId])

//this is the function to update the task one by one
const handleEdit = async () => {
  try {
    const response = await axios.put('http://localhost:5000', {
      sender: senderId,
      taskId,
      updatedtask: task,
      updatedstatus:status
    });
    if (response.status === 200) {
      alert('Task updated successfully');
      window.location.href = "/tasks";
    } else {
      throw new Error(response.data.message);
    }

  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 300) {
      alert(error.response.data.message);
    } else {
      alert('Failed to update the task');
    }
  }
};


// Function to navigate to the homepage
const homepage = () => {
    window.location.href = "/tasks";
  };
return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div className="w-50 p-5 position-relative"
      style={{backgroundColor:mode==='true'?("white"):("#0C1737")}}
      >
      <div onClick={homepage} className="position-absolute top-0 end-0 p-4"
       style={{backgroundColor:mode==='true'?("white"):("#0C1737")}}
      >
      <RxCross1
       style={{backgroundColor:mode==='true'?("white"):("#0C1737")}}
      />
      </div>
      <h1 className="text-center fs-3 fw-bold"
       style={{backgroundColor:mode==='true'?("white"):("#0C1737")}}
      >Update Task</h1>
      <form onSubmit={handleEdit} 
       style={{backgroundColor:mode==='true'?("white"):("#0C1737")}}
      >
        <label htmlFor="task"
         style={{backgroundColor:mode==='true'?("white"):("#0C1737")}}>
        Name
        </label>
        <input
          name="task"
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter task name"
          className="input-group form-control"
        /><br/>
        <label
         style={{backgroundColor:mode==='true'?("white"):("#0C1737")}}
        >
          status</label><br/>
        <select className="form-control" value={status} onChange={handleStatusChange}>
            {options.map((option)=>(
<option key={option.value} value={option.value}>
  {option.label}
</option>            ))}
        </select>
        <br/>
        <input type="submit" value="Update" className="form-control text-white" style={{backgroundColor:"#1959B8"}}/>
      </form>
    </div>
    </div>
  );
}