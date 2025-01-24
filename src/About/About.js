import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa, faTruck, faHeadset } from "@fortawesome/free-solid-svg-icons";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="title-about">
          <span className="big-title">About us</span>
          <span className="content-aboutTitle">
            Order now and appreciate the beauty of nature
          </span>
        </div>
        <div className="aboutUs-content">
          <div className="about-group">
            <FontAwesomeIcon icon={faSpa} className="fontawesome" />
            <span className="big-title-aboutUs">Large Assortment</span>
            <span className="title-aboutUs">
              we offer many different types of products with fewer variations in
              each category.
            </span>
          </div>
          <div className="about-group">
            <FontAwesomeIcon icon={faTruck} className="fontawesome" />
            <span className="big-title-aboutUs">Fast & Free Shipping</span>
            <span className="title-aboutUs">
              4-day or less delivery time, free shipping and an expedited
              delivery option.
            </span>
          </div>
          <div className="about-group">
            <FontAwesomeIcon icon={faHeadset} className="fontawesome" />
            <span className="big-title-aboutUs">24/7 Support</span>
            <span className="title-aboutUs">
              answers to any business-related inquiry 24/7 and in real-time,
              ensuring efficient support for your goals.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
