import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Blog Book</a>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
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
