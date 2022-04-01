import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Header(props) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    function handleMobileOpen() {
        if (!isMobileOpen) {
            setIsMobileOpen(true);
        } else {
            setIsMobileOpen(false)
        }
    }

    function onClick() {
        props.handleFormOpen();
    }

    function closeMenu() {
        setIsMobileOpen(false)
    }


    return (
        <div className='header'>
            <div className='header__logo'></div>
            <h1 className='header__title'>Awesome Container Company</h1>
            <button className={`button header__menu-button ${isMobileOpen ? 'header__menu-button_type_close' : ''}`} onClick={handleMobileOpen}></button>

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
            </nav>

            <nav className={`header__nav-mobile ${isMobileOpen ? '' : 'header__nav-mobile_hidden'}`}>
                
                <Link spy={true} smooth={true} duration={200} to='problem'
                    className='header__nav-link header__nav-link_type_mobile' onClick={closeMenu}>The Problem</Link>
                <Link spy={true} smooth={true} duration={400} to='solution'
                    className='header__nav-link header__nav-link_type_mobile' onClick={closeMenu}>Sustainable Solution</Link>
                <Link spy={true} smooth={true} duration={500} to='impact'
                    className='header__nav-link header__nav-link_type_mobile' onClick={closeMenu}>Impact</Link>
                <Link spy={true} smooth={true} duration={600} to='pricing'
                    className='header__nav-link header__nav-link_type_mobile' onClick={closeMenu}>Pricing</Link>
                <Link spy={true} smooth={true} duration={700} to='team'
                    className='header__nav-link header__nav-link_type_mobile' onClick={closeMenu}>Team</Link>
                <Link spy={true} smooth={true} duration={800} to='contacts'
                    className='header__nav-link header__nav-link_type_mobile' onClick={closeMenu}>Contacts</Link>
                <button type='button' className='button header__nav-button_type_mobile header__nav-button ' onClick={onClick}>Work with us</button>
            </nav>

            <button type='button' className='button header__nav-button' onClick={onClick}>Work with us</button>
        </div>
    )
}

export default Header;