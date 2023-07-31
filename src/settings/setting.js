import React from "react"
import {AiOutlineLock} from "react-icons/ai"
import {CiUser} from "react-icons/ci"
import { IoIosCall } from "react-icons/io";
import {GoHistory} from "react-icons/go"
import {WiMoonWaxingCrescent5} from "react-icons/wi"
import {BsSun} from "react-icons/bs"


import {AiOutlineCheckCircle} from "react-icons/ai"
import {BiTimeFive} from "react-icons/bi"
export const SettingWord=()=>{
  //let me get mode from local storage
  const mode=localStorage.getItem('darkmode');
    return(<div
    style={{backgroundColor:mode==='true'?('#0D0E17'):('white')}}
    >
<h1 className="text-center fw-bold"
 style={{backgroundColor:mode==='true'?('white'):('#0D0E17')}}
>Settings</h1>    
</div>)
}
//this is sidebar  of the settings
const SettingSideBar=()=>{
  //let me get mode from local storage
  const mode=localStorage.getItem('darkmode');

    const goToProfile=()=>{
        window.location.href="/profile"
    }
    const goToSecure=()=>{
        window.location.href="/security"
    }
    const goToHistory=()=>{
        window.location.href="/history"
    }
    const goToAppear=()=>{
        window.location.href="/appearance"
    }
    return( <div className=" border border-1 sidebar" style={{marginLeft:"20%" ,height:"100%",borderRadius:"10px",
    backgroundColor:mode==='true'?('white'):('#0C1737')
    }}>
         <div className="sidebar-item p-4">
      <CiUser style={{ color: "#1959B8" }} className="m-1"/>
      User settings
    </div>
    <div onClick={goToProfile} className="sidebar-item m-3">
      {/* <CiUser style={{ color: "#1959B8" }} className="m-1"/> */}
      <IoIosCall style={{ color: "#1959B8" }} className="m-1"/>
      Profile
    </div>
    <div onClick={goToSecure} className="sidebar-item m-3">
      <AiOutlineLock style={{ color: "#1959B8" }} className="m-1"/>
      Password &amp; Security
    </div>
    <div onClick={goToHistory} className="sidebar-item m-3">
      <GoHistory style={{ color: "#1959B8" }} className="m-1"/>
      History
    </div>
    <div onClick={goToAppear} className="sidebar-item m-3">
      <WiMoonWaxingCrescent5 className="m-1"/>
      Appearance
    </div>
    <div onClick={goToAppear} className="sidebar-item m-3">
      <BsSun style={{ color: "#1959B8" }} className="m-1"/>
      Appearance
    </div>
  </div>)
}


export default SettingSideBar;


