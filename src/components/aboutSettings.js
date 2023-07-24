import React, { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";

// const username = localStorage.getItem("username");
const sender = localStorage.getItem("id");

const UserInfor = () => {
  const [tasks, setTasks] = useState("");
  const [username,setUsername]=useState("");

  useEffect(() => {
    fetchData();
  }, []); // Run fetchData only once on component mount

  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:5000/getNumber", {
        sender,
      });

      if (response.status === 200) {
        const data = response.data;
        setTasks(data);
      } else if (response.status === 404) {
        alert(response.message);
      } else {
        alert(response.error);
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
//this is to orient the user out of the system
  const logout = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  //this is to orient the user to the setting
  const goToSetting = () => {
    window.location.href = "/contactinfo";
  };
  // useEffect(() => {
  //   fetchUsername();
  // }, []); // Run fetchData only once on component mount

  //this is the function to retrive username
  const fetchUsername=async()=>{   
    try {
        const response = await axios.post("http://localhost:5000/getUsername", {
        sender,
        });
  
        if (response.status === 200) {
          const data = response.data;
          setUsername(data);
        } else if (response.status === 404) {
          alert(response.message);
        } else {
          alert(response.error);
        }
      } catch (error) {
        console.log(error);
        alert(error);
      }
  }
  fetchUsername();

  return (
    <div style={{backgroundColor:"#F6F6F6"}} className="p-3">
     {/* {username!==null? <p>{username}</p>:<p>No username</p>} */}
     {/* <p>{username}</p> */}
    
      {tasks !== null ? <p style={{color:"#696969"}}>{tasks} Tasks</p> : <p>No tasks found</p>}
      <div onClick={goToSetting} className="fw-bold">
        <FiSettings />
        Settings
      </div>
      <div onClick={logout} className="fw-bold">
        <BiLogOut/>
        Logout
      </div>
    </div>
  );
};

export default UserInfor;
