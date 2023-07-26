import { SettingWord } from "../setting";
import SettingSideBar from "../setting";
import { Header } from "../../components/Forms";
import axios from "axios";
import { useState ,useEffect} from "react";

//this is the component to display the the history
const DeletedTasks = () => {
    const sender = localStorage.getItem('id');
    const [deleted, setDeleted] = useState([]);
    const [selectedTasks, setSelectedTasks] = useState({});
  
  
    // let's fetch deleted tasks
    const fetchDeletedData = async () => {
      try {
        const response = await axios.post("http://localhost:5000/getdeleted", { sender });
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
  
    useEffect(() => {
      fetchDeletedData();
    }, []);
  
    // Handle checkbox change
    const handleCheckboxChange = (taskId) => {
      setSelectedTasks((prevSelected) => ({
        ...prevSelected,
        [taskId]: !prevSelected[taskId],
      }));
    };
    //this is to count the number of selected tasks
    const selectedCount = Object.values(selectedTasks).filter(Boolean).length;
    return (
      <div>
        <h1 className="text-center">History</h1>
  
        {deleted.map((task) => (
          <div key={task._id}>
            <input
              type="checkbox"
              checked={selectedTasks[task._id] || false}
              onChange={() => handleCheckboxChange(task._id)}
            />
            <span>{task.time}</span>
            <span>{task.task}</span>
          </div>
        ))}
        {deleted.length === 0 && <h1>No History Found</h1>}
       <span>{selectedCount}</span>
      </div>
    );
  };
  
  

  
const History=()=>{
    
    return(<div>
<Header />
<SettingWord/>
<SettingSideBar/>
<DeletedTasks/>
    </div>)
}
export default History;