import React from 'react';
import card1 from '../assets/card1.svg'
import '../styles/LastSection.css'

const LastSection = () => {
    return (
        <section className='LastSection'>
            <h2 className='LastSectionFirstChild'>Integer maecenas commodo fermentum</h2>
            <div className='card'>
                <img src={card1} alt="" />
                <h3>Why wavering customer confidence could stall</h3>
                <p>The Energy Consumer Confidence Index reveals that the impact of the energy transition is hitting home.
                     How can we boost customer confidence?
                </p>
            </div>
            <div className='card'>
                <img src={card1} alt="" />
                <h3>Why wavering customer confidence could stall</h3>
                <p>The Energy Consumer Confidence Index reveals that the impact of the energy transition is hitting home.
                     How can we boost customer confidence?
                </p>
            </div>
            <div className='card'>
                <img src={card1} alt="" />
                <h3>Why wavering customer confidence could stall</h3>
                <p>The Energy Consumer Confidence Index reveals that the impact of the energy transition is hitting home.
                     How can we boost customer confidence?
                </p>
            </div>
        </section>
    );
}

export default LastSection;
