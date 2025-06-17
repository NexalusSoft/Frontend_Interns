import React, { useState } from 'react';
import '../css/CreativeSolution.css';
import csImg1 from '../image/services/home-3-1.webp';
import csImg2 from '../image/services/home-3-2.webp';
import csImg3 from '../image/services/home-3-3.webp';
import csImg4 from '../image/services/home-3-4.webp';
import csImg5 from '../image/services/home-3-5.webp';

interface TabItem {
  label: string;
  image: string;
  title: string;
}

const tabs: TabItem[] = [
  {
    label: 'Delivery Process',
    image: csImg1,
    title: 'We Solve Your Problems With Our Best Experts Through Modern Technology',
  },
  {
    label: 'Equipment',
    image: csImg2,
    title: 'The Quality Of Your Products Will Always Be Improved By Modern Equipments',
  },
  {
    label: 'Construction',
    image: csImg3,
    title: 'Use Data Analytics To Strengthen Your Company Decisions & Business Growth',
  },
  {
    label: 'Implementation',
    image: csImg4,
    title: 'Create Your Ideal Vision And Gain A Solid Foundation To Build Your Ideal Dream Industry',
  },
  {
    label: 'Raw Materials',
    image: csImg5,
    title: 'Create Your Ideal Vision And Gain A Solid Foundation To Build Your Ideal Dream Industry',
  },
];

function CreativeSolution (){
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const handleTabClick = (index: number) => {
    if (index === activeIndex || transitioning) return;

    setTransitioning(true);
    setTimeout(() => {
      setActiveIndex(index);
      setTransitioning(false);
    }, 600);
  };

  return (
    <section className="Servise-section my-5">
      <p className="service-text" style={{ color: '#ffaa4a' }}>Our Service</p>
      <h1 className="service-heading ms-5">Creative Solutions</h1>

      <div className="d-flex mt-5 ms-5 gap-3 flex-wrap mb-4 service-btn">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`btn info-tab rounded-pill px-4 py-2 ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            <span className="overlays"></span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content: Image + Text */}
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-5 px-4 flex-wrap">
        {/* Left Image */}
        <div
          id="info-img"
          className={`slide-from-left ${transitioning ? 'hide' : 'show'}`}
          style={{ flex: 1, maxWidth: '500px', width: '100%' }}
        >
          <img src={tabs[activeIndex].image} className="img-fluid" alt="Service" />
        </div>

        {/* Right Text */}
        <div
          id="info-text"
          className={`slide-from-right ${transitioning ? 'hide' : 'show'}`}
          style={{ flex: 1 }}
        >
          <h3 id="info-title">{tabs[activeIndex].title}</h3>
        </div>
      </div>
    </section>
  );
};

export default CreativeSolution;
