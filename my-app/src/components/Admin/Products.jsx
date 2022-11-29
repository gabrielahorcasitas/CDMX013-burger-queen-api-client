import NavBars from '../NavBars'
import Header from './Header'
import ProductsTable from './ProductsTable'
import Modals from '../Modals'
import { useModal } from '../useModal'
import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import getData from '../../getData'

function Products() {
    const [isAddProduct, openAddProduct, closeAddProduct] = useModal(false)
    const [isOpenDeleteProduct, openDeleteProduct, closeDeleteProduct] =
        useModal(false)
    const [idModal, setIdModal] =useState('')
    const [products, setProducts] = useState(useLoaderData());

    const urlProducts = 'https://6372d80a348e947299fdd17b.mockapi.io/products';

    function deleteProduct(){
        axios.delete(`https://6372d80a348e947299fdd17b.mockapi.io/products/${idModal}`)  
        .then(async () =>{
          const dataProducts =  await getData(urlProducts);
          closeDeleteProduct();
          return setProducts(dataProducts)
        })
      };
    
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
                <Header />
                <ProductsTable
                    openAddProduct={openAddProduct}
                    openDeleteProduct={openDeleteProduct}
                    setIdModal={setIdModal}
                    products={products}
                />
            </div>
        </>
    )
}

export default Products
