import React from 'react';

export default function Slide(props) {
    return (
        <div className={`slide ${props.slideOpen ? '' : 'slide_invisible'}`}>
            <img className='slide__img' src={props.img} alt={props.alt} />
            <ul className='slide__list'>
                {props.children}
            </ul>
        </div>
    )
}