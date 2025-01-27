import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <section id="contact">
      <div className="footer-container">
        <div className="footer-block1">
          <span className="greenmınd">GREENMIND</span>
          <span className="greenmınd-content">
            We help you find your dream plant
          </span>
          <div className="socialMedia-footer">
            <a
              className="icon"
              href="https://x.com/bilgekoose?s=11&t=T0KG4CMlFJ5E3wcPtaYKpA"
              target="_blank"
            >
              <div className="icon-border">
                <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
              </div>
            </a>
            <a
              className="icon"
              href="https://www.instagram.com/bilge_kosee/profilecard/?igsh=MWdndnI1cXdoc29vaQ%3D%3D"
              target="_blank"
            >
              <div className="icon-border">
                <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
              </div>
            </a>
            <a
              className="icon"
              href="https://github.com/bilgekosee"
              target="_blank"
            >
              <div className="icon-border">
                <FontAwesomeIcon icon={faGithub} className="footer-icon" />
              </div>
            </a>
          </div>
        </div>
        <div className="information">
          <div className="information1">
            <span style={{ color: "black", fontWeight: "bold" }}>
              Information
            </span>

            <span>About</span>
            <span>Product</span>
            <span>Blog</span>
          </div>
          <div className="information1">
            <span style={{ color: "black", fontWeight: "bold" }}>Company</span>

            <span>Community</span>
            <span>Career</span>
            <span>Our story</span>
          </div>
          <div className="information1">
            <span style={{ color: "black", fontWeight: "bold" }}>Contact</span>

            <span>Getting Started</span>
            <span>Pricing</span>
            <span>Resources</span>
          </div>
        </div>
        <div className="reserved-span">
          <span className="reserved">
            2025 all Right Reserved Term of use GREENMIND
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
