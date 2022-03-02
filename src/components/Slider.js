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

        // <div className='slider'>
        //     <img className='slider__waste' src={waste}></img>
        //     <img className='slider__acc' src={acc}></img>



        //     </ReactSlider>
        //     <div className='slider__element'>
        //         <button className='button slider__thumb'></button>
        //         <button className='button slider__line'></button>
        //     </div>
        // </div>
    )
}

export default Slider;