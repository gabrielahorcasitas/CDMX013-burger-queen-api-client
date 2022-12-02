import Item from "./Item";
import burgerMenu from '../../images/burgerMenu.png'

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
    <tbody className="menu-waiter-table-body">
      {rows}
      </tbody>
      <tfoot className="logo-table-box"><tr className="container-logo-burger"><img className="burger-logo-menu" src={burgerMenu} alt ='burger-logo-menu'></img></tr>
      </tfoot>
  </table>
  
    </>
    )
}

export default Menu;