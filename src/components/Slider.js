import React from 'react';
import waste from '../images/waste.svg';
import acc from '../images/acc_crop.svg';
import ReactCompareImage from 'react-compare-image';


function Slider() {
    return (
        <div className='slider'>
            <ReactCompareImage
                leftImage={waste}
                leftImageCss={{ 'border-radius': '19px'}}
                rightImage={acc}
                rightImageCss={{ 'border-radius': '19px'}}
                sliderLineColor='#FF9820'
                sliderLineWidth='3'
                handle={<button className='button slider__thumb'></button>}
            ></ReactCompareImage>
        </div >
    )
}

export default Slider;