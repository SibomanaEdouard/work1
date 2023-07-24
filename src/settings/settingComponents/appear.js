import { SettingWord } from "../setting";
import SettingSideBar from "../setting";
import { Header } from "../../components/Forms";
const SetAppearance=()=>{

    return(<div>
<h1>Appearance</h1>
<div>
    Theme:
    <select>
        <option value="default system">default system</option>
        <option value="dark mode">dark mode</option>
    </select>
</div>
    </div>
    )
}

const Appearance=()=>{

    return(<div>
<Header />
<SettingWord/>
<SettingSideBar/>
<SetAppearance/>
    </div>)
}
export default Appearance;