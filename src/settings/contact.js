import { SettingWord } from "./setting";
import SettingSideBar from "./setting";
import { Header } from "../components/Forms";
import { useState } from "react";

const IndividualInfo=()=>{
const [input,setInput]=useState({
    email:"",
    phone:"",
});
const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
   setInput(values=>({...values,[name]:value}));
}

    return(<div className="border border-1 p-5" style={{height:"99%",marginRight:"11%" ,borderRadius:"10px"}}>
        <h1 className="text-center fw-bold" style={{marginLeft:"30%"}}>contact info</h1>
        <form>
        <label for="phone" className="fw-bold">phone number</label><br/>
            <input 
            type="tel"
            name="phone"
            value={input.phone||""}
            onChange={handleChange}
            className="form-control"
            /><br/>

            <label for="email" className="fw-bold">Email</label><br/>
            <input 
            type="email"
            name="email"
            value={input.email||""}
            onChange={handleChange}
            className="form-control"
            />
        </form>
        <h1>Address</h1>
        <p>country:</p>
        <p>City:</p>
        <p>zipcode:</p>
    </div>)
}
const ContactInfo=()=>{

    return(<div>
<Header />
<SettingWord/>
  <div className="d-flex">
        <div className="col-md-2 m-2 mt-5 ">
          <SettingSideBar />
        </div>
        <div className="col-md-8 mt-5">
          <IndividualInfo />
        </div>
      </div>
 
    </div>)
}
export default ContactInfo;