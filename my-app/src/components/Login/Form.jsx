import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Form () {
let navigate = useNavigate();
  
  const [text, setText] = useState('');
  const handleInputChange = ({target}) => {
    setText(target.value)
  }
  const handleSubmit= (e) => {
    e.preventDefault();
    navigate("/waiters");
    console.log(text);
  }
    return (
        <form className="form-box" onSubmit={handleSubmit} >
            <label id="logIn-logo">Log In</label>
            <span className="fields-form">Email</span>
                <input
                    className="input-form"
                    placeholder="email"
                    value={text} onChange={handleInputChange}
                    type="text"
                />
            <span className="fields-form">Password</span>
                <input
                    className="input-form"
                    placeholder="password"
                    type="text"
                />
         <button id="start"  type= 'submit'>Start</button>
        </form>
    )
}

export default Form;