import pencil from '../../images/pencil.png'
import trash from '../../images/trash.png'

function ProductsItem({ product, openDeleteProduct, setIdModal }) {
    function sendId() {
        openDeleteProduct()
        setIdModal(product.product)
    }

    return (
        <tr>
            <td>
                <img
                    src={product.image}
                    alt="product-img"
                    className="product-img"
                ></img>
            </td>
            <td className="product-name" style={{ width: '13rem' }}>
                {product.name}
            </td>
            <td>{product.type}</td>
            <td className="price-product" style={{ width: '13rem' }}>
                {product.price}
            </td>
            <td>
                <img
                    alt="edit"
                    src={pencil}
                    style={{ height: '5rem' }}
                    className="product-actions"
                ></img>
            </td>
            <td>
                <img
                    alt="delete"
                    src={trash}
                    onClick={sendId}
                    className="product-actions"
                    style={{ height: '5rem' }}
                ></img>
            </td>
        </tr>
    )
}

export default ProductsItem
