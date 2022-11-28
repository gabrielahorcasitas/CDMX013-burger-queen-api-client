import './ModalConfirmKitchen.css'
function ModalConfirmKitchen ({children, isOpen, close}){
const handleModalContainerClick = (e) => e.stopPropagation();

    return (
      <article className={`modalKitchen ${isOpen && "is-open"}`} onClick={close}>
        <div className="modal-kitchen-container" onClick={handleModalContainerClick}>
          {children}
        </div>
      </article>
    );
}
export default ModalConfirmKitchen;