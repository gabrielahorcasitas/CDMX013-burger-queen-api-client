import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import NavBars from "../NavBars";
import Headers from "../Headers";
import PreparedTableWaiters from "./PreparedTableWaiters";

function OrdersReady (){
    const [orderReady, setOrderReady] = useState(useLoaderData());
    
return (
    <>
    <NavBars/>
    <div className="body-active-order">
    <Headers/>
    <div>
    <PreparedTableWaiters orderReady={orderReady}/>
    </div>
    </div>
    </>
)
}

export default OrdersReady;