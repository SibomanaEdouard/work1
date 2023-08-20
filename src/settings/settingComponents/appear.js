import { SettingWord } from "../setting";
import SettingSideBar from "../setting";
import { Header } from "../../components/Forms";
const SetAppearance=()=>{
//let me get from localstorage
// const mode=localStorage.getItem('darkmode');

    return(<div className="border border-1 p-5" style={{marginRight:"11%",height:"98%",borderRadius:"10px",
    // backgroundColor:mode==='true'?('white'):('#0C1737')
    }}>
<h1 className="text-center fw-bold fs-3" style={{ marginLeft:"10%",
  // backgroundColor:mode==='true'?('white'):('#0C1737')
}}>Appearance</h1>
<div
style={{ marginLeft:"10%",
// backgroundColor:mode==='true'?('white'):('#0C1737')
}}
>
  <span className="fw-bold"
  style={{ marginLeft:"10%",
  // backgroundColor:mode==='true'?('white'):('#0C1737')
}}
  >Theme:</span>
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
<div className="d-flex">
        <div className="col-md-2 m-2 mt-5 ">
          <SettingSideBar />
        </div>
        <div className="col-md-8 mt-5">
        <SetAppearance/>
        </div>
      </div>
    </div>)
}

export default Appearance;