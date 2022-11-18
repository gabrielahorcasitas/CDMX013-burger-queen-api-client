import check from '../../src/images/check.png'
import close from '../../src/images/close.png'

import Modal from './Waiters/Modal.jsx'
function Modals ({isOpenConfirmOrder, closeConfirmOrder}){
    console.log(closeConfirmOrder);
    return(
        <Modal isOpenConfirmOrder= {isOpenConfirmOrder} closeConfirmOrder= {closeConfirmOrder} >
            <div >
            <label className="confirm-msg"></label>
            <div className="buttons-container">
                <div className="check">
                    <img className='img-confirm-order'
                    alt='confirm-order'
                    src={check}></img></div>
                <div className="close">
                    <img className='img-noconfirm-order'
                    alt='noconfirm-order'
                    src={close}></img></div>
            </div>
        
            <h1>Modals</h1>
        </div>
        </Modal>
        
    )
}

export default Modals;