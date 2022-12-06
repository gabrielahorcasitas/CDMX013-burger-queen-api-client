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
import axios from "axios";

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

  const [text, setText] = useState(()=> {
    const savedItem = localStorage.getItem('Text');
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });

  const [isOpenConfirmOrder, openConfirmOrder, closeConfirmOrder] = useModal(false);
  const [isOpenCancelOrder, openCancelOrder, closeCancelOrder] = useModal(false);
  
  const [productQty, setProductQty] = useState(()=>{
    const quantities = {}
    products.forEach(product => {
      quantities[product.name] = 0
    })
    return quantities;
  });

  const urlOrders = "https://638e40c1aefc455fb2b94c24.mockapi.io/Orders";
  const productsEntries = Object.entries(productQty);

  const[userName, setUserName] = useState(()=> {
    const savedItem = localStorage.getItem('UserId');
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });

  const moreThanOneProducts= productsEntries.filter((product) => {
   return product[1] >= 1
  });
  console.log(moreThanOneProducts)
  const productName = moreThanOneProducts.map((product) => {
      return product[0];
  });
  console.log(productName)
  const productNumber = moreThanOneProducts.map((product) => {
      return product[1];
  });
  console.log(productNumber)

  const [order, setOrder]= useState({
      userId: userName,
      table: text,
      products: [],
      status: 'sent',
      dateEntry: new Date().getTime(),
      dateProcessed: "",
})

function resetQty() {
  setProductQty(() => {
      const quantities = {}
      products.forEach((product) => {
          quantities[product.name] = 0
      })
      closeCancelOrder()
      closeConfirmOrder()
      return quantities
  })
}

function saveOrder() {
  console.log('nueva orden: ')
  console.log(order)
  const arrOrderedProducts= []
    axios.post(urlOrders, {...order,
      products: arrOrderedProducts}).then((resp) => {
    closeConfirmOrder()
    resetQty()
   })
} 
  return (
    <>
    <NavBars/>
    <div className="body-new-order">
    <Headers text={text} setText = {setText}/>
    <div className="tables-menu-ticket">
    <Menu products={actualProducts} productQty={productQty} setProductQty={setProductQty}/>
    <Ticket text={text} productQty={productQty} products={actualProducts} openConfirmOrder={openConfirmOrder} openCancelOrder={openCancelOrder} close={closeConfirmOrder}/>
    <ModalConfirmOrder isOpen={isOpenConfirmOrder} close={closeConfirmOrder} saveOrder={saveOrder}/>
    <ModalConfirmCancel isOpen= {isOpenCancelOrder} close={closeCancelOrder} products={products} setProductQty={setProductQty} resetQty={resetQty}/>
    </div>
    </div>
    </>
  )
}

export default WaitersLayout;