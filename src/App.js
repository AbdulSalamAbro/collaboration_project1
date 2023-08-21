import "./App.css";
import finetech from "./assets/images/fintech.png";
import augmented_reality from "./assets/images/augmented_reality.png";
import artificial_intelligence from "./assets/images/artificial_intelligence.png";

function App() {
  return (
    <div className="App">
      <section className="page-two">
        
        <div className="finetech">
          <img src={finetech} alt="Fintech" />
          <div className="content">
            <h4>
              How to optimize your pages to get more traffic on mobile devices
            </h4>
            <p>Read More &#x2192;</p>
          </div>
        </div>

        <div className="augmented_reality">

          <img src={augmented_reality} alt="Augmented Reality" />

          <div className="content">
            <h4>
              How to optimize your pages to get more traffic on mobile devices
            </h4>
            <p>Read More &#x2192;</p>
          </div>

        </div>

        <div className="artificial_intelligence">
          <img src={artificial_intelligence} alt="Artificial Intelligence" />
          <div className="content">
            <h4>
              How to optimize your pages to get more traffic on mobile devices
            </h4>
            <p>Read More &#x2192;</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
