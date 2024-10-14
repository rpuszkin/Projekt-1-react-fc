import "./Offers.css";
import Offer from "./Offer.jsx";
import "./data/data.js";

function Offers() {
  return (
    <section id="offers" className="offers-section">
      <div className="container">
        <h2 className="offers-title font-bold font-white">
          Czym zajmuje się nasza firma?
        </h2>
        <div className="grid-container">
          {offers.map((offer, index) => {
            return <Offer key={index} offer={offer} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Offers;
