import Menubuttons from "./Waiters/Menubuttons";
import { useLocation } from "react-router-dom";
import Header from "./Waiters/Header";

function Headers ({text, setText}){

   const handleInputChange = ({target}) => {
    setText(target.value)
   }
   const location = useLocation();
  let content;
  
if (location.pathname === '/waiters/new_order') {
  content = <Header>
      <header>
                <div className="choose-table-box">
                    <label className="choose-table-letter">Table: </label>
                    <input
                        className="input-table"
                        type="number" min='0'  
                        value={text} onChange={handleInputChange}
                        >  
                    </input>
                </div>
                <Menubuttons/>
                <label className="role-letters">Waiters </label>;
            </header>
 

</Header>
} else if(location.pathname === '/kitchen/active' || 
location.pathname === '/kitchen/prepared'){
    content = <Header>
         <header>
                <label className="role-letters-chefs">Chefs </label>;
            </header>
    </Header>
        }

    return (
        <>
           {content};
        </>
    )
}

export default Headers;