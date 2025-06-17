import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/AboutMission.css';
import lftimg from '../image/about/home-3-filler-bg.jpg';
import testimonial1 from '../image/about/home3-filler-testimonial-img01.webp';
import testimonial2 from '../image/about/home3-filler-testimonial-img02.webp';
import testimonial3 from '../image/about/home3-filler-testimonial-img03.webp';
import testimonial4 from '../image/about/home3-filler-testimonial-img04.webp';
import mission from '../image/about/filler-tab-img-1.webp';
import vision from '../image/about/home-3-tab-image-1.webp';
import history from '../image/about/home-3-tab-image-2.webp';

interface Profile {
  img: string;
  text: string;
  name: string;
}

const profiles: Profile[] = [
  {
    img: testimonial1,
    text: 'Nec feugiat nisl pretium fusce. Ut sem viverra aliquet eget sit amet tellus cras.',
    name: 'CLINTON FLORES - <span class="text-warning">CEO</span>',
  },
  {
    img: testimonial2,
    text: 'Amet justo donec enim diam vulputate ut pharetra sit amet aliquam id.',
    name: 'MARIA GOMEZ - <span class="text-warning">CTO</span>',
  },
  {
    img: testimonial3,
    text: 'Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus.',
    name: 'DAVID LEE - <span class="text-warning">CFO</span>',
  },
  {
    img: testimonial4,
    text: 'Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus.',
    name: 'DAVID LEE - <span class="text-warning">CFO</span>',
  },
];

const tabContents = {
  mission: {
    img: mission,
    items: [
      'Amet dictum sit amet justo donec enimites.',
      'Convallis a cras semper auctor neque vit.',
      'Vel pretium lectus quam id leo in vitae.',
      'Feugiat scelerisque varius morbi enim nunc.',
      'Etiam dignissim diam quis enim lobortis sceler.',
      'Vel elit scelerisque mauris pellentesque.',
    ],
  },
  vision: {
    img: vision,
    items: [
      'Amet dictum sit amet justo donec enimites.',
      'Convallis a cras semper auctor neque vit.',
      'Vel pretium lectus quam id leo in vitae.',
      'Feugiat scelerisque varius morbi enim nunc.',
      'Etiam dignissim diam quis enim lobortis sceler.',
      'Vel elit scelerisque mauris pellentesque.',
    ],
  },
  history: {
    img: history,
    items: [
      'Justo donec amet dictum sit amet enimites.',
      'Auctor neque convallis a cras semper vit.',
      'Id leo in vel pretium lectus quam vitae. Feugiat scelerisque varius morbi enim nunc.',
      'Enim lobortis etiam dignissim diam quis sceleri.',
      'Pellentesque vel elit scelerisque mauris.',
    ],
  },
};

function AboutMission() {
  const [profileIndex, setProfileIndex] = useState(0);
  const [tabVisible, setTabVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'history'>('mission');

  useEffect(() => {
    const interval = setInterval(() => {
      setProfileIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => setTabVisible(true), 1500);
    return () => clearTimeout(timeout);
  }, []);

  const currentTab = tabContents[activeTab];

  return (
    <div className="container-fluid d-flex flex-wrap">
      {/* Left Side */}
      <div className="left-side position-relative">
        <img src={lftimg} alt="Factory Background" className="img-fluid w-100 h-100" />
        <div id="personCard" className="card-overlay text-left text-white p-4">
          <img
            src={profiles[profileIndex].img}
            className="rounded-circle mb-3 float-start imgshadow me-3"
            width={120}
            height={120}
            alt="Person"
          />
          <p className="mb-2">{profiles[profileIndex].text}</p>
          <h5 dangerouslySetInnerHTML={{ __html: profiles[profileIndex].name }} />
        </div>
      </div>

      {/* Right Side */}
      <div className="right-side p-4">
        <h4 style={{ color: '#ffaa4a', letterSpacing: '4px' }}>About Us</h4>
        <h1 style={{ fontWeight: 750 }}>Experienced Automatic Industry Installation Service</h1>
        <p style={{ marginBottom: '30px' }}>
          Consequat ac felis donec et odio pellentesque diam volutpat. Pharetra sit amet aliquam id diam maecenas
          ultricies mi eget. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum Dolor morbi
          risus quam.
        </p>

        {/* Mobile Dropdown */}
        <div className="d-md-none mb-3">
          <select
            className="form-select"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value as 'mission' | 'vision' | 'history')}
          >
            <option value="mission">Our Mission</option>
            <option value="vision">Our Vision</option>
            <option value="history">Our History</option>
          </select>
        </div>

        {/* Desktop Tabs */}
        <ul className={`nav nav-pills mb-3 d-none d-md-flex ${tabVisible ? 'slide-in' : 'hidden-slide'}`} role="tablist">
          {(['mission', 'vision', 'history'] as const).map((tab) => (
            <li className="nav-item" key={tab}>
              <button
                className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                <i className="bi bi-check-circle text-orange me-2"></i>
                {`Our ${tab.charAt(0).toUpperCase() + tab.slice(1)}`}
              </button>
            </li>
          ))}
        </ul>
        <hr />

        {/* Tab Content */}
        <div className={`tab-content ${tabVisible ? 'slide-in' : 'hidden-slide'}`}>
          <div className="tab-pane fade show active">
            <div className="d-flex flex-column flex-md-row align-items-start gap-4">
              <img
                src={currentTab.img}
                alt={activeTab}
                className="imgshadow img-fluid"
                style={{ width: '200px', height: '200px' }}
              />
              <ul className="list-unstyled custom-lists m-0">
                {currentTab.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <button type="button" id="explore" className="gradient-explore-btn mt-4">
              Explore More <span className="arrow-icon"><i className="bi bi-arrow-right"></i></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
