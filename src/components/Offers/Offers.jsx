import "./Offers.css";
import Offer from "./Offer.jsx";

const offers = [
  { name: "Usługa 1", isNew: true },
  { name: "Usługa 2", isNew: false },
  { name: "Usługa 3", isNew: false },
  { name: "Usługa 4", isNew: false },
  { name: "Usługa 5", isNew: false },
  { name: "Usługa 6", isNew: false },
];
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
