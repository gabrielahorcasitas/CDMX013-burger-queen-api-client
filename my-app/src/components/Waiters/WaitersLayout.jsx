import Menu from "./Menu";
import NavBar from "./NavBar";
import Header from "./Header";
import Ticket from "./Ticket";
import './WaitersLayout.css'
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

function WaitersLayout(){
  const products= useLoaderData();

  const [text, setText] = useState('');

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
    <Ticket text={text} productQty={productQty}/>
    </div>
    </div>
    </>
  )
}

export default WaitersLayout;