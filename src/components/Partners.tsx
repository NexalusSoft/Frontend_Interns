import React from 'react';
import '../css/Partners.css';
import partner1 from '../image/about/brand-1.webp';
import partner2 from '../image/about/brand-2.webp';
import partner3 from '../image/about/brand-3.webp';
import partner4 from '../image/about/brand-4.webp';
import partner5 from '../image/about/brand-5.webp';
import partner6 from '../image/about/brand-6.webp';
import partner7 from '../image/about/brand-7.webp';
import partner8 from '../image/about/brand-08.webp';


function Partners() {
  const logos = [
    partner1,
    partner2,
    partner3,
    partner4,
    partner5,
    partner6,
    partner7,
    partner8,

  ];

  // Repeat the logos
  const repeatedLogos = [...logos, ...logos];

  return (
    <section className="partners-section">
      <div className="partner-subtitle">Our Partners</div>
      <div className="partner-title">Joint-Venture Partner</div>

      <div className="logo-container">
        <div className="logo-strip">
          {repeatedLogos.map((src, index) => (
            <img className="partner-logo" src={src} alt={`Logo${index + 1}`} key={`logo1-${index}`} />
          ))}
        </div>
      </div>

      <div className="logo-container">
        <div className="logo-strip reverse">
          {repeatedLogos.map((src, index) => (
            <img className="partner-logo" src={src} alt={`Logo${index + 1}`} key={`logo2-${index}`} />
          ))}
        </div>
      </div>

      <div>
        <button className="partner-button d-flex mx-auto justify-content-center">
          Let's start <span className="arrow-icon"><i className="bi bi-arrow-right"></i></span>
        </button>
      </div>
    </section>
  );
};

export default Partners;
