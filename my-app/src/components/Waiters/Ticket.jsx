

function Ticket(){
    return (
        <table className="tableTicket">
            <thead className="table-ticket-header">
            <tr>
                <th>Ticket - Table </th>
            </tr>
            </thead>
            <tbody className="ticket-body">
                <div className="ticket-total-box">
                <label className="ticket-total">Total  $</label>
                </div>
                <div className="confirm-order-buttons">
                    <button className="button-confirm-order">Confirm</button>
                    <button className="button-cancel-order">Cancel</button>
                </div>
            </tbody>
        </table>
    )
}

export default Ticket;