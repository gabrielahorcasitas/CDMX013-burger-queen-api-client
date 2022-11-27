import NavBars from "../NavBars";
import Modals from "../Modals";
import { useModal } from "../useModal";
function Kitchen (){
    const[isOrderReady, openOrderReady, closeOrderReady]=useModal(false);
    return(
    <> 
    <NavBars/>
    <Modals  isOrderReady={isOrderReady} closeOrderReady={closeOrderReady} />
    <button onClick={openOrderReady}>Prueba confirmar orden lista</button>
    </>)
}
export default Kitchen;