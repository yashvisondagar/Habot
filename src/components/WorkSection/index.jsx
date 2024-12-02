import React from "react";
import styles from "./WorkSection.css";

const WorkSection = () => {
  return (
    <div className="container">
      <div className="header">
        <h2 className="header-intro">How it works?</h2>
        <p>
          Buyers post their needs and review top suppliers, while suppliers
          complete profiles, connect with
          <br /> potential buyers, and build successful business relationships,
          sharing valuable feedback.
        </p>
      </div>

      <div className="work-features">
        <div className="feature-box-blue">
          <img src="/images/Group 33.png" alt="img" className="image" />
          <p className="description">
            Select Your Role and
            <br /> Sign Up
          </p>
        </div>
        <div className="feature-box">
          <img src="/images/Group.png" alt="img" className="image" />
          <p className="description">
            Buyers Post Your
            <br /> Requirements
          </p>
        </div>
        <div className="feature-box-blue">
          <img src="/images/Layer_x0020_1.png" alt="img" className="image" />
          <p className="description">
            Review, Select, and
            <br /> Contact the Best Suppliers
          </p>
        </div>
        <div className="feature-box">
          <img src="/images/g2259.png" alt="img" className="image" />
          <p className="description">
            Suppliers Complete your <br />
            profile and get notified for
            <br /> opportunities
          </p>
        </div>
        <div className="feature-box-blue">
          <img src="/images/Group (1).png" alt="img" className="image" />
          <p className="description">
            Contact to Buyers and Share your Quote for the service
          </p>
        </div>
        <div className="feature-box">
          <img src="/images/Group (2).png" alt="img" className="image" />
          <p className="description">
            Both the Parties can Connect <br />
            and Make Business Leave a <br />
            Feedback
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
