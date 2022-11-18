import ItemTicket from "./ItemTicket";



function Ticket({text, productQty, products, visibility, setVisibility}){
    const productsEntries = Object.entries(productQty);
    let total = 0;

    

    return (
        <>
        <table className="tableTicket">
            <thead className="table-ticket-header">
            <tr>
                <th>Ticket Table #{text}</th>
            </tr>
            </thead>
            <tbody className="ticket-body">
                {  products.map(item =>{
                    return productsEntries.map(product => {
                    const productName = product[0];
                    const productQty = product[1];
                    const itemPrice = item.price*productQty;
                    
                    if(productQty === 0){
                        return null;
                    }

                    if(productName === item.name){
                        total = itemPrice + total;
                        return <ItemTicket key={productName} product={productName} quantity={productQty}  price={itemPrice}/>
                    }
                    
                    return null;
                })
                }
                )}
                    
                   
                <div className="ticket-total-box">
                <label className="ticket-total">Total  ${total}</label>
                </div>
                <div className="confirm-order-buttons">
                    <button className="button-confirm-order">Confirm</button>
                    <button className="button-cancel-order">Cancel</button>
                </div>
            </tbody>
        </table>
        </>
    )
}

export default Ticket;