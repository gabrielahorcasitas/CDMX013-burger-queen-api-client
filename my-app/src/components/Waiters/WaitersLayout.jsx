import Menu from "./Menu";
import NavBar from "./NavBar";
import './WaitersLayout.css'
import { useLoaderData } from "react-router-dom";

function WaitersLayout(){
  const products= useLoaderData();
  return (
    <>
    <NavBar/>
    <Menu products={products}/>
    </>
  )
}

export default WaitersLayout;