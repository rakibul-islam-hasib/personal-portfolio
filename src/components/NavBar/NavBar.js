import React from 'react';
import './NavBar.css';
const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <h2>Marsi.</h2>
            </div>
            <ul className='navbar__menu'>
                <li><i className="fa-brands fa-dribbble"></i> Dribble</li>
                <li><i className="fa-brands fa-behance"></i> Behance</li>

            </ul>
            <div className="ham">
            <i className="fa-solid fa-bars-staggered"></i>
            </div>
        </div>
    );
};

export default NavBar;