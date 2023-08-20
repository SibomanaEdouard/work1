import React, { useState } from "react";
import axios from "axios";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AllTasks } from "./Forms";
import { Header } from "./Forms";
// import useDarkMode from "../useDarkMode";
const senderId = localStorage.getItem("id");

const Form = () => {
  // const darkmode = localStorage.getItem("darkmode")==="true";
  const [tasks, setTasks] = useState([]);
  // const [darkmode] = useDarkMode();

  const DeleteTasks = async () => {
    try {
      const response = await axios.delete("https://koracha.onrender.com", {
        data: {
          sender: senderId,
        },
      });
      if (response.status === 200) {
        setTasks([]);
        console.log(tasks);
        alert(response.data.message);
        window.location.reload();
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
    <div className="w-100">
      <Header />
   <div className="header-section">
        <h1
          className="text-center fw-bold fs-3"
          style={{
            backgroundColor: "white",
            color: "black",
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
            backgroundColor:  "white",
            // color: !darkmode ? "white" : "black",
          }}
          >Delete All tasks</span>
        </div>
      </div>
      <AllTasks />
    </div>
  );
};

export default Form;
