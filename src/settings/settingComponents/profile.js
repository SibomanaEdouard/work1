import { SettingWord } from "../setting";
import SettingSideBar from "../setting";
import { Header } from "../../components/Forms";
import { useState ,useEffect,useRef} from "react";
import axios from "axios";
import {IoIosMail} from "react-icons/io"
import {BsCameraFill} from "react-icons/bs"
import { IoIosCall } from "react-icons/io";
import {IoMdTime} from "react-icons/io"
import {BsCheckCircle} from "react-icons/bs"
import {CiUser} from "react-icons/ci"
// import { BiBorderRadius } from "react-icons/bi";

const user=localStorage.getItem('id')
const UserProfile=()=>{
const [email,setEmail]=useState("");
const [phone,setPhone]=useState("");
const [username,setUsername]=useState("");
const [completed,setCompleted]=useState("");
const [unCompleted,setUnCompleted]=useState("");
const [tasks,setTasks]=useState("");
const [image,setImage]=useState(null);
//let get the mode from local storage


  useEffect(() => {
    fetchData();
  }, []); // Run fetchData only once on component mount
//to fetch all tasks
  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:5000/getNumber", {
        sender:user,
      });

      if (response.status === 200) {
        const data = response.data;
        setTasks(data);
      } else if (response.status === 404) {
        alert(response.message);
      } else {
        alert(response.error);
      }
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

//this is the to get information about the before edit
useEffect(()=>{
    // const sender=user
  const fetchdata=async()=>{
    try {
      const response = await axios.post("http://localhost:5000/userinfo",{user});
      const userData = response.data;
      setEmail(userData.email);
      setPhone(userData.phone);
      setUsername(userData.username);
      setImage(userData.imageUrl);
    } catch (error) {
      console.error('Error fetching task data:', error);
    }
}
//}
  fetchdata();
  },[])
const handleChangep=(e)=>{
    e.preventDefault();
    setPhone(e.target.value)
}
const handleChangeE=(e)=>{
  e.preventDefault();
  setEmail(e.target.value)
}
//this is the function to update the userinfo
const updateInfo=async()=>{
  try{
    //this is to send request to the backend server
  const response=await axios.put("http://localhost:5000/updateinfo",{user,email,phone});
  if(response.status===200){
alert(response.data.message);
window.location.reload();
  }else{
   throw new Error(response.data.error)
  }
}catch(error){
  console.log(error);
  alert(error)
}
}


//let me count un completed 
useEffect(() => {
  countUnCompleted();
}, []); // Run fetchData only once on component mount

const countUnCompleted=async()=>{
  try{
  const response=await axios.post("http://localhost:5000/countuncompleted",{user});

  if(response.status===200){
  const data=response.data;
  setUnCompleted(data);
  }else{
  throw new Error(response.data.error);
  }
}catch(error){
  console.log(error);
  alert(error);
}
}

//let me count completed  
useEffect(() => {
  countCompleted();
}, []); // Run fetchData only once on component mount
const countCompleted=async()=>{
  try{
  const response=await axios.post("http://localhost:5000/countcompleted",{user});

  if(response.status===200){
  const data=response.data;
  setCompleted(data);
  }else{
  throw new Error(response.data.error);
  }
}catch(error){
  console.log(error);
  alert(error);
}
}
//this is to update image
const fileInputRef = useRef(null);

    const handleButtonClick = () => {
      fileInputRef.current.click();
    };
    const handleFileChange = async (e) => {
        const file =e.target.files[0];
        try {
          const formData = new FormData();
          formData.append('image', file);
          formData.append('userId',user)
      
          const response = await axios.put('http://localhost:5000/updateImage', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            },
            data: {
              userId: user
            }
          });
          const imageUrl = response.data.imageUrl;
          console.log('Image URL:', imageUrl);
        } catch (error) {
          console.error('Image upload failed:', error);
        }
      };
      
    return(<div className="border border-1 m-1 p-5" style={{borderRadius:"10px",
  
    
    }}>
       
      <div>
        
      <div className="text-center">
<p className="fw-bold">Profile</p>
        {image ? (
         <div style={{borderRadius:"50%"}}>
            <img src={`http://localhost:5000/uploads/${image}`} alt="profile" 
            style={{width:"8%",height:"15vh",borderRadius:"50%",boxShadow:"none"}}/>
            <BsCameraFill onClick={handleButtonClick} style={{color:"#1959B7"}}/>
            </div>
        ) : (
          <div
          
          >
            <span>No image available</span>
            <BsCameraFill onClick={handleButtonClick} style={{color:"#1959B7"}}/>
          </div>
        )}
      </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      </div>
      <div className="text-center">
        <CiUser/>
      <span style={{paddingLeft:"3px",
      // backgroundColor:mode==='true'?('white'):('#0C1737')
    }}
      >{username}</span>
      </div>
<div className="row">
  <div className="col-md-5">
<BsCheckCircle style={{color:"#1959B7"}}/>
<span
// style={{backgroundColor:mode==='true'?('white'):('#0C1737')}}
>
  Total tasks : {tasks}
</span>
  </div>
  <div className="col-md-5">
<BsCheckCircle style={{color:"#1959B7"}}/>
<span
// style={{backgroundColor:mode==='true'?('white'):('#0C1737')}}
>
  completed tasks:
  {completed}
</span>
  </div>
  <div className="col-md-2">
<IoMdTime style={{color:"#1959B7"}}/>
<span
// style={{backgroundColor:mode==='true'?('white'):('#0C1737')}}
>
  pending tasks:
  {unCompleted}
</span>
  </div>

</div>
    
        <form onSubmit={updateInfo}
        // style={{backgroundColor:mode==='true'?('white'):('#0C1737')}}
        >
            <div className="row m-1"
            //  style={{backgroundColor:mode==='true'?('white'):('#0C1737')}}
            >
            <div className="col-md-6"
            //  style={{backgroundColor:mode==='true'?('white'):('#0C1737')}}
            >
            <label
            //  style={{backgroundColor:mode==='true'?('white'):('#0C1737')}}
            >Phone number</label>
                
                  <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text bg-white p-3">
            <IoIosCall style={{color:"#1959B7"}}/>
            </span>
            </div>
            <input
            type="tel"
            name="phone"
            // value={input.phone || ""}
            value={phone}
            onChange={handleChangep}
            className="form-control"
            />
            </div>
            </div>
            <div className="col-md-6"
            //  style={{backgroundColor:mode==='true'?('white'):('#0C1737')}}
            >
              <label
              //  style={{backgroundColor:mode==='true'?('white'):('#0C1737')}}
              >Email</label>
            <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text bg-white p-3">
          <IoIosMail style={{ color: "#1959B7" }} />
        </span>
      </div>
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleChangeE}
        className="form-control"
        placeholder="Email"
      />
    </div>
    <br/>
            </div>
          
            <input
            value="save"
            type="submit"
            className="form-control text-white w-75 p-2"
            style={{backgroundColor:"#1959B8",marginLeft:"1%"}}
            />
            </div>
        </form>
    </div>)
}




const Profile=()=>{

    return(<div>
<Header />
<SettingWord/>
<div className="d-flex">
        <div className="col-md-2 m-2 mt-5 ">
          <SettingSideBar />
        </div>
        <div className="col-md-8 mt-5">
        <UserProfile/>
        </div>
      </div>
    </div>)
}
export default Profile;