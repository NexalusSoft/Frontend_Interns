import React from "react";
import "../css/Footer.css";
import flogo from '../image/about/logo.svg';

function Footer(){
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="logo">
            <img src={flogo} alt="Logo" />
          </h3>
          <p style={{ justifyContent: "center" }}>
            Scelerisque varius morbi enim nunc faucibus a pellentesque sit.
            Pellentesque habitant morbi tristique senectus et netus et.
          </p>
          <div className="social-icons">
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-twitter"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Main Menu</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Our Projects</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>Careers</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Contacts</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Official Info</h4>
          <p>
            Address: 868 Fritsch Stream,
            <br />
            Illinois, West Eleonore, Austria
          </p>
          <p>Mail: info@example.com</p>
          <p>Ph: 000 – 123 – 456789</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">&#169; 2025 All rights reserved</div>
        <div className="footer-right">
          <a href="#">Privacy Policy</a> | <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
