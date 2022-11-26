import check from '../../src/images/check.png'
import close from '../../src/images/close.png'
import ModalAdd from './Admin/ModalAdd';
import ModalConfirm from './Waiters/ModalConfirm'
function Modals ({isOpenConfirmOrder,closeConfirmOrder, 
    isOpenCancelOrder, closeCancelOrder, 
    setProductQty, products, isAddPartner, closeAddPartner,
    isAddProduct, closeAddProduct, isOpenDeleteProduct, closeDeletProduct,
    isOrderReady, closeOrderReady}){

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
        <ModalAdd isOpen= {isAddPartner} close= {closeAddPartner} >
            <form className='admin-add-form'>
            <label className="add-msg">Add Partner</label>
            <label className="field">Partner's Name</label>
            <input 
                    className='input-admin-form'
                    type="text"
                    required
                    onInvalid={e => e.target.setCustomValidity('This field is empty')}
                    onInput = {e => e.target.setCustomValidity('')}
            />
            <label className="field">Email</label>
            <input 
                    className='input-admin-form'
                    type="text"
                    required
                    onInvalid={e => e.target.setCustomValidity('This field is empty')}
                    onInput = {e => e.target.setCustomValidity('')}
            />
            <label className="field">Password</label>
            <input 
                    className='input-admin-form'
                    type="password"
                    required
                    onInvalid={e => e.target.setCustomValidity('This field is empty')}
                    onInput = {e => e.target.setCustomValidity('')}
            />
            <div className="buttons-admin-container">
                <div className="check">
                    <img className='img-confirm-order'
                    alt='confirm-order'
                    src={check}>
                    </img>
                </div>
                <div className="close">
                    <img className='img-noconfirm-order'
                    alt='noconfirm-order'
                    src={close}
                    onClick={closeAddPartner}>
                    </img>
                </div>
            </div>
        </form>
        </ModalAdd>  
        <ModalAdd isOpen= {isAddProduct} close= {closeAddProduct} >
            <form className='admin-add-form'>
            <label className="add-msg">Add Product</label>
            <label className="field">Product's Name</label>
            <input 
                    className='input-admin-form'
                    type="text"
                    required
                    onInvalid={e => e.target.setCustomValidity('This field is empty')}
                    onInput = {e => e.target.setCustomValidity('')}
            />
            <label className="field">Amount</label>
            <input 
                    className='input-admin-form'
                    type="number"
                    required
                    onInvalid={e => e.target.setCustomValidity('This field is empty')}
                    onInput = {e => e.target.setCustomValidity('')}
            />
            <label className="field">Price</label>
            <input 
                    className='input-admin-form'
                    type="number"
                    required
                    onInvalid={e => e.target.setCustomValidity('This field is empty')}
                    onInput = {e => e.target.setCustomValidity('')}
            />
            <div className="buttons-admin-container">
                <div className="check">
                    <img className='img-confirm-order'
                    alt='confirm-order'
                    src={check}>
                    </img>
                </div>
                <div className="close">
                    <img className='img-noconfirm-order'
                    alt='noconfirm-order'
                    src={close}
                    onClick={closeAddProduct}>
                    </img>
                </div>
            </div>
        </form>
        </ModalAdd> 
        <ModalConfirm isOpen= {isOpenDeleteProduct} close= {closeDeletProduct} >
            <div className='confirm-container'>
            <label className="confirm-msg">This action is permanent
            Are you sure you want to delete this?</label>
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
                    onClick={closeDeletProduct}></img></div>
            </div>
        </div>
        </ModalConfirm> 
        <ModalConfirm isOpen= {isOrderReady} close= {closeOrderReady} >
            <div className='confirm-container'>
            <label className="confirm-msg">Was the order completed?</label>
            <div className="buttons-container">
                <div className="check">
                    <img className='img-confirm-order'
                    alt='confirm-order'
                    src={check}>
                    </img>
                </div>
                <div className="close">
                    <img className='img-noconfirm-order'
                    alt='noconfirm-order'
                    src={close}
                    onClick={closeOrderReady}>
                    </img>
                </div>
            </div>
        </div>
        </ModalConfirm> 
        </> 
    )
}

export default Modals;