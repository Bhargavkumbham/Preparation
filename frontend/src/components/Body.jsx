import React from 'react';
import './Body.css';

const Body = () => {
  return (
    <div className="body">
      <section className="hero">
        <h1>Welcome to My Website</h1>
        <p>This is a simple and clean website</p>
        <button>Learn More</button>
      </section>

      <section className="content">
        <h2>About Us</h2>
        <p>We create simple and effective solutions for your business.</p>
        
        <h2>Our Services</h2>
        <div className="services">
          <div className="service">
            <h3>Web Design</h3>
            <p>Beautiful websites</p>
          </div>
          <div className="service">
            <h3>Development</h3>
            <p>Fast and reliable</p>
          </div>
          <div className="service">
            <h3>Support</h3>
            <p>24/7 customer care</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;