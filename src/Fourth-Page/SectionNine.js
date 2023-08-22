import React from 'react'
import { FiArrowRight } from 'react-icons/fi';
import '../styles/SectionNine.css';
import card3 from '../assets/card3.png'

function SectionNine() {
  return (
    <div className='section-eight'>
      <img className='card3' src={card3} alt='card-img' />
      <div className='eight-sub'>
        <p>Go beyond the expected</p>
        <h3>Our Strategy</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra diam quis velit suscipit</p>
        <div>
            <button className='read-button2'>Technology</button>
            <button className='read-button2'>Risk</button>
            <button className='read-button2'>Technology</button>
            <button className='read-button2'>Risk</button>
            <button className='read-button2'>Technology</button>
            <button className='read-button2'>Risk</button>
            <button className='read-button2'>Technology</button>
            <button className='read-button2'>Risk</button>
        <button className='read-button1'>Learn More</button>
      </div>
      <span className='readmore'>
        Explore our solution
        <FiArrowRight />
      </span>
    </div>
    </div>
  )
}

export default SectionNine
