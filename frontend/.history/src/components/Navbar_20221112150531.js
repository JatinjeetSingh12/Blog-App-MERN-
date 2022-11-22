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
                                <a class="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" href="#">Add Blog</Li>
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
