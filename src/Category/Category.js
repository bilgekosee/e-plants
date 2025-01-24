import React from "react";
import "./Category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Category = () => {
  return (
    <section id="category">
      <div className="category-container">
        <div className="category-title">
          <span className="category-bigTitle">Categories</span>
          <span className="explain-title">Find what you are looking for</span>
        </div>
        <div className="category-content">
          <div className="category-plants1">
            <img src="./category1.png"></img>
            <span className="category-plantsTitle">Natural Plants</span>
          </div>
          <div className="category-plants2">
            <img src="./category2.png"></img>
            <span className="category-plantsTitle">Plant Accessories</span>
            <span className="category-plantExplain">
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
            <button className="categoryButton">
              Explore
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ marginLeft: "3px" }}
              />
            </button>
          </div>
          <div className="category-plants1">
            <img src="./category3.png"></img>
            <span className="category-plantsTitle">Artificial Plants</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Category;
