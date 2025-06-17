import React, { useState } from "react";
import "../css/Technology.css";
import bgimg1 from '../image/about/home-interactive-showcase.jpg';
import bgimg2 from '../image/about/home-interactive-showcase-2.jpg';
import bgimg3 from '../image/about/home-interactive-showcase-3.jpg';
import bgimg4 from '../image/about/home-interactive-showcase-4.jpg';

type SectorKey = 'sector_auto' | 'sector_robotics' | 'sector_chem' | 'sector_pharma';

interface IndustryData {
  [key: string]: {
    background: string;
    tagline: string;
    title: string;
    description: string;
  };
}

const industryData: IndustryData = {
  sector_auto: {
    background: bgimg1,
    tagline: "Make Manufacturing Easier",
    title: "Power Of Contemporary Technologies",
    description:
      "Magna sit amet purus gravida quis blandit turpis cursus. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Tincidunt praesent semper feugiat nibh sed pulvinar.",
  },
  sector_robotics: {
    background: bgimg2,
    tagline: "New Technology",
    title: "AI Technology Is Bringing A New Revolution In Logistics",
    description:
      "Viverra tellus in hac habitasse platea dictumst. Nisl purus in mollis nunc sed id. Fringilla est ullamcorper eget nulla. Congue eu consequat ac felis donec et odio pellentesque.",
  },
  sector_chem: {
    background: bgimg3,
    tagline: "New Technology & New Path",
    title: "Promoting New Technology Simplifies A Challenge",
    description:
      "Morbi tincidunt ornare massa eget egestas purus viverra. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Orci a scelerisque purus semper eget duis.",
  },
  sector_pharma: {
    background: bgimg4,
    tagline: "Perfect Solution",
    title: "Get The Right Solution With New Technology",
    description:
      "Aliquam id diam maecenas ultricies. Massa enim nec dui nunc mattis. Tortor dignissim convallis aenean et tortor. Purus sit amet luctus venenatis lectus magna fringilla urna.",
  },
};

function Technology() {
  const [activeKey, setActiveKey] = useState<SectorKey>("sector_auto");
  const [hoveredKey, setHoveredKey] = useState<SectorKey | null>(null);

  const currentData = industryData[hoveredKey ?? activeKey];

  const handleMouseEnter = (key: SectorKey) => {
    setHoveredKey(key);
  };

  const handleMouseLeave = () => {
    setHoveredKey(null);
  };

  const handleClick = (key: SectorKey) => {
    setActiveKey(key);
  };

  return (
    <div
      id="industry-banner"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${currentData.background}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 0.3s ease-in-out",
      }}
    >
      <div className="industry-info">
        <h5 id="industry-tagline">{currentData.tagline}</h5>
        <h2 id="industry-title">{currentData.title}</h2>
        <p id="industry-description">{currentData.description}</p>
        <button className="industry-btn">
          Know More <span className="arrow-icon"><i className="bi bi-arrow-right"></i></span>
        </button>
      </div>

      <div className="industry-menu">
        <ul>
          {Object.keys(industryData).map((key, index) => (
            <li
              key={key}
              onMouseEnter={() => handleMouseEnter(key as SectorKey)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(key as SectorKey)}
            >
              {index + 1}. <span>{industryLabel(key as SectorKey)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

function industryLabel(key: SectorKey): string {
  switch (key) {
    case "sector_auto":
      return "Automobile";
    case "sector_robotics":
      return "Robotics";
    case "sector_chem":
      return "Chemicals";
    case "sector_pharma":
      return "Pharma";
    default:
      return "";
  }
}

export default Technology;
