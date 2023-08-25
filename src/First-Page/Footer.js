import React from 'react';
import '../styles/footer.css'
import logo from '../assets/logo.svg'
import facebook from '../assets/facebookLogo.svg'
import insta from '../assets/Group.svg'
import twitter from '../assets/Group (1).svg'
import linkdien from '../assets/Vector.svg'

const Footer = () => {
    return (
        <footer>
            <div className='firstContainer'>
                <span>888.456.5609</span>
                <select name="cars" id="cars">
                    <option >Global / English</option>
                    <option >French</option>
                    <option >english</option>
                    <option >English</option>
                </select>
            </div>
            <hr className='BreakLine' />
            <div className='MiddleContainer'>
                <ul className='firstList'>
                    <li className='LogoContainer'>
                        <img src={logo} alt="Logo" />
                        <h3>Marketeq</h3>
                    </li>
                    <li>
                        <p>Marketeq specializes in digital growth strategy and conversion focused web design.</p>
                    </li>
                    <li className='AllIcons'>
                        <a href="/">
                            <img className='logo' src={facebook} alt="facebook" />
                        </a>
                        <a href="/">
                            <img className='logo' src={insta} alt="twitter" />
                        </a>
                        <a href="/">
                            <img className='logo' src={twitter} alt="instagram" />
                        </a>
                        <a href="/">
                            <img className='logo' src={linkdien} alt="linkdien" />
                        </a>
                    </li>
                </ul>
                <ul className='SecondList'>
                    <li>
                        <span>Career Opportunities</span>
                    </li>
                    <li>
                        <span>Consulting</span>
                    </li>
                    <li>
                        <span>Cloud</span>
                    </li>
                    <li>
                        <span>Security</span>
                    </li>
                    <li>
                        <span>Digital</span>
                    </li>
                </ul>
            </div>

            <div className="lastContainer">
                <span>© 2022 Marketeq. All Rights Reserved.</span>
                <p>
                    Eget tortor, commodo massa faucibus cursus. Mi orci neque, lectus sagittis.
                    Phasellus nec viverra facilisis nam senectus. Aenean pulvinar quis magnis magna praesent mattis tempor.
                    At eu, eu volutpat neque. Urna risus, sed habitant commodo imperdiet nulla nec.
                    Vitae malesuada mi sed vitae mattis ultrices scelerisque eu ut. Eget vel vitae diam quis.
                    In sed justo dolor in sagittis. Egestas mattis id in neque, porttitor. Sem mauris sed eu ornare nibh.
                    Pretium augue enim euismod eget amet, blandit lorem molestie neque. Eget tortor, commodo massa faucibus cursus.
                    Mi orci neque, lectus sagittis. Phasellus nec viverra facilisis nam senectus. Aenean pulvinar quis magnis magna praesent mattis tempor.
                    At eu, eu volutpat neque. Urna risus, sed habitant commodo imperdiet nulla nec. Vitae malesuada mi sed vitae mattis ultrices scelerisque eu ut.
                    Eget vel vitae diam quis. In sed justo dolor in sagittis. Egestas mattis id in neque, porttitor.
                    Sem mauris sed eu ornare nibh. Pretium augue enim euismod eget amet, blandit lorem molestie neque.
                </p>
                <div className='LastList'>
                    <span>Terms of Use</span>
                    <span>Privacy</span>
                    <span>Cookies</span>
                </div>
            </div>

        </footer>
    );
}

export default Footer;
