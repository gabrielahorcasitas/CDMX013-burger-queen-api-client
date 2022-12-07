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

  const [isOpenConfirmOrder, openConfirmOrder, closeConfirmOrder] = useModal(false);
  const [isOpenCancelOrder, openCancelOrder, closeCancelOrder] = useModal(false);
  
  const [productQty, setProductQty] = useState(()=>{
    const quantities = {}
    products.forEach(product => {
      quantities[product.name] = 0
    })
    return quantities;
  });

  const[userName, setUserName] = useState(()=> {
    const savedItem = localStorage.getItem('UserId');
    const parsedItem = JSON.parse(savedItem);
    return parsedItem || "";
  });

  const [text, setText] = useState('');
  // const [text, setText] = useState(()=> {
  //   const savedItem = localStorage.getItem('Text');
  //   const parsedItem = JSON.parse(savedItem);
  //   return parsedItem || "";
  // });

  const [order, setOrder]= useState({
      userId: userName,
      table: text,
      products: [],
      status: 'sent',
      dataEntry: new Date().getTime(),
      dataProcessed: "",
});

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
};

const urlOrders = "https://6372d80a348e947299fdd17b.mockapi.io/orders";
const productsEntries = Object.entries(productQty);

function saveOrder() {
  // console.log('nueva orden: ')
  //console.log(order)
  //array que contiene el objeto y la cantidad del producto para generar la orden
  let arrProducts=[];
  products.forEach((productObj) => {
     productsEntries.forEach((product) => {
     const obj = productObj;
     const name = product[0];
     const quantity = product[1];
     if(name === obj.name && quantity >= 1){
       //console.log([obj, name, quantity]);
       arrProducts.push([obj, name, quantity]);
     } 
  })
});
  axios.post(urlOrders, {...order,
      table: text,
      products: arrProducts})
      .then((resp) => {
        setText('')
        document.querySelector(".input-table").value=''
        closeConfirmOrder()
        resetQty()
   })
};

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