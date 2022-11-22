import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand">Blog Book</a>
                    <form className="d-flex" role="search">
                        < className="btn btn-light mx-1" type="submit">Login</>
                        <button className="btn btn-light mx-1" type="submit">Sign Up</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
