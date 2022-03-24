import React from 'react';
import container2 from '../images/container-work.svg'

export default function Pricing() {
    return (
        <div className='price'>
            <h2 className='price__title'>Get in touch with us to calculate prices for your business</h2>

            <div className='price__work'>
                <img className='price__work-img' src={container2} alt='Container' />
                <div className='price__work-speech'>
                    <p className='price__work-text'>We calculate our prices accroding to the amount of containers and deliveries made by your business monthly.</p>
                </div>
            </div>

            <button className='button price__button'>Work with us</button>
            <p className='price__text'>Leave your contacts and request, and our manager will reach out to you to establish our futher parntership!</p>
        </div>
    )
}