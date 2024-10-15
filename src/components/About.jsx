import React from 'react';
import '../styles/About.css'; // Create this CSS file for styles
import jasiel from '../assets/jasiel.jpg';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <img src={jasiel} alt="JaeBlendzzz" className="barber-photo" />
      <p>Best Barber in the 209</p>
    </section>
  );
};

export default About;
