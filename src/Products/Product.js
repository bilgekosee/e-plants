import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Product = () => {
  return (
    <section id="products">
      <div className="products-container">
        <div className="best-selling">
          <strong>
            <span className="strong-span">Best Selling Plants</span>
          </strong>
          <span className="content">
            Easiest way to healthy life by buying your favorite plants
          </span>
          <button>
            See more
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ marginLeft: "3px" }}
            />
          </button>
        </div>
        <div className="plants-products">
          <div className="plants-categoryPrice">
            <img src="./plants2.png"></img>
            <span className="name-plant">Natural Plants</span>
            <span className="price">1.400 $</span>
          </div>
          <div className="plants-categoryPrice">
            <img src="./plants3.png"></img>
            <span className="name-plant">Artificial Plants</span>
            <span className="price">900 $</span>
          </div>
          <div className="plants-categoryPrice">
            <img src="./plants4.png"></img>
            <span className="name-plant">Artificial Plants</span>
            <span className="price">3.500 $</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Product;
