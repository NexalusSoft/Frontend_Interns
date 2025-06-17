import React, { useState, useEffect } from "react";
import '../css/Review.css';
import people1 from '../image/services/testimonials-people1.webp';
import people2 from '../image/services/testimonials-people2.webp';
import people3 from '../image/services/testimonials-people3.webp';

type Testimonial = {
  name: string;
  role: string;
  image: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Andreia",
    role: "Process Manager",
    image: people1,
    review:
      "Massa massa ultricies mi quis hendrerit. Odio ut enim blandit volutpat. Cras sed felis eget velit aliquet sagittis. Augue lacus viverra vitae congue eu consequat ac. Fermentum et sollicitudin ac orci phasellus egestas tellus. Tincidunt tortor aliquam nulla facilisi cras fermentum. Egestas purus viverra accumsan in nisl nisi scelerisque eu ultrices. Tempor commodo ullamcorper a lacus.",
  },
  {
    name: "Martina",
    role: "Product Manager",
    image: people2,
    review:
      "Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Urna duis convallis convallis tellus id. Mollis aliquam ut porttitor leo. Bibendum ut tristique et egestas quis ipsum suspendisse. Commodo ullamcorper a lacus vestibulum sed. Ipsum dolor sit amet consectetur. Blandit volutpat maecenas volutpat blandit aliquam etiam.Nisl condimentum id venenatis a condimentum vitae sapien pellentesque.",
  },
  {
    name: "Alberta",
    role: "CEO",
    image: people3,
    review:
      "Ut sem nulla pharetra diam sit amet. Enim blandit volutpat maecenas volutpat blandit. Luctus venenatis lectus magna fringilla. In aliquam sem fringilla ut. Semper quis lectus nulla at volutpat diam ut venenatis tellus. Scelerisque eu ultrices vitae auctor eu augue ut lectus. Elit pellentesque habitant morbi tristique. Sit amet est placerat in. Vulputate eu scelerisque felis imperdiet. Vitae suscipit tellus mauris a diam maecenas.Pellentesque habitant morbi tristique senectus.",
  },
];

function Review() {
  const [current, setCurrent] = useState(0);
  const { name, role, image, review } = testimonials[current];

  const handleNext = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="testimonials">
      <div className="overlay"></div>
      <div className="container-fluid">
        <div className="row g-5 flex-column flex-lg-row align-items-center">
          {/* Left */}
          <div className="col-lg-6 mb-4">
            <div className="review-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 132.3 106"
                style={{ enableBackground: "new 0 0 132.3 106" } as React.CSSProperties}
              >
                <defs>
                  <linearGradient id="SVGID_1_" x1="31.6969" y1="39.6844" x2="31.6969" y2="105.6281" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#FFAA4A" />
                    <stop offset="1" stopColor="#E6613F" />
                  </linearGradient>
                  <linearGradient id="SVGID_2_" x1="100.6017" y1="47.7663" x2="100.6017" y2="99.3889" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#FFAA4A" />
                    <stop offset="1" stopColor="#E6613F" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#SVGID_1_)"
                  d="M51.5,5.5H11.9C9.2,5.5,7,7.7,7,10.4v48.1c0,2.6,2.1,4.7,4.7,4.7h4.7c1.3,0.4,2.1,1.8,1.6,3.1C17,71.5,13.5,75.7,8,79.1c-0.5,0.4-1,1.1-1,1.8v17.4c0.3,1.2,1.4,1.9,2.6,1.6c8.9-2.2,17.4-6.3,24.8-11.8c7.8-5.7,13.7-13.6,17-22.6c3.3-8.9,4.9-20.2,4.9-34V10.5C56.4,7.7,54.2,5.5,51.5,5.5z"
                />
                <path
                  fill="url(#SVGID_2_)"
                  d="M120.6,5.5H80.9c-2.7,0-4.9,2.2-4.9,4.9v48.1c0,2.6,2.1,4.7,4.7,4.7h4.7c1.3,0.4,2.1,1.8,1.6,3.1C86,71.5,82.5,75.7,77,79.1c-0.6,0.4-1.1,1.1-1.1,1.9v17.4c0.3,1.2,1.4,1.9,2.6,1.6c8.9-2.2,17.4-6.3,24.8-11.8c7.8-5.7,13.7-13.6,17-22.6s4.9-20.2,4.9-34V10.6C125.4,7.7,123.2,5.5,120.6,5.5z"
                />
              </svg>
            </div>
            <p className="review-text">Review</p>
            <h3 className="review-heading fw-bold">People's Comments Regarding Our Services</h3>
            <p className="mt-5">{review}</p>

            <div className="testimonials-people mt-4 flex-column flex-md-row d-flex justify-content-between align-items-start align-items-md-center gap-3">
              <div className="d-flex align-items-center gap-3">
                <img src={image} alt={name} className="people-image rounded-circle" />
                <div>
                  <h4 className="mb-0">{name}</h4>
                  <p className="mb-0 small">{role}</p>
                </div>
              </div>
              <div className="testimonials-btn d-flex gap-3">
                <button onClick={handlePrev}>
                  <span className="arrow-icon">
                    <i className="bi bi-arrow-left"></i>
                  </span>
                </button>
                <button onClick={handleNext}>
                  <span className="arrow-icon">
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right - Form Section */}
          <div className="col-lg-6">
            <div className="form-section">
              <p className="form-top-text">Contact us</p>
              <h2 className="form-heading mb-4">Do Your Any Doubts?</h2>

              <form>
                <div className="row g-4 mt-4">
                  {/* Left Column */}
                  <div className="col-lg-6">
                    <input type="text" className="form-control mb-3" placeholder="Name" />
                    <input type="email" className="form-control mb-3" placeholder="Email ID" />
                    <input type="text" className="form-control mb-3" placeholder="Address" />
                    <select className="form-select mb-3">
                      <option selected>Select your Budget</option>
                      <option value="Financial">$100 - $1000</option>
                      <option value="Infrastructure">$1000 - $1000</option>
                      <option value="Software">Software and Services</option>
                    </select>
                  </div>

                  {/* Right Column */}
                  <div className="col-lg-6 d-flex flex-column">
                    <select className="form-select mb-3">
                      <option selected>What you are interested</option>
                      <option value="Financial">Financial Industry</option>
                      <option value="Infrastructure">Infrastructure Industry</option>
                      <option value="Software">Software and Services</option>
                    </select>
                    <textarea className="form-control custom-textarea mb-3" rows={4} placeholder="Message"></textarea>
                    <button className="btn text-white w-100" type="submit">
                      Submit Query
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

