import NavBars from "../NavBars";
import Headers from "../Headers";
import Modals from "../Modals";
import { useModal } from "../useModal";
import PreparedTable from "./PreparedTable";

function PreparedContainer (){
    const[isOrderReady, openOrderReady, closeOrderReady]=useModal(false);
    return(
    <> <NavBars/>
    <div className="body-active-order">
    <Headers/>
    <div>
      <PreparedTable isOrderReady={isOrderReady} openOrderReady={openOrderReady} closeOrderReady={closeOrderReady} />
    </div>
    </div>
    <Modals  isOrderReady={isOrderReady} closeOrderReady={closeOrderReady} />
    </>)
}
export default PreparedContainer;