import React from 'react';
import card1 from '../assets/card1.svg'
import Arrow from '../assets/readmoreArrow.svg'
import '../styles/FirstMiddle.css'

const FirstMiddle= () => {
    return ( 
        <div className='FirstMiddleContainer'>
            <img src={card1} alt="" />
            <p>How to optimize your pages to get more traffic
                on mobile devices.
            </p>
            <span className='readmore'>
                Read More
                <img src={Arrow} alt="" />
            </span>
        </div>
    );
}

export default FirstMiddle;
