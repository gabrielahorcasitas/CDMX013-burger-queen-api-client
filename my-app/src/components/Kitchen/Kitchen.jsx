import NavBars from "../NavBars";
import Headers from "../Headers";
import Orders from "./Orders";
import { useModal } from "../useModal";
import ModalConfirmKitchen from "./KitchenModals/ModalConfirmKitchen";
import {useLoaderData} from "react-router-dom";
import {useState} from 'react';
function Kitchen (){
    const[isOrderReady, openOrderReady, closeOrderReady]=useModal(false);
    const [orderReady, setOrderReady] = useState(useLoaderData())
    
   
    return(
    <> <NavBars/>
    <div className="body-active-order">
    <Headers/>
    <div>
      <Orders isOrderReady={isOrderReady} openOrderReady={openOrderReady} closeOrderReady={closeOrderReady} 
      orderReady={orderReady} setOrderReady={setOrderReady} />
    </div>
    </div>
    <ModalConfirmKitchen  isOpen={isOrderReady} close={closeOrderReady} />
    </>)
}
export default Kitchen;