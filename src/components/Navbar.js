import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <input type="checkbox" name="" id="" />
                <div className="hamburger-lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu-items">
                    <li>
                        <Link to="/account">Account</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                    <button className='contact_btn'>
                        <Link to="/contact">Contact</Link>
                    </button>
                </ul>
                <h1 className="logo">
                    <Link to="/home">
                        <i></i>Naari Safety
                    </Link>
                </h1>
            </div>
        </nav>
    )
}

export default Navbar

