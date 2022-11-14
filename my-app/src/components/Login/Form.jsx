import { useNavigate } from "react-router-dom";

function Form () {
let navigate = useNavigate();
  function handleClick() {
    navigate("/Admin");
  }
    return (
        <form className="form-box">
            <label id="logIn-logo">Log In</label>
            <span className="fields-form">Email</span>
                <input
                    className="input-form"
                    placeholder="email"
                    type="text"
                />
            <span className="fields-form">Password</span>
                <input
                    className="input-form"
                    placeholder="password"
                    type="text"
                />
         <button id="start" onClick={handleClick}>Start</button>
        </form>
    )
}

export default Form;