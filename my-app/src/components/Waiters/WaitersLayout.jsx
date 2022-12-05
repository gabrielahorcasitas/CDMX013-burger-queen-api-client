import Menu from "./Menu";
import NavBars from "../NavBars";
import Headers from "../Headers";
import Ticket from "./Ticket";
import './WaitersLayout.css'
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useModal } from "../useModal";
import { useSearchParams } from 'react-router-dom';
import ModalConfirmOrder from "./WaitersModals/ModalConfirmOrder"; 
import ModalConfirmCancel from "./WaitersModals/ModalConfirmCancel";

function WaitersLayout(){
  const products= useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const actualProducts = products.filter((product) =>{
    const type= searchParams.get('type') === null ? 'breakfast' : searchParams.get('type');
    if (product.type === type){
      return true
    }
    return false
  })

  const [text, setText] = useState('');
  const [isOpenConfirmOrder, openConfirmOrder, closeConfirmOrder] = useModal(false);
  const [isOpenCancelOrder, openCancelOrder, closeCancelOrder] = useModal(false);
  
  const [productQty, setProductQty] = useState(()=>{
    const quantities = {}
    products.forEach(product => {
      quantities[product.name] = 0
    })
    return quantities;
  });

  console.log(productQty);
 
  return (
    <>
    <NavBars/>
    <div className="body-new-order">
    <Headers text={text} setText = {setText}/>
    <div className="tables-menu-ticket">
    <Menu products={actualProducts} productQty={productQty} setProductQty={setProductQty}/>
    <Ticket text={text} productQty={productQty} products={actualProducts} openConfirmOrder={openConfirmOrder} openCancelOrder={openCancelOrder} />
    <ModalConfirmOrder isOpen={isOpenConfirmOrder} close={closeConfirmOrder}/>
    <ModalConfirmCancel isOpen= {isOpenCancelOrder} close={closeCancelOrder} products={products} setProductQty={setProductQty}/>
    </div>
    </div>
    </>
  )
}

export default WaitersLayout;