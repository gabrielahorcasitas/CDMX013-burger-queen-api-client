import burgerMenu from '../../images/burgerMenu.png'
import PartnerItem from './PartnerItem'
import add from '../../images/add.png'

function PartnersTable({ openAddPartner, openDeletePartner, idModal, setIdModal, partners}) {
    const rows = []

    if (partners !== undefined) {
        partners.forEach((partner) => {
            rows.push(
                <PartnerItem
                    partner={partner}
                    openDeletePartner={openDeletePartner}
                    key={partner.id}
                    idModal={idModal}
                    setIdModal={setIdModal}
                />
            )
        })
    }
    return (
        <>
            <table className="tableMenu" id="partners">
                <thead className="table-menu-header" id="partners-header">
                    <tr>
                        <th style={{ width: '20rem' }}>Email</th>
                        <th>Position</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="menu-partners-table-body" id="partners-body">
                    {rows}
                </tbody>
                <tfoot className="logo-table-box" id="partners-footer">
                    <img
                        src={add}
                        alt="add"
                        className="add-img"
                        onClick={openAddPartner}
                    ></img>
                    <img
                        className="burger-logo-menu"
                        src={burgerMenu}
                        alt="burger-logo-menu"
                    ></img>
                </tfoot>
            </table>
        </>
    )
}

export default PartnersTable
