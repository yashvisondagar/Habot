import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Top Horizontal Line */}
      <hr className="footer-hr" />

      <div className="footer-columns">
        {/* Column 1: Company Logo */}
        <div className="footer-column">
          <img
            src="/images/LOGO.png"
            alt="Company Logo"
            className="company-logo"
          />
          <p className="ceo">© R Singhania </p>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="/about-us">About</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Terms</h3>
          <ul>
            <li>
              <a href="/data">Data privacy</a>
            </li>
            <li>
              <a href="/terms">Terms</a>
            </li>
            <li>
              <a href="/accessibility">Accessibility</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Related</h3>
          <ul>
            <li>
              <a href="/findbuyer">Find Buyer</a>
            </li>
            <li>
              <a href="/feedback">Feedback</a>
            </li>
          </ul>
        </div>

        <div className="footer-column social-media">
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/twitter.png" alt="Twitter" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/instagram.png" alt="Instagram" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/linkedin.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      <hr className="footer-hr" />
    </div>
  );
};

export default Footer;
