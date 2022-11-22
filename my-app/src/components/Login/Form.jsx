import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Form () {
let navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorCredentials, changeCredentials] = useState(null);

  const handleEmailChange = ({target}) => {
    setEmail(target.value)
  }

  const handlePasswordChange = ({target}) => {
    setPassword(target.value)
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    axios.get('https://6372d80a348e947299fdd17b.mockapi.io/users').then((result) => {
      let users = true;
      result.data.forEach((user) => {
          if (user.password === password && user.email === email) {
            users = false;
            const role = user.role;
            switch(role){
              case('admin'):
                console.log(users);
                break;
              case('kitchen'):
                console.log(users);
                break;
              case('waiter'):
                navigate('/waiters');
                break;
              default:
                users = true;
                console.log('no estas registrado');
                break;
            }
        }
      })
      changeCredentials(users);
    })
  }
    return (
        <form className="form-box" onSubmit={handleSubmit} >
            <label id="logIn-logo">Log In</label>
            <span className="fields-form">Email</span>
                <input
                    className="input-form"
                    placeholder="email"
                    value={email} onChange={handleEmailChange}
                    type="text"
                    required
                    onInvalid={e => e.target.setCustomValidity('This field is empty')}
                    onInput = {e => e.target.setCustomValidity('')}
                />
            <span className="fields-form">Password</span>
                <input
                    className="input-form"
                    placeholder="password"
                    value={password} onChange={handlePasswordChange}
                    type="password"
                    required
                    onInvalid={e => e.target.setCustomValidity('This field is empty')}
                    onInput = {e => e.target.setCustomValidity('')}
                />
            {errorCredentials && 
            <div className='errorMessage'>
                <p className="messageError">ERROR: Invalid Credentials</p>
            </div>}
         <button id="start"  type= 'submit'>Start</button>
        </form>
    )
}

export default Form;