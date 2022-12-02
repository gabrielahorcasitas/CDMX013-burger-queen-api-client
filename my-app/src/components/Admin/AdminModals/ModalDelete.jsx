import './ModalAdmin.css'
function ModalDelete ({children, isOpen, close}){
const handleModalContainerClick = (e) => e.stopPropagation();

    return (
      <article className={`modal-admin ${isOpen && "is-open"}`} onClick={close}>
        <div className="modal-admin-delete-container" onClick={handleModalContainerClick}>
          {children}
        </div>
      </article>
    );
}
export default ModalDelete;