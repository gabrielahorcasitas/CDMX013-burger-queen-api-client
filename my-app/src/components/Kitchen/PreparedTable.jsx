import './kitchenView.css';
import burgerlogo from '../../images/burgerlogo.png';
import Prepared from './Prepared';
function  PreparedTable ({isOrderReady,openOrderReady, closeOrderReady, orderReady}){
  let ordersContainer = ''  ;

  if (orderReady !== undefined) {
    const sentOrders = orderReady.filter((order) => order.status === 'done');
    ordersContainer = sentOrders.map((order) => {
     return( <Prepared
      isOrderReady={isOrderReady}
      openOrderReady={openOrderReady}
      closeOrderReady={closeOrderReady}
      order={order}
      key={order.id}
      />)
  })        
};
    return(
        <>
        <table className="tableOrders">
    <thead className="table-order-header">
      <tr>
        <th>Orders</th>
      </tr>
    </thead>
    <tbody className="order-table-body">
      {ordersContainer}
    </tbody>
    <tfoot className="logo-table-box-chefs">
      <tr className="container-logo-burger-orders">
        <td className='container-burger-chefs'>
            <img
              className="burger-logo-menu" id='burger-logo-admin'
              src={burgerlogo}
              alt="burger-logo-menu"
             ></img>
        </td>
      </tr>
    </tfoot>
  </table>
  </>
  )
}

export default PreparedTable;