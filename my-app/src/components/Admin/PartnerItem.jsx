import pencil from '../../images/pencil.png'
import trash from '../../images/trash.png'

function PartnerItem({ openDeletePartner }) {
    return (
        <tr>
            <td>#</td>
            <td>id</td>
            <td>User</td>
            <td>Email</td>
            <td>Position</td>
            <img alt="edit" src={pencil}></img>
            <img alt="delete" src={trash} onClick={openDeletePartner}></img>
        </tr>
    )
}

export default PartnerItem
