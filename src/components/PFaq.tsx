import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/PFaq.css';
import slider1 from '../image/PricingPlans/project-row-1-1.webp';
import slider2 from '../image/PricingPlans/project-row-1-2.webp';
import slider3 from '../image/PricingPlans/project-row-1-3.webp';
import slider4 from '../image/PricingPlans/project-row-1-4.webp';
import slider5 from '../image/PricingPlans/project-row-1-5.webp';


const faqData = [
    {
        question: '1. How much does industrial automation cost?',
        answer:
            'Habitant morbi tristique senectus et netus et malesuada. Suspendisse potenti nullam ac tortor vitae. Interdum velit euismod in pellentesque massa placerat duis ultricies. Nam libero justo laoreet sit amet cursus sit amet. Lorem donec massa sapien faucibus. Sollicitudin nibh sit amet commodo nulla facilisi nullam.Cras sed felis eget velit aliquet sagittis id consectetur. Habitasse platea dictumst quisque sagittis purus sit.',
    },
    {
        question: '2. Definition of production planning?',
        answer:
            'Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. A arcu cursus vitae congue mauris rhoncus aenean vel. Lorem donec massa sapien faucibus et molestie ac feugiat. Dui sapien eget mi proin sed. Diam ut venenatis tellus in metus. Sed enim ut sem viverra aliquet eget sit amet tellus. Tempor orci eu lobortis elementum nibh. Leo vel orci porta non.Aliquet porttitor lacus luctus accumsan tortor. Augue interdum velit euismod in. consequat semper viverra.',
    },
    {
        question: '3. What does manufacturing industry do?',
        answer:
            'Varius quam quisque id diam vel quam elementum pulvinar. Sapien et ligula ullamcorper malesuada. Venenatis a condimentum vitae sapien pellentesque habitant morbi tristique. Pharetra sit amet aliquam id diam. Enim sed faucibus turpis in eu mi bibendum. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Nisi porta lorem mollis aliquam ut porttitor leo. Eu feugiat pretium nibh ipsum consequat. Consequat id porta nibh venenatis cras sed felis eget..',
    },
    {
        question: '4. Where can I obtain industrial equipment manufacturers details?',
        answer:
            'Volutpat diam ut venenatis tellus in. Ut sem nulla pharetra diam sit amet nisl suscipit. Lorem donec massa sapien faucibus et molestie ac. Neque laoreet suspendisse interdum consectetur. Fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in.Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula. Rutrum quisque non tellus orci.Habitant morbi tristique senectus et netus et malesuada fames.',
    },
    {
        question: '5. Batch production - what is it?',
        answer:
            'Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Arcu odio ut sem nulla. Egestas sed sed risus pretium quam vulputate dignissim suspendisse in. Enim neque volutpat ac tincidunt vitae semper quis. Enim nulla aliquet porttitor lacus luctus accumsan. Bibendum arcu vitae elementum curabitur vitae nunc sed velit.Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Ultricies tristique nulla aliquet enim.Vulputate dignissim suspendisse in est nibh.',
    },
    {
        question: '6. How long it will take a manufacturing unit?',
        answer:
            'Dignissim cras tincidunt lobortis feugiat vivamus. Sed arcu non odio euismod lacinia at quis. Cras sed felis eget velit. Eget est lorem ipsum dolor sit amet consectetur. Amet aliquam id diam maecenas. Magna sit amet purus gravida quis blandit. Nunc faucibus a pellentesque sit. Augue mauris augue neque gravida in fermentum et. Aliquet porttitor lacus luctus accumsan tortor posuere. Arcu ac tortor dignissim convallis aenean et. Elit eget gravida cum sociis natoque penatibus et.',
    },
    {
         question: '7. How long will it take to implement automation in the logistics industry?',
         answer:
                'Natoque penatibus et magnis dis parturient montes nascetur. Augue interdum velit euismod in pellentesque. Dui sapien eget mi proin sed libero enim sed. Vel pretium lectus quam id. Ornare quam viverra orci sagittis eu volutpat odio. Tortor condimentum lacinia quis vel eros. Lorem dolor sed viverra ipsum nunc. Dignissim diam quis enim lobortis scelerisque fermentum. Tincidunt tortor aliquam nulla facilisi. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque.'
    },
];

const images = [
    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
];

function PFaq() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleToggle = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className="asked-questions">
            <div className="container">
                {/* FAQ Section (Left) */}
                <div className="faq order-2 order-md-1">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => handleToggle(index)}
                        >
                            <h3>
                                {faq.question}
                                <span className="faq-arrow">
                                    <i className="fa-regular fa-greater-than"></i>
                                </span>
                            </h3>
                            <p className="faq-content">{faq.answer}</p>
                        </div>
                    ))}
                </div>

                {/* Image Slider (Right) */}
                <div className="slider-wrapper order-1 order-md-2">
                    <div className="faq-img-title">
                        <p>Our Experts Answer</p>
                        <h2 className="mt-3">Most Common Questions</h2>
                    </div>
                    <div className="asked-questions-slider">
                        <div className="slider-track">
                            <img
                                src={images[currentImageIndex]}
                                alt={`slide-${currentImageIndex}`}
                            />
                        </div>
                        <div className="slider-content">
                            <div>
                                <h4>Still have questions?</h4>
                                <p>Can't find the answer you're looking for? Please Chat to our friendly team.</p>
                            </div>
                            <button className="get-button">
                                Get In Touch <span className="arrow-icon"><i className="bi bi-arrow-right"></i></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PFaq;

