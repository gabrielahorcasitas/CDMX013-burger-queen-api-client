function Order({openOrderReady, order, setIdOrder, setEditOrder}) {

  const productValue= Object.values(order);
  const products = productValue[2];
 
  let productData =[];
   products.forEach(element => {
    productData.push(<p className="product-qtys" key={element.id}> ({element.quantity}) {element.name}</p>)
   });

   function sendId(){
    openOrderReady()
    setIdOrder(order.id);
    setEditOrder({...order})
   }

  return (
    <>
      <tr>
        <div className="container-order">
        <td className="order-colum">
         <div className= "seccion-order">
            <h1 className="number-table">Table: {order.table}</h1> 
           <div className="box-cout-product">
             {productData} 
            </div> 
          </div>
        </td>
        <td className="order-colum">
          <div className="recived-button-Box">
            <h1 className="mgs-recived">Recived: {order.dataEntry}  </h1>
            <button className="done" onClick={sendId}>Done</button>
          </div>
        </td>
        </div>
      </tr>
    </>
  );
}

export default Order;
