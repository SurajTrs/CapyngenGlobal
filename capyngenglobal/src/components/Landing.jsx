import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../style.css';
import bgImage from '../assets/backgroundLanding.png';
const Landing = () => {
  return (
    <section
      className="d-flex align-items-center justify-content-center vh-100 text-white px-3"
        style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
    >
      {/* Optional overlay for darker effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(18, 17, 16, 0.6)', // same as previous background with opacity
          zIndex: 0,
        }}
      ></div>

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h1
          style={{
            fontFamily: 'Font 1, sans-serif',
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '72px',
            lineHeight: '100px',
            letterSpacing: '0%',
            textTransform: 'uppercase',
            margin: 0,
            transform: 'translateY(-150px)',
          }}
        >
          YOUR IT EXCELLENCE AND<br />
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
