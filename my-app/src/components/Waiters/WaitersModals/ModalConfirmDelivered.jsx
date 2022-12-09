import './Modal.css';
import check from '../../../images/check.png'
import closeImg from '../../../images/closeImg.png'

function ModalConfirmDelivered({ isOpen, close, editStateDelivered}){
const handleModalContainerClick = (e) => e.stopPropagation();

    return (
      <article className={`modal ${isOpen && "is-open"}`} onClick={close}>
        <div className="modal-container" onClick={handleModalContainerClick}>
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
                                onClick={editStateDelivered}
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
export default ModalConfirmDelivered;