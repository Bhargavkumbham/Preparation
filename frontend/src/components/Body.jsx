import React from 'react';
import './Body.css';

function Body(){
  return (
    <div className="body">
      <section className="hero">
        <h1>Welcome to Lost & Found</h1>
        <p>This is the place you can find your lost one's</p>
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