import {useNavigate} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Burger from "../../images/Burger.png";
import Queen from "../../images/Queen.png";
import check from "../../images/check.png";
import logout from "../../images/logout.png";
import plus from "../../images/plus.png";


function NavBar({children}) {
 return (
    <>
     <div className="container-bar">
      {children}
      </div>
    </>
  );
}

export default NavBar;
