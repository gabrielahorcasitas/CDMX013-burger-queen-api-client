import Item from "./Item";

function Menu({products}){
  
  const rows = [];

  products.forEach(product => {
    rows.push(<Item product={product} key={product.id} />)
  });

  return (
    <table className="tableMenu">
    <thead>
      <tr>
        <th>Menu</th>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </table>
  )
}

export default Menu;