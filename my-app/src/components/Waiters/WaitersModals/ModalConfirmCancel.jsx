import './Modal.css';
import check from '../../../images/check.png'
import closeImg from '../../../images/closeImg.png'

function ModalConfirmCancel({ isOpen, close, products, setProductQty }){

const handleModalContainerClick = (e) => e.stopPropagation();

function resetQty() {
    setProductQty(() => {
        const quantities = {}
        products.forEach((product) => {
            quantities[product.name] = 0
        })
        close()
        return quantities
    })
}

    return (
      <article className={`modal ${isOpen && "is-open"}`} onClick={close}>
        <div className="modal-container" onClick={handleModalContainerClick}>
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
export default ModalConfirmCancel;