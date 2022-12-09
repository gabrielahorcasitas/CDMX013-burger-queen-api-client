function PreparedWaiters({order, openOrderDelivered, 
  setIdOrder, setEditOrderDelivered }) {
    const productValue= Object.values(order);
    const products = productValue[2];
    let total = 0;
   
    let productData =[];
     products.forEach(element => {
     const itemPrice = element.product.price*element.quantity;
     total = itemPrice+total;
      productData.push(<div className="box-cout-product-waiters">
        <p className="product-qtys-waiters" key={element.id}>({element.quantity}) {element.name}</p>
        <p className="product-qtys-waiters" key={element.id}>${element.product.price}</p>
        </div>)
     });

     function sendId(){
      openOrderDelivered()
      setIdOrder(order.id);
      setEditOrderDelivered({...order})
     }
    
      return (
        <>
        <tr>
          <td className="td-waiters-ready">
          <div className="container-order-ready">
            <div className="order-colum">
              <div className= "seccion-order">
                  <h1 className="number-table"> Table #{order.table}</h1> 
                   {productData} 
                </div>
            </div>
              <div className="mgs-box-waiters-ready">
                <h2 className="mgs-delivered-waiters">Done:  {order.dataProcessedStr} </h2>
                <h2 className="msg-total-price-ready">Total ${total}</h2>
                <button className="delivered" onClick={sendId} >Deliver </button>
              </div>
           </div>
          </td>
        </tr>
      </>
      );
    }
    
    export default PreparedWaiters;
    