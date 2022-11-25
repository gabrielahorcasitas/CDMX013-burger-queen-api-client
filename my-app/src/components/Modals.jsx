import check from '../../src/images/check.png'
import close from '../../src/images/close.png'

import ModalConfirm from './Waiters/ModalConfirm.jsx'
function Modals ({isOpenConfirmOrder, openConfirmOrder,closeConfirmOrder, isOpenCancelOrder, openCancelOrder, closeCancelOrder, setProductQty, products}){

    function resetQty() {
        setProductQty(()=>{
            const quantities = {}
            products.forEach(product => {
              quantities[product.name] = 0
            })
            closeCancelOrder();
            return quantities;
          }
        );
    }

    return(
        <>
            <ModalConfirm isOpen= {isOpenConfirmOrder} close= {closeConfirmOrder} >
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
        </ModalConfirm>
        <ModalConfirm isOpen= {isOpenCancelOrder} close= {closeCancelOrder} >
            <div className='confirm-container'>
            <label className="confirm-msg">Are you sure you want to cancel the order?</label>
            <div className="buttons-container">
                <div className="check">
                    <img className='img-confirm-order'
                    alt='confirm-order'
                    src={check}
                    onClick = {resetQty}></img></div>
                <div className="close">
                    <img className='img-noconfirm-order'
                    alt='noconfirm-order'
                    src={close}
                    onClick={closeCancelOrder}></img></div>
            </div>
        </div>
        </ModalConfirm>
        
        </>
        
    )
}

export default Modals;