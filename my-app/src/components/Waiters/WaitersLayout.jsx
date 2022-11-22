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
  const bfProducts = products.filter((product) =>{
    if (product.type === 'breakfast'){
      return true
    }
    return false
  })

  const [text, setText] = useState('');
  const [isOpenConfirmOrder, openConfirmOrder, closeConfirmOrder] = useModal(false);
  const [productQty, setProductQty] = useState(()=>{
    const quantities = {}
    products.forEach(product => {
      quantities[product.name] = 0
    })
    return quantities;
  });
 
  return (
    <>
    <NavBar/>
    <div className="body-new-order">
    <Header text={text} setText = {setText}/>
    <div className="tables-menu-ticket">
    <Menu products={bfProducts} productQty={productQty} setProductQty={setProductQty}/>
    <Ticket text={text} productQty={productQty} products={bfProducts} openConfirmOrder={openConfirmOrder} setProductQty={setProductQty}/>
    <Modals isOpenConfirmOrder={isOpenConfirmOrder} openConfirmOrder={openConfirmOrder} closeConfirmOrder={closeConfirmOrder} />
   
    </div>
    </div>
    </>
  )
}

export default WaitersLayout;