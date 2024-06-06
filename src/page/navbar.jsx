import React from 'react';
import { Link } from 'react-router-dom';
import './css/navbar.css';
import logo from '../image/logo.jpg';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <img src={logo} alt="Logo" className="navbar-logo" />
                <ul className="navbar-links">
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/page1">Images</Link>
                    </li>
                    <li>
                        <Link className="link" to="/page2">Contact us</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;
