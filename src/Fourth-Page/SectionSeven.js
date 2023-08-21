import React from 'react'
import { FaQuoteLeft ,FaCaretRight} from 'react-icons/fa';
import '../styles/SectionSeven.css';
import '../styles/SectionFour.css';
function SectionSeven(){
  return (
    <div className='section-seven'>
      <FaQuoteLeft className='quotes' />
     <p className='para8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mi sodales, congue dui a, pretium est. Ut vitae lacus vel erat vulputate tempor. Proin rhoncus nulla ac diam aliquam, a rutrum massa faucibus. Praesent vulputate imperdiet turpis eu euismod.</p>
    <p className='para9'>Christopher Torres</p>
    <p className='para10'>Global Chairman & CEO</p>
    <button className='read-button'>Read the full story <FaCaretRight /></button>
    </div>
  )
}

export default SectionSeven
