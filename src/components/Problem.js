import React from 'react';
import info from '../images/infographic.svg';
import turtle from '../images/turtle.svg';
import landfill from '../images/landfill.svg';
import recycling from '../images/recycling.svg';

function Problem() {
    const fontColor = '#FF9820';

    return (
        <div className='problem'>
            <div className='problem__content'>
                <img className='problem__circle' src={info}></img>
                <div className='problem__text'>
                    <h2 className='problem__title'>Single-use packaging: <br />bad for the planet, bad for business</h2>
                    <h3 className='problem__subtitle'>Millions of tons of single-use packaging <span style={{ color: fontColor }}>end up in landfills and oceans</span> while only <span style={{ color: fontColor }}>9% of single-use waste gets recycled</span>. Meanwhile, single-use containers are expensive and restaurants need to track inventory / restock weekly.</h3>
                </div>
                <div className='problem__pics'>
                    <img className='problem__img' src={turtle}></img>
                    <img className='problem__img' src={landfill}></img>
                    <img className='problem__img' src={recycling}></img>
                    <p className='problem__caption'>Single-use plastics pollute oceans and kill marine species</p>
                    <p className='problem__caption'>Single-use plastics pollute landfills and emit dangerous chemicals and greenshouse gases</p>
                    <p className='problem__caption'>Not all of the single-use plastics are recyclable</p>
                </div>
            </div>
        </div>
    )
}

export default Problem;