

function Ticket({text, productQty}){
    const products = Object.entries(productQty);

    return (
        <table className="tableTicket">
            <thead className="table-ticket-header">
            <tr>
                <th>Ticket Table #{text}</th>
            </tr>
            </thead>
            <tbody className="ticket-body">
                {products.map(product => {
                    const productName = product[0];
                    const productQty = product[1];

                    if(productQty === 0){
                        return null;
                    }
                    return <div key={productName}> {productName} {productQty}</div>
                })}
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