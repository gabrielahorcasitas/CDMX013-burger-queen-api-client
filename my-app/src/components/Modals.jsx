import check from '../../src/images/check.png'
import close from '../../src/images/close.png'
import ModalAdd from './Admin/ModalAdd'
import ModalConfirm from './Waiters/ModalConfirm'
import ModalDelete from './Admin/ModalDelete'
import ModalConfirmKitchen from './Kitchen/ModalConfirmKitchen'

function Modals({
    isOpenConfirmOrder,
    closeConfirmOrder,
    isOpenCancelOrder,
    closeCancelOrder,
    setProductQty,
    products,
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
}) {
    function resetQty() {
        setProductQty(() => {
            const quantities = {}
            products.forEach((product) => {
                quantities[product.name] = 0
            })
            closeCancelOrder()
            return quantities
        })
    }

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
            <ModalConfirm isOpen={isOpenConfirmOrder} close={closeConfirmOrder}>
                <div className="confirm-container">
                    <label className="confirm-msg">
                        Is the order ready to be sent to the kitchen?
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
                                src={close}
                                onClick={closeConfirmOrder}
                            ></img>
                        </div>
                    </div>
                </div>
            </ModalConfirm>
            <ModalConfirm isOpen={isOpenCancelOrder} close={closeCancelOrder}>
                <div className="confirm-container">
                    <label className="confirm-msg">
                        Are you sure you want to cancel the order?
                    </label>
                    <div className="buttons-container">
                        <div className="check">
                            <img
                                className="img-confirm-order"
                                alt="confirm-order"
                                src={check}
                                onClick={resetQty}
                            ></img>
                        </div>
                        <div className="close">
                            <img
                                className="img-noconfirm-order"
                                alt="noconfirm-order"
                                src={close}
                                onClick={closeCancelOrder}
                            ></img>
                        </div>
                    </div>
                </div>
            </ModalConfirm>
            <ModalAdd isOpen={isAddPartner} close={closeAddPartner}>
                <form className="admin-add-form" onSubmit={postPartner}>
                    <label className="add-msg">Add Partner</label>
                    <label className="field">Email</label>
                    <input
                        className="input-admin-form"
                        type="text"
                        required
                        onInvalid={(e) =>
                            e.target.setCustomValidity('This field is empty')
                        }
                        onInput={(e) => e.target.setCustomValidity('')}
                        onChange={handleAddChange}
                        name="email"
                    />
                    <label className="field">Password</label>
                    <input
                        className="input-admin-form"
                        type="password"
                        required
                        onInvalid={(e) =>
                            e.target.setCustomValidity('This field is empty')
                        }
                        onInput={(e) => e.target.setCustomValidity('')}
                        onChange={handleAddChange}
                        name="password"
                    />
                    <label className="field">Position</label>
                    <select
                        className="input-admin-form"
                        required
                        onChange={handleAddChange}
                        name="role"
                    >
                        <option>admin</option>
                        <option>kitchen</option>
                        <option>waiter</option>
                    </select>
                    <div className="buttons-admin-container">
                        <button className="check" type="submit">
                            <img
                                className="img-confirm-order"
                                alt="confirm-order"
                                src={check}
                            ></img>
                        </button>
                        <div className="close">
                            <img
                                className="img-noconfirm-order"
                                alt="noconfirm-order"
                                src={close}
                                onClick={closeAddPartner}
                            ></img>
                        </div>
                    </div>
                </form>
            </ModalAdd>
            <ModalAdd isOpen={isAddProduct} close={closeAddProduct}>
                <form className="admin-add-form" onSubmit={postProduct}>
                    <label className="add-msg">Add Product</label>
                    <label className="field">Product's Name</label>
                    <input
                        className="input-admin-form"
                        type="text"
                        required
                        onInvalid={(e) =>
                            e.target.setCustomValidity('This field is empty')
                        }
                        onInput={(e) => e.target.setCustomValidity('')}
                        onChange={handleAddProductChange}
                        name="name"
                    />
                    <label className="field">Price</label>
                    <input
                        className="input-admin-form"
                        type="number"
                        required
                        onInvalid={(e) =>
                            e.target.setCustomValidity('This field is empty')
                        }
                        onInput={(e) => e.target.setCustomValidity('')}
                        onChange={handleAddProductChange}
                        name="price"
                    />
                    <label className="field">Type</label>
                    <select
                        className="input-admin-form"
                        required
                        onChange={handleAddProductChange}
                        name="type"
                    >
                        <option>breakfast</option>
                        <option>dinner</option>
                    </select>
                    <div className="buttons-admin-container">
                        <button className="check" type="submit">
                            <img
                                className="img-confirm-order"
                                alt="confirm-order"
                                src={check}
                            ></img>
                        </button>
                        <div className="close">
                            <img
                                className="img-noconfirm-order"
                                alt="noconfirm-order"
                                src={close}
                                onClick={closeAddProduct}
                            ></img>
                        </div>
                    </div>
                </form>
            </ModalAdd>
            <ModalDelete
                isOpen={isOpenDeletePartner}
                close={closeDeletePartner}
            >
                <div className="confirm-delete-container">
                    <label className="confirm-delete-msg">
                        This action is permanent Are you sure you want to delete
                        this?
                    </label>
                    <div className="buttons-container">
                        <div className="check">
                            <img
                                className="img-confirm-order"
                                alt="confirm-order"
                                src={check}
                                onClick={deletePartner}
                            ></img>
                        </div>
                        <div className="close">
                            <img
                                className="img-noconfirm-order"
                                alt="noconfirm-order"
                                src={close}
                                onClick={closeDeletePartner}
                            ></img>
                        </div>
                    </div>
                </div>
            </ModalDelete>
            <ModalDelete isOpen={isOpenDeleteProduct} close={closeDeletProduct}>
                <div className="confirm-delete-container">
                    <label className="confirm-delete-msg">
                        This action is permanent Are you sure you want to delete
                        this?
                    </label>
                    <div className="buttons-container">
                        <div className="check">
                            <img
                                className="img-confirm-order"
                                alt="confirm-order"
                                src={check}
                                onClick={deleteProduct}
                            ></img>
                        </div>
                        <div className="close">
                            <img
                                className="img-noconfirm-order"
                                alt="noconfirm-order"
                                src={close}
                                onClick={closeDeletProduct}
                            ></img>
                        </div>
                    </div>
                </div>
            </ModalDelete>
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
                                src={close}
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
