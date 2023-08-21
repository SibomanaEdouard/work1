import { SettingWord } from "../setting";
import SettingSideBar from "../setting";
import { Header } from "../../components/Forms";
import axios from "axios";
import { useState ,useEffect} from "react";
import {RxCross2} from "react-icons/rx"

//this is the component to display the the history
const DeletedTasks = () => {
    const sender = localStorage.getItem('id');
    const [deleted, setDeleted] = useState([]);
    const [selectedTasks, setSelectedTasks] = useState({});
   
  
    // let's fetch deleted tasks
    useEffect(() => {
      const fetchDeletedData = async () => {
        try {
          const response = await axios.post("https://koracha.onrender.com/getdeleted", { sender });
          if (response.status === 200) {
            const data = response.data;
            if (Array.isArray(data)) {
  
          // Create an object with task IDs as keys and set all values to false initially
              const selected = data.reduce((acc, task) => {
                acc[task._id] = false;
                return acc;
              }, {});
              setDeleted(data);
            
              setSelectedTasks(selected);
            } else {
              console.log("Invalid data format received from the server.");
            }
          } else {
            alert("Failed to fetch history");
          }
        } catch (error) {
          console.log(error);
          alert("Failed to fetch history. Please check your internet connection.");
        }
      };
      fetchDeletedData();
    },[sender]);
  
    // Handle checkbox change
    const handleCheckboxChange = (taskId) => {
      setSelectedTasks((prevSelected) => ({
        ...prevSelected,
        [taskId]: !prevSelected[taskId],
      }));
    };

    //this is to count the number of selected tasks
    const selectedCount = Object.values(selectedTasks).filter(Boolean).length;
    
    //this is the function to refresh the page
    const handleRefresh=()=>{
        window.location.reload();
    }

    //this is the function  to delete the selected task
const handleDeleteSelected=async()=>{
    try{
    const selectedIds=Object.keys(selectedTasks).filter((taskId)=>selectedTasks[taskId]);
    if(selectedIds.length===0){
        alert("select task to be deleted");
        return;
    }else{


    //this is to send the resquest to the backend
    const response=await axios.post("https://koracha.onrender.com/deletehistory",{
       
            sender,
            taskId:selectedIds
    })
    if(response.status===200){
        alert("The  task was deleted successfully");
handleRefresh();
    }else{
        alert("Please check connections and Try again!");
    }
}
    }catch(error){
        console.log(error);
        alert(error);
    }
}  
    return (
      <div className="border border-1" style={{borderRadius:"10px",height:"99%",
      // backgroundColor:mode==='true'?('white'):('#0C1737')
      }}>
        <div className="p-5"
        >
        <h1 className="text-center"
        >History</h1>
        <div className="d-flex row ">
                <div className="col-md-9">
        <RxCross2 onClick={handleRefresh}/>
       <span className="p-2"
       >{selectedCount} selected</span>
       </div>
       <div className="col-md-3">
       <button onClick={handleDeleteSelected} className=" border-1  rounded d-flex" style={{width:"50%"}}>Delete</button>
       </div>
       </div>
  
        {deleted.map((task) => (
          <div key={task._id}
          >
            <input
              type="checkbox"
              checked={selectedTasks[task._id] || false}
              onChange={() => handleCheckboxChange(task._id)}
            />
            <span style={{marginRight:"10%",  
          }} 
            className="p-2">{task.date}</span>
            <span
            >{task.task}</span>
          </div>
        ))}
        {deleted.length === 0 && <h1
        >No History Found</h1>}
      </div>
      </div>
    );
  };
  
const History=()=>{
    
    return(<div>
<Header />
<SettingWord/>
<div className="d-flex">
        <div className="col-md-2 mt-5 m-2" style={{marginRight:"2px"}}>
          <SettingSideBar />
        </div>
        <div className="col-md-9 mt-5">
        <DeletedTasks/>
        </div>
      </div>
    </div>)
}
export default History;