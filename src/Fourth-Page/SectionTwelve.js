import React from 'react';
import '../styles/SectionThree.css';
import { FiArrowRight } from 'react-icons/fi';

function SectionTwelve() {
  return (
    <div className='section-three'>
      <div className="card1">
      <p>Featured insight</p>
        <h3 className='card-heading'>Ready for Launch: How Gen AI Is Already Transforming Marketing</h3>
        <p className='para3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque euismod leo quis egestas. Donec ac eros molestie, sagittis justo sit amet, eleifend quam.</p>
        <span className='readmore'>
        Explore our solution
        <FiArrowRight />
      </span>
      </div>
    </div>
  )
}

export default SectionTwelve
