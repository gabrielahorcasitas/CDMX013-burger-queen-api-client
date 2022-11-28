import ProductsItem from './ProductsItem'
import burgerMenu from '../../images/burgerMenu.png'
import add from '../../images/add.png'
function ProductsTable({ openAddProduct, openDeleteProduct }) {
    return (
        <>
            <table className="tableMenu" id="partners">
                <thead className="table-menu-header" id="partners-header">
                    <tr>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Items</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="menu-table-body" id="partners-body">
                    {[1, 23, 4, 5, 6, 12, 3, 12, 31, 23].map(() => (
                        <ProductsItem openDeleteProduct={openDeleteProduct} />
                    ))}
                </tbody>
                <tfoot className="logo-table-box" id="partners-footer">
                    <img
                        src={add}
                        alt="add"
                        className="add-img"
                        onClick={openAddProduct}
                    ></img>
                    <img
                        className="burger-logo-menu"
                        src={burgerMenu}
                        alt="burger-logo-menu"
                    ></img>
                </tfoot>
            </table>
        </>
    )
}

export default ProductsTable
