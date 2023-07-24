import { SettingWord } from "../setting";
import SettingSideBar from "../setting";
import { Header } from "../../components/Forms";
import { useState } from "react";

const FormToChangePass=()=>{

const [input,setInput]=useState({
    oldpassword:"",
    newpassword:"",
    confirmpassword:"",
});
const handleChange=(e)=>{
    e.preventDefault();
    const name=e.target.name;
    const value=e.target.value;
    setInput((values)=>({...values,[name]:value}));
}

    return(<div>
        <h1>Change password</h1>
        <form>
        <label for="oldpassword">old password</label><br/>
            <input 
            name="oldpassword"
            value={input.oldpassword||""}
            onChange={handleChange}
            /><br/>

            <label for="newpassword">new password</label><br/>
            <input 
            name="newpassword"
            value={input.newpassword||""}
            onChange={handleChange}
            /><br/>
             <label for="confirmpassword">confirm password</label><br/>
            <input 
            name="confirmpassword"
            value={input.confirmpassword||""}
            onChange={handleChange}
            /><br/>
                 <input 
          type="submit"
          value="save"
            />
        </form>
    </div>)
}
const Secure=()=>{

    return(<div>
<Header />
<SettingWord/>
<SettingSideBar/>
<FormToChangePass/>
    </div>)
}
export default Secure;