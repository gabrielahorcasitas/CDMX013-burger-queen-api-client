import pencil from '../../images/pencil.png'
import trash from '../../images/trash.png'

function PartnerItem({ partner, openDeletePartner, idModal, setIdModal}) {
    function sendId (){
        openDeletePartner();
        setIdModal(partner.auth);
    }
    return (
        <tr>
            <td>{partner.email}</td>
            <td className="td-partners">{partner.role}</td>
            <img className="td-partners" alt="edit" src={pencil}></img>
            <img
                className="td-partners"
                alt="delete"
                src={trash}
                onClick={sendId}
            ></img>
        </tr>
    )
}

export default PartnerItem
