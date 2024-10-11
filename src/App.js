import "./global.css";
import Nav from "./components/Nav/Nav.jsx";
import Header from "./components/Header/Header.jsx";

import Specialists from "./components/Specialists/Specialists.jsx";
import Offers from "./components/Offers/Offers.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <>
      <Nav />
      <Header />
      <main>
        <Specialists />
        <Offers />
      </main>
      <Footer />
    </>
  );
}
export default App;
