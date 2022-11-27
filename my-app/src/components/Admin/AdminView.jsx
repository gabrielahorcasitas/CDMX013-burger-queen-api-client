import NavBars from "../NavBars";
import Modals from "../Modals";
import { useModal } from "../useModal";

function Admin() {
  const [isAddPartner, openAddPartner, closeAddPartner] = useModal(false);
  const [isAddProduct, openAddProduct, closeAddProduct] = useModal(false);
  const [isOpenDeleteProduct, openDeleteProduct, closeDeleteProduct] = useModal(false);
  const [isOpenDeletePartner, openDeletePartner, closeDeletePartner] = useModal(false);
  return (
    <>
    <NavBars/>
    <Modals isAddPartner={isAddPartner} closeAddPartner={closeAddPartner}
    isAddProduct={isAddProduct} closeAddProduct={closeAddProduct}
    isOpenDeletePartner={isOpenDeletePartner} closeDeletePartner= {closeDeletePartner}
    isOpenDeleteProduct={isOpenDeleteProduct} closeDeletProduct={closeDeleteProduct}
    />
    <button onClick={openAddPartner}>Prueba Modal Partners</button>
    <button onClick={openAddProduct}>Prueba Modal Products</button>
    <button onClick={openDeletePartner}>Prueba Modal Borrar Partners</button>
    <button onClick={openDeleteProduct}>Prueba Modal Borrar Producto</button>
    </>
  );
}

export default Admin;