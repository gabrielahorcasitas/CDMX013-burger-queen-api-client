import NavBars from "../NavBars";
import Modals from "../Modals";
import { useModal } from "../useModal";
function Kitchen (){
    const[isOrderReady, openOrderReady, closeOrderReady]=useModal(false);
    return(
    <> 
    <NavBars isOrderReady={isOrderReady} closeOrderReady={closeOrderReady}/>
    <Modals/>
    <button onClick={openOrderReady}>Prueba confirmar orden lista</button>
    </>)
}
export default Kitchen;