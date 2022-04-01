import React from 'react';
import { Link } from 'react-scroll';

function Header(props) {
    function onClick() {
        props.handleFormOpen();
    }
    return (
        <div className='header'>
            <div className='header__logo'></div>
            <h1 className='header__title'>Awesome Container Company</h1>
            <nav className='header__nav'>
                <Link spy={true} smooth={true} duration={200} to='problem'
                    className='header__nav-link'>The Problem</Link>
                <Link spy={true} smooth={true} duration={400} to='solution'
                    className='header__nav-link'>Sustainable Solution</Link>
                <Link spy={true} smooth={true} duration={500} to='impact'
                    className='header__nav-link'>Impact</Link>
                <Link spy={true} smooth={true} duration={600} to='pricing'
                    className='header__nav-link'>Pricing</Link>
                <Link spy={true} smooth={true} duration={700} to='team'
                    className='header__nav-link'>Team</Link>
                <Link spy={true} smooth={true} duration={800} to='contacts'
                    className='header__nav-link'>Contacts</Link>
                <button type='button' className='button header__nav-button' onClick={onClick}>Work with us</button>
            </nav>
        </div>
    )
}

export default Header;