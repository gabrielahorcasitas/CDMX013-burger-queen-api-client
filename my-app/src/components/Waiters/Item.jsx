
function Item({product, productQty, setProductQty}){

  function increment() {
    setProductQty({...productQty,[product.name]: productQty[product.name] + 1 });
  }
  function decrement() {
    setProductQty({...productQty,[product.name]: productQty[product.name] - 1 <0 ? 0: productQty[product.name] - 1 });
  }
  
  return(
    <tr>
      <td>{product.name}</td>
      <td >${product.price}</td>
      <td><div className="buttonBox">
      <button className="increment" onClick={increment}>
       +
      </button>
      <div className="count">{productQty[product.name]}</div>
      <button className="decrement" onClick={decrement}>
       -
      </button></div></td>
    </tr>
  )
}

export default Item;