import { useNavigate } from 'react-router-dom'
import {  useState } from 'react'
import axios from 'axios'
function Form({handleAccount}) {
    let navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorCredentials, changeCredentials] = useState(null)
    


    const handleEmailChange = ({ target }) => {
        setEmail(target.value)
    }
    const handlePasswordChange = ({ target }) => {
        setPassword(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .get('https://6372d80a348e947299fdd17b.mockapi.io/users')
            .then((result) => {
                let users = true
                result.data.forEach((user) => {
                    if ( user.email === email) {
                        handleAccount(user)
                        users = false
                        const role = user.role
                        switch (role) {
                            case 'admin':
                                navigate('/admin/partners')
                                break
                            case 'kitchen':
                                navigate('/kitchen/active')
                                break
                            case 'waiter':
                                navigate('/waiters/new_order')
                                break
                            default:
                                users = true
                                break
                        }
                    }
                })
                changeCredentials(users)
            })
    }

    return (
        <form className="form-box" onSubmit={handleSubmit}>
            <label id="logIn-logo">Log In</label>
            <label htmlFor="email" className="fields-form">
                Email
            </label>
            <input
                className="input-form"
                name="email"
                placeholder="email"
                value={email}
                onChange={handleEmailChange}
                type="text"
                required
                onInvalid={(e) =>
                    e.target.setCustomValidity('This field is empty')
                }
                onInput={(e) => e.target.setCustomValidity('')}
            />
            <label htmlFor="password" className="fields-form">
                Password
            </label>
            <input
                className="input-form"
                name="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
                type="password"
                required
                onInvalid={(e) =>
                    e.target.setCustomValidity('This field is empty')
                }
                onInput={(e) => e.target.setCustomValidity('')}
            />
            {errorCredentials && (
                <div className="errorMessage">
                    <p className="messageError">ERROR: Invalid Credentials</p>
                </div>
            )}
            <button id="start" type="submit">
                Start
            </button>
        </form>
    )
}

export default Form
