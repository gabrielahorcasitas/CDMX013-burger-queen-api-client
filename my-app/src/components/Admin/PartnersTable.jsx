import burgerMenu from '../../images/burgerMenu.png'
import PartnerItem from './PartnerItem'
import add from '../../images/add.png'
function PartnersTable() {
    return (
        <>
            <table className="tableMenu" id="partners">
                <thead className="table-menu-header" id="partners-header">
                    <tr>
                        <th>#</th>
                        <th>id</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Position</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="menu-table-body" id="partners-body">
                    {[1, 23, 4, 5, 6, 12, 3, 12, 31, 23].map(() => (
                        <PartnerItem />
                    ))}
                </tbody>
                <tfoot className="logo-table-box" id="partners-footer">
                    <img src={add} alt="add" className="add-img"></img>
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
