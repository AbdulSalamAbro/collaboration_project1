import React from 'react'
import '../styles/SectionTwo.css'
import { FiArrowRight } from 'react-icons/fi';
function SectionTwo() {
  return (
    <div className="second-div">
      <p className="para1"> <span className="bold"> Helping clients </span> to build trust, transform, operate and grow </p>
      <p className="para2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est. Ut vitae lacus vel erat vulputate tempor. Proin rhoncus nulla ac diam aliquam, a rutrum massa faucibus. Praesent vulputate imperdiet turpis eu euismod. Ut lectus turpis, dictum accumsan ultrices nec, tempus et justo. Morbi tempus quis lectus at aliquam. Nulla tempor eleifend arcu et tristique. Nulla magna magna, lacinia quis velit sed, volutpat posuere velit.</p>
      <span className='readmore'>
        Learn More
        <FiArrowRight />
      </span>
    </div>
  )
}

export default SectionTwo
