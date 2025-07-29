import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../style.css';
import bgImage from '../assets/backgroundLanding.png';

const Landing = () => {
  return (
    <section
      className="landing-section d-flex align-items-center justify-content-center text-white text-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      {/* Dark Overlay */}
      <div className="landing-overlay"></div>

      {/* Content */}
      <div className="landing-content px-3">
        <h1 className="landing-heading">
          YOUR IT EXCELLENCE AND <br />
          DIGITAL INNOVATION PARTNER
        </h1>
        <div className="scroll-down mt-5">
          <span>Scroll Down</span>
          <div className="arrow">&#x25BC;</div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
