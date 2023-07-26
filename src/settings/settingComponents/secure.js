import { SettingWord } from "../setting";
import SettingSideBar from "../setting";
import { Header } from "../../components/Forms"
import React, { useState } from "react";
import { BiLock } from "react-icons/bi";

export const FormToChangePass = () => {
  const [input, setInput] = useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

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
    <div className="border border-1 p-5" style={{marginLeft:"11%",borderRadius:"10px"}}>
      <h1 className="text-center" style={{marginLeft:"20%"}}>Change password</h1>
      <form>
        <label className="fw-bold" htmlFor="oldpassword">
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
        <label className="fw-bold" htmlFor="newpassword">
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
        <label className="fw-bold" htmlFor="confirmpassword">
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