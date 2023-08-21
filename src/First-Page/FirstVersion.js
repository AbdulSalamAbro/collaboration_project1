import FirstMiddle from "./FirstMiddle";
import FirstSection from "./FirstSection";
import Footer from "./Footer";
import LastSection from "./LastSection";
import MixContainer from "./MixContainer";
import SecondMiddle from "./SecondMiddle";

function FirstVersion () {
    return (
        <div className="FirstVersion">
            <FirstSection/>
            <FirstMiddle/>
            <SecondMiddle/>
            <MixContainer/>
            <LastSection/>
            <Footer/>
        </div>
    );
}

export default FirstVersion;