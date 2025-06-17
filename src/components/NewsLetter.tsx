import React from 'react';
import '../css/NewsLetter.css';
import mailicon from '../image/about/Footer-mail-icon-1-white.png';
import mailarrow from '../image/about/Footer-mail-arrow-icon-1-white.png';

function NewsLetter() {
  return (
    <section className="newsletter">
      <div className="newsletter-container">

        {/* Left icon */}
        <div className="newsletter-col newsletter-image">
          <img src={mailicon} alt="Email Icon" />
        </div>

        {/* Titles */}
        <div className="newsletter-col newsletter-titles">
          <h4>Newsletter Subscription</h4>
          <h2>Get Instant Industrial updates!</h2>
        </div>

        {/* Form */}
        <div className="newsletter-col newsletter-form">
          <form>
            <div className="input-group">
              <input type="email" placeholder="Enter mail ID" required />
              <button type="submit">Subscribe</button>
            </div>
            <div className="privacy-note">
              <input type="checkbox" id="privacy" required />
              <label htmlFor="privacy">
                Your email is safe with us, we don't spam. <a href="#">Privacy Policy</a>
              </label>
            </div>
          </form>
        </div>

        {/* Right icon */}
        <div className="newsletter-col newsletter-image">
          <img src={mailarrow} alt="Plane Icon" />
        </div>

      </div>
    </section>
  );
};

export default NewsLetter;
