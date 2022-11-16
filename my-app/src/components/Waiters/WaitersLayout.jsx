import Menu from "./Menu";
import NavBar from "./NavBar";
import Header from "./Header";
import Ticket from "./Ticket";
import './WaitersLayout.css'
import { useLoaderData } from "react-router-dom";

function WaitersLayout(){
  const products= useLoaderData();
  return (
    <>
    <NavBar/>
    <div className="body-new-order">
    <Header/>
    <div className="tables-menu-ticket">
    <Menu products={products}/>
    <Ticket/>
    </div>
    </div>
    </>
  )
}

export default WaitersLayout;