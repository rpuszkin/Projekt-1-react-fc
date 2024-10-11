import "./style.css";
function Nav() {
  return (
    <>
      <nav className="menu-color">
        <div className="container">
          <a className="menu-link font-bold " href=""/">
            moja firma
          </a>
          <ul className="menu-ul">
            <li>
              <a className="menu-link " href="#specialists">
                o nas
              </a>
            </li>
            <li>
              <a className="menu-link " href="#offers">
                oferta
              </a>
            </li>
            <li>
              <a className="menu-link menu-link-contact " href="/">
                kontakt
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Nav;
