import NavBars from '../NavBars'
import Header from './Header'
import ProductsTable from './ProductsTable'
function Products() {
    return (
        <>
            <NavBars />
            <div className="partners-layout">
                <Header />
                <ProductsTable />
            </div>
        </>
    )
}

export default Products
