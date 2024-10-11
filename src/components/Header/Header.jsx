import React from "react";
import "./style.css";
function Header() {
  return (
    <>
      <header className="font-white">
        <div className="shadow">
          <div className="container">
            <h1 className="header-title font-bold font-white font-big">
              Nasza firma oferuje najwyższej jakości produkty.
            </h1>
            <p className="header-subtitle font-white font-bold">
              Nie wierz nam na słowo - sprawdź
            </p>
            <a href="#offers" className="header-btn font-bold font-white">
              oferta
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
