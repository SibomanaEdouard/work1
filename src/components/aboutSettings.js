import React, { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";

// const username = localStorage.getItem("username");
const sender = localStorage.getItem("id");

const UserInfor = () => {
  const mode=localStorage.getItem('darkmode');
  const [tasks, setTasks] = useState("");
  const [username,setUsername]=useState("");
  const [image,setImage]=useState(null);

  useEffect(() => {
    fetchData();
    fetchUsername();
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
    window.location.href = "/profile";
  };


  //this is the function to retrive username
  const fetchUsername=async()=>{   
    try {
        const response = await axios.post("http://localhost:5000/getUsername", {
        sender,
        });
  
        if (response.status === 200) {
          const data = response.data;
          setUsername(data.username);
          setImage(data.imageUrl);

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
  // fetchUsername();

  return (
    <div
      style={{ backgroundColor: mode=='true'?("#F6F6F6"):("#0D0E17"),marginRight:"2%",marginTop:"2%" }}
      className="position-fixed top-5 end-0 p-2 "
    >
      <div className="d-flex flex-column align-items-center">
        <div className="text-center mb-3">
          {image ? (
            <img
              src={`http://localhost:5000/uploads/${image}`}
              alt="profile"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
          ) : (
            <span>No image available</span>
          )}
        </div>
        <p className="mb-1">{username}</p>
        {tasks !== null ? (
          <p className="mb-1" style={{ color: "#696969" }}>
            {tasks} Tasks
          </p>
        ) : (
          <p>No tasks found</p>
        )}
        <div onClick={goToSetting} className="fw-bold mb-2">
          <FiSettings /> Settings
        </div>
        <div onClick={logout} className="fw-bold">
          <BiLogOut /> Logout
        </div>
      </div>
    </div>
  );
};

export default UserInfor;
