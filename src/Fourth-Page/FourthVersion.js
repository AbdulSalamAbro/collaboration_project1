import React from 'react'
import Navbar from '../First-Page/Navbar'
import SectionOne from './SectionOne'
import Category from './Category';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import Footer from '../First-Page/Footer';

function FourthVersion() {
  return (
    <div>
         <Navbar />
         <SectionOne />
         <Category />
         <SectionTwo />
         <SectionThree />
         <SectionFour />
         <SectionFive />
         {/* <Footer /> */}
    </div>
  )
}

export default FourthVersion
