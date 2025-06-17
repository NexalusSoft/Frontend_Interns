import React from "react";
import '../css/TopBrands.css';
import brand1 from '../image/about/brand-1.webp';
import brand2 from '../image/about/brand-2.webp';
import brand3 from '../image/about/brand-3.webp';
import brand4 from '../image/about/brand-4.webp';
import brand5 from '../image/about/brand-5.webp';
import brand6 from '../image/about/brand-6.webp';
import brand7 from '../image/about/brand-7.webp';
import brand8 from '../image/about/brand-08.webp';

const brandLogos = [
  { src: brand1, alt: "Electric" },
  { src: brand2, alt: "Mollit" },
  { src: brand3, alt: "Bridge" },
  { src: brand4, alt: "Fast" },
  { src: brand5, alt: "Waqar" },
  { src: brand6, alt: "Layer" },
  { src: brand7, alt: "Vagoda" },
  { src: brand8, alt: "Magnitude" },
];

function TopBrands() {
  return (
    <section className="trusted-partners">
      <div className="left-content">
        <p className="subtitle">
          Top Brands
        </p>
        <h2>
          Our Trusted
          <br />
          Partners
        </h2>
      </div>
      <div className="right-logos">
        {brandLogos.map((brand, index) => (
          <div key={index} className="logos">
            <img src={brand.src} alt={brand.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopBrands;
