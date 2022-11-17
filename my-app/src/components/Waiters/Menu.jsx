import Item from "./Item";
import burgerMenu from '../../images/burgerMenu.png'
import {useState} from "react";

function Menu({products, productQty, setProductQty }){
  const rows = [];
  
  if(products !== undefined){
    products.forEach(product => {
      rows.push(<Item product={product} productQty= {productQty} setProductQty={setProductQty} key={product.id} />)
    });
    
  }
   
  return (
    <>
      <table className="tableMenu">
    <thead className="table-menu-header">
      <tr>
        <th>Menu</th>
      </tr>
    </thead>
    <tbody className="menu-table-body">
      {rows}
      <img className="burger-logo-menu" src={burgerMenu} alt ='burger-logo-menu'></img>
      </tbody>
  </table>
  
    </>
    )
}

export default Menu;