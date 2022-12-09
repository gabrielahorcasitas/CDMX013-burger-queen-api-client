function PreparedWaiters({order}) {
    const productValue= Object.values(order);
    const products = productValue[2];
    console.log(products)
    let total = 0;
   
    let productData =[];
     products.forEach(element => {
     const itemPrice = element.product.price*element.quantity;
     total = itemPrice+total;
      productData.push(<p className="product-qtys" key={element.id}>({element.quantity}) {element.name} {element.product.price}</p>)
     });
  
    const prepatationTime = ((order.dataProcessedMil-order.dataEntryMil)/60000).toFixed();
  
      return (
        <>
        <tr>
          <td>
          <div className="container-order-prepared">
            <div className="order-colum">
              <div className= "seccion-order">
                  <h1 className="number-table"> Table: {order.table}</h1> 
                  <div className="box-cout-product">
                   {productData} 
                  </div> 
                </div>
            </div>
            <div className="order-colum">
              <div className="mgs-Box">
                <h2 className="mgs-delivered">Delivered:  {order.dataProcessedStr} </h2>
                <h2 className="msg-total-price">Total ${total}</h2>
              </div>
           </div>
          </div>
          </td>
        </tr>
      </>
      );
    }
    
    export default PreparedWaiters;
    