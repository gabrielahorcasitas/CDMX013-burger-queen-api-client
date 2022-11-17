
function ItemTicket({product, quantity, price}){
 
  return(
    <tr>
      <td>{product}</td>
      <td>x{quantity}</td>
      <td>${price}</td>
    </tr>
  )
}

export default ItemTicket;