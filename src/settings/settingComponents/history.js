import { SettingWord } from "../setting";
import SettingSideBar from "../setting";
import { Header } from "../../components/Forms";

//this is the component to render the history of the user
const DeletedTasks=()=>{

    return(<div>
        <h1>History</h1>
    </div>)
}
const History=()=>{
    
    return(<div>
<Header />
<SettingWord/>
<SettingSideBar/>
    </div>)
}
export default History;