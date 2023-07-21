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
      <div className="bg-white w-50 p-5">
        <h1 className="fw-bold text-center ">Login</h1>
      <form className="bg-white" onSubmit={FetLogin}>
       
        <label className="fw-bold">Email</label><br/>
        <div className="input-group bg-white">
        <div className="input-group-prepend">
              <span className="input-group-text bg-white">
                <ImMail2 className="mt-2" style={{color:"#1959B8",borderRight:"0"}}/>
              </span>
            </div>
        <input
            className="form-group email1 form-control borderl-0 shadow-none"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              value={inputs.email || ""}
              onChange={handleChange}
            
            />
            </div><br/>
<label className="fw-bold">Password</label><br/>
<div className="input-group">
  <div className="input-group-prepend">
  <span className="input-group-text bg-white">
<BiLock className="input-icon mt-2" style={{color:"#1959B8",borderRight:"0"}}/>
</span>
</div>
<input

      type={showpassword ? 'text' : 'password'}
      name="password"
      id="password"
      placeholder="Enter Your password"
      required
      value={inputs.password || ""}
      onChange={handleChange}
      className="input-field form-control shadow-none"
    />
    {showpassword ? (
      <i
        className="fas fa-eye-slash pass-icon bg-white"
        onClick={() => setShowpassword(false)}
        style={{color:"#1959B8",borderRight:"0"}}
      ></i>
    ) : (
      <i
        className="fas fa-eye pass-icon bg-white"
        onClick={() => setShowpassword(true)}
        style={{color:"#1959B8",borderRight:"0"}}
      ></i>
    )}
    </div>
    <br/>
<input
type="checkbox"
/>
<label className="p-2">Remember me</label><br/>
<input type="submit" value="Login" className="loginbutton text-center input-field form-control text-white shadow-none" style={{backgroundColor:"#1959B8"}}/>
      </form>
      <div className="bg-white"> <span className="Ask">New here ?</span><button onClick={HandleSigning} className="buttons border-0 bg-white">SignUp</button></div>
      </div>
    </div>)

  }
  export default LoginForm;





