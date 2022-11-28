import NavBars from '../NavBars'
import Header from './Header'
import ProductsTable from './ProductsTable'
import Modals from '../Modals'
import { useModal } from '../useModal'

function Products() {
    const [isAddProduct, openAddProduct, closeAddProduct] = useModal(false)
    const [isOpenDeleteProduct, openDeleteProduct, closeDeleteProduct] =
        useModal(false)
    return (
        <>
            <NavBars />
            <Modals
                isAddProduct={isAddProduct}
                closeAddProduct={closeAddProduct}
                isOpenDeleteProduct={isOpenDeleteProduct}
                closeDeletProduct={closeDeleteProduct}
            />
            <div className="partners-layout">
                <Header />
                <ProductsTable
                    openAddProduct={openAddProduct}
                    openDeleteProduct={openDeleteProduct}
                />
            </div>
        </>
    )
}

export default Products
