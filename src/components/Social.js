import React from 'react';
import container1 from '../images/container-acc.svg';
import container2 from '../images/container-work.svg'
import hung from '../images/hung.svg'
import edwin from '../images/edwin.svg';
import guillaume from '../images/guillaume.svg';
import chef from '../images/chef.svg';
import stewards from '../images/stewards.svg';
import ninja from '../images/ninja.svg'
import creatella from '../images/creatella.svg';
import goa from '../images/goa.svg';


function Social() {
    const fontColor = '#FF9820';
    return (
        <div className='social'>
            <div className='social__info'>
                <h2 className='social__info-title'>We are an ESG company: <br /> we care for social and envirnomental sustainability</h2>
                <img className='social__info-logo' src={container1} alt='Container'/>
                <p className='social__info-text'>In 2020 Singapore’s government took on <span style={{ color: fontColor }}>the Green Plan</span>: a whole-of-nation movement to advance Singapore’s national agenda on sustainable development. Our company is a part of its solution to cultivating a Sustainable Living — 1 of the 5 key programmes of SG Green Plan.</p>
            </div>

            <h2 className='social__title'>Get in touch with us to calculate prices for your business</h2>

            <div className='social__work'>
                <img className='social__work-img' src={container2} alt='Container'/>
                <div className='social__work-speech'>
                    <p className='social__work-text'>We calculate our prices accroding to the amount of containers and deliveries made by your business monthly.</p>
                </div>
            </div>

            <button className='button social__button'>Work with us</button>
            <p className='social__text'>Leave your contacts and request, and our manager will reach out to you to establish our futher parntership!</p>

            <h2 className='social__title'>An Awesome Team</h2>
            <div className='social__team'>
                <div className='social__team-cell'>
                    <img className='social__team-img' src={hung} alt='Hung Lam'/>
                    <h3 className='social__team-name'>Hung Lam<br />Founder / CEO</h3>
                    <a className='social__team-link' href='https://www.linkedin.com/in/hung-lam-85a502163/'></a>
                </div>
                <div className='social__team-cell'>
                    <img className='social__team-img' src={edwin} alt='Edwin Phua'/>
                    <h3 className='social__team-name'>Edwin Phua<br />Co-founder / COO</h3>
                    <a className='social__team-link' href='#'></a>
                </div>
                <div className='social__team-cell'>
                    <img className='social__team-img' src={guillaume} alt='Guillaume Catella'/>
                    <h3 className='social__team-name'>Guillaume Catella<br />Co-founder / CTO</h3>
                    <a className='social__team-link' href='https://www.linkedin.com/in/guillaumecatella/'></a>
                </div>
            </div>

            <h2 className='social__title'>And Awesome Partners</h2>
            <div className='social__partners'>
                <img className='social__partners-link' src={chef} alt='Chef' />
                <img className='social__partners-link' src={stewards} alt='Stewards'/>
                <img className='social__partners-link' src={ninja} alt='Ninja'/>
                <img className='social__partners-link' src={creatella} alt='Creatella'/>
                <img className='social__partners-link' src={goa} alt='Goa'/>
            </div>
        </div>
    )
}

export default Social;