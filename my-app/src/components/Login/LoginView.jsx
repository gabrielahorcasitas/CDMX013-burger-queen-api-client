import Form from "./Form";
import Bqlogo from "../../images/Bqlogo.png"
import './LoginView.css';

function LoginView() {

    return (
        <>
        <div className="main-container">
            <img className="burgerLogo" src ={Bqlogo} alt="logo"></img>
            <div className="container-form">
            <Form/>
            </div>
        </div>
        </>
    );
  }

export default LoginView;