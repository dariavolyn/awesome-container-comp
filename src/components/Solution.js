import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import containers1 from '../images/containers1.svg';
import containers2 from '../images/containers2.svg';
import containers3 from '../images/containers3.svg';

function Solution() {

    const fontColor = '#FF9820';
    return (
        <div className='solution'>
            <h2 className='solution__title'>Sustainability Delivered</h2>
            <h3 className='solution__subtitle'><span style={{ color: fontColor }}>Awesome Container Company</span> replaces single-use packaging with reusable stainless steel containers</h3>
            <Carousel
                className='solution__carousel'
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={false}
                renderArrowNext={(onClickHandler, hasNext, label) =>
                    hasNext && (
                        <button type='button' onClick={onClickHandler} title={label} className='button solution__arrow-next' />)}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                    hasPrev && (
                        <button type='button' onClick={onClickHandler} title={label} className='button solution__arrow-prev' />)}
            >
                <img classname='solution__image' src={containers1}></img>
                <img classname='solution__image' src={containers2}></img>
                <img classname='solution__image' src={containers3}></img>
            </Carousel>
        </div>
    )
}

export default Solution;