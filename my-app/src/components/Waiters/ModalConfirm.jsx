import './Modal.css';
function ModalConfirm ({children, isOpen, close}){
const handleModalContainerClick = (e) => e.stopPropagation();

    return (
      <article className={`modal ${isOpen && "is-open"}`} onClick={close}>
        <div className="modal-container" onClick={handleModalContainerClick}>
          {children}
        </div>
      </article>
    );
}
export default ModalConfirm;