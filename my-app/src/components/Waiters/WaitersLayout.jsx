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
  

  return (
    <>
    <NavBar/>
    <div className="body-new-order">
    <Header text={text} setText = {setText}/>
    <div className="tables-menu-ticket">
    <Menu products={products}/>
    <Ticket text={text}  />
    </div>
    </div>
    </>
  )
}

export default WaitersLayout;