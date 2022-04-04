import React, { useState } from 'react';

import space from '../images/space.svg';
import support from '../images/support.svg';
import costs from '../images/costs.svg';

import c1 from '../images/container1_2.svg';
import c2 from '../images/container2_2.svg';
import c3 from '../images/container3_2.svg';

import Slide from '../components/Slide';

function Solution() {
    const fontColor = '#FF9820';
    const [slideOneOpen, setSlideOneOpen] = useState(true);
    const [slideTwoOpen, setSlideTwoOpen] = useState(false);
    const [slideThreeOpen, setSlideThreeOpen] = useState(false);
    
    function nextSlide() {
        if (slideOneOpen) {
            setSlideOneOpen(false);
            setSlideTwoOpen(true);
        }

        if (slideTwoOpen) {
            setSlideTwoOpen(false);
            setSlideThreeOpen(true);
        }

        if (slideThreeOpen) {
            setSlideThreeOpen(false);
            setSlideOneOpen(true);
        }

    }

    function prevSlide() {
        if (slideOneOpen) {
            setSlideOneOpen(false);
            setSlideThreeOpen(true);
        }

        if (slideTwoOpen) {
            setSlideTwoOpen(false);
            setSlideOneOpen(true);
        }

        if (slideThreeOpen) {
            setSlideThreeOpen(false);
            setSlideTwoOpen(true);
        }
    }


    return (
        <div className='solution'>
            <h2 className='solution__title'>Sustainability Delivered</h2>
            <h3 className='solution__subtitle'><span style={{ color: fontColor }}>Awesome Container Company</span> replaces single-use packaging with reusable stainless steel containers</h3>

            <div className='solution__carousel'>
                <button className='button solution__arrow-prev' onClick={prevSlide}></button>
                <Slide
                    img={c1}
                    alt='Containers type 1'
                    slideOpen={slideOneOpen}
                >
                    <h3 className='slide__list-title'>Features</h3>
                    <li className='slide__list-point'>Removable/adjustable divider</li>
                    <li className='slide__list-point'>Leak-resistant lid keeps food fresh</li>
                    <li className='slide__list-point'>Rectangle shapes stack to save storage space</li>
                    <li className='slide__list-point'>Easy to sanitize and dishwasher safe</li>
                    <li className='slide__list-point'>Containers and lids are freezer safe</li>
                    <li className='slide__list-point'>Containers are oven safe up to 300 degrees</li>
                    <li className='slide__list-point'>Lighter and sturdier than glass</li>
                    <li className='slide__list-point'>Etched tare weights for easy bulk shopping</li>
                    <li className='slide__list-point'>304 (18/8) stainless steel, LDPE #4 plastic lid, PP #5 plastic divider</li>
                    <li className='slide__list-point'>Free of BPA, BPS, phthalates and lead</li>

                    <h3 className='slide__list-title'>Sizing</h3>
                    <li className='slide__list-point'>25oz container size with lid on: 7.75” x 1.75" x 5” Lids: 7.75” x 5”</li>
                </Slide>

                <Slide
                    img={c2}
                    alt='Containers type 2'
                    slideOpen={slideTwoOpen}
                >
                    <h3 className='slide__list-title'>Features</h3>
                    <li className='slide__list-point'>Leak-resistant lid keeps food fresh</li>
                    <li className='slide__list-point'>Easy to sanitize and dishwasher safe</li>
                    <li className='slide__list-point'>Containers and lids are freezer safe</li>
                    <li className='slide__list-point'>Containers are oven safe up to 300 degrees</li>
                    <li className='slide__list-point'>Three containers nest to save storage space </li>
                    <li className='slide__list-point'>Lighter and sturdier than glass</li>
                    <li className='slide__list-point'>Etched tare weights for easy bulk shopping</li>
                    <li className='slide__list-point'>304 (18/8) stainless steel, LDPE #4 plastic lid</li>
                    <li className='slide__list-point'>Free of BPA, BPS, phthalates and lead</li>
                    <h3 className='slide__list-title'>Sizing</h3>
                    <li className='slide__list-point'>16oz, container size with lid on: 4-5/8" x 2.25". Lid is 4.75” diameter</li>
                    <li className='slide__list-point'>9oz, container size with lid on: 4" x 2". Lid is 4” diameter</li>
                    <li className='slide__list-point'>5oz, container size with lid on: 3.5" x 1.5". Lid is 3.5” diameter</li>

                </Slide>

                <Slide
                    img={c3}
                    alt='Containers type 3'
                    slideOpen={slideThreeOpen}
                >
                    <h3 className='slide__list-title'>Features</h3>
                    <li className='slide__list-point'>Leak-resistant lid keeps food fresh</li>
                    <li className='slide__list-point'>Easy to sanitize and dishwasher safe</li>
                    <li className='slide__list-point'>Containers and lids are freezer safe</li>
                    <li className='slide__list-point'>Containers are oven safe up to 300 degrees</li>
                    <li className='slide__list-point'>Three containers nest to save storage space </li>
                    <li className='slide__list-point'>Lighter and sturdier than glass</li>
                    <li className='slide__list-point'>Etched tare weights for easy bulk shopping</li>
                    <li className='slide__list-point'>304 (18/8) stainless steel, LDPE #4 plastic lid</li>
                    <li className='slide__list-point'>Free of BPA, BPS, phthalates and lead</li>

                    <h3 className='slide__list-title'>Sizing</h3>

                    <li className='slide__list-point'>16oz, container size with lid on: 4-5/8" x 2.25". Lid is 4.75” diameter</li>
                    <li className='slide__list-point'>9oz, container size with lid on: 4" x 2". Lid is 4” diameter</li>
                    <li className='slide__list-point'>5oz, container size with lid on: 3.5" x 1.5". Lid is 3.5” diameter</li>

                </Slide>
                <button className='button solution__arrow-next' onClick={nextSlide}></button>
            </div>
        </div>
    )
}


export default Solution;