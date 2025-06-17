import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import '../css/Blog.css';
import blImg1 from '../image/Blog-pages/blog-1.webp';
import blImg2 from '../image/Blog-pages/blog-2.webp';
import blImg3 from '../image/Blog-pages/blog-3.webp';
import blImg4 from '../image/Blog-pages/blog-4.webp';
import blImg5 from '../image/Blog-pages/blog-5.webp';
import blImg6 from '../image/Blog-pages/blog-6.webp';
import blImg7 from '../image/Blog-pages/blog-7.webp';
import blImg8 from '../image/Blog-pages/blog-8.webp';
import blImg9 from '../image/Blog-pages/blog-9.webp';
import blImg10 from '../image/Blog-pages/blog-10.webp';
import blImg11 from '../image/Blog-pages/blog-11.webp';
import blImg12 from '../image/Blog-pages/blog-12.webp';
import sidebarImg from '../image/Blog-pages/singleBlog/Siderbar-Banner-img.webp';
import rpImg1 from '../image/Blog-pages/singleBlog/rp1.webp';
import rpImg2 from '../image/Blog-pages/singleBlog/rp2.webp';
import rpImg3 from '../image/Blog-pages/singleBlog/rp3.webp';
import ImageGallery1 from '../image/Blog-pages/singleBlog/ig-1.webp';
import ImageGallery2 from '../image/Blog-pages/singleBlog/ig-2.webp';
import ImageGallery3 from '../image/Blog-pages/singleBlog/ig-3.webp';
import ImageGallery4 from '../image/Blog-pages/singleBlog/ig-4.webp';
import ImageGallery5 from '../image/Blog-pages/singleBlog/ig-5.webp';
import ImageGallery6 from '../image/Blog-pages/singleBlog/ig-6.webp';

interface BlogCard {
  id: number;
  image: string;
  date: string;
  description: string;
}

const blogCards: BlogCard[] = [
  { id: 1, image: blImg1, date: '25 Aug 2023', description: 'List of 5 ways technology is revolutionizing manufacturing' },
  { id: 2, image: blImg2, date: '25 Aug 2023', description: 'The role and benefit of automation in manufacturing' },
  { id: 3, image: blImg3, date: '25 Aug 2023', description: 'The importance of employee training in manufacturing' },
  { id: 4, image: blImg4, date: '25 Aug 2023', description: 'The use of big data in manufacturing' },
  { id: 5, image: blImg5, date: '25 Aug 2023', description: 'Why human-centered design is important' },
  { id: 6, image: blImg6, date: '25 Aug 2023', description: 'The benefits of manufacturing mass customization' },
  { id: 7, image: blImg7, date: '25 Aug 2023', description: 'Ways to implement a successful manufacturing strategy' },
  { id: 8, image: blImg8, date: '25 Aug 2023', description: 'How to reduce costs in manufacturing unit construction' },
  { id: 9, image: blImg9, date: '25 Aug 2023', description: 'The value of supply chain management' },
  { id: 10, image: blImg10, date: '25 Aug 2023', description: 'The future of AI in manufacturing industry' },
  { id: 11, image: blImg11, date: '25 Aug 2023', description: 'Ways to boost manufacturing efficiency' },
  { id: 12, image: blImg12, date: '25 Aug 2023', description: 'The future of the car manufacturing industry' },
];

const recentPost = [
  { img: rpImg1, date: '25 Aug, 2023', description: 'List of 5 ways technology is revolutionizing manufacturing' },
  { img: rpImg2, date: '25 Aug, 2023', description: 'The role and benefit of automation in manufacturing' },
  { img: rpImg3, date: '25 Aug, 2023', description: 'The importance of employee training in manufacturing' },
];

const Blog = () => {
  const navigate = useNavigate();
  const cardsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogCards.length / cardsPerPage);
  const Igallery = [ImageGallery1, ImageGallery2, ImageGallery3, ImageGallery4, ImageGallery5, ImageGallery6];

  const handleCardClick = (card: BlogCard, nextImage?: string) => {
    const blogData = {
      img: card.image,
      nextImg: nextImage || '',
      date: card.date,
      desc: card.description,
    };

    // Optionally save fallback data in sessionStorage
    sessionStorage.setItem('blogData', JSON.stringify(blogData));

    // Navigate with state to SingleBlog page
    navigate('/blog-single', { state: blogData });
  };

  const paginatedCards = blogCards.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  return (
    <div>
      <Navbar />

      <div className="container-fluid blog-container d-flex">
        {/* Left Section */}
        <div className="left-section">
          <div className="image-grid">
            {paginatedCards.map((card, index) => {
              // Calculate next image if exists
              const nextCardIndex = (currentPage - 1) * cardsPerPage + index + 1;
              const nextImage = blogCards[nextCardIndex]?.image;

              return (
                <div className="image-card" key={card.id}>
                  <img
                    src={card.image}
                    alt={`Post ${card.id}`}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleCardClick(card, nextImage)}
                  />
                  <p className="date">{card.date}</p>
                  <p className="desc text-start">{card.description}</p>
                  <button
                    onClick={() => handleCardClick(card, nextImage)}
                    style={{ cursor: 'pointer' }}
                    aria-label={`Read more about ${card.description}`}
                  >
                    <span className="arrow-icon">
                      <i className="bi bi-arrow-up-right"></i>
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="pagination">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                className={currentPage === i + 1 ? 'active' : ''}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="right-section">
          <div className="sticky-wrapper">
            <div className="search-box">
              <input type="text" placeholder="Enter Keyword" />
              <button>🔍</button>
            </div>

            <h3>Recent Posts:</h3>
            {recentPost.map((post, idx) => (
              <div className="recent-post" key={idx}>
                <img src={post.img} alt={`Post ${idx + 1}`} />
                <div>
                  <p className="date">{post.date}</p>
                  <p className="desc">{post.description}</p>
                </div>
              </div>
            ))}

            <h3>Tags:</h3>
            <div>
              <button className="blog-btn">Automotive</button>
            </div>
            <div>
              <button className="blog-btn">Metal Fabrication</button>
            </div>
            <div style={{ display: 'flex' }}>
              <button className="blog-btn">Pharmaceutical</button>
              <button className="blog-btn">Robotics</button>
            </div>

            <h3>Image Gallery:</h3>
            {[0, 3].map((start) => (
              <div className="img-gallery" key={start}>
                {Igallery.slice(start, start + 3).map((src, idx) => (
                  <img key={idx} src={src} alt={`gallery-${start + idx + 1}`} />
                ))}
              </div>
            ))}

            <div className="side-banner">
              <img src={sidebarImg} alt="Sidebar Banner" />
            </div>
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Blog;
