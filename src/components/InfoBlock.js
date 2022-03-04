import React from 'react';
import Slider from './Slider';
import Chat from './Chat';

function InfoBlock() {
    const fontColor = '#FF9820';
    return (
        <div className='info'>
            <h2 className='info__title'>
                Help our environment by eliminating single-use plastics from your delivery with <span style={{color: fontColor}}>Awesome Container Company</span>
            </h2>
            <Slider></Slider>
            <Chat></Chat>
        </div>
    )
}

export default InfoBlock;