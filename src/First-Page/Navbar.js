import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
import hamburger from '../assets/hamburger.svg';
import cancel from '../assets/cancelIcon.svg'
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);

  const toggleHamburger = () => {
    setIsHamburgerActive(!isHamburgerActive);
  };

  return (
    <nav className='NavbarContainer'>
      <ul>
        <li className='LogoContainer'>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <h3>Marketeq</h3>
        </li>
        <li className='SearchAndHamburger'>
          <img src={search} alt="search icon" />
          {isHamburgerActive ? (
            <Link to="/">
              <img src={cancel} alt="hamburger icon" onClick={toggleHamburger} />
            </Link>
          ) : (
            <Link to="/hamburger">
              <img src={hamburger} alt="hamburger icon" onClick={toggleHamburger} />
            </Link>
          )}
        </li>
      </ul>
      <hr className='BreakLine' />
    </nav>
  );
}

export default Navbar;
