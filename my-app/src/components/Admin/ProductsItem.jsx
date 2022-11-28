import pencil from '../../images/pencil.png'
import trash from '../../images/trash.png'

function ProductsItem({ openDeleteProduct }) {
    return (
        <tr>
            <td>Photo</td>
            <td>Name</td>
            <td>Items</td>
            <td>Price</td>
            <img alt="edit" src={pencil}></img>
            <img alt="delete" src={trash} onClick={openDeleteProduct}></img>
        </tr>
    )
}

export default ProductsItem
