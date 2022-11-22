import check from '../../src/images/check.png'
import close from '../../src/images/close.png'

import Modal from './Waiters/Modal.jsx'
function Modals ({isOpenConfirmOrder, closeConfirmOrder}){

    return(
        <Modal isOpenConfirmOrder= {isOpenConfirmOrder} closeConfirmOrder= {closeConfirmOrder} >
            <div className='confirm-container'>
            <label className="confirm-msg">Is the order ready to be sent to the kitchen?</label>
            <div className="buttons-container">
                <div className="check">
                    <img className='img-confirm-order'
                    alt='confirm-order'
                    src={check}></img></div>
                <div className="close">
                    <img className='img-noconfirm-order'
                    alt='noconfirm-order'
                    src={close}
                    onClick={closeConfirmOrder}></img></div>
            </div>
        </div>
        </Modal>
        
    )
}

export default Modals;