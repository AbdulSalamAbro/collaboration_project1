import React from 'react';
import Arrow from '../assets/readmoreArrow.svg'
import '../styles/FirstSection.css'

const FirstSection = () => {
    return ( 
        <div className='FirstContainer'>
            <h3>Artificial Intelligence</h3>
            <h1>
                What's Behind Tesla's Latest
                Self-Driving Vechile Updates
            </h1>
            <span className='readmore'>
                Read More
                <img src={Arrow} alt="" />
            </span>
        </div>
    );
}

export default FirstSection;
