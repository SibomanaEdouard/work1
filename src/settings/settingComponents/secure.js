import { SettingWord } from "../setting";
import SettingSideBar from "../setting";
import { Header } from "../../components/Forms"
import React, { useState } from "react";
import { BiLock } from "react-icons/bi";
import axios from "axios";

//refresh the page
const refresh=()=>{
  window.location.reload();
}
export const FormToChangePass = () => {
  const user=localStorage.getItem('id');
  //let me get the mode from the localstorage
  const mode=localStorage.getItem('darkmode');
  const [input, setInput] = useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

//this is the function to updatepassword
const updatePassword = async () => {
  try {
    // Send the request to the backend server
    const response = await axios.put("http://localhost:5000/updatepassword", {
      user,
      oldpassword: input.oldpassword,
      newpassword: input.newpassword,
      confirmpassword: input.confirmpassword,
    });

    if (response.status === 200) {
      alert("Password was updated successfully");
      refresh();
    } else {
      throw new Error(response.data.error);
      console.log(response.data.error);
    }
  } catch (error) {
    console.log(error);
    alert("Sorry something went wrong! Please try again later");
  }
};

  const [showpassword, setShowpassword] = useState(false);
  const [shownewpassword, setShownewpassword] = useState(false);
  const [showconfpassword, setShowconfpassword] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  return (
    <div className="border border-1 p-5" style={{marginLeft:"11%",borderRadius:"10px",
    backgroundColor:mode==='true'?('white'):('#0C1737')
    }}>
      <h1 className="text-center" style={{marginLeft:"20%",backgroundColor:mode==='true'?('white'):('#0C1737')}}>
        Change password
        </h1>
      <form onSubmit={updatePassword}
      style={{backgroundColor:mode==='true'?('white'):('#0C1737')}}
      >
        <label className="fw-bold" htmlFor="oldpassword"
          style={{backgroundColor:mode==='true'?('white'):('#0C1737')}}
        >
          Old Password
        </label>
        <br />
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text bg-white">
              <BiLock className="input-icon mt-2" style={{ color: "#1959B8", borderRight: "0" }} />
            </span>
          </div>
          <input
            type={showpassword ? "text" : "password"}
            name="oldpassword"
            id="oldpassword"
            required
            value={input.oldpassword || ""}
            onChange={handleChange}
            className="input-field form-control shadow-none"
          />
          {showpassword ? (
            <i
              className="fas fa-eye-slash pass-icon bg-white"
              onClick={() => setShowpassword(false)}
              style={{ color: "#1959B8", borderRight: "0" }}
            ></i>
          ) : (
            <i
              className="fas fa-eye pass-icon bg-white"
              onClick={() => setShowpassword(true)}
              style={{ color: "#1959B8", borderRight: "0" }}
            ></i>
          )}
        </div>
        <br />
        <label className="fw-bold" htmlFor="newpassword"
          style={{backgroundColor:mode==='true'?('white'):('#0C1737')}}
        >
          New Password
        </label>
        <br />
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text bg-white">
              <BiLock className="input-icon mt-2" style={{ color: "#1959B8", borderRight: "0" }} />
            </span>
          </div>
          <input
            type={shownewpassword ? "text" : "password"}
            name="newpassword"
            id="newpassword"
            required
            value={input.newpassword || ""}
            onChange={handleChange}
            className="input-field form-control shadow-none"
          />
          {shownewpassword ? (
            <i
              className="fas fa-eye-slash pass-icon bg-white"
              onClick={() => setShownewpassword(false)}
              style={{ color: "#1959B8", borderRight: "0" }}
            ></i>
          ) : (
            <i
              className="fas fa-eye pass-icon bg-white"
              onClick={() => setShownewpassword(true)}
              style={{ color: "#1959B8", borderRight: "0" }}
            ></i>
          )}
        </div>
        <br />
        <label className="fw-bold" htmlFor="confirmpassword"
          style={{backgroundColor:mode==='true'?('white'):('#0C1737')}}
        >
          Confirm Password
        </label>
        <br />
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text bg-white">
              <BiLock className="input-icon mt-2" style={{ color: "#1959B8", borderRight: "0" }} />
            </span>
          </div>
          <input
            type={showconfpassword ? "text" : "password"}
            name="confirmpassword"
            id="confirmpassword"
            required
            value={input.confirmpassword || ""}
            onChange={handleChange}
            className="input-field form-control shadow-none"
          />
          {showconfpassword ? (
            <i
              className="fas fa-eye-slash pass-icon bg-white"
              onClick={() => setShowconfpassword(false)}
              style={{ color: "#1959B8", borderRight: "0" }}
            ></i>
          ) : (
            <i
              className="fas fa-eye pass-icon bg-white"
              onClick={() => setShowconfpassword(true)}
              style={{ color: "#1959B8", borderRight: "0" }}
            ></i>
          )}
        </div>
        <br />
        <input
          type="submit"
          value="Save"
          className="form-control text-white"
          style={{ backgroundColor: "#1959B8" }}
        />
      </form>
    </div>
  );
};



const Secure=()=>{

    return(<div>
<Header />
<SettingWord/>
<div className="d-flex">
        <div className="col-md-2 m-2 mt-5 ">
          <SettingSideBar />
        </div>
        <div className="col-md-8 mt-5">
        <FormToChangePass/>
        </div>
      </div>
    </div>)
}
export default Secure;