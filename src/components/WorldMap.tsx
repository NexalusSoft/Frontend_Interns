import React, { useEffect, useState } from 'react';
import '../css/WorldMap.css';
import mapImage from '../image/services/Hotspot-Map.webp';

interface Marker {
  x: string;
  y: string;
}

interface CountryData {
  markers: Marker[];
  address: string[];
}

const countryData: Record<string, CountryData> = {
  australia: {
    markers: [{ x: '85%', y: '80%' }],
    address: [
      'New South Wales, Victoria, Queensland.',
      '30, Commercial Road, Raton Australia - 47889 45',
      'info@example.com',
      '00 12 34 56 789',
    ],
  },
  'south-america': {
    markers: [{ x: '30%', y: '72%' }],
    address: [
      'Argentina,Bolivia,Brazil.',
      '10, Commercial Road,Raton South America - 47889 45',
      'contact@example.com',
      '00 12 34 56 789',
    ],
  },
  'north-america': {
    markers: [{ x: '16%', y: '30%' }],
    address: [
      'Statue of Liberty, New York, USA',
      '25, Commercial Road, Raton North America - 47889 45',
      'support@example.com',
      '00 12 34 56 789',
    ],
  },
  africa: {
    markers: [
      { x: '46%', y: '58%' },
      { x: '52%', y: '74%' },
    ],
    address: [
      'Mount Kilimanjaro, Victoria Falls',
      '27, Commercial Road, Raton Africa - 47889 45',
      'contact@example.com',
      '00 12 34 56 789',
    ],
  },
  europe: {
    markers: [{ x: '57%', y: '32%' }],
    address: [
      'Europe is shared by 150 countries',
      '30, Commercial Road, Raton Europe - 47889 45',
      'info@example.com',
      '00 12 34 56 789',
    ],
  },
  asia: {
    markers: [
      { x: '69%', y: '51%' },
      { x: '75%', y: '35%' },
      { x: '82%', y: '27%' },
    ],
    address: [
      'China, India, Indonesia, Japan and Korea',
      '57, Commercial Road, Raton Asia - 47889 45',
      'support@example.com',
      '00 12 34 56 789',
    ],
  },
  india: {
    markers: [{ x: '70%', y: '53%' }],
    address: [
      "Karnataka is India's IT hub",
      '99, Commercial Road, Raton India - 47889 45',
      'contact@example.com',
      '00 12 34 56 789',
    ],
  },
  greenland: {
    markers: [{ x: '38%', y: '14%' }],
    address: [
      'Ilulissat Icefjord, Scoresby Sound.',
      '60, Commercial Road, Raton Bangladesh - 47889 45',
      'info@example.com',
      '00 12 34 56 789',
    ],
  },
};

function WorldMap() {
  const [selectedCountry, setSelectedCountry] = useState<string>('australia');

  const countryKeys = Object.keys(countryData);

  useEffect(() => {
    setSelectedCountry('australia');
  }, []);

  const handleSelect = (country: string) => {
    setSelectedCountry(country);
  };

  const renderMarkers = (markers: Marker[]) => {
    return markers.map((marker, index) => (
      <div
        key={index}
        className="marker"
        style={{ left: marker.x, top: marker.y }}
      ></div>
    ));
  };

  const data = countryData[selectedCountry];

  return (
    <div style={{ backgroundColor: 'rgb(250, 249, 249)' }}>
      <h5
        style={{
          color: '#ffaa4a',
          letterSpacing: '4px',
          marginLeft: '20px',
          fontWeight: 'lighter',
        }}
      >
        Locations
      </h5>
      <h1 style={{ marginLeft: '20px' }}>World Wide Locations</h1>

      <div className="map-container-wrapper">
        <div className="location-nav">
          <div className="nav-header"></div>
          <ul className="country-list">
            {countryKeys.map((key) => (
              <li
                key={key}
                className={key === selectedCountry ? 'active' : ''}
                onClick={() => handleSelect(key)}
                onMouseEnter={() => handleSelect(key)}
              >
                {key.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase())}
              </li>
            ))}
          </ul>
          {/* Desktop Let's Chat Button Below Country List */}
          <button className="chat-btn desktop-visible">Let's Chat →</button>
        </div>

        <div className="map-address-container">
          <div className="map-wrapper">
            <img
              src={mapImage}
              alt="World Map"
              className="world-map"
            />
            {renderMarkers(data.markers)}
          </div>
          <div className="address-box">
            <h2>{data.address[0]}</h2>
            <div className="address-line">
              <i className="bi bi-geo-alt-fill me-2"></i>
              <span>{data.address[1]}</span>
              <h1> / </h1>
              <i className="bi bi-envelope-fill me-2"></i>
              <span>{data.address[2]}</span>
              <h1> / </h1>
            </div>
            <div className="address-line">
              <i className="bi bi-telephone-fill me-2"></i>
              <span>{data.address[3]}</span>
            </div>
            {/* Mobile Let's Chat Button at Bottom */}
            <button className="chat-btn mobile-visible">Let's Chat →</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMap;
