import React from 'react';
import container1 from '../images/container-acc.svg';



function Social() {
    const fontColor = '#FF9820';
    return (
        <div className='social'>
            <div className='social__info'>
                <h2 className='social__info-title'>We are an ESG company: <br /> we care for social and envirnomental sustainability</h2>
                <img className='social__info-logo' src={container1} alt='Container'/>
                <p className='social__info-text'>In 2020 Singapore’s government took on <span style={{ color: fontColor }}>the Green Plan</span>: a whole-of-nation movement to advance Singapore’s national agenda on sustainable development. Our company is a part of its solution to cultivating a Sustainable Living — 1 of the 5 key programmes of SG Green Plan.</p>
            </div>

            

        </div>
    )
}

export default Social;