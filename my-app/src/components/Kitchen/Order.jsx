function Order() {
  return (
    <>
      <tr>
        <div className="container-order">
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
          <div className="recived-button-Box">
            <h1 className="mgs-recived">Recived:       09-11-2022     17:00:52</h1>
            <button className="done">Done</button>
          </div>
        </td>
        </div>
        
      </tr>
    </>
  );
}

export default Order;
