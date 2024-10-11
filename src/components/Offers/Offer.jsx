import "./style.css";

function Offer({ offer }) {
  return (
    <div className="grid-box">
      {offer.isNew && <div className="grid-dot"></div>}
      <p>{offer.name}</p>
      {offer.isNew && <p>(nowość)</p>}
    </div>
  );
}
export default Offer;
