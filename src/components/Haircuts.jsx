import React from 'react';
import '../styles/Haircuts.css'; // Create this CSS file for styles
import haircut1 from '../assets/haircut1.jpg'; // Import haircut images
import haircut2 from '../assets/haircut2.jpg';
import haircut3 from '../assets/haircut3.jpg';

const Haircuts = () => {
  return (
    <section id="haircuts" className="haircuts">
      <h2>Featured Haircuts</h2>
      <div className="gallery">
        <div className="haircut">
          <img src={haircut1} alt="Haircut 1" />
          <p>Example 1</p>
        </div>
        <div className="haircut">
          <img src={haircut2} alt="Haircut 2" />
          <p>Example 2</p>
        </div>
        <div className="haircut">
          <img src={haircut3} alt="Haircut 3" />
          <p>Example 3</p>
        </div>
        {/* <video className="haircut-video" src="your-video.mp4" loop muted /> */}
      </div>
    </section>
  );
};

export default Haircuts;
