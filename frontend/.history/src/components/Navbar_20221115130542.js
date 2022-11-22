import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>


            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Blog Book</Link>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/addblog">Add Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/yourblog">Your Blogs</Link>
                        </li>
                    </ul>
                    {!localStorage.getItem('token') ?
                            <form className='d-flex'>
                                <Link role="button" className="btn btn-primary mx-1" to="/signup">SignUp</Link>
                                <Link role="button" className="btn btn-primary mx-1" to="/login">Login</Link>
                            </form>
                            :
                            <div>
                               <Link to="/user"><i className="fa-regular fa-user mx-3"></i></Link>

                                <button role="button" onClick={handleLogout} className="btn btn-primary mx-1" to="/signup">Logout</button>
                            </div>
                        }
                </div>
            </nav>
        </div>
    )
}

export default Navbar
