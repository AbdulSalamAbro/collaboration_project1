import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import '../styles/SectionThirteen.css';


function SectionThirteen(props) {
  return (
    <div className='section-thirteen'>
      <div className='sub-thirteen'>
      <h4>{props.heading}</h4>
      <p>{props.message}</p>
      <span className='readmore'>
       {props.more}
        <FiArrowRight />
      </span>
      </div>
    </div>
  )
}

export default SectionThirteen
