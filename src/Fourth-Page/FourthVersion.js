import React from 'react'
import Navbar from '../First-Page/Navbar'
import SectionOne from './SectionOne'
import Category from './Category';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';
import SectionFive from './SectionFive';
import SectionSix from './SectionSix';
import SectionSeven from './SectionSeven';
import SectionEight from './SectionEight';
import SectionNine from './SectionNine';
import SectionTen from './SectionTen';
import MissionSection from './MissionSection';
import SectionEleven from './SectionEleven';
import SectionTwelve from './SectionTwelve';
import SectionThirteen from './SectionThirteen';
import SectionFourteen from './SectionFourteen';
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
         <SectionSix />
         <SectionSeven />
         <SectionEight />
         <SectionNine />
         <SectionTen />
         <MissionSection />
         <SectionEleven />
         <SectionTwelve />
         <SectionThirteen heading="Who we are" message="Lorem ipsum dolor sit amet consectetur adipiscing elit" more="Read more" />
         <SectionThirteen heading="Our Services" message="Lorem ipsum dolor sit amet consectetur adipiscing elit" more="Read more" />
         <SectionThirteen heading="Awards & Recognition" message="Lorem ipsum dolor sit amet consectetur adipiscing elit" more="Read more" />
        <SectionFourteen />
         <Footer />
    </div>
  )
}

export default FourthVersion
