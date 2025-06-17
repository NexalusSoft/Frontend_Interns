import React, { useState } from 'react';
import '../css/Counter.css';
import bgImage from '../image/home/bg-img-001.jpg';
import dividerImage from '../image/home/Counter-Shape-divider-bg.png';

const Counter = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const stats = [
    { value: 8, suffix: 'K', title: 'Worldwide Branches' },
    { value: 1250, suffix: 'K', title: 'Satisfy Customers' },
    { value: 50, suffix: 'K', title: 'Technical Teams' },
    { value: 25, suffix: 'K', title: 'Best Stories' },
    { value: 80, suffix: '+', title: 'Modern Technologies' },
  ];

  const handlePlay = () => {
    setVideoUrl('https://www.youtube.com/embed/KhGsZEBVbCU?autoplay=1&mute=1&start=4');
    setShowVideo(true);
  };

  const handleClose = () => {
    setShowVideo(false);
    setVideoUrl('');
  };

  return (
    <section className="counter-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="counter-overlay"></div>

      <div className="counter-content">
        <h2 className="counter-title">
          All Machineries Are Quality Checked As Per <br />
          International Standards
        </h2>

        <div className="video-container">
          <button className="play-button" onClick={handlePlay}>
            <i className="bi bi-play-fill" />
          </button>
          <p className="video-text">Play Video</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className={`stat-item ${index < stats.length - 1 ? 'with-border' : ''}`}>
              <h3 className="stat-value">
                {stat.value}
                <span className="stat-suffix">{stat.suffix}</span>
              </h3>
              <p className="stat-title">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="divider-image">
        <img src={dividerImage} alt="divider" />
      </div>

      {showVideo && (
        <div className="video-modal" onClick={handleClose}>
          <div className="video-wrapper" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClose}>
              &times;
            </button>
            <iframe
              src={videoUrl}
              title="Quality Standards Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default Counter;
