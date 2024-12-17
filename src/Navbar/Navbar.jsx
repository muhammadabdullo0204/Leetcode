import React from 'react';
import logo from '../LeetCode_logo_rvs.png';
import { Link } from 'react-router-dom';



function Navbar() {
    const navItems = [
        { name: 'Login', path: '/Login' },
    ];

    return (
        <div className='Navbar'>
            <div className='Navbar-container'>
                <div className='Navbar-container-mini'>
                    <div className='Navbar-logo'>
                        <img width="40px" height="40px" src={logo} alt='Logo' />
                        <h1>LeetCode</h1>
                    </div>
                    <div className='Navbar-links'>
                        <ul>
                            <li><a href='#Navbar'>Premium</a></li>
                            <li><a href='#Explore'>Explore</a></li>
                            <li><a href='#Product'>Product</a></li>
                            <li><a href='#Developer'>Developer</a></li>
                            <li><Link to='/Login'>Sign in</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
