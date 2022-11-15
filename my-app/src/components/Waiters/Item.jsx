import {useState} from "react";
function Item({product}){
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return(
    <tr>
      <td>{product.name}</td>
      <td><button onClick={handleClick}>
        {count}
      </button></td>
    </tr>
  )
}

export default Item;