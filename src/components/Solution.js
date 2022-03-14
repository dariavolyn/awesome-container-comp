import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import containers1 from '../images/containers1.svg';
import containers2 from '../images/containers2.svg';
import containers3 from '../images/containers3.svg';
import space from '../images/space.svg';
import support from '../images/support.svg';
import costs from '../images/costs.svg';

function Solution() {

    const fontColor = '#FF9820';
    return (
        <div className='solution'>
            <h2 className='solution__title'>Sustainability Delivered</h2>
            <h3 className='solution__subtitle'><span style={{ color: fontColor }}>Awesome Container Company</span> replaces single-use packaging with reusable stainless steel containers</h3>

            <Carousel
                className='solution__carousel'
                width='1212px'
                showThumbs={false}
                useKeyboardArrows={true}
                swipeable={true}
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

            <div className='solution__info'>
                <div className='solution__support'>
                    <img className='solution__support-img' src={support}></img>
                    <p className='solution__caption solution__caption_type_support'>Backend logistics support</p>
                </div>
                <div className='solution__costs'>
                    <img className='solution__costs-img' src={costs}></img>
                    <p className='solution__caption solution__caption_type_costs'>Save at least 50% on supply cost <br/> and time on inventory <br/> tracking/re-orders</p>
                </div>
                <div className='solution__space'>
                    <img className='solution__space-img' src={space}></img>
                    <p className='solution__caption solution__caption_type_space'>Save storage space while removing tons of waste from our oceans and landfills</p>
                </div>
            </div>
        </div>
    )
}

export default Solution;