import React from 'react';
import pic1 from '../assets/pic1.png'
import { FiArrowRight } from 'react-icons/fi';
import '../styles/FirstMiddle.css'
import '../styles/SectionFourteen.css'


const SectionFourteen = () => {
    return (
        <section className='fourteen-div'>
            <div className='card'>
                <img src={pic1} alt="" />
                <div className='fourteen-card'>
                <h2>transformation starts here</h2>
                <p>How to optimize your pages to get more traffic
                    on mobile devices.
                </p>
                <span className='readmore'>
                    Read More
                    <FiArrowRight />
                </span>
                </div>
            </div>
        </section>
    );
}

export default SectionFourteen;
