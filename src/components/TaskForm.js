import React, { useState } from "react";
import axios from "axios";
import {AiFillDelete} from 'react-icons/ai'
import {BsSun} from "react-icons/bs"
import {FaUserCircle} from "react-icons/fa"
import SearchForm  from "./Forms";
import {AiOutlinePlus} from "react-icons/ai"
import { AllTasks } from "./Forms";


const senderId = localStorage.getItem("id");
// This the components to receive the data
const Form = () => {
  const [tasks, setTasks] = useState([]);

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
   console.log(tasks)
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
}

//this is to orient the user to add new task form
const addnew=(e)=>{
  e.preventDefault();
window.location.href='/addtask'
}
  return (
    <div className="bg-white w-100 h-100">
<div className=" row d-flex align-items-center bg-white">
  <div className="col-md-6">
  <h1 style={{ color: "#1959B7" }} className="">To do</h1>
  <div className="ml-auto bg-white">
    <SearchForm/>
  </div>
  </div>
  <div className="col-md-6 bg-white">
  <div className="bg-white">
    <BsSun />
  </div>
  <div className=" bg-white">
    <FaUserCircle style={{ color: "#1959B7" }} />
  </div>
  </div>
</div>
<h1 className="text-center bg-white">All tasks</h1>
  
<div className=" bg-white">
    <div onClick={addnew} className="text-white  d-flex align-items-center" style={{backgroundColor:"#1959B7", width:"7%",marginLeft:"2.7%"}}>
{/* <div className="p-1 d-flex align-items-center d-flex"> */}
<AiOutlinePlus style={{backgroundColor:"#1959B7" ,textAlign:"center"}} className="p-0"/>
<p style={{backgroundColor:"#1959B7",textAlign:"center"}} className="p-0" >New</p>
{/* </div> */}
</div>
<div className="d-flex align-items-center bg-white justify-content-center" style={{textAlign:"center"}}>
     
     <AiFillDelete onClick={DeleteTasks} className="fs-3 bg-white"/>
     <p className="fs-2 bg-white">Delete All tasks</p>
     </div>
     </div>
 
<AllTasks/>
    

 </div>
  );
};


export default Form;









