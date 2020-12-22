import { useState } from "react";
import Button from "../Button/Button";


const LoginForm = () => {

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    // const body = {
    //     userName: userName,
    //     password: password
    // };

    const handleLogin = () => {

    //     const options = {
    //         'method': 'POST',
    //         'headers': {
    //             'Content-Type': 'application/json'
    //         },
    //         'body': JSON.stringify(body)
    //     }

    //     fetch('http://localhost:5000/login', options)
    //         .then(response => {
    //             localStorage.setItem('token', token.json);
    //             localStorage.setItem('user', JSON.stringify(user));
    //         })
    }



    return (
        <div>
            <form>
                <label>
                    <input type='text' name='user name' onChange={(e) => setUserName(e.target.value)} />
                    <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} />
                </label>
                <Button text={'Login!'} onClick={handleLogin} />
            </form>
        </div>
    )

}

export default LoginForm;