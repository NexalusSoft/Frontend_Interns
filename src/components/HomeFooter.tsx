import React from "react";
import "../css/HomeFooter.css"; 
import homelogo from "../image/about/logo.svg";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const HomeFooter: React.FC = () => {
  return (
    <footer className="homefooter">
      <div className="homefooter-overlay"></div>

      {/* Logo Centered */}
      <div className="homefooter-logo">
        <img src={homelogo} alt="Indusri Logo" className="logos" />
      </div>

      {/* Navigation and Social */}
      <div className="homefooter-nav-social">
        <div className="nav-left">
          <ul className="nav-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="nav-right">
          <span className="social-titles">We Are Social:</span>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><BsInstagram /></a>
            <a href="#"><BsTwitter /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <hr />

      {/* Address Columns */}
      <div className="homefooter-content">
        <div className="homefooter-column">
          <h2>Dublin - Ireland</h2>
          <p>Address: Chaussée Bernard 120, Lo-Reninge, Leuze-en-Hainaut, Belgium</p>
          <p>Mail: info@example.com</p>
          <p>Ph: 000 - 123 - 456 - 789</p>
        </div>
        <div className="homefooter-column">
          <h2>Waterford - Ireland</h2>
          <p>Address: Van der Laarstraat 10, Sint Philipsland, Drenthe, Netherland</p>
          <p>Mail: contact@example.com</p>
          <p>Ph: 0000 - 123 - 456789</p>
        </div>
        <div className="homefooter-column">
          <h2>London - UK</h2>
          <p>Address: Rotonda Loredana 5, Sesto Ingrid, Messina, Italy</p>
          <p>Mail: support@example.com</p>
          <p>Ph: 00 - 123456789</p>
        </div>
      </div>

      <hr />

      {/* Bottom Bar */}
      <div className="homefooter-bottom">
        <p>&copy; 2023 Wedesigntech. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default HomeFooter;
