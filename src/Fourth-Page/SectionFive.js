import React from 'react'
import '../styles/SectionFive.css';
import card2 from '../assets/card1.svg'

function SectionFive() {
  return (
    <div className='section-five'>
      <div>
        <h3 className='info-five'>Explore our Services</h3>
        <p className='info-five'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eleifend accumsan leo, ac ultricies orci porta a. Vivamus mi purus, ultricies et magna nec, blandit ultricies lectus.</p>
      </div>
      <img src={card2} alt='card-img' />
      <img src={card2} alt='card-img' />
      <img src={card2} alt='card-img' />
      <img src={card2} alt='card-img' />
      <img src={card2} alt='card-img' />
      <img src={card2} alt='card-img' />
      <img src={card2} alt='card-img' />
      <img src={card2} alt='card-img' />
    </div>
  )
}

export default SectionFive
