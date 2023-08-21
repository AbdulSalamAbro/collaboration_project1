import React from 'react'
import '../styles/Category.css'
import { FaCaretDown, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Category() {
  return (
    <div>
      <div className='category-list'>
      <div className='icon-list'>
        <p className='category-text'> Category </p>
        <FaCaretDown />
      </div>
       
      <div className='icon-list'>
          <FaEnvelope />
        <p className="contact"> Contact Us </p>
      </div>
      <div className='icon-list'> 
        <FaPhoneAlt />
        <p className='book-call'> Book a Call </p>
      </div>
        </div>
    </div>
  )
}

export default Category
