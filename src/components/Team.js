import React from 'react';

import hung from '../images/hung.svg'
import edwin from '../images/edwin.svg';
import guillaume from '../images/guillaume.svg';
import chef from '../images/chef.svg';
import stewards from '../images/stewards.svg';
import ninja from '../images/ninja.svg'
import creatella from '../images/creatella.svg';
import goa from '../images/goa.svg';

export default function Team() {
    return (
        <div className='team'>
            <h2 className='team__title'>An Awesome Team</h2>
            <div className='team__grid'>
                <div className='team__cell'>
                    <img className='team__cell-img' src={hung} alt='Hung Lam' />
                    <h3 className='team__cell-name'>Hung Lam<br />Founder / CEO</h3>
                    <a className='team__cell-link' href='https://www.linkedin.com/in/hung-lam-85a502163/'></a>
                </div>
                <div className='team__cell'>
                    <img className='team__cell-img' src={edwin} alt='Edwin Phua' />
                    <h3 className='team__cell-name'>Edwin Phua<br />Co-founder / COO</h3>
                    <a className='team__cell-link' href='#'></a>
                </div>
                <div className='team__cell'>
                    <img className='team__cell-img' src={guillaume} alt='Guillaume Catella' />
                    <h3 className='team__cell-name'>Guillaume Catella<br />Co-founder / CTO</h3>
                    <a className='team__cell-link' href='https://www.linkedin.com/in/guillaumecatella/'></a>
                </div>
            </div>

            <h2 className='team__title'>And Awesome Partners</h2>
            <div className='team__partners'>
                <img className='team__partners-link' src={chef} alt='Chef' />
                <img className='team__partners-link' src={stewards} alt='Stewards' />
                <img className='team__partners-link' src={ninja} alt='Ninja' />
                <img className='team__partners-link' src={creatella} alt='Creatella' />
                <img className='team__partners-link' src={goa} alt='Goa' />
            </div>
        </div>
    )
}