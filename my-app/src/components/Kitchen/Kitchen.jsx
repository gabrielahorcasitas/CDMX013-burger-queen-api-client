import NavBars from "../NavBars";
import Headers from "../Headers";
import Orders from "./Orders";
import Modals from "../Modals";
import { useModal } from "../useModal";
function Kitchen (){
    const[isOrderReady, openOrderReady, closeOrderReady]=useModal(false);
    return(
    <> <NavBars/>
    <div className="body-active-order">
    <Headers/>
    <div>
      <Orders isOrderReady={isOrderReady} openOrderReady={openOrderReady} closeOrderReady={closeOrderReady} />
    </div>
    </div>
    <Modals  isOrderReady={isOrderReady} closeOrderReady={closeOrderReady} />
    </>)
}
export default Kitchen;