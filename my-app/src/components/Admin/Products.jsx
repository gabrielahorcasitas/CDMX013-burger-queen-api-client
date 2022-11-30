import NavBars from '../NavBars'
import Header from './Header'
import ProductsTable from './ProductsTable'
import Modals from '../Modals'
import { useModal } from '../useModal'
import { useLoaderData } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import getData from '../../getData'

function Products() {
    const [isAddProduct, openAddProduct, closeAddProduct] = useModal(false)
    const [isOpenDeleteProduct, openDeleteProduct, closeDeleteProduct] =
        useModal(false)
    const [idModal, setIdModal] = useState('')
    const [products, setProducts] = useState(useLoaderData())
    const [inputText, setInputText] = useState('')
    const [filteredProducts, setFilteredProducts] = useState(products)

    const filterByName = products.filter((element) => {
        return element.name.toLowerCase().includes(inputText)
    })

    useEffect(() => {
        setFilteredProducts(inputText !== '' ? filterByName : products)
    }, [inputText])

    const urlProducts = 'https://6372d80a348e947299fdd17b.mockapi.io/products'

    function deleteProduct() {
        axios
            .delete(
                `https://6372d80a348e947299fdd17b.mockapi.io/products/${idModal}`
            )
            .then(async () => {
                const dataProducts = await getData(urlProducts)
                closeDeleteProduct()
                return setProducts(dataProducts)
            })
    }

    return (
        <>
            <NavBars />
            <Modals
                isAddProduct={isAddProduct}
                closeAddProduct={closeAddProduct}
                isOpenDeleteProduct={isOpenDeleteProduct}
                closeDeletProduct={closeDeleteProduct}
                deleteProduct={deleteProduct}
            />
            <div className="partners-layout">
                <Header inputText={inputText} setInputText={setInputText} />
                <ProductsTable
                    openAddProduct={openAddProduct}
                    openDeleteProduct={openDeleteProduct}
                    setIdModal={setIdModal}
                    products={
                        filteredProducts !== products
                            ? filteredProducts
                            : products
                    }
                />
            </div>
        </>
    )
}

export default Products
