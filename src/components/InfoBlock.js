import React from 'react';

function InfoBlock() {
    const fontColor = '#FF9820';
    return (
        <div className='info'>
            <h2 className='info__title'>
                Help our environment by eliminating single-use plastics from your delivery with <span style={{color: fontColor}}>Awesome Container Company</span>
            </h2>
        </div>
    )
}

export default InfoBlock;