import "./LoginForm.css"
import { useState } from "react";
import Button from '../Button/Button';


const LoginForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const body = {
        email: email,
        password: password
    }
    const handleLogin = () => {
        const options = {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json'
            },
            'body': JSON.stringify(body)
        }
        fetch("http://localhost:5000/login", options) // If the method is not especified  , by default use get
            .then(response => response.json())
            .then(json => {
                localStorage.setItem("token", json.token)
                localStorage.setItem("user", JSON.stringify(json.user)) // en el local Storage solo puedo guardar objetos simple por eso lo utilizamos con JSON.strimgify
            });
    }

    return (
        <div className="login__container">
            <span className="sign__in" > Log In</span>
            <form>
                <div className="email__container">
                    <label> Email   </label>
                    <input className="email__box" type="text" name="Email" onChange={(e) => setEmail(e.target.value)} placeholder="Put your email here..." />
                </div>
                <div className="password__container">
                    <label > Password  </label>
                    <input className="password__box" type="password" name="Description" onChange={(e) => setPassword(e.target.value)} placeholder="Put your password here..." />
                </div>
            </form>
            <Button text={'Login'} onClick={handleLogin} />
        </div>
    )
};


export default LoginForm;
