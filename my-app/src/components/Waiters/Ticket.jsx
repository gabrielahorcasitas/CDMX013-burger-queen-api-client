import ItemTicket from "./ItemTicket";
import {useState} from "react"
import { useLoaderData } from "react-router-dom";
import axios from "axios";



function Ticket({text, productQty, products, openConfirmOrder, openCancelOrder, closeConfirmOrder}){
    const urlOrders = "https://638e40c1aefc455fb2b94c24.mockapi.io/orders";
   // const [loadedOrders, setLoadedOrders] = useLoaderData();
    const[userName, setUserName] = useState(()=> {
        const savedItem = localStorage.getItem('UserId');
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || "";
      });
      console.log(userName);
    const [orders, setOrders]= useState({
          userId: userName,
          table: text,
          products: [],
          status: 'sent',
          dateEntry: '',
          dateProcessed: "",

})
const productsOfOrder = products.map(item =>{
    return productsEntries.map(product => {
    const productName = product[0];
    const productQty = product[1];
    
    if(productQty === 0){
        return "";
    }

    if(productName === item.name){
    
        return setOrders(...orders, 
                
            {userId: userName,
               table: text,
               products: [...products, {productId: productName, productQty: productQty}],
               status: "sent",
               dateEntry: new Date().getTime(),
               dateProcessed: "",
            }
        )
    }
    
    return null;
})
}
)

function saveOrder(event) {
    event.preventDefault()
    axios.post(urlOrders, orders).then((resp) => {
        
        closeConfirmOrder()
        console.log(resp.data)
        return setOrders([...orders, resp.data])
    })
}

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
              
            </tbody>
            <tfoot className="logo-table-box">
            <tr className="container-ticketbuttons"> 
             <div className="confirm-order-buttons">
                    <button className="button-cancel-order" onClick={openCancelOrder}>Cancel</button>
                    <button className="button-confirm-order" onClick= {openConfirmOrder}>Confirm</button>
                </div></tr>
             </tfoot>
        </table>
        </>
    )
}

export default Ticket;