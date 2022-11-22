import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Blog Book</a>
                    <form className="d-flex" role="search">
                        <Link className="btn btn-light mx-1" to="submit">Login</Link>
                        <Link className="btn btn-light mx-1" to="/submit">Sign Up</Link>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
