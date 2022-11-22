import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    

    const [Credential, setCredential] = useState({ email: "", password: "" });

    const onchange = (e) => {
        setCredential({ ...Credential, [e.target.name]: e.target.value });
    }


    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: Credential.email, password: Credential.password })
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem("token", json.token);
            navigate("/");
        }
        else{
            alert("please enter the correct credential")
        }
    }

    return (
        <>
            <div className="container my-4">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>

                    <div className="mb-3">
                        <label forhtml="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' onChange={onchange} aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label forhtml="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' onChange={onchange} required />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login
