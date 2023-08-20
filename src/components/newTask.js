import React, { useState } from "react";
import axios from "axios";
import {RxCross1} from "react-icons/rx"


const senderId = localStorage.getItem("id");

const NewTask = () => {
  //let get the mode from localstorage
  // const mode=localStorage.getItem('darkmode');
  const [task, setTask] = useState("");
  const sender = senderId;

  // Function to handle task input changes
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // Function to submit the task
  const fetchData = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/tasks", { task, sender });
      console.log(response.data);
      setTask("");
      if (response.status === 200) {
        alert("Task was saved successfully");
        window.location.href = "/tasks";
      } else {
        alert("Try again later!");
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  // Function to navigate to the homepage
  const homepage = () => {
    window.location.href = "/tasks";
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5"
    >
      <div className="w-50  p-5 position-relative"
          // style={{backgroundColor:mode=='true'?('white'):('#0C1737')}}
      >
      <div onClick={homepage} className="position-absolute top-0 end-0 p-4"
      // style={{backgroundColor:mode=='true'?('white'):('#0C1737')}}
      >
      <RxCross1 
      //  style={{backgroundColor:mode=='true'?('white'):('#0C1737')}}
      />
      </div>
      <h1 className="text-center fs-3 fw-bold"
      // style={{backgroundColor:mode=='true'?('white'):('#0C1737')}}
      >
        New Task
        </h1>
      <form onSubmit={fetchData} 
      // style={{backgroundColor:mode=='true'?('white'):('#0C1737')}}
      >
        <label htmlFor="task"
        // style={{backgroundColor:mode=='true'?('white'):('#0C1737')}}
        >
          Name
          </label>
        <input
          name="task"
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter task name"
          className="input-group form-control"
          required
        /><br/>
        <input type="submit" value="Record" className="form-control text-white" style={{backgroundColor:"#1959B8"}}/>
      </form>
    </div>
    </div>
  );
};

export default NewTask;
