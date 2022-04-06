import React from 'react';
import inst from '../images/insta.svg';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__columns'>
                <div className='footer__column'>
                    <h2 className='footer__column-title'>Let’s get in touch</h2>
                    <p className='footer__text'>Hello@AwesomeContaners.com</p>
                    <p className='footer__text'>Address: 71 UBI Road 1, #08-42,<br />Oxley Bizhub, Singapore 408732</p>
                </div>
                <div className='footer__column'>
                    <h2 className='footer__column-title'>Follow us</h2>
                    <a className='footer__link'>
                        <img className='footer__link-img' src={inst} />
                        <p className='footer__text footer__text_type_inst'>AwesomeContainers</p>
                    </a>
                </div>
                <div className='footer__column'>
                    <h2 className='footer__column-title'>Where we work</h2>
                    <p className='footer__text'>We currently operate in: Singapore</p>
                    <p className='footer__text'>Planning to launch in 2022: UK, EU, OSEAN, China, Vietnam, Malaysia, Taiwan</p>
                </div>
            </div>
            <div className='footer__credits'>
                <p className='footer__text footer__text_type_credits'>Awesome Container Company © 2022</p>
                <p className='footer__text footer__text_type_credits'>Terms of Use</p>
            </div>
        </div>
    )
}

export default Footer;