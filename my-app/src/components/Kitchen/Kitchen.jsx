import NavBars from "../NavBars";
import Headers from "../Headers";
import Orders from "./Orders";

function Kitchen (){
    return(
    <> <NavBars/>
    <div className="body-active-order">
    <Headers/>
    <div>
      <Orders/>
    </div>
    </div>
    </>)
}
export default Kitchen;