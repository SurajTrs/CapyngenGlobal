import React, { useRef, useEffect } from 'react';
import '../style.css';

const WelcomeMessage = () => {
  const messageRef = useRef(null);
  const lightRef = useRef(null);

  useEffect(() => {
    const message = messageRef.current;
    const light = lightRef.current;

    const handleMouseMove = (e) => {
      const rect = message.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Check if cursor is inside the element
      if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
        light.style.left = `${x}px`;
        light.style.top = `${y}px`;
        light.style.opacity = 1;
      } else {
        light.style.opacity = 0;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="welcome-section">
      <div className="welcome-message" ref={messageRef}>
        <div className="cursor-light" ref={lightRef}></div>
        <h2>Welcome to Capyngen</h2>
        <p>
          Where execution collides with innovation. Our full-stack IT solutions and digital marketing
          agency supports businesses, startups, and SMEs in accelerating their digital transformation.
          From industry-specific enterprise solutions and growth-driven marketing to strong
          application development and advanced AI integrations, Capyngen provides excellence at
          every level of your digital path.
        </p>
      </div>
    </section>
  );
};

export default WelcomeMessage;
