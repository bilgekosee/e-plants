import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Home.css";
import Product from "../Products/Product";
import About from "../About/About";
import Category from "../Category/Category";

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
            <FontAwesomeIcon icon={faShoppingCart} title="Sepet" />
            <FontAwesomeIcon icon={faUser} title="Kullanıcı" />

            <div className="one-line"></div>
            <div className="three-line">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </div>
        </div>
        <div className="background-container">
          <div className="contact">
            <div className="contact-wrapper">
              <div className="tagline">Buy your dream plants</div>
              <div className="counter">
                <span className="plantSpecies">
                  <strong>50+</strong>
                  <span className="s-content">Plant Species</span>
                </span>
                <div className="counterLine"></div>
                <span className="plantSpecies">
                  <strong>100+</strong>
                  <span className="s-content">Costumers</span>
                </span>
              </div>
              <div className="search">
                <input
                  type="search"
                  className="search-input"
                  placeholder="What are you looking for?"
                />
                <i className="fas fa-search search-icon"></i>
              </div>
            </div>
            <div className="plant-image-container">
              <div className="responsive">
                <div className="circle-wrapper">
                  <div className="circle-container">
                    <div className="circle"></div>
                  </div>
                  <div className="square-container">
                    <div className="spuare">
                      <img src="./plants1.png" height="400px"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Product />
      <About />
      <Category />
    </section>
  );
};
export default Home;
