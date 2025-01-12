import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";

const Home = () => {
  return (
    <section id="home">
      <div className="home-container">
        <div className="navbar">
          <div className="title-navbarItem">
            <div className="title">GREENMIND</div>
            <div className="navbar-item">
              <a href="#">Home</a>
              <a href="#">Products</a>
              <a href="#">Contacs</a>
            </div>
          </div>

          <div className="navbar-icons">
            <FontAwesomeIcon icon={faUser} title="Kullanıcı" />
            <FontAwesomeIcon icon={faShoppingCart} title="Sepet" />
            <div className="one-line"></div>
            <div className="three-line">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Home;
