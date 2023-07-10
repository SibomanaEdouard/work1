// import { FaEye,FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import React from "react";
function loHandle(e){
    e.preventDefault();
    window.location.href="/";
}


function SignInForm(){

    const [inputs,setInputs]=useState({
        firstname:"",
        lastname:"",
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
firstname:"",
lastname:"",
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
        <div className="container mt-5 border w-50 h-50 p-5">
            <div className="row justify-content-center pb-5">
            <div className="col-md-6">
            <h1 className="signhead mt-3 mb-5 text-primary">Sign Up</h1>
            <div className="forms"> 
                <form onSubmit={FetchData}>
                    <label>FirstName</label><br/>
                    <input type="text" 
                           name="firstname" 
                           id="firstname"
                           required
                           value={inputs.firstname}
                           onChange={handleChange}
                           placeholder="Enter firstname"
                    /><br/>

                    <label>LastName</label><br/>
                    <input type="text"
                           name="lastname"
                           id="lastname"
                           required
                           value={inputs.lastname}
                           onChange={handleChange}
                           placeholder="Enter lastname"
                    /><br/>

                    <label>Email</label><br/>
                    <input type="email" 
                           name="email"
                           value={inputs.email}
                           onChange={handleChange}
                           id="email"
                           required
                           placeholder="Enter email"
                    /><br/>
                  
                 <label>
            Password
            <br />
<div className="form-group">
  <div className="input-icon">
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
  </div>
</div>


          </label>
                                     <br/>

                    <button className="signupb btn bg-primary mt-3 text-success">Sign Up</button>
                </form>

                <p className="h1s">Already have account ? 
                    <button onClick={loHandle} className="buttons">LOGIN</button>
            
                </p>
            </div>
            </div>
        </div>  
        </div>
    )
}

export default SignInForm;
