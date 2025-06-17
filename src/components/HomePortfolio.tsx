import React, { useEffect, useRef } from 'react';
import '../css/HomePortfolio.css';
import projectImg1 from '../image/home/project-row-1-1.webp';
import projectImg2 from '../image/home/project-row-1-2.webp';
import projectImg3 from '../image/home/project-row-1-3.webp';
import projectImg4 from '../image/home/project-row-1-4.webp';
import projectImg5 from '../image/home/project-row-1-5.webp';
import projectImg6 from '../image/home/project-row-1-6.webp';
import projectImg7 from '../image/home/project-row-1-7.webp'

function HomePortfolio() {
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const carousel1Ref = useRef<HTMLDivElement>(null);
  const carousel2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setupCarousel(carousel1Ref.current, track1Ref.current);
    setupCarousel(carousel2Ref.current, track2Ref.current);
  }, []);

  const setupCarousel = (
    carousel: HTMLDivElement | null,
    track: HTMLDivElement | null
  ) => {
    if (!carousel || !track) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const cards = Array.from(track.children);
    cards.forEach(card => {
      const clone1 = card.cloneNode(true);
      const clone2 = card.cloneNode(true);
      track.appendChild(clone1);
      track.insertBefore(clone2, track.firstChild);
    });

    const cardWidth = (track.children[0] as HTMLElement).offsetWidth;
    carousel.scrollLeft = cardWidth * cards.length;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.pageX;
      scrollLeft = carousel.scrollLeft;
      carousel.classList.add('active');
      carousel.style.cursor = 'grabbing';
      e.preventDefault();
    };

    const handleMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      carousel.style.cursor = 'grab';
      snapToNearestSet(carousel, track);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const x = e.pageX;
      const walk = x - startX;
      carousel.scrollLeft = scrollLeft - walk;
      handleLoop(carousel, track, cards.length, cardWidth);
    };

    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('mouseleave', handleMouseUp);
    carousel.addEventListener('mousemove', handleMouseMove);
  };

  const handleLoop = (
    carousel: HTMLDivElement,
    track: HTMLDivElement,
    cardSetLength: number,
    cardWidth: number
  ) => {
    const maxScroll = track.scrollWidth;
    if (carousel.scrollLeft <= 0) {
      carousel.scrollLeft = cardWidth * cardSetLength;
    } else if (carousel.scrollLeft >= maxScroll - carousel.offsetWidth) {
      carousel.scrollLeft = cardWidth * cardSetLength;
    }
  };

  const snapToNearestSet = (
    carousel: HTMLDivElement,
    track: HTMLDivElement
  ) => {
    const cardWidth = (track.children[0] as HTMLElement).offsetWidth;
    const currentScrollLeft = carousel.scrollLeft;
    const index = Math.round(currentScrollLeft / cardWidth);
    const snapPosition = index * cardWidth;
    const maxScroll = track.scrollWidth - carousel.offsetWidth;

    carousel.style.scrollBehavior = 'smooth';
    carousel.scrollTo({
      left: Math.min(Math.max(snapPosition, 0), maxScroll),
      behavior: 'smooth',
    });

    setTimeout(() => {
      carousel.style.scrollBehavior = 'auto';
    }, 300);
  };

  return (
    <section className="portfolio">
      <h3>Latest Projects</h3>
      <h1>Our Portfolio</h1>

      {/* First Carousel Row */}
      <div className="carousel" ref={carousel1Ref}>
        <div className="carousel-track" ref={track1Ref}>
          {[
            [projectImg1, 'Metal Binding'],
            [projectImg2, 'Fertilizer Manufacturing'],
            [projectImg3, 'Construction'],
            [projectImg4, 'Engineering'],
            [projectImg5, 'Architecture'],
            [projectImg6, 'Electrical'],
            [projectImg7, 'Construction']
          ].map(([img, label], idx) => (
            <div className="cards" key={idx}>
              <img src={img as string} alt={label} />
              <div className="port_overlays">View More</div>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Second Carousel Row */}
      <div className="carousel" ref={carousel2Ref}>
        <div className="carousel-track" ref={track2Ref}>
          {[
            [projectImg7, 'Construction'],
            [projectImg6, 'Oil & Gas'],
            [projectImg5, 'Solar Energy'],
            [projectImg4, 'Packaging'],
            [projectImg3, 'Transportation'],
            [projectImg2, 'HVAC'],
            [projectImg1, 'Recycling']
          ].map(([img, label], idx) => (
            <div className="cards" key={idx}>
              <img src={img as string} alt={label} />
              <div className="port_overlays">View More</div>
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePortfolio;
