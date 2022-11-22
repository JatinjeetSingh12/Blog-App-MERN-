import React, { useState } from 'react'

const Login = () => {
    const [text, settext] = useState();
    const handleLogin = () => {

    }
    return (
        <>
            <div className="container my-4">
                <h1>Login</h1>
                <form onSubmit={handleLogin}>

                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" onChange={onchange} aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login
