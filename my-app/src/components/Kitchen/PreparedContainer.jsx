import NavBars from "../NavBars";
import Headers from "../Headers";
import { useModal } from "../useModal";
import PreparedTable from "./PreparedTable";
import ModalConfirmKitchen from "./KitchenModals/ModalConfirmKitchen";
import {useState} from 'react';
import {useLoaderData} from 'react-router-dom'

function PreparedContainer (){
    const[isOrderReady, openOrderReady, closeOrderReady]=useModal(false);
    const [orderReady, setOrderReady] = useState(useLoaderData());

    return(
    <> <NavBars/>
    <div className="body-active-order">
    <Headers/>
    <div>
      <PreparedTable isOrderReady={isOrderReady} openOrderReady={openOrderReady} closeOrderReady={closeOrderReady} orderReady={orderReady}/>
    </div>
    </div>
    <ModalConfirmKitchen  isOrderReady={isOrderReady} closeOrderReady={closeOrderReady} />
    </>)
}
export default PreparedContainer;