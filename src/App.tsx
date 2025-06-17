import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Team from './pages/Team';
import Pricing from './pages/Pricing';
import Services from './pages/Services';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Register from './pages/Register';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import Home from './pages/Home';


export default function () {
  return (
   <Router>
      <Routes>
         {/* <Route path="/" element={<Navigate to="/" />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-team" element={<Team />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/our-service" element={<Services />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/login" element={<Register />} />
         <Route path="/blog" element={<Blog />} />
        <Route path="/blog-single" element={<SingleBlog />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
        </Router>
  )
}
