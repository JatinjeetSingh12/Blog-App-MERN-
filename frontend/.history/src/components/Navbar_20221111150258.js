import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Blog Book</a>
                    <form className="d-flex" role="search">
                        <button className="btn btn-success" type="submit">Login</button>
                        <button className="btn btn-outline-success" type="submit">Sign Up</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
