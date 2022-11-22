import React from 'react'

const Signup = () => {
    return (
        <>
            <h1>Create Your Account</h1>
            <form>
                <div className="mb-3">
                    <label forhtml="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp" minLength={4} required />
                </div>
                <div className="mb-3">
                    <label forhtml="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" minLength={5} required />
                </div>
                <div className="mb-3">
                    <label forhtml="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </>
    )
}

export default Signup
