function PreparedWaiters({order}) {
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
    
      return (
        <>
        <tr>
          <td>
          <div className="container-order-prepared">
            <div className="order-colum">
              <div className= "seccion-order">
                  <h1 className="number-table"> Table #{order.table}</h1> 
                   {productData} 
                </div>
            </div>
              <div className="mgs-box-waiters">
                <h2 className="mgs-delivered-waiters">Delivered:  {order.dataProcessedStr} </h2>
                <h2 className="msg-total-price">Total ${total}</h2>
              </div>
           </div>
          </td>
        </tr>
      </>
      );
    }
    
    export default PreparedWaiters;
    