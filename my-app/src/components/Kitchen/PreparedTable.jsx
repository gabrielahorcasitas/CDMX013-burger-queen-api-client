import './kitchenView.css';
import burgerMenu from '../../images/burgerMenu.png';
import Prepared from './Prepared';
function  PreparedTable ({isOrderReady,openOrderReady, closeOrderReady}){
    return(
        <>
        <table className="tableOrders">
    <thead className="table-order-header">
      <tr>
        <th>Orders</th>
      </tr>
    </thead>
    <tbody className="order-table-body">
      <Prepared isOrderReady={isOrderReady}  openOrderReady={openOrderReady} closeOrderReady={closeOrderReady} />
      </tbody>
      <tfoot className="logo-table-box"><tr className="container-logo-burger-orders"><img className="burger-logo-menu" src={burgerMenu} alt ='burger-logo-menu'></img></tr>
      </tfoot>
  </table>
  
        </>
    )
}

export default PreparedTable;