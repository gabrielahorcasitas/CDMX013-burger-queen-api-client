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
        <img className="new-order" 
        src={plus}
        alt="new-order"></img>
        <img className="ready"
        src={check}
        alt="ready"></img>
        <img className="log-out" 
        src={logout}
        alt="log-out" onClick = {handleNavigate} ></img>
      </div>
    </>
  );
}

export default NavBar;
