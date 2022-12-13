import Form from "./Form";
import Bqlogo from "../../images/Bqlogo.png"
import './LoginView.css';

function LoginView({handleAccount}) {

    return (
        <>
        <div className="main-container">
            <img className="burgerLogo" src ={Bqlogo} alt="logo"></img>
            <div className="container-form">
            <Form handleAccount={handleAccount}/>
            </div>
        </div>
        </>
    );
  }

export default LoginView;