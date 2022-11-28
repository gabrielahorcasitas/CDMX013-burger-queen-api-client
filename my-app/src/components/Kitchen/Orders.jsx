import './kitchenView.css';
import Order from "./Order"
import burgerMenu from '../../images/burgerMenu.png';
function  Orders (){
    return(
        <>
        <table className="tableOrders">
    <thead className="table-order-header">
      <tr>
        <th>Orders</th>
      </tr>
    </thead>
    <tbody className="order-table-body">
      <Order/>
      </tbody>
      <tfoot className="logo-table-box"><tr className="container-logo-burger-orders"><img className="burger-logo-menu" src={burgerMenu} alt ='burger-logo-menu'></img></tr>
      </tfoot>
  </table>
  
        </>
    )
}

export default Orders;