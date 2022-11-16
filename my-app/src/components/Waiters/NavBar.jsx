import {useNavigate} from 'react-router-dom';
import Burger from "../../images/Burger.png";
import Queen from "../../images/Queen.png";
import check from "../../images/check.png";
import logout from "../../images/logout.png";
import plus from "../../images/plus.png";

function NavBar() {
  let navigate = useNavigate();
  function handleNavigate() {
   navigate('/');
  }

  return (
    <>
      <div className="container-bar">
        <div className="logo-box">
          <img
            className="burger-letters"
            src={Burger}
            alt="burger-letters"
          ></img>
          <img className="queen-letters" src={Queen} alt="queen-letters"></img>
        </div>
          <div className= "menu-btns-box">
            <img className="new-order" 
            src={plus}
            alt="new-order"></img>
            <label className='menu-letters'>New Order</label>
          </div>
          <div className= "menu-btns-box">
            <img className="ready"
            src={check}
            alt="ready"></img>
            <label className='menu-letters'>Ready</label>
          </div>
          <div className= "menu-btns-box" id="log-out-box">
            <img className="log-out" 
            src={logout}
            alt="log-out" onClick = {handleNavigate} ></img>
            <label className='menu-letters'>Log Out</label>
          </div>
      </div>
    </>
  );
}

export default NavBar;
