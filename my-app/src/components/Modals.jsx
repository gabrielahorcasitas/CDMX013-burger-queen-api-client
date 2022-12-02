import check from '../../src/images/check.png'
import closeImg from '../../src/images/closeImg.png'
import ModalAdd from './Admin/ModalAdd'
import ModalEdit from './Admin/ModalEdit'
import ModalDelete from './Admin/ModalDelete'
import ModalConfirmKitchen from './Kitchen/ModalConfirmKitchen'

function Modals({
    isAddPartner,
    closeAddPartner,
    isAddProduct,
    closeAddProduct,
    isOpenDeletePartner,
    closeDeletePartner,
    isOpenDeleteProduct,
    closeDeletProduct,
    isOrderReady,
    closeOrderReady,
    deletePartner,
    deleteProduct,
    addPartners,
    setAddPartners,
    postPartner,
    addProducts,
    setAddProducts,
    postProduct,
    isEditPartner,
    closeEditPartner,
    putPartner,
}) {
 

    function handleAddChange({ target }) {
        const { name, value } = target
        const newValues = {
            ...addPartners,
            [name]: value,
        }
        console.log(newValues)
        setAddPartners(newValues)
    }
    function handleAddProductChange({ target }) {
        const { name, value } = target

        const newValues = {
            ...addProducts,
            [name]: value,
        }
        setAddProducts(newValues)
    }

    console.log(addPartners)
    return (
        <>
            <ModalConfirmKitchen isOpen={isOrderReady} close={closeOrderReady}>
                <div className="confirm-kitchen-container">
                    <label className="confirm-msg">
                        Was the order completed?
                    </label>
                    <div className="buttons-container">
                        <div className="check">
                            <img
                                className="img-confirm-order"
                                alt="confirm-order"
                                src={check}
                            ></img>
                        </div>
                        <div className="close">
                            <img
                                className="img-noconfirm-order"
                                alt="noconfirm-order"
                                src={closeImg}
                                onClick={closeOrderReady}
                            ></img>
                        </div>
                    </div>
                </div>
            </ModalConfirmKitchen>
        </>
    )
}

export default Modals
