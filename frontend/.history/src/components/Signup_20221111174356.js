import React, { useState } from 'react'
Blo

const Signup = () => {

    const [credintials, setCredential] = useState({ name: "", email: "", password: "" });
    const handleSignup = () => {
    }
    const onchange = () => {
        setCredential({ ...credintials, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div className="container my-4">

                <h1>Create Your Account</h1>
                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label forhtml="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" onChange={onchange} minLength={4} required />
                    </div>
                    <div className="mb-3">
                        <label forhtml="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" onChange={onchange} aria-describedby="emailHelp" minLength={5} required />
                    </div>
                    <div className="mb-3">
                        <label forhtml="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" onChange={onchange} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        </>
    )
}

export default Signup
