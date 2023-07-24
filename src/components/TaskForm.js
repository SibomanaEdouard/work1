import React, { useState } from "react";
import axios from "axios";
import {AiFillDelete} from 'react-icons/ai'
import {AiOutlinePlus} from "react-icons/ai"
import { AllTasks } from "./Forms";
import { Header } from "./Forms";


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
    <div className="bg-white w-100 ">
        <Header/>
<h1 className="text-center bg-white fw-bold fs-3">All tasks</h1>

<div className=" bg-white">
    <div onClick={addnew} className="text-white  d-flex align-items-center" style={{backgroundColor:"#1959B7", width:"6.5%",marginLeft:"2%"}}>
<div className="d-flex align-items-center d-flex p-0">
<AiOutlinePlus style={{backgroundColor:"#1959B7" ,textAlign:"center"}}/>
New
</div>
</div>
<div className="d-flex align-items-center bg-white justify-content-center mb-2" style={{marginLeft:"35%"}}>
     
     <AiFillDelete onClick={DeleteTasks} className="fs-3 bg-white"/>
     Delete All tasks
     </div>
     </div>
<AllTasks/>
 </div>
  );
};


export default Form;









