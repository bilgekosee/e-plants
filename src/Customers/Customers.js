import React from "react";
import "./Customer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";

const Customers = () => {
  return (
    <section id="customers">
      <div className="customer-title">What customers say about GREEMIND?</div>
      <div className="customer-container">
        <div className="customer-comment">
          <div className="span-container">
            <span className="comment-span">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </span>
          </div>
          <div className="customer-part1">
            <div className="customer-flex1">
              <div className="customer">
                <FontAwesomeIcon icon={faQuoteLeft} className="faQuoteLeft" />
                <img src="./customer1.png" alt="customer1" />
              </div>
              <div className="name-customer">
                <span className="name-span">John Doe</span>
                <span className="job">Youtuber</span>
              </div>
            </div>

            <div className="customer-star">
              <FontAwesomeIcon
                icon={faStar}
                className="star"
                style={{ marginRight: "12px" }}
              />
              <span>4.5</span>
            </div>
          </div>
        </div>

        {/* İkinci müşteri yorumu */}
        <div className="customer-comment">
          <div className="span-container">
            <span className="comment-span">
              Jorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </span>
          </div>
          <div className="customer-part2">
            <div className="customer-flex1">
              <div className="customer">
                <FontAwesomeIcon icon={faQuoteLeft} className="faQuoteLeft" />
                <img src="./customer2.png" alt="customer2" />
              </div>
              <div className="name-customer">
                <span className="name-span">Jane Smith</span>
                <span className="job">Blogger</span>
              </div>
            </div>

            <div className="customer-star">
              <FontAwesomeIcon
                icon={faStar}
                className="star"
                style={{ marginRight: "12px" }}
              />
              <span>4.8</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
