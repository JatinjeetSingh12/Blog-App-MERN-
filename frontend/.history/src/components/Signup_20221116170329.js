import React, { useContext, useState } from 'react'
import BlogContext from '../context/BlogContext';


const Signup = () => {
    const context = useContext(BlogContext);
    const { CreateUser } = context;

    const [credintials, setCredential] = useState({ name: "", email: "", password: "" });

    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: credintials.name, email:credintials.email, password : credintials.password })
        });
        const json = await response.json();
        if (json.success) {
            localStorage.setItem("token", json.token);
            navigate("/");
        }
        else{
            alert("")
        }
    }

    const onchange = (e) => {
        setCredential({ ...credintials, [e.target.name]: e.target.value });
    }

    return (
        <>
            <div className="container my-4">

                <h1>Create Your Account</h1>
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label forhtml="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" onChange={onchange} minLength={4} required />
                    </div>
                    <div className="mb-3">
                        <label forhtml="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name='email' onChange={onchange} aria-describedby="emailHelp" minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label forhtml="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name='password' onChange={onchange} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        </>
    )
}

export default Signup
