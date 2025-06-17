import React, { useState } from 'react';
import '../css/Timeline.css';
import midimg1 from '../image/about/home-image-1.webp';
import midimg2 from '../image/about/home-tab-1-1.webp';
import midimg3 from '../image/about/home-tab-2-1.webp';
import midimg4 from '../image/about/home-tab-3-1.webp';
import midimg5 from '../image/about/home-tab-4-1.webp';
import midimg6 from '../image/about/home-tab-5-1.webp';
import rtimg1 from '../image/about/Timeline-Tab-img-2.webp';
import rtimg2 from '../image/about/home-tab-1-2.webp';
import rtimg3 from '../image/about/home-tab-2-2.webp';
import rtimg4 from '../image/about/home-tab-3-2.webp';
import rtimg5 from '../image/about/home-tab-4-2.webp';
import rtimg6 from '../image/about/home-tab-5-2.webp';

interface TimelineEntry {
  subheading: string;
  heading: string;
  title: string;
  description: string;
  middleImg: any;
  rightImg: string;
}

const timelineData: Record<string, TimelineEntry> = {
  '1848': {
    subheading: 'Development',
    heading: 'How We Started',
    title: 'Built Brand Name',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit volupatatem accusantium doloremque laudantium...',
    middleImg: midimg1,
    rightImg: rtimg1,
  },
  '1902': {
    subheading: 'Startup',
    heading: 'How We Startup',
    title: 'Trust And Loyalty',
    description:
      'Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi...',
    middleImg: midimg2,
    rightImg: rtimg2,
  },
  '1964': {
    subheading: 'Growth',
    heading: 'Our Growth Process',
    title: 'International Standards',
    description:
      'Perspiciatis sed ut unde omnis iste natus error sit voluptatem accusantium doloremque...',
    middleImg: midimg3,
    rightImg: rtimg3,
  },
  '1998': {
    subheading: 'Maturity',
    heading: 'Reached Worldwide',
    title: '2500 Cities Worldwide',
    description:
      'Eaque ipsa quae ab illo inventore veritatis et quasi. Sed ut perspiciatis unde omnis iste...',
    middleImg: midimg4,
    rightImg: rtimg4,
  },
  '2008': {
    subheading: 'Retaining',
    heading: 'Brand Partners',
    title: 'Gaint Investors',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium...',
    middleImg: midimg5,
    rightImg: rtimg5,
  },
  '2023': {
    subheading: 'Why Us',
    heading: 'How We Are Unique',
    title: 'Reliability . Care . Durability',
    description:
      'Tellus id interdum velit laoreet id donec ultrices tincidunt. Pellentesque habitant morbi...',
    middleImg: midimg6,
    rightImg: rtimg6,
  },
};

const stageNames = [
  'Seed Stage',
  'Startup Stage',
  'Growth Stage',
  'Established Stage',
  'Expansion Stage',
  'Scaling Stage',
];

function Timeline() {
  const [activeYear, setActiveYear] = useState<string>('1848');
  const years = Object.keys(timelineData);
  const current = timelineData[activeYear];

  return (
    <>
      {/* Mobile Year Dropdown */}
      <div className="year-dropdown mobile-only">
        <select
          value={activeYear}
          onChange={(e) => setActiveYear(e.target.value)}
        >
          {years.map((year, index) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <section className="how-we-started">
        <div className="left-content">
          <p className="subheading">{current.subheading}</p>
          <h1>{current.heading}</h1>
          <h3>{current.title}</h3>
          <p className="description">{current.description}</p>
          <button type="button" className="gradient-explore-btn">
            More Details{' '}
            <span className="arrow-icon">
              <i className="bi bi-arrow-right"></i>
            </span>
          </button>
        </div>

        <div className="middle-image" id="midImg">
          <img src={current.middleImg} alt="Middle" />
        </div>

        <div className="right-image" id="rightImg">
          <img src={current.rightImg} alt="Right" />
        </div>
      </section>

      {/* Desktop Timeline */}
      <div className="timeline-container desktop-only">
        <div className="years">
          {years.map((year) => (
            <div
              key={year}
              className={`year ${activeYear === year ? 'active' : ''}`}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </div>
          ))}
        </div>

        <div className="timeline">
          <div className="timeline-line"></div>
          {years.map((year, index) => (
            <div
              key={year}
              className={`circle ${activeYear === year ? 'active' : ''}`}
              onClick={() => setActiveYear(year)}
            >
              <div className="seed-stage">{stageNames[index]}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Timeline;
