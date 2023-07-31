// import React, { useState } from "react";
// import axios from "axios";
// import {AiFillDelete} from 'react-icons/ai'
// import {AiOutlinePlus} from "react-icons/ai"
// import { AllTasks } from "./Forms";
// import { Header } from "./Forms";


// const senderId = localStorage.getItem("id");
// //let me get the selected mode
// // This the components to receive the data
// const Form = () => {
//   const mode=localStorage.getItem('darkmode');
//   const [tasks, setTasks] = useState([]);

// //this is to delete all tasks
// const DeleteTasks = async () => {
//   try {
//     const response = await axios.delete('http://localhost:5000', {
//       data: {
//         sender: senderId
//       }
//     });
//    if(response.status===200){
//     setTasks([]); 
//    console.log(tasks)
//     alert(response.data.message);
//    }
// else if(response.status===404){
//   const resMess=response.data;
//   alert(resMess.message);
// }  else{
//   alert(response.data.error)
// } 
//   } catch (error) {
//     console.error(error);
//     alert(error);
//   }
// }

// //this is to orient the user to add new task form
// const addnew=(e)=>{
//   e.preventDefault();
// window.location.href='/addtask'
// }
//   return (
//     <div className="w-100 " style={{backgroundColor:mode===true?("#0D0E17"):("white")}}>
//         <Header/>
//         <div 
//         style={{backgroundColor:mode===true?("#0D0E17"):("white")}}
//         >
// <h1 className="text-center fw-bold fs-3" 
// style={{backgroundColor:mode=="true"?("white"):("#0D0E17")}}
// >
//   All tasks
//   </h1>
//   </div>
// <div 
// style={{backgroundColor:mode=="true"?("white"):("#0D0E17")}}
// >
//     <div onClick={addnew} className="text-white  d-flex align-items-center" style={{backgroundColor:"#1959B7", width:"6.5%",marginLeft:"2%"}}>
// <div className="d-flex align-items-center d-flex p-0">
// <AiOutlinePlus style={{backgroundColor:"#1959B7" ,textAlign:"center"}}/>
// New
// </div>
// </div>
// <div className="d-flex align-items-center bg-white justify-content-center mb-2" style={{marginLeft:"35%"}}>
     
//      <AiFillDelete onClick={DeleteTasks} className="fs-3 " 
//      style={{color:mode=="true"?("#0D0E17"):("white"),
//      backgroundColor:mode=="true"?("white"):("#0D0E17")}}/>
//      <span style={{color:mode=="true"?("black"):("white"),
//      backgroundColor:mode=="true"?("white"):("#0D0E17")}}>
//      Delete All tasks
//       </span>
//      </div>
//      </div>
// <AllTasks/>
//  </div>
//   );
// };


// export default Form;



import React, { useState } from "react";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AllTasks } from "./Forms";
import { Header } from "./Forms";
import useDarkMode from "../useDarkMode";
const senderId = localStorage.getItem("id");

const Form = () => {
  // const darkmode = localStorage.getItem("darkmode")==="true";
  const [tasks, setTasks] = useState([]);
  const [darkmode] = useDarkMode();

  const DeleteTasks = async () => {
    try {
      const response = await axios.delete("http://localhost:5000", {
        data: {
          sender: senderId,
        },
      });
      if (response.status === 200) {
        setTasks([]);
        console.log(tasks);
        alert(response.data.message);
      } else if (response.status === 404) {
        const resMess = response.data;
        alert(resMess.message);
      } else {
        alert(response.data.error);
      }
    } catch (error) {
      console.error(error);
      alert(error);
    }
  };

  const addnew = (e) => {
    e.preventDefault();
    window.location.href = "/addtask";
  };

  return (
    <div className={`w-100 ${darkmode ? "dark-mode" : "light-mode"}`}>
      <Header />
   <div className="header-section">
        <h1
          className="text-center fw-bold fs-3"
          style={{
            backgroundColor: !darkmode ? "#0D0E17" : "white",
            color: !darkmode ? "white" : "black",
          }}
        >
          All tasks
        </h1>
      </div>
      <div className="action-buttons d-flex row">
        <div onClick={addnew} className="text-white d-flex align-items-center add-button col-md-8"
      
        >
          <div className="d-flex align-items-center d-flex p-1"
          
          style={{ backgroundColor: "#1959B7",marginLeft:"2.5%"}}
          >
            <AiOutlinePlus style={{ backgroundColor: "#1959B7", textAlign: "center" }} />
           <span
           style={{ backgroundColor: "#1959B7"}}
           >New</span>
            
          
          </div>
        </div>
        <div className="delete-button col-md-4" onClick={DeleteTasks}>
          <AiFillDelete className="fs-3" />
          <span
          style={{
            backgroundColor: !darkmode ? "#0D0E17" : "white",
            color: !darkmode ? "white" : "black",
          }}
          >Delete All tasks</span>
        </div>
      </div>
      <AllTasks darkmode={darkmode} />
    </div>
  );
};

export default Form;
