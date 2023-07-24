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

    return(<div>
        <h1 className="text-center">contact info</h1>
        <form>
        <label for="phone">phone number</label><br/>
            <input 
            type="tel"
            name="phone"
            value={input.phone||""}
            onChange={handleChange}
            /><br/>

            <label for="email">Email</label><br/>
            <input 
            type="email"
            name="email"
            value={input.email||""}
            onChange={handleChange}
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
<SettingSideBar/>
<IndividualInfo/>
    </div>)
}
export default ContactInfo;