import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
function Form () {
let navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const handleEmailChange = ({target}) => {
    setEmail(target.value)
  }

  const handlePasswordChange = ({target}) => {
    setPassword(target.value)
  }

  const handleSubmit= (e) => {
    e.preventDefault();
    axios.get('https://6372d80a348e947299fdd17b.mockapi.io/users').then((result) => {
      result.data.forEach((user) => {
          if (user.password === password && user.email === email) {
            const role = user.role;
            switch(role){
              case('admin'):
                console.log('admin');
                break;
              case('kitchen'):
                console.log('kitchen');
                break;
              case('waiter'):
                navigate('/waiters');
                break;
              default:
                console.log('no estas registrado');
                break;
            }
        } else {
          console.log('no estás registradox2')
        }
      })
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
                />
            <span className="fields-form">Password</span>
                <input
                    className="input-form"
                    placeholder="password"
                    value={password} onChange={handlePasswordChange}
                    type="password"
                />
         <button id="start"  type= 'submit'>Start</button>
        </form>
    )
}

export default Form;