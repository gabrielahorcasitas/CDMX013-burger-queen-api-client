
function ItemTicket({product}){
 
  return(
    <tr>
      <td>{product}</td>
      <td><div className="buttonDelete">
      <button className="increment" >
       x
      </button>
      </div></td>
    </tr>
  )
}

export default ItemTicket;