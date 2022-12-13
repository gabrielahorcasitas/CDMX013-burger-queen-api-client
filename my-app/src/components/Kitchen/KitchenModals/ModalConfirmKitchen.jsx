import './ModalConfirmKitchen.css'
import check from '../../../images/check.png'
import closeImg from '../../../images/closeImg.png'
function ModalConfirmKitchen ({isOpen, close, editState}){
const handleModalContainerClick = (e) => e.stopPropagation();



    return (
      <article className={`modalKitchen ${isOpen && "is-open"}`} onClick={close}>
        <div className="modal-kitchen-container" onClick={handleModalContainerClick}>
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
                                onClick={editState}
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
export default ModalConfirmKitchen;