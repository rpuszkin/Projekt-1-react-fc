import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./style.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <p className=" font-bold font-white ">
            Wszelkie prawa zastrzeżone ® 2023 moja firma.
          </p>

          <div className="footer-icn">
            <a target="_blank" href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} className="footer-icn" />
            </a>
            <a target="_blank" href="https://www.facebook.com/">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="fa-square-facebook footer-icn"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
