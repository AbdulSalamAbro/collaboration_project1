import React from 'react'
import '../styles/SectionTen.css';
import cloud from '../assets/cloud.png'
import google from '../assets/google.png'
import microsoft from '../assets/microsoft.png'
import sales from '../assets/sales.png'


function SectionTen() {
  return (
    <div className='section-ten'>
      <div className='ten-sub'>
        <h3>Our Partner Ecosystem</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet scelerisque risus suscipit suscipit. Nunc ipsum augue, rhoncus ac laoreet vel, venenatis ac dui. Integer tincidunt erat ac leo luctus condimentum</p>
        <div>
        <img className='social-img' src={cloud} alt='cloud'></img>
        <img className='social-img' src={google} alt='cloud'></img>
        <img className='social-img' src={microsoft} alt='cloud'></img>
        <img className='social-img' src={sales} alt='cloud'></img>
      </div>
      <h3>How we can help ?</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam laoreet scelerisque risus suscipit suscipit. Nunc ipsum augue, rhoncus ac laoreet vel, venenatis ac dui. Integer tincidunt erat ac leo luctus condimentum</p>
    </div>
    </div>
  )
}

export default SectionTen
