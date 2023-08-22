import React from 'react'
import '../styles/SectionEight.css';
import card3 from '../assets/card3.png'

function SectionEleven() {
  return (
    <div className='section-eight'>
      <img className='card3' src={card3} alt='card-img' />
      <div className='eight-sub'>
        <p>Go beyond the expected</p>
        <h3>Our Strategy</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra diam quis velit suscipit</p>
        <div className='strategy'>
          <div>
            <p>UX/UI Design</p>
            <p>Product Engineering</p>
            <p>SEO</p>
          </div>
          <div>
            <p>UX/UI Design</p>
            <p>Product Engineering</p>
            <p>SEO</p>
          </div>
        </div>
        <button className='read-button1'>Explore More</button>
      </div>
    </div>
  )
}

export default SectionEleven
