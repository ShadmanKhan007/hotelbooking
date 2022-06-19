import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="navbarContainer">
            <span className="navbarlogo">ShahBooking</span>
            <div className="navItems">
                <button className="navButton-1">Register</button>
                <button className="navButton-2">Login</button>
            </div>
        </div>
    </div>
  )
}
