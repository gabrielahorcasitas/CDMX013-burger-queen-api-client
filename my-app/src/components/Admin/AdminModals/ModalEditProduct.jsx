import './ModalAdmin.css'
import check from '../../../images/check.png'
import closeImg from '../../../images/closeImg.png'
function ModalEditProduct ({ isOpen, close, addProducts, setAddProducts, putProduct }){
const handleModalContainerClick = (e) => e.stopPropagation();
function handleAddChange({ target }) {
  const { name, value } = target
  const newValues = {
      ...addProducts,
      [name]: value,
  }
  console.log(addProducts)
  setAddProducts(newValues)
}
    return (
      <article className={`modal-admin ${isOpen && "is-open"}`} onClick={close}>
        <div className="modal-admin-container" onClick={handleModalContainerClick}>
        <form className="admin-add-form" onSubmit={putProduct}>
                    <label className="add-msg">Edit Product</label>
                    <label className="field">Product's Name</label>
                    <input
                        className="input-admin-form"
                        type="text"
                        required
                        onInvalid={(e) =>
                            e.target.setCustomValidity('This field is empty')
                        }
                        onInput={(e) => e.target.setCustomValidity('')}
                        onChange={handleAddChange}
                        name="name"
                        value={addProducts === undefined? '' : addProducts.name}
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
                        onChange={handleAddChange}
                        name="price"
                        value={addProducts === undefined? '' : addProducts.price}
                    />
                    <label className="field">Type</label>
                    <select
                        className="input-admin-form"
                        required
                        onChange={handleAddChange}
                        name="type"
                        value={addProducts === undefined? '' : addProducts.type}
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
export default ModalEditProduct;