import './Modal.css';
function Modal ({children, isOpenConfirmOrder, closeConfirmOrder}){
const handleModalContainerClick = (e) => e.stopPropagation();

    return (
      <article className={`modal ${isOpenConfirmOrder && "is-open"}`} onClick={closeConfirmOrder}>
        <div className="modal-container" onClick={handleModalContainerClick}>
          
          {children}
        </div>
      </article>
    );
}
export default Modal;