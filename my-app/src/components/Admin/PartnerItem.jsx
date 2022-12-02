import { parsePath } from 'react-router-dom'
import pencil from '../../images/pencil.png'
import trash from '../../images/trash.png'

function PartnerItem({
    partner,
    openDeletePartner,
    setIdModal,
    openEditPartner,
    setAddPartners,
}) {
    function sendIdDelete() {
        openDeletePartner()
        setIdModal(partner.auth)
    }

    function sendIdEdit() {
        openEditPartner()
        setIdModal(partner.auth)
        setAddPartners({ ...partner })
    }
    return (
        <tr>
            <td>{partner.email}</td>
            <td className="td-partners">{partner.role}</td>
            <td>
                <img
                    className="td-partners"
                    alt="edit"
                    src={pencil}
                    onClick={sendIdEdit}
                ></img>
            </td>
            <td>
                <img
                    className="td-partners"
                    alt="delete"
                    src={trash}
                    onClick={sendIdDelete}
                ></img>
            </td>
        </tr>
    )
}

export default PartnerItem
