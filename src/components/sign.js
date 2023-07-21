// import { FaEye,FaEyeSlash } from "react-icons/fa";
import {BiLock} from "react-icons/bi"
import {ImMail2} from "react-icons/im"
import { useState } from "react";
import React from "react";
import{CiUser} from "react-icons/ci"
function loHandle(e){
    e.preventDefault();
    window.location.href="/";
}


function SignInForm(){

    const [inputs,setInputs]=useState({
        username:"",
        email:"",
        password:""
    });

    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs((values)=>({...values,[name]:value}));
    }
  
    const FetchData=async(event)=>{
        event.preventDefault();
        try{
            const response=await fetch("http://localhost:5000/sign",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(inputs)
            });
            if(response.ok){
                alert("WELCOME TO US ");
                setInputs({
email:"",
username:"",
password:"",

});
   window.location.href='/';
            }
            else{
                
                const ResponseError=await response.json();
                throw new Error(ResponseError.error);
            }
        }catch (error){
            console.log(error);
            alert(error.message);
        }
    };
//function to hide or show passsword
const [showpassword,setShowpassword]=useState(false);
    return(
        <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="mt-5 border w-50  p-5 bg-white">
            
            <h1 className="signhead mt-3   fw-bold text-center bg-white">Sign Up</h1>
         
               <form onSubmit={FetchData} className="bg-white">
                  
                    <label className="fw-bold">username</label><br/>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text bg-white">
                    <CiUser className="mt-2" style={{color:"#1959B8"}}/>
                    </span>
                    </div>
                    <input type="text" 
                           name="username" 
                           id="username"
                           required
                           value={inputs.username}
                           onChange={handleChange}
                           placeholder="Enter your username"
                           className="form-control"
                    />
                    </div>
                    <br/>
                    <label className="fw-bold">Email</label><br/>
                    <div className="input-group">
                        <div className="input-group-prepend bg-white">
                            <span className="input-group-text bg-white">
                    <ImMail2 className="mt-2" style={{color:"#1959B8"}}/>
                    </span>
                    </div>
                    
                    <input type="email" 
                           name="email"
                           value={inputs.email}
                           onChange={handleChange}
                           id="email"
                           required
                           className="form-control shadow-none"
                           placeholder="Enter your  email"
                    />
                    </div>
                    <br/>
                 <label className="fw-bold">
            Password
            </label>
            <br />
<div className="input-group">
  <div className="input-group-prepend">
    <span className="input-group-text">
    <BiLock className="mt-2" style={{color:"#1959B8"}}/>
    </span>
    </div>
    <input
      type={showpassword ? 'text' : 'password'}
      name="password"
      id="password"
      placeholder="Enter password"
      required
      value={inputs.password || ""}
      onChange={handleChange}
      className="form-control shadow-none"
    
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
  </div>

        
                                    
        <div className="checkbox bg-white">
      <input  type="checkbox" id="termsCheckbox" required />
      <label className="p-2">
        I agree to the terms of service and conditions
      </label>
      </div>
   

                    <input
                    type="submit"
                    value="sign up"
                    className="text-white signupb form-control shadow-none"
                    style={{backgroundColor:"#1959B8"}}
                    />
                </form>

                <p className="h1s bg-white">Already have account ? 
                    <button onClick={loHandle} className="buttons bg-white">login</button>
            
                </p>
            </div>
            </div>
        
    )
}

export default SignInForm;




