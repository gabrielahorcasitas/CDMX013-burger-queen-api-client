function Prepared({order}) {

  const productValue= Object.values(order);
  const products = productValue[2];
 
  let productData =[];
   products.forEach(element => {
    productData.push(<p className="product-qtys" > ({element.quantity}) {element.name}</p>)
   });
    return (
      <>
        <tr>
          <div className="container-order-prepared">
          <td className="order-colum">
           <div className= "seccion-order">
              <h1 className="number-table"> Table: {order.table}</h1> 
              <div className="box-cout-product">
              {productData} 
              </div> 
            </div>
          </td>
          <td className="order-colum">
            <div className="mgs-Box">
              <h1 className="mgs-preparation-time">Preparation time: 40 minutes</h1>
              <h2 className="mgs-delivered">Delivered:  {order.dataProcessed} </h2>
            
            </div>
          </td>
          </div>
        </tr>
      </>
    );
  }
  
  export default Prepared;
  