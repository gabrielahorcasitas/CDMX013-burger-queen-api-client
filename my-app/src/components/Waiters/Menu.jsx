import Item from "./Item";

function Menu({products}){
  
  const rows = [];

  products.forEach(product => {
    rows.push(<Item product={product} key={product._id} />)
  });

  return (
    <table className="tableMenu">
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </table>
  )
}

export default Menu;