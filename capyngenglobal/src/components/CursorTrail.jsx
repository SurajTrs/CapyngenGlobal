import React, { useEffect, useRef } from 'react';
import '../style.css'; // Create this CSS file

const CursorTrail = () => {
  const trailRef = useRef(null);

  useEffect(() => {
    const trail = trailRef.current;

    const handleMouseMove = (e) => {
      if (trail) {
        trail.style.left = `${e.clientX}px`;
        trail.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={trailRef} className="cursor-trail" />;
};

export default CursorTrail;
