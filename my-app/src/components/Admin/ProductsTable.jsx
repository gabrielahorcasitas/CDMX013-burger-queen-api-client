import ProductsItem from './ProductsItem'
import burgerMenu from '../../images/burgerMenu.png'
import add from '../../images/add.png'

function ProductsTable({
    openAddProduct,
    openDeleteProduct,
    products,
    setIdModal,
}) {
    const rows = []

    if (products !== undefined) {
        products.forEach((product) => {
            rows.push(
                <ProductsItem
                    product={product}
                    openDeleteProduct={openDeleteProduct}
                    key={product.product}
                    setIdModal={setIdModal}
                />
            )
        })
    }
    return (
        <>
            <table className="tableMenu" id="partners">
                <thead className="table-menu-header" id="partners-header">
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="menu-products-table-body" id="partners-body">
                    {rows}
                </tbody>
                <tfoot className="logo-table-box" id="partners-footer">
                    <tr>
                        <td>
                            <img
                                src={add}
                                alt="add"
                                className="add-img"
                                onClick={openAddProduct}
                            ></img>
                        </td>
                        <td>
                            <img
                                className="burger-logo-menu"
                                src={burgerMenu}
                                alt="burger-logo-menu"
                            ></img>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default ProductsTable
