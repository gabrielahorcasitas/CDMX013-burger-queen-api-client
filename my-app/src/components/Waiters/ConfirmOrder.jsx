import check from '../../images/check.png'
import close from '../../images/close.png'

function ConfirmOrder (visibility, setVisibility){
    function handleClick () {
        visibility === 'hidden' ? setVisibility('visible') : setVisibility('hidden');
    }
    return ( <div id= "confirm-order" className="modal-box" style={{visibility}}>
        <label className="msg-confirm">
        Is the order ready to be sent to the kitchen?
        </label>
        <img className='confirm'
        alt="confirm"
        src={check}></img>
        <img className='cancel'
        alt='cancel'
        src={close}
        onClick={handleClick}></img>
    </div>


    )
}
export default ConfirmOrder;