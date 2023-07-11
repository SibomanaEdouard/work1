import React from "react";
import { useState } from "react";

//let me create components 
const EmailForm=()=>{
const[input,setInput]=useState("email");
//this is the function to handle submit
const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // This is to send a response to the backend API
      const response = await fetch("https://koracha.onrender.com/resetpassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(input)
      });
  
      if (response.ok) {
        const messagesFromBack = await response.json();
        alert(messagesFromBack);
        setInput({
          email: ""
        });
        window.location.href = '/';
      } else if (response.status === 400) {
        
        // Handle specific error case for incorrect email
        const messageError = await response.json();
       
        alert(messageError.error);
      } else {
        const messageError = await response.json();
        throw new Error(messageError.error);
      }
    } catch (error) {
      console.log(error);
      window.location.href = '/resetpassword';
    }
  };
  
  
//this is to handle change
const handleChange=(event)=>{
    event.preventDefault();
    const name=event.target.name;
    const value=event.target.value;
    setInput((values)=>({...values,[name]:value}));


}
return(<div className="row">
<div className="col-md-12 text-center">
<h1 className="text-primary">Enter your email</h1>
<form onSubmit={handleSubmit} className="bg-primary">
    <label for="email">Email</label><br/>
<input
className=""
name="email"
value={input.email || ""}
onChange={handleChange}
required
/><br/>
<button className="bg-success">submit</button>
</form>
</div>
</div>)
}
export default EmailForm;