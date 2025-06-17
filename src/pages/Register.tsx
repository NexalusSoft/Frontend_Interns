import React from 'react';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';
import '../css/Register.css';

const Register: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    console.log('Registration form submitted');
  };

  return (
    <div>
      <Navbar />

      <div className="form-wrapper">
        <form className="register-form" id="registerForm" onSubmit={handleSubmit}>
          <h1>Register Form</h1>
          <p>Do not have an account?</p>

          <input type="text" placeholder="Firstname *" required />
          <input type="text" placeholder="Lastname" />
          <input type="text" placeholder="Username *" required />
          <input type="email" placeholder="Email Id *" required />
          <input type="password" placeholder="Password *" required />
          <input type="password" placeholder="Confirm Password *" required />

          <button type="submit">Register</button>
          <p>
            Already have an account? <a href="#" className="link">Login</a>
          </p>
        </form>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Register;

