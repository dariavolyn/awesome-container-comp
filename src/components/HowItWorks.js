import React from 'react';
import app from '../images/app.svg';
import arrow1 from '../images/arrow1.svg';
import arrow2 from '../images/arrow2.svg';
import arrow3 from '../images/arrow3.svg';
import arrow4 from '../images/arrow4.svg';
import clean from '../images/clean.svg';
import pickup from '../images/pickup.svg';
import truck from '../images/truck.svg';

function HowItWorks(props) {
    const fontColor = '#FF9820';

    function onClick() {
        props.handleFormOpen();
    }

    return (
        <div className='how'>
            <h2 className='how__title'>How it works?</h2>
            <div className='how__circle'>

                <div className='how__circle-item how__circle-item_type_app'>
                    <img className='how__circle-img' src={app}></img>
                    <p className='how__circle-caption'>01.<br /> Restaurants request reusable containers via app</p>
                </div>

                <img className='how__arrow how__arrow-one' src={arrow1}></img>

                <div className='how__circle-item how__circle-item_type_truck'>
                    <img src={truck}></img>
                    <p className='how__circle-caption'>02.<br /> Deliver containers<br /> to restaurants</p>
                </div>

                <img  className='how__arrow how__arrow-two' src={arrow2}></img>

                <div className='how__circle-item how__circle-item_type_pickup'>
                    <img src={pickup}></img>
                    <p className='how__circle-caption'>03.<br /> Pick up used containers from users via app</p>
                </div>

                <img  className='how__arrow how__arrow-three' src={arrow3}></img>

                <div className='how__circle-item how__circle-item_type_clean'>
                    <img src={clean}></img>
                    <p className='how__circle-caption'>04.<br /> Wash containers<br /> at commercial facility</p>
                </div>

                <img  className='how__arrow how__arrow-four' src={arrow4}></img>

                <h4 className='how__label'><span style={{ color: fontColor }}>Circular ecosystem</span></h4>
            </div>

            <button type='button' className='button how__button' onClick={onClick}>Work with us</button>
        </div>
    )
}

export default HowItWorks;