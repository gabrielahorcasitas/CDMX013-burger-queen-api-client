import {useEffect, useState} from 'react';
import {useLoaderData, useRevalidator} from "react-router-dom";
import NavBars from "../NavBars";
import Headers from "../Headers";
import PreparedTableWaiters from "./PreparedTableWaiters";
import ModalConfirmDelivered from "./WaitersModals/ModalConfirmDelivered";
import { useModal } from "../useModal";
import axios from "axios";
import getData from "../../getData";

function OrdersReady ({handleAccount}){
    const revalidator = useRevalidator();
    const data = useLoaderData()
    const [orderReady, setOrderReady] = useState(data);
    const[isOpenOrderDelivered, openOrderDelivered, closeOrderDelivered]=useModal(false);
    const [idOrder, setIdOrder] = useState('');
    const [editOrderDelivered, setEditOrderDelivered] = useState({
        userId: '',
        table: '',
        products: [],
        status: '',
        dataEntryStr: '',
        dataEntryMil: '',
        dataProcessedStr: '',
        dataProcessedMil: '',
    });

    useEffect(() => {
        setOrderReady(data)
    }, [data])

    useEffect(() => {
        const id = setInterval(() => {
            revalidator.revalidate();
        }, 5000);

        return () => clearInterval(id);
    }, []);
  
   
    function editStateDelivered(){
        const urlOrders = `https://6372d80a348e947299fdd17b.mockapi.io/orders/${idOrder}`;
        axios.put(urlOrders, {...editOrderDelivered, status : 'delivered'})
        .then(async (result) => {
            const dataProducts = await getData("https://6372d80a348e947299fdd17b.mockapi.io/orders/");
            closeOrderDelivered()
            revalidator.revalidate();
        })
       }
    
return (
    <>
    <NavBars handleAccount={handleAccount}/>
    <div className="body-active-order">
    <Headers/>
    <div>
    <PreparedTableWaiters orderReady={orderReady}  isOrderDelivered={isOpenOrderDelivered} openOrderDelivered={openOrderDelivered} 
    setIdOrder={setIdOrder} setEditOrderDelivered={setEditOrderDelivered} setOrderReady={setOrderReady}/>
    <ModalConfirmDelivered idOrder={idOrder} setIdOrder={setIdOrder} isOpen={isOpenOrderDelivered} close={closeOrderDelivered} editStateDelivered={editStateDelivered} />
    </div>
    </div>
    </>
)
}

export default OrdersReady;