import { useState } from "react";
import { GrSearch } from "react-icons/gr";
import axios from "axios";
import {AiFillDelete} from 'react-icons/ai'
import {IoMdTime} from "react-icons/io"
import {BsCheckCircle} from "react-icons/bs"
// import { UpdateTask } from "./updateTask";
import {LuEdit} from "react-icons/lu"

//this is to get the taskId and senderId from the local storage
const sender=localStorage.getItem('id')
const senderId=localStorage.getItem('id')

//this is the components to search 
const SearchForm = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <form>
        <div className="input-group">
          <input
            type="text"
            placeholder="Search"
            onChange={handleChange}
            value={search}
            className="w-25 rounded"
style={{color:"#828282"}}
          />
          <div className="input-group-append">
            <span className="input-group-text border-start-0 rounded-end" style={{backgroundColor:"#1959B7"}}>
              <GrSearch className="text-white" style={{backgroundColor:"#1959B7"}}/>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

//this is to retrieve all tasks from the backend
export const AllTasks=()=>{
  const[tasks,setTasks]=useState([]);

const fetchTasks = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/tasks?sender=${sender}`);
    const Task=response.data;
    setTasks(Task);
  } catch (error) {
    console.error(error);
  }
};
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

//go to update task using id 
const updatetask=(taskId)=>{
  localStorage.setItem('taskId',taskId);
  window.location.href='/updatetask'
}
fetchTasks();
return(<div className="bg-white">
<div>
  <table className="bg-white" style={{width:"95%",marginRight:"3.3%",marginLeft:"1.7%"}}>
  <tr className="bg-white ">
      <th className="bg-white p-2">status</th>
      <th className="bg-white p-2">tasks</th>
      <th className="bg-white p-2">action</th>
    </tr>
    {tasks.map((task) => (
      <tr key={task._id} className="bg-white">
        <td className="bg-white p-2">{task.status==="uncompleted"?(<div className="text-black text-center" style={{backgroundColor:"#FFA500",width:"35%"}}><IoMdTime style={{backgroundColor:"#FFA500"}}/></div>):
        ( <div className="text-white text-center" style={{backgroundColor:"#1959B7",width:"35%"}}><BsCheckCircle style={{backgroundColor:"#1959B7"}} /></div>)}</td>
       <td className="bg-white"> {task.task}</td>

        {/* This is for deleting */}
        <td className="bg-white p-2">
        <LuEdit style={{color:"#FFA500"}}
              onClick={() => updatetask(task._id)} // Modified the onClick handler
            />
       <AiFillDelete onClick={() => handleDeleteOne(task._id, senderId)} className="text-danger fs-4"/>
        
            </td>
         </tr>
    ))}
</table>
  {tasks.length === 0 && <h1>You have n't any task! Please add task</h1>}
</div>

</div>)
}
export default SearchForm;

