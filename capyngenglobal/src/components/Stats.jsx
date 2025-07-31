import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import '../style.css';

const StatBox = ({ label, target, isPercentage = false, suffix = '+' , start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startVal = 0;
    const duration = 1500;
    const increment = target / (duration / 30);

    const counter = setInterval(() => {
      startVal += increment;
      if (startVal >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(startVal));
      }
    }, 30);

    return () => clearInterval(counter);
  }, [target, start]);

  const formattedCount = String(count).padStart(3, '0');

  return (
    <div className="stats-item">
      <div className="stats-box">
        {formattedCount.split('').map((digit, index) => (
          <span key={index} className="digit-box">{digit}</span>
        ))}
        <span className="digit-box">{isPercentage ? '%' : suffix}</span>
      </div>
      <p className="stats-label">{label}</p>
    </div>
  );
};

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Start when 30% visible
  });

  return (
    <section className="stats-section text-center py-5" ref={ref}>
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
          <div className="stats-item stats-top">
            <StatBox label="Projects Successfully Delivered" target={120} start={inView} />
          </div>
          <div className="stats-item stats-left">
            <StatBox label="Projects Currently Under Development" target={20} start={inView} />
          </div>
          <div className="stats-item stats-right">
            <StatBox label="Experts Across Development, Marketing & AI" target={150} start={inView} />
          </div>
          <div className="stats-item stats-bottom">
            <StatBox label="Client Retention Rate" target={98} isPercentage={true} suffix="" start={inView} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Stats;
