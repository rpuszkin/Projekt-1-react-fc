import "./Offer.css";

function Offer({ offer }) {
  return (
    <div className="grid-box">
      {offer.isNew && <div className="grid-dot"></div>}
      <p className="offer-title">{offer.name}</p>
      {offer.isNew && <p className="offer-title">(nowość)</p>}
    </div>
  );
}

export default Offer;
