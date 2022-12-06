function Prepared({isOrderReady,openOrderReady, closeOrderReady}) {
    return (
      <>
        <tr>
          <div className="container-order-prepared">
          <td className="order-colum">
           <div className= "seccion-order">
              <h1 className="number-table"> Table # 1</h1> 
             <div className="box-cout-product">
               <p>(2)</p>
               <p className="product-names">Burger</p>
              </div> 
              <div className="box-cout-product">
               <p>(2)</p>
               <p className="product-names">Natural Fruit Juice</p>
              </div> 
            </div>
          </td>
          <td className="order-colum">
            <div className="mgs-Box">
              <h1 className="mgs-preparation-time">Preparation time:      40 minutes</h1>
              <h2 className="mgs-delivered">Delivered:       09-11-2022     17:40:52</h2>
            
            </div>
          </td>
          </div>
          
        </tr>
      </>
    );
  }
  
  export default Prepared;
  