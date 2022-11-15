
import Menu from "./Menu";
import './WaitersLayout.css'
import { useLoaderData } from "react-router-dom";


function Waiters(){
  const products= useLoaderData();
  return (
   <Menu products={products}/>
  )
}

export default Waiters;