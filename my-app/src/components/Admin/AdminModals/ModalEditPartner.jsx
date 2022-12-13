import './ModalAdmin.css'
import check from '../../../images/check.png'
import closeImg from '../../../images/closeImg.png'
function ModalEditPartner ({ isOpen, close, addPartners, setAddPartners, putPartner }){
const handleModalContainerClick = (e) => e.stopPropagation();
function handleAddChange({ target }) {
  const { name, value } = target
  const newValues = {
      ...addPartners,
      [name]: value,
  }
  console.log(newValues)
  setAddPartners(newValues)
}
    return (
      <article className={`modal-admin ${isOpen && "is-open"}`} onClick={close}>
        <div className="modal-admin-container" onClick={handleModalContainerClick}>
                <form className="admin-add-form" onSubmit={putPartner}>
                    <label className="add-msg">Edit Partner</label>
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
                        value={addPartners === undefined? '' : addPartners.email}
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
                        value={addPartners === undefined? '' : addPartners.password}
                    />
                    <label className="field">Position</label>
                    <select
                        className="input-admin-form"
                        required
                        onChange={handleAddChange}
                        name="role"
                        value={addPartners === undefined? '' : addPartners.role}
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
export default ModalEditPartner;