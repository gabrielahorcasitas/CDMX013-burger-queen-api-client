import './ModalAdmin.css'
function ModalAddPartner ({children, isOpen, close}){
const handleModalContainerClick = (e) => e.stopPropagation();

    return (
      <article className={`modal-admin ${isOpen && "is-open"}`} onClick={close}>
        <div className="modal-admin-container" onClick={handleModalContainerClick}>
          {children}
        </div>
      </article>
    );
}
export default ModalAddPartner;