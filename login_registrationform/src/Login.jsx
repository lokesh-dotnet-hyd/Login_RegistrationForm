import React, { useState } from 'react'

import RegistrationForm from './RegistrationForm';
import './App.css'
function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [islogged, setIsLogged] = useState(false);
    const handleLogin = () => {
        if (name === "Lokesh" && password === "Lokesh@123") {
            setIsLogged(true);
        }
        else {
            alert('Invalid Login');
        }

    }
    return (
        <>
            {islogged ? (<RegistrationForm />) :
                (
                    <div classname="Login">
                        <h1>Login</h1>
                        <label>UserName:</label>
                        <input type="text"
                            placeholder="Enter Username"
                            value={name}
                            onChange={(e) => setName(e.target.value)}></input>
                        <br></br>
                        <label>Password:</label>
                        <input type="text"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}></input>
                        <br></br>
                        <button onClick={handleLogin}>Login</button>

                    </div>
                ) }
        </>

        
    )
}
export default Login;
