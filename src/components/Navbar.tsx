import React, { useState, useEffect } from 'react';
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import plogo from '../image/about/logo.svg';
import '../css/Navbar.css';

function Navbar() {
  const [activeMenu, setActiveMenu] = useState<string>('mainMenu');
  const [showOffcanvas, setShowOffcanvas] = useState<boolean>(false);

  const location = useLocation();
  const [pageTitle, setPageTitle] = useState<string>('Home');

  const pathToTitleMap: Record<string, string> = {
    '/': 'Home',
    '/about': 'About',
    '/our-team': 'Our Team',
    '/pricing': 'Pricing Plans',
    '/faq': 'FAQ',
    '/our-service': 'Our Services',
    '/404': '404',
    '/project': 'Projects',
    '/login': 'Login or Register',
    '/blog': 'Blog Listing',
    '/blog-single': 'Blog Single',
    '/contact': 'Contact',
    '/request-quote': 'Request A Quote',
  };

  const isPathActive = (paths: string[]) => paths.includes(location.pathname);

  useEffect(() => {
    const current = pathToTitleMap[location.pathname];
    setPageTitle(current ?? 'Page');
  }, [location.pathname]);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const showMainMenu = () => setActiveMenu('mainMenu');
  const showSubMenu = (menu: string) => setActiveMenu(menu);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container-fluid px-4">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={plogo} alt="Logo" className="me-2" />
          </Link>
          <button className="navbar-toggler" type="button" onClick={handleShow}>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mobile-slide" id="navbarContent">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
              </li>
              <li className="nav-item dropdown">
                <button
                  className={`nav-link dropdown-toggle ${isPathActive(['/our-team', '/pricing', '/faq', '/our-service', '/404', '/project', '/login']) ? 'active' : ''}`}
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </button>
                <ul className="dropdown-menu text-left">
                  {['our-team', 'pricing', 'faq', 'our-service', '404', 'project', 'login'].map((path) => (
                    <li key={path}>
                      <Link className="dropdown-item" to={`/${path}`}>
                        {pathToTitleMap[`/${path}`]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button
                  className={`nav-link dropdown-toggle ${isPathActive(['/blog', '/blog-single']) ? 'active' : ''}`}
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Blog
                </button>
                <ul className="dropdown-menu text-left">
                  <li><Link className="dropdown-item" to="/blog">Blog Listing</Link></li>
                  <li><Link className="dropdown-item" to="/blog-single">Blog Single</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">Contact</Link>
              </li>
              <li className="nav-item d-lg-none mt-3">
                <Link to="/request-quote" className="btn gradient-btn w-100 text-white fw-semibold">
                  Request A Quote
                  <span className="arrow-icon"><i className="bi bi-arrow-right"></i></span>
                </Link>
              </li>
            </ul>
            <div className="d-none d-lg-flex align-items-center ms-5 gap-2">
              <button className="btn btn-outline-light"><i className="bi bi-search"></i></button>
              <Link to="/request-quote" className="btn gradient-btn text-white fw-semibold px-4">
                Request A Quote
                <span className="arrow-icon"><i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Offcanvas Menu */}
      <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
        <OffcanvasHeader closeButton>
          <h5 className="offcanvas-title">Menu</h5>
        </OffcanvasHeader>
        <OffcanvasBody className="p-0">
          {/* Main Menu */}
          <div id="mainMenu" className={`p-4 ${activeMenu !== 'mainMenu' ? 'd-none' : ''}`}>
            <ul className="navbar-nav">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
              <li className="nav-item">
                <button className="nav-link btn w-100 text-start" onClick={() => showSubMenu('pagesSubMenu')}>
                  Pages <i className="bi bi-chevron-right float-end"></i>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn w-100 text-start" onClick={() => showSubMenu('blogSubMenu')}>
                  Blog <i className="bi bi-chevron-right float-end"></i>
                </button>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Pages Submenu */}
          <div id="pagesSubMenu" className={`p-4 ${activeMenu !== 'pagesSubMenu' ? 'd-none' : ''}`}>
            <button className="btn btn-sm mb-3" onClick={showMainMenu}>
              <i className="bi bi-chevron-left"></i> Back
            </button>
            <ul className="navbar-nav">
              <li><Link className="dropdown-item py-2" to="/our-team">Our Team</Link></li>
              <li><Link className="dropdown-item py-2" to="/pricing">Pricing Plans</Link></li>
              <li><Link className="dropdown-item py-2" to="/faq">FAQ</Link></li>
              <li><Link className="dropdown-item py-2" to="/our-service">Our Services</Link></li>
              <li><Link className="dropdown-item py-2" to="/404">404</Link></li>
              <li><Link className="dropdown-item py-2" to="/project">Projects</Link></li>
              <li><Link className="dropdown-item py-2" to="/login">Login or Register</Link></li>
            </ul>
          </div>

          {/* Blog Submenu */}
          <div id="blogSubMenu" className={`p-4 ${activeMenu !== 'blogSubMenu' ? 'd-none' : ''}`}>
            <button className="btn btn-sm mb-3" onClick={showMainMenu}>
              <i className="bi bi-chevron-left"></i> Back
            </button>
            <ul className="navbar-nav">
              <li><Link className="dropdown-item py-2" to="/blog">Blog Listing</Link></li>
              <li><Link className="dropdown-item py-2" to="/blog-single">Blog Single</Link></li>
            </ul>
          </div>
        </OffcanvasBody>
      </Offcanvas>

      {/* Hero Section */}
      <header className="hero-section d-flex flex-column justify-content-center align-items-center text-white text-center">
        <div className="px-5 py-3 rounded-3 mb-3">
          <h1 className="m-0">{pageTitle}</h1>
        </div>
        <nav className="breadcrumb-nav">
          <span>
            <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
          </span>
          /
          <span style={{ color: "#ffaa4a" }}>{pageTitle}</span>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
