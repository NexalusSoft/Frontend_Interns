import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hlogo from '../image/about/logo.svg';
import '../css/Home.css';
import { Offcanvas } from 'react-bootstrap';
import CreativeSolution from '../components/CreativeSolution';
import HomePortfolio from '../components/HomePortfolio';
import Review from '../components/Review';
import ClientReview from '../components/ClientReview';
import Partners from '../components/Partners';
import Portfolio from '../components/Portfolio';
import TopBrands from '../components/TopBrands';
import PricingPlans from '../components/PricingPlans';
import VideoSection from '../components/VideoSection';
import Workflow from '../components/Workflow';
import PFaq from '../components/PFaq';
import Counter from '../components/Counter';
import HomeAnimation from '../components/HomeAnimation';
import NewsLetter from '../components/NewsLetter';
import HomeFooter from '../components/HomeFooter';

function Home() {
  const location = useLocation();
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // dropdown reset
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const isInPaths = (paths: string[]) => paths.includes(location.pathname);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleMobileDropdown = (menu: string) => {
    setMobileOpen(mobileOpen === menu ? null : menu);
  };

  return (
    <div ref={navRef}>
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center home-navbar-left flex-grow-1">
          <Link className="d-flex align-items-center text-decoration-none" to="/">
            <img src={Hlogo} className="me-2" alt="logo" />
          </Link>

          <ul className="navbar-nav flex-row justify-content-center mx-auto d-none d-lg-flex home-navbar-nav">
            <li className="nav-item">
              <Link className={`home-nav-link ${isActive('/') ? 'active' : ''}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`home-nav-link ${isActive('/about') ? 'active' : ''}`} to="/about">
                About
              </Link>
            </li>
            {/* Pages Dropdown */}
            <li 
              className={`nav-item dropdown ${isInPaths(['/our-team', '/pricing', '/faq', '/our-service', '/404', '/project', '/login']) ? 'open' : ''}`}
              onMouseEnter={() => setActiveDropdown('pages')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="dropdown-container">
                <Link 
                  className={`home-nav-link dropdown-toggle ${activeDropdown === 'pages' ? 'active' : ''}`}
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown('pages');
                  }}
                >
                  Pages
                </Link>
                <ul className={`home-dropdown-menu ${activeDropdown === 'pages' ? 'show' : ''}`}>
                  <li><Link className="home-dropdown-item" to="/our-team">Our Team</Link></li>
                  <li><Link className="home-dropdown-item" to="/pricing">Pricing Plans</Link></li>
                  <li><Link className="home-dropdown-item" to="/faq">FAQ</Link></li>
                  <li><Link className="home-dropdown-item" to="/our-service">Our Services</Link></li>
                  <li><Link className="home-dropdown-item" to="/404">404</Link></li>
                  <li><Link className="home-dropdown-item" to="/project">Projects</Link></li>
                  <li><Link className="home-dropdown-item" to="/login">Login or Register</Link></li>
                </ul>
              </div>
            </li>

            {/* Blog Dropdown */}
            <li 
              className={`nav-item dropdown ${isInPaths(['/blog', '/blog-single']) ? 'open' : ''}`}
              onMouseEnter={() => setActiveDropdown('blog')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="dropdown-container">
                <Link 
                  className={`home-nav-link dropdown-toggle ${activeDropdown === 'blog' ? 'active' : ''}`}
                  to="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown('blog');
                  }}
                >
                  Blog
                </Link>
                <ul className={`home-dropdown-menu ${activeDropdown === 'blog' ? 'show' : ''}`}>
                  <li><Link className="home-dropdown-item" to="/blog">Blog Listing</Link></li>
                  <li><Link className="home-dropdown-item" to="/blog-single">Blog Single</Link></li>
                </ul>
              </div>
            </li>

            <li className="nav-item">
              <Link className={`home-nav-link ${isActive('/contact') ? 'active' : ''}`} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center home-navbar-right gap-3">
          <button className="home-search-btn">
            <i className="bi bi-search"></i>
          </button>
          <Link to="/request-quote" className="home-quote-btn d-none d-lg-inline-block home-request-quote-btn">
            Request A Quote <span className="home-request-arrow-icon">→</span>
          </Link>
          <button className="home-hamburger-btn d-lg-none" onClick={() => setShowOffcanvas(true)}>
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end" className="home-offcanvas">
        <Offcanvas.Header closeButton className="home-offcanvas-header">
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="home-offcanvas-body">
          <ul className="mobile-menu-list">
            <li>
              <Link 
                className={`mobile-menu-link ${isActive('/') ? 'active' : ''}`} 
                to="/" 
                onClick={() => setShowOffcanvas(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link className={`mobile-menu-link ${isActive('/about') ? 'active' : ''}`}
              to="/about"
              
              >
                About
              </Link>
            </li>
            <li className="mobile-dropdown">
              <div 
                className={`mobile-menu-link ${mobileOpen === 'pages' ? 'open' : ''}`}
                onClick={() => toggleMobileDropdown('pages')}
              >
                Pages <i className={`bi ${mobileOpen === 'pages' ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
              </div>
              <ul className={`mobile-submenu ${mobileOpen === 'pages' ? 'show' : ''}`}>
                <li><Link to="/our-team" onClick={() => setShowOffcanvas(false)}>Our Team</Link></li>
                <li><Link to="/pricing" onClick={() => setShowOffcanvas(false)}>Pricing Plans</Link></li>
                <li><Link to="/faq" onClick={() => setShowOffcanvas(false)}>FAQ</Link></li>
                <li><Link to="/our-service" onClick={() => setShowOffcanvas(false)}>Our Services</Link></li>
                <li><Link to="/404" onClick={() => setShowOffcanvas(false)}>404</Link></li>
                <li><Link to="/project" onClick={() => setShowOffcanvas(false)}>Projects</Link></li>
                <li><Link to="/login" onClick={() => setShowOffcanvas(false)}>Login or Register</Link></li>
              </ul>
            </li>

            <li className="mobile-dropdown">
              <div 
                className={`mobile-menu-link ${mobileOpen === 'blog' ? 'open' : ''}`}
                onClick={() => toggleMobileDropdown('blog')}
              >
                Blog <i className={`bi ${mobileOpen === 'blog' ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
              </div>
              <ul className={`mobile-submenu ${mobileOpen === 'blog' ? 'show' : ''}`}>
                <li><Link to="/blog" onClick={() => setShowOffcanvas(false)}>Blog Listing</Link></li>
                <li><Link to="/blog-single" onClick={() => setShowOffcanvas(false)}>Blog Single</Link></li>
              </ul>
            </li>

            <li>
              <Link 
                className={`mobile-menu-link ${isActive('/contact') ? 'active' : ''}`} 
                to="/contact" 
                onClick={() => setShowOffcanvas(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
      <VideoSection />
      <CreativeSolution />
      <HomePortfolio />
      <TopBrands />
      <Counter />
      <PFaq/>
      <Workflow />
      <PricingPlans />
      <Review />
      <HomeAnimation/>
      <NewsLetter/>
      <HomeFooter/>
    </div>
  
  );
};

export default Home;