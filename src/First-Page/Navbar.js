
import logo from '../assets/logo.svg';
import search from '../assets/search.svg';
import hamburger from '../assets/hamburger.svg';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {

  

  return (
    <nav className='NavbarContainer'>
      <ul>
        <li className='LogoContainer'>
          <img src={logo} alt="Logo" />
          <h3>Marketeq</h3>
        </li>
        <li className='SearchAndHamburger'>
            <Link to="/ham">
              <img src={hamburger} alt="hamburger icon" />
            </Link>
          <img src={search} alt="search icon" />
        </li>
      </ul>
      <hr className='BreakLine' />
    </nav>
  );
}

export default Navbar;
