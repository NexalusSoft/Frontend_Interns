import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import '../css/Faq.css'; 
import formimg from '../image/Faq/faq-contact-img.webp'

const faqs = [
  {
    question: "1. What is the price of industrial automation?",
    answer: `Egestas sed tempus urna et. Quis blandit turpis cursus in hac. Amet purus gravida quis blandit
    turpis cursus in. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Quisque id diam vel quam.
    Vel eros donec ac odio. Ac orci phasellus egestas tellus rutrum tellus. Suspendisse potenti nullam ac tortor vitae
    purus. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis.`,
  },
  {
    question: "2. How does production planning work?",
    answer: `Production planning involves scheduling, managing resources, and ensuring efficient workflow to
    meet customer demands. It helps optimize costs and reduce waste in manufacturing processes.`,
  },
  {
    question: "3. What is the manufacturing sector's function?",
    answer: `Sit amet nisl purus in mollis nunc sed. Non curabitur gravida arcu ac tortor dignissim convallis aenean et. 
    Praesent tristique magna sit amet purus gravida quis blandit turpis. Id ornare arcu odio ut sem nulla pharetra.`,
  },
  {
    question: "4. Where can I find information about machine manufacturers?",
    answer: `Amet risus nullam eget felis eget nunc lobortis mattis aliquam. Odio tempor orci dapibus ultrices in iaculis nunc sed. 
    Ultrices mi tempus imperdiet nulla. Lacinia at quis risus sed vulputate odio ut enim blandit.`,
  },
  {
    question: "5. How would you implement a robot in the chemical industry?",
    answer: `Nunc sed blandit libero volutpat sed cras ornare. Tellus id interdum velit laoreet. Fermentum iaculis eu non diam phasellus vestibulum lorem. 
    Ut ornare lectus sit amet est placerat. Ornare arcu dui vivamus arcu felis bibendum ut tristique.`,
  },
  {
    question: "6. What is the benefit of robotic implementation in industry?",
    answer: `Justo nec ultrices dui sapien eget mi proin sed. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae. 
    Nunc consequat interdum varius sit amet. Ultricies lacus sed turpis tincidunt id aliquet risus.`,
  },
  {
    question: "7. How long will it take to implement automation in the logistics industry?",
    answer: `Integer feugiat scelerisque varius morbi enim nunc. Tellus molestie nunc non blandit massa enim nec dui. 
    Mollis nunc sed id semper. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo.`,
  },
];

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const number = (form.elements.namedItem("number") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    if (!name || !email || !number || !message) {
      alert("Please fill out all fields.");
      return;
    }

    alert(`Submitted by: ${name}, Email: ${email}`);
    form.reset();
  };

  return (
    <>
      <Navbar />

      <div className="container faq-container">
        <div className="faq-section">
          <h4 className="subtitle">Our Experts Answers</h4>
          <h1 style={{ marginBottom: "50px", marginTop: "30px", fontSize: "41px" }}>
            Frequently Asked Questions
          </h1>

          {faqs.map((faq, index) => (
            <div
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              key={index}
            >
              <div className="faq-title" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <span className="faq-arrow">
                  <i className="fa-regular fa-greater-than"></i>
                </span>
              </div>
              {activeIndex === index && (
                <div className="faq-content">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="query-form">
          <img src={formimg} alt="Illustration" />
          <h3>Do You Have Any Queries?</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="number" name="number" placeholder="Number" required />
            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              style={{ color: "black" }}
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </>
  );
};

export default Faq;
