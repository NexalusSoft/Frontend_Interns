import React, { useState } from 'react';
import '../css/VideoSection.css';
import powerstation from '../image/home/Home-3-Slider-1.jpg';
import oilrecovery from '../image/home/Home-3-Slider-2-1.jpg';
import lasterImg from '../image/home/Home-3-Slider-3.jpg';
import factoryImg from '../image/home/Home-3-Slider-4.jpg';

const tabs = [
  {
    label: 'Oil Production',
    image: powerstation,
    title: 'Power Stations',
    desc: 'Aliquam erat volutpat. Sed ac pulvinar apien. Sed volutpat nisl nunc, eu efficitur ipsum vulputate. Curabitur et finibus nunc.'
  },
  {
    label: 'Oil Recovery Platform',
    image: oilrecovery,
    title: 'Oil Recovery',
    desc: 'Curabitur et finibus nunc. Aliquam erat volutpat. Sed ac pulvinar apien. Sed volutpat nisl nunc, eu efficitur ipsum vulputate.'
  },
  {
    label: 'Laser Resurfacing',
    image: lasterImg,
    title: 'Laser Resurfacing',
    desc: 'Sed volutpat nisl nunc, eu efficitur ipsum vulputate. Curabitur et finibus nunc. Aliquam erat volutpat. Sed ac pulvinar apien.'
  },
  {
    label: 'Factory Installation',
    image: factoryImg,
    title: 'Factory Installation',
    desc: 'Aliquam erat volutpat. Sed ac pulvinar apien. Sed volutpat nisl nunc, eu efficitur ipsum vulputate. Curabitur et finibus nunc.'
  }
];

function VideoSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const activeTab = tabs[activeIndex];

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Prevent closing when clicking inside iframe container
    if ((e.target as HTMLElement).classList.contains('video-backdrop')) {
      setShowModal(false);
    }
  };

  return (
    <section className="slider">
      <div className="container-fluid px-0">
        <div className="row g-0 flex-wrap-reverse flex-lg-nowrap">
          {/* Text Section */}
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-start text-section">
            <span className="text-uppercase text-warning fw-semibold">High Quality</span>
            <h1 className="display-4 fade show">{activeTab.title}</h1>
            <p className="text-muted fade show">{activeTab.desc}</p>
            <button className="btn text-white know-more-btn rounded-0">
              Know More <span className="more-arrow-icon">→</span>
            </button>
          </div>

          {/* Image Section */}
          <div className="col-lg-6 order-1 img-container position-relative">
            <img
              src={activeTab.image}
              className="img-fluid w-100 h-100 object-fit-cover fade show"
              alt="Slider"
            />
            <div
              className="video-play-button position-absolute"
              onClick={() => setShowModal(true)}
              role="button"
            >
              <i className="fa fa-play"></i>
            </div>
          </div>
        </div>

        {/* Bottom Tabs */}
        <div className="d-flex flex-wrap text-center text-white tab-buttons">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`tab-button flex-fill bg-orange py-4 ${index === activeIndex ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
              role="button"
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className="video-modal video-backdrop" onClick={handleModalClick}>
          <div className="video-frame-container">
            <iframe
              src="https://www.youtube.com/embed/DV9-pYAUJYY?autoplay=1"
              title="YouTube Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              className="video-close"
              onClick={() => setShowModal(false)}
              aria-label="Close Video"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default VideoSection;
