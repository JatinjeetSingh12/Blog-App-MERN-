import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">Blog Book</a>
                    <form class="d-flex" role="search">
                        <button class="btn btn-outline-success" type="submit">Login</button>
                        <button class="btn btn-outline-success" type="submit">Sign</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
