import Item from "./Item";
import burgerMenu from '../../images/burgerMenu.png'

function Menu({products}){
  
  const rows = [];
  if(products !== undefined){
    products.forEach(product => {
      rows.push(<Item product={product} key={product.id} />)
    });
  }

  return (
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
  )
}

export default Menu;