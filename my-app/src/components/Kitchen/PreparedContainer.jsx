import NavBars from "../NavBars";
import Headers from "../Headers";
import { useModal } from "../useModal";
import PreparedTable from "./PreparedTable";
import ModalConfirmKitchen from "./KitchenModals/ModalConfirmKitchen";

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
    <ModalConfirmKitchen  isOrderReady={isOrderReady} closeOrderReady={closeOrderReady} />
    </>)
}
export default PreparedContainer;