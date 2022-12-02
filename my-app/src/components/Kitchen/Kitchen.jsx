import NavBars from "../NavBars";
import Headers from "../Headers";
import Orders from "./Orders";
import { useModal } from "../useModal";
import ModalConfirmKitchen from "./KitchenModals/ModalConfirmKitchen";
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
    <ModalConfirmKitchen  isOpen={isOrderReady} close={closeOrderReady} />
    </>)
}
export default Kitchen;