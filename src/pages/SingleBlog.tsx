import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import '../css/SingleBlog.css';
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


const recentPost = [
  {
    img: rpImg1,
    date: '25 Aug, 2023',
    description: 'List of 5 ways technology is revolutionizing manufacturing',
  },
  {
    img: rpImg2,
    date: '25 Aug, 2023',
    description: 'The role and benefit of automation in manufacturing',
  },
  {
    img: rpImg3,
    date: '25 Aug, 2023',
    description: 'The importance of employee training in manufacturing',
  },
];

const SingleBlog: React.FC = () => {
  useEffect(() => {
    const blogDataRaw = sessionStorage.getItem('blogData');
    if (blogDataRaw) {
      const blogData = JSON.parse(blogDataRaw);
      const mainImg = document.getElementById('mainImage') as HTMLImageElement | null;
      const blogDate = document.getElementById('blogDate');
      const nextImage = document.getElementById('nextImage') as HTMLImageElement | null;

      if (mainImg && blogData.img) mainImg.src = blogData.img;
      if (blogDate) blogDate.textContent = blogData.date;

      if (blogData.nextImg && nextImage) {
        nextImage.src = blogData.nextImg;
      } else if (nextImage) {
        nextImage.style.display = 'none';
      }
    }

    const handleExpand = (event: Event) => {
      const img = event.currentTarget as HTMLImageElement;
      let overlay = document.querySelector('.overlay') as HTMLDivElement | null;

      if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'overlay';
        document.body.appendChild(overlay);

        overlay.addEventListener('click', () => {
          document.querySelectorAll('.expandable').forEach(img => {
            (img as HTMLImageElement).classList.remove('expanded');
          });
          overlay!.classList.remove('active');
        });
      }

      img.classList.toggle('expanded');
      overlay.classList.toggle('active');
      img.style.zIndex = img.classList.contains('expanded') ? '1001' : '';
    };

    const images = document.querySelectorAll('.expandable');
    images.forEach(img => img.addEventListener('click', handleExpand));

    return () => {
      images.forEach(img => img.removeEventListener('click', handleExpand));
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="container-fluid blog-container">
        {/* Left Section */}
        <div className="left-section">
          <img src="" alt="Main Blog" className="main-img" id="mainImage" />
          <div className="below-img-text">
            <h4 id="blogDate"></h4>
            <p>BY ADMIN</p>
          </div>
          <div className="img-title">
            <h2 id="blogTitle">
              Nulla Tristique Metus Lectus, A Hendrerit Purus Placerat Nec. Nunc Elit Orci, Congue At Tristique Dictum, Mollis Vitae Lacus.
            </h2>
            <p id="blogDescription">
              Nulla tristique metus lectus, a hendrerit purus placerat nec. Nunc elit orci, congue at tristique dictum, mollis vitae lacus. Duis id feugiat ex, ac porttitor ex. Donec bibendum posuere nisl, ac congue odio pretium non. Maecenas dui orci, sagittis ullamcorper ultricies a, tempor vel sapien. Nulla facilisi. Ut diam augue, lacinia et tortor consectetur, congue tincidunt ligula. Nunc a tincidunt dolor. Vestibulum dolor dui, condimentum nec bibendum sed.

            </p>
          </div>
          <div className="img-title">
            <h2>Proin Non Eros Elementumtibulum Vehicula Dui Praesent :</h2>
            <img src="" alt="Related" id="nextImage" />
            <p>
              Ut sapien velit, rutrum nec mattis vitae, congue sed tortor. Ali quam scelerisque lorem sit amet tellus ultricies, sit amet condim entum arcu quis facvilisis volutpat. Fusce suscipit quam non consequat dictcaum. Nunc consectetur nec erat at rhonc Nunc auctor posuere tortor. Sed ullamcorper porttitcvor massa at rutrum. Vivaccmus commodo, lacus eu viverra auctor, amet orci tempor, pellentesque aliquam velit gravida. Curabitur efficitur quam sit amet consectetur dictum. Suspendisse et Etiam eu


            </p>
            <div className="custom-list">
              <ul className="list-unstyled gap-2">
                <li>Suspendisse facilisis lorem eget libero tincidunt, eget tincidunt felis scelerisque. Nulla commodo ornare ultricies.
                </li>
                <li>Eulla commodo ornare ultricies. Suspendisse facilisis lorem eget libero tincidunt, eget tincidunt felis scelerisque.
                </li>
                <li>Dospendisse facilisis lorem eget libero tincidunt, eget tincidunt felis scelerisque. Nulla commodo ornare ultricies.
                </li>
                <li>Nulla commodo ornare ultricies. Suspendisse facilisis lorem eget libero tincidunt, eget tincidunt felis scelerisque.
                </li>
              </ul>
            </div>
          </div>

          {/* Testimonial */}
          <section className="testimonial-section">
            <div className="testimonial-content">
              <p className="testimonial-text">
                “Quisque eget risus maximus erat porttitor tincidunt vitae ac nulla. Ut ut augue id ex vehicula fermentum quis sit amet felis. Duis sit ametfaucibus porta.”


              </p>
              <p className="testimonial-author"><strong>Helsiana John</strong> – MD</p>
            </div>
          </section>

          {/* Category & Social */}
          <div className="left-btn">
            <div className="metal-btn">
              <button id="metalfab" name="metalfab">Metal Fabrication</button>
            </div>
            <div className="socialMedia">
              <button>FB</button> - <button>TW</button> - <button>GL</button> - <button>PT</button> - <button>EV</button>
            </div>
          </div>

          {/* Prev/Next Buttons */}
          <div className="prev-btn">
            <button id="prev" name="prev"><span className="arrow-icon"><i className="bi bi-arrow-left"></i></span> Previous Article</button>
            <button id="next" name="next">Next Article <span className="arrow-icon"><i className="bi bi-arrow-right"></i></span></button>
          </div>

          {/* Comments */}
          <section className="comments-section">
            <h2>Comments ( 1 )</h2>
            <div className="comment-box">
              <div className="avatar">
                <img src={rpImg1} alt="User Avatar" />
              </div>
              <div className="comment-content">
                <h4>Admin</h4>
                <p className="comment-date">25 Aug, 2023 at 6:19 am</p>
                <p className="comment-text">
                  Orci eu lobortis elementum nibh tellus molestie. In nisl nisi scelerisque eu ultrices vitae. In ante metus dictum at tempor commodo ullamcorper a. Semper viverra nam libero justo laoreet sit amet. Non enim praesent elementum facilisis leo vel fringilla est.


                </p>
              </div>
            </div>
            <hr />
            <p className="comments-closed">Comments are closed.</p>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="right-section">
          <div className="sticky-wrapper">
            <div className="search-box">
              <input type="text" placeholder="Enter Keyword" />
              <button>🔍</button>
            </div>

            <h3>Recent Posts:</h3>
            <div className="recent-post"><img src={rpImg1} alt="Post 1" /><div><p className="date">25 Aug, 2023</p><p className="desc">List of 5 ways technology is revolutionizing manufacturing
            </p></div></div>
            <div className="recent-post"><img src={rpImg2} alt="Post 2" /><div><p className="date">25 Aug, 2023</p><p className="desc">The role and benefit of automation in manufacturing
            </p></div></div>
            <div className="recent-post"><img src={rpImg3} alt="Post 3" /><div><p className="date">25 Aug, 2023</p><p className="desc">The importance of employee training in manufacturing
            </p></div></div>

            <h3>Tags:</h3>
            <div>
              <button className="blog-btn" name="automotive">Automotive</button><br />
              <button className="blog-btn" name="metalfab">Metal Fabrication</button>
              <div style={{ display: 'flex' }}>
                <button className="blog-btn" name="pharma">Pharmaceutical</button>
                <button className="blog-btn" name="robotics">Robotics</button>
              </div>
            </div>

            <h3>Image Gallery:</h3>
            <div className="img-gallery">
              {[ImageGallery1, ImageGallery2, ImageGallery3].map((img, i) => (
                <img key={i} src={img} alt={`gallery-${i}`} className="expandable" />
              ))}
            </div>
            <div className="img-gallery">
              {[ImageGallery4, ImageGallery5, ImageGallery6].map((img, i) => (
                <img key={i + 3} src={img} alt={`gallery-${i + 3}`} className="expandable" />
              ))}
            </div>

            <div className="side-banner">
              <img src={sidebarImg} alt="Sidebar Banner" />
            </div>
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </>
  );
};

export default SingleBlog;

