import React from 'react';
import '../styles/Services.css'; // Create this CSS file for styles

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="services-list">
        {/* Add your services here */}
        <p>Mens Advanced Haircut (Taper,Fade, etc.)</p>
        <p>Kids Advanced Haircut</p>
        <p>G-Code Gentlemans Package</p>
      </div>
    </section>
  );
};

export default Services;
