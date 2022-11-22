import React from 'react'

const Signup = () => {
    return (
        <>
            <h1>Create Your Account</h1>
            <form>
                <div class="mb-3">
                    <label forhtml="name" class="form-label">Name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" minLength={4} required />
                </div>
                <div class="mb-3">
                    <label forhtml="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" minLength={5} required />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" class="btn btn-primary">Create</button>
            </form>
        </>
    )
}

export default Signup
