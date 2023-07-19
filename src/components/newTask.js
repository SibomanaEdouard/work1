import React from "react";
import { useState } from "react"; 

const NewTask=()=>{
    const [task, setTask] = useState("");
}
//this is the function to handle changes

const handleChange=(e)=>{
e.preventDefault();
setTask(e.target.value);

}
//this is the function to handle submit

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

    return(<div>
        <h1>New Task</h1>
        <form onSubmit={fetchData}>
<label name="task">
Name
</label>
<input 
name="task"
type="text"
value={task}
onChange={handleChange}
placeholder="Enter task name"
/>
<button typr="submit">Record</button>
        </form>
    </div>
    )
  };