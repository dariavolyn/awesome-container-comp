import React from 'react';
import logo2 from '../images/logo2.svg'
import logo1 from '../images/logo1.svg'

function Header() {
    return (
        <div className='header'>
            <div className='header__logo'></div>
            <h1 className='header__title'>Awesome Container Company</h1>
            <nav className='header__nav'>
                <p className='header__nav-link'>The Problem</p>
                <p className='header__nav-link'>Sustainable Solution</p>
                <p className='header__nav-link'>Impact</p>
                <p className='header__nav-link'>Pricing</p>
                <p className='header__nav-link'>Team</p>
                <p className='header__nav-link'>Contacts</p>
                <button className='button header__nav-button'>Work with us</button>
            </nav>
        </div>
    )
}

export default Header;