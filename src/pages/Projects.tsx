import React from 'react';
import '../css/Projects.css';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import prImg1 from '../image/projects/Portfolio-1.png';
import prImg2 from '../image/projects/Portfolio-2.png';
import prImg3 from '../image/projects/Portfolio-3.png';
import prImg4 from '../image/projects/Portfolio-4.png';
import prImg5 from '../image/projects/Portfolio-5.png';
import prImg6 from '../image/projects/Portfolio-6.png';
import prImg7 from '../image/projects/Portfolio-7.png';

const projects = [
  {
    id: 'img-1',
    src: prImg1,
    alt: 'Bradley',
    category: 'Cement, Petrochemical',
    title: 'Bradley',
  },
  {
    id: 'img-2',
    src: prImg2,
    alt: 'Arthur Barry',
    category: 'Sugar, Distillery',
    title: 'Arthur Barry',
  },
  {
    id: 'img-3',
    src: prImg3,
    alt: 'Louis Miller',
    category: 'Sugar, Petrochemical',
    title: 'Louis Miller',
  },
  {
    id: 'img-4',
    src: prImg4,
    alt: 'Steel Roll',
    category: 'Cement, Distillery',
    title: 'Roller Steel',
  },
  {
    id: 'img-5',
    src: prImg5,
    alt: 'Conveyor Belt',
    category: 'Cement, Petrochemical',
    title: 'Conveyor Line',
  },
  {
    id: 'img-6',
    src: prImg6,
    alt: 'Robotic Arm',
    category: 'Sugar, Cement',
    title: 'Robotic Arm',
  },
  {
    id: 'img-7',
    src: prImg7,
    alt: 'Thomas Mariya',
    category: 'Cement, Petrochemical',
    title: 'Thomas Mariya',
  },
];

function Projects() {
  return (
    <div>
      <Navbar />

      <section className="service py-2">
        <div className="container-fluid">
          <div className="service-header text-center">
            <p>Our Service</p>
            <h1>Creative Solutions</h1>
          </div>

          <div className="row pt-5">
            {[0, 1, 2].map((colIndex) => (
              <div className="col-md-4" key={colIndex}>
                {projects
                  .slice(colIndex * 2, colIndex * 2 + 2)
                  .map(({ id, src, alt, category, title }) => (
                    <div className="portfolio-card" key={id}>
                      <div className="overlay"></div>
                      <img id={id} src={src} alt={alt} />
                      <div className="portfolio-info">
                        <small>{category}</small>
                        <h5>{title}</h5>
                        <button>VIEW DETAILS</button>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-12">
              <div className="portfolio-card">
                <div className="overlay"></div>
                <img
                  id={projects[6].id}
                  src={projects[6].src}
                  alt={projects[6].alt}
                />
                <div className="portfolio-info">
                  <small>{projects[6].category}</small>
                  <h5>{projects[6].title}</h5>
                  <button>VIEW DETAILS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NewsLetter />
      <Footer />
    </div>
  );
}

export default Projects;

