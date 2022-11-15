import {useState} from "react";

function Item({product}){
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return(
    <tr>
      <td>{product.name}</td>
      <td><div className="buttonBox">
      <button className="increment" onClick={increment}>
       +
      </button>
      <div className="count">{count}</div>
      <button className="decrement" onClick={decrement}>
       -
      </button></div></td>
    </tr>
  )
}

export default Item;