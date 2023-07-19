import React from "react";
import {BiLock} from "react-icons/bi"
import {ImMail2} from "react-icons/im"
import { useState } from "react";
//to sign in page
const HandleSigning=(e)=>{

    e.preventDefault();
    window.location.href='/sign';
}

//this is the login in foprm
function LoginForm() {
    const [inputs, setInputs] = useState({
      email:"",
      password:""
    });

  
    //this is the function to hide or showpassword
    const [showpassword,setShowpassword]=useState(false);

    //function to handle change
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs((values) => ({ ...values, [name]: value }));
    };

    //to feth data from login page
    const FetLogin = async(event)=>{
      event.preventDefault();
 
      try{

      const response=await fetch("http://localhost:5000/login",{
        method:"POST",
        headers:{
        "Content-Type":"application/json",  
        },
        body:JSON.stringify(inputs)

      });

      //to check is the response is ok
      if(response.ok){
        const user=await response.json();

        //To take information from the backend

        const Id=user;
       
        localStorage.setItem('id', Id);   
     setInputs({
      email:"",
      password:""
     });
     
     //this to navigate to profiles
     window.location.href='/tasks';
      }
      else{

        //to get error from the backend
        const ResponseError=await response.json();
        throw new Error(ResponseError.error);
        
      }
  

    }catch (error){
      console.error(error);

    alert(error);
    
    }
  }

 

  //The fields of login formm
    return (<div className="d-flex justify-content-center align-items-center mt-5">
      <div className="bg-white w-25 p-5">
        <h1 className="fw-bold text-center ">Login</h1>
      <form className="bg-white p-4" onSubmit={FetLogin}>
        <ImMail2/>
        <label>Email</label><br/>
        <input
            className="form-group email1"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              value={inputs.email || ""}
              onChange={handleChange}
            
            /><br/>
<label>Password</label><br/>
<BiLock/>
<input
      type={showpassword ? 'text' : 'password'}
      name="password"
      id="password"
      placeholder="Enter Your password"
      required
      value={inputs.password || ""}
      onChange={handleChange}
      className="input-field"
    />
    {showpassword ? (
      <i
        className="fas fa-eye-slash pass-icon"
        onClick={() => setShowpassword(false)}
      ></i>
    ) : (
      <i
        className="fas fa-eye pass-icon"
        onClick={() => setShowpassword(true)}
      ></i>
    )}
    <br/>
<input
type="checkbox"
/>
<label>Remember me</label><br/>
<input type="submit" value="Login" className="loginbutton"/>
      </form>
      <div className="bg-white"> <span className="Ask">New here ?</span><button onClick={HandleSigning} className="buttons border-0 bg-white">SignUp</button></div>
      </div>
    </div>)

  }
  export default LoginForm;





