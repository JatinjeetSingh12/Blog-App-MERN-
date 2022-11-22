import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to={}>Blog Book</Link>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" href="/">Home</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/addblog">Add Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <Link className="btn btn-light mx-1" to="login">Login</Link>
                        <Link className="btn btn-light mx-1" to="/signup">Sign Up</Link>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
