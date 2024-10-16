import React from 'react';
import '../styles/Header.css'; // Create this CSS file for styles
import logo from '../assets/your-logo.jpg'; //Imports the logo

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <a href="/">
          <img src={logo} alt="Barber Logo" className="logo" />
        </a>
      </div>
      <div className="hero">
        <h1>JaeBlendzzz</h1>
        <p>Book an appointment Below</p>
        <a href="https://jaeblendzzz.square.site" target="_blank" rel="noopener noreferrer">
          <button className="book-btn">Book Now</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
