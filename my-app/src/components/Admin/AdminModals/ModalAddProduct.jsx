import './ModalAdmin.css'
import check from '../../../images/check.png'
import closeImg from '../../../images/closeImg.png'
function ModalAddProduct ({ isOpen, close, addProducts, setAddProducts, postProduct }){
const handleModalContainerClick = (e) => e.stopPropagation();
function handleAddProductChange({ target }) {
    const { name, value } = target

    const newValues = {
        ...addProducts,
        [name]: value,
    }
    setAddProducts(newValues)
}
    return (
      <article className={`modal-admin ${isOpen && "is-open"}`} onClick={close}>
        <div className="modal-admin-container" onClick={handleModalContainerClick}>
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
                                src={closeImg}
                                onClick={close}
                            ></img>
                        </div>
                    </div>
                </form>
        </div>
      </article>
    );
}
export default ModalAddProduct;