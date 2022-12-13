import './ModalAdmin.css'
import './ModalAdmin.css'
import check from '../../../images/check.png'
import closeImg from '../../../images/closeImg.png'
function ModalDeletePartner ({ isOpen, close, deletePartner}){
const handleModalContainerClick = (e) => e.stopPropagation();

    return (
      <article className={`modal-admin ${isOpen && "is-open"}`} onClick={close}>
        <div className="modal-admin-delete-container" onClick={handleModalContainerClick}>
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
                                src={closeImg}
                                onClick={close}
                            ></img>
                        </div>
                    </div>
                </div>
        </div>
      </article>
    );
}
export default ModalDeletePartner;