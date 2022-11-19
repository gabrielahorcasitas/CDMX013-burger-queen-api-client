import Menu from "./Menu";
import NavBar from "./NavBar";
import Header from "./Header";
import Ticket from "./Ticket";
import Modals from "../Modals";
import './WaitersLayout.css'
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useModal } from "../useModal";

function WaitersLayout(){
  const products= useLoaderData();

  const [text, setText] = useState('');
  const [isOpenConfirmOrder, openConfirmOrder, closeConfirmOrder] = useModal(false);
  console.log(closeConfirmOrder);
  const [productQty, setProductQty] = useState(()=>{
    const quantities = {}
    products.forEach(product => {
      quantities[product.name] = 0
    })
    return quantities;
  }
    );

  return (
    <>
    <NavBar/>
    <div className="body-new-order">
    <Header text={text} setText = {setText}/>
    <div className="tables-menu-ticket">
    <Menu products={products} productQty={productQty} setProductQty={setProductQty}/>
    <Ticket text={text} productQty={productQty} products={products} openConfirmOrder={openConfirmOrder}/>
    <Modals isOpenConfirmOrder={isOpenConfirmOrder} openConfirmOrder={openConfirmOrder} closeConfirmOrder={closeConfirmOrder} />
   
    </div>
    </div>
    </>
  )
}

export default WaitersLayout;