import React, { useRef, useState } from 'react';
import '../css/Portfolio.css'; 
import pf1 from '../image/services/port-1.webp';
import pf2 from '../image/services/port-2.webp';
import pf3 from '../image/services/port-3.webp'

const projects = [
  {
    id: 1,
    imgSrc: pf1,
    alt: 'Project 1',
    title: 'Project Management',
    description:
      'Neque ornare aenean euismod elementum nisi quis eleifend quam. Mass ornare lectus sit amet est placerat. Tincidunt arcu non sodales.',
  },
  {
    id: 2,
    imgSrc: pf2,
    alt: 'Project 2',
    title: 'Equipment Installation',
    description:
      'Purus in mollis nunc sed id risus in hendrerit. Ac orci phasellus egestas tellus pellentesque. Egestas tellus rutrum tellus pellentesque tincidunt.',
  },
  {
    id: 3,
    imgSrc: pf3,
    alt: 'Project 3',
    title: 'Automatic Juice Filling',
    description:
      'Feugiat in ante metus dictum at tempor commodo ullamcorper a. Nisi scelerisque eu ultrices vitae auctor. A cras semper auctor neque vitae.',
  },
  {
    id: 4,
    imgSrc: pf1,
    alt: 'Project 4',
    title: 'Data Analysing',
    description:
      'Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Nulla facilisi nullam vehicula ipsum.',
  },
  {
    id: 5,
    imgSrc: pf2,
    alt: 'Project 5',
    title: 'Equipment Installation',
    description:
      'Egestas tellus rutrum tellus pellentesque tincidunt. Felis eget nunc lobortis mattis aliquam.',
  },
];

function Portfolio() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [activeMobileItem, setActiveMobileItem] = useState<number | null>(null);

  const handleNextClick = () => {
    if (galleryRef.current) {
      const itemWidth = galleryRef.current.children[0]?.clientWidth || 300;
      galleryRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
  };

  const handleMobileClick = (id: number) => {
    if (activeMobileItem === id) {
      setActiveMobileItem(null);
    } else {
      setActiveMobileItem(id);
    }
  };

  return (
    <section className="gallery-section">
      <h5>Portfolio</h5>
      <h2>Our Project Gallery</h2>

      <div className="gallery-wrapper">
        <div className="gallery" ref={galleryRef}>
          {projects.map((project) => (
            <div 
              className={`gallery-item ${activeMobileItem === project.id ? 'mobile-active' : ''}`} 
              key={project.id}
              onClick={() => handleMobileClick(project.id)}
            >
              <div className="img-wrapper">
                <img src={project.imgSrc} alt={project.alt} />
                <div className="hover-card">
                  <div className="card-button">↗</div>
                  <p>{project.description}</p>
                </div>
              </div>
              <div className="item-title">{project.title}</div>
            </div>
          ))}
        </div>

        <button className="next-fab" onClick={handleNextClick}>›</button>
      </div>
    </section>
  );
};
export default Portfolio;