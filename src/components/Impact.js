import React from 'react';
import rectangle1 from '../images/rect-1.svg';
import rectangle2 from '../images/rect-2.svg';
import rectangle3 from '../images/rect-3.svg';
import circle1 from '../images/circle-1.svg';
import circle2 from '../images/circle-2.svg';

function Impact() {
    const fontColor = '#FF9820';

    return (
        <div className='impact'>
            <h2 className='impact__title'>Impact</h2>

            <div className='impact__cards'>
                <div className='impact__card impact__card_type_business'>
                    <div className='impact__card-decoration'>
                        <img className='impact__rectangle' src={rectangle1} />
                        <img className='impact__rectangle' src={rectangle2} />
                        <img className='impact__rectangle' src={rectangle3} />
                    </div>
                    <div className='impact__card-info'>
                        <h3 className='impact__card-title'>For Businesses</h3>
                        <ul className='impact__card-list'>
                            <li className='impact__card-text'>Save at least 50% on supply cost</li>
                            <li className='impact__card-text'>Save 50-60 hours per week of manager’s labor cost: no inventory management, no reordering, no restocking</li>
                            <li className='impact__card-text'>Save real estate cost for storage</li>
                            <li className='impact__card-text'>Government helps Subsidize Up to 70%</li>
                        </ul>
                    </div>
                </div>


                <div className='impact__card impact__card_type_users'>
                    <div className='impact__card-decoration'>
                        <img className='impact__circle' src={circle2} />
                        <img className='impact__circle' src={circle2} />
                        <img className='impact__circle' src={circle2} />
                    </div>
                    <div className='impact__card-info'>
                        <h3 className='impact__card-title'>For Users</h3>
                        <ul className='impact__card-list'>
                            <li className='impact__card-text'>Remove all chemicals going into food: plastics, BPA, PFAS and other ‘forever chemicals’ used to hold compostable packaging together</li>
                            <li className='impact__card-text'>Gamification: reward for returned containers</li>
                            <li className='impact__card-text'>Sustainability sells: users feel good about helping the planet</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <div className='impact__table'>
                <h3 className='impact__table-title'>The competition is no match</h3>
                <div className='impact__grid'>
                    <div className='impact__cell'>
                    </div>
                    <div className='impact__cell'>
                        <p className='impact__cell-text impact__cell-text_type_header'>
                            <span style={{ color: fontColor }}>Awesome Container Company</span>
                        </p>
                    </div>
                    <div className='impact__cell'>
                        <p className='impact__cell-text impact__cell-text_type_header'>Deliver Zero</p>
                    </div>
                    <div className='impact__cell'>
                        <p className='impact__cell-text impact__cell-text_type_header'>Logistics Company</p>
                    </div>
                    <div className='impact__cell'>
                        <p className='impact__cell-text impact__cell-text_type_header'>Washing Facility</p>
                    </div>
                    <div className='impact__cell'>
                        <p className='impact__cell-text impact__cell-text_type_header'>Single-use plastics</p>
                    </div>

                    <div className='impact__cell'>
                        <p className='impact__cell-text impact__cell-text_type_row'>Save over 50% on supply costs</p>
                    </div>
                    <div className='impact__cell'>
                        <div className='impact__cell-circle impact__cell-circle_orange'></div>
                    </div>
                    <div className='impact__cell'></div>
                    <div className='impact__cell'></div>
                    <div className='impact__cell'></div>
                    <div className='impact__cell'></div>

                    <div className='impact__cell'>
                        <p className='impact__cell-text impact__cell-text_type_row'>Save real estate storage costs</p>
                    </div>
                    <div className='impact__cell'>
                        <div className='impact__cell-circle impact__cell-circle_orange'></div>
                    </div>
                    <div className='impact__cell'>
                        <div className='impact__cell-circle impact__cell-circle_black'></div>
                    </div>
                    <div className='impact__cell'></div>
                    <div className='impact__cell'></div>
                    <div className='impact__cell'></div>

                    <div className='impact__cell'>
                        <p className='impact__cell-text impact__cell-text_type_row'>Inventory management</p>
                    </div>
                    <div className='impact__cell'>
                        <div className='impact__cell-circle impact__cell-circle_orange'></div>
                    </div>
                    <div className='impact__cell'></div>
                    <div className='impact__cell'></div>
                    <div className='impact__cell'></div>
                    <div className='impact__cell'></div>

                    <div className='impact__cell'>
                        <p className='impact__cell-text impact__cell-text_type_row'>Never reorder supplies</p>
                    </div>
                    <div className='impact__cell'>
                        <div className='impact__cell-circle impact__cell-circle_orange'></div>
                    </div>
                    <div className='impact__cell'></div>
                    <div className='impact__cell'></div>
                    <div className='impact__cell'></div>
                    <div className='impact__cell'></div>

                    <div className='impact__cell'>
                        <p className='impact__cell-text impact__cell-text_type_row'>Easy pickup and delivery</p>
                    </div>
                    <div className='impact__cell'>
                        <div className='impact__cell-circle impact__cell-circle_orange'></div>
                    </div>
                    <div className='impact__cell'></div>
                    <div className='impact__cell'><div className='impact__cell-circle impact__cell-circle_black'></div></div>
                    <div className='impact__cell'><div className='impact__cell-circle impact__cell-circle_black'></div></div>
                    <div className='impact__cell'><div className='impact__cell-circle impact__cell-circle_black'></div></div>

                    <div className='impact__cell'>
                        <p className='impact__cell-text impact__cell-text_type_row'>Sustainable products</p>
                    </div>
                    <div className='impact__cell'>
                        <div className='impact__cell-circle impact__cell-circle_orange'></div>
                    </div>
                    <div className='impact__cell'></div>
                    <div className='impact__cell'></div>
                    <div className='impact__cell'><div className='impact__cell-circle impact__cell-circle_black'></div></div>
                    <div className='impact__cell'></div>

                    <div className='impact__cell'>
                        <p className='impact__cell-text impact__cell-text_type_row'>App for tracking and reporting</p>
                    </div>
                    <div className='impact__cell'>
                        <div className='impact__cell-circle impact__cell-circle_orange'></div>
                    </div>
                    <div className='impact__cell'></div>
                    <div className='impact__cell'><div className='impact__cell-circle impact__cell-circle_black'></div></div>
                    <div className='impact__cell'></div>
                    <div className='impact__cell'></div>

                </div>
            </div> */}
        </div >
    )
}

export default Impact;