import ProductsItem from './ProductsItem'
import burgerMenu from '../../images/burgerMenu.png'
import add from '../../images/add.png'
import { useLoaderData } from 'react-router-dom'

function ProductsTable({ openAddProduct, openDeleteProduct }) {
    const products = useLoaderData()
    const rows = []

    if (products !== undefined) {
        products.forEach((product) => {
            rows.push(
                <ProductsItem
                    product={product}
                    openDeleteProduct={openDeleteProduct}
                    key={product.id}
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
                        <th>Items</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="menu-table-body" id="partners-body">
                    {rows}
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
