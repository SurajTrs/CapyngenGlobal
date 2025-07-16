import React from 'react';
import { Container } from 'react-bootstrap';
import '../style.css';

const Stats = () => {
  return (
    <section className="stats-section text-center py-5">
      <Container>
        <p className="stats-tagline mb-1">
          We don’t just build projects. We build long-term digital success.
        </p>
        <p className="stats-subheading mb-4">
          These numbers reflect our commitment to quality, consistency, and results
        </p>
        <h4 className="stats-highlight mb-5">
          Global Clientele from <span className="highlighted">6+ Countries</span>
        </h4>

        <div className="stats-layout">
          {/* Top */}
          <div className="stats-item stats-top">
            <div className="stats-box">
              <span className="digit-box">0</span>
              <span className="digit-box">0</span>
              <span className="digit-box">0</span>
            </div>
            <p className="stats-label">Projects Successfully Delivered</p>
          </div>

          {/* Left */}
          <div className="stats-item stats-left">
            <div className="stats-box">
              <span className="digit-box">0</span>
              <span className="digit-box">0</span>
               <span className="digit-box">0</span>
            </div>
            <p className="stats-label">Projects Currently Under Development</p>
          </div>

          {/* Right */}
          <div className="stats-item stats-right">
            <div className="stats-box">
              <span className="digit-box">0</span>
              <span className="digit-box">0</span>
               <span className="digit-box">0</span>
            </div>
            <p className="stats-label">Experts Across Development,<br />Marketing & AI</p>
          </div>

          {/* Bottom */}
          <div className="stats-item stats-bottom">
            <div className="stats-box">
              <span className="digit-box">0</span>
              <span className="digit-box">0</span>
               <span className="digit-box">0</span>
            </div>
            <p className="stats-label">Client Retention Rate</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Stats;
