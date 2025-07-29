import React, { useEffect, useState } from 'react';
import '../style.css';

const words = ["LET’S", "GROW", "TOGETHER"];

const Introduction = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [slideUpActive, setSlideUpActive] = useState(false);

  useEffect(() => {
    if (currentWordIndex >= words.length) {
      const timer = setTimeout(() => onComplete(), 500);
      return () => clearTimeout(timer);
    }

    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 100); 
      return () => clearTimeout(timer);
    }

    if (step === 1) {
      setSlideUpActive(false);
      const slideUpTimer = setTimeout(() => setSlideUpActive(true), 50);
      const nextStepTimer = setTimeout(() => setStep(2), 1050);
      return () => {
        clearTimeout(slideUpTimer);
        clearTimeout(nextStepTimer);
      };
    }

    if (step === 2) {
      setSlideUpActive(false);
      const timer = setTimeout(() => {
        setStep(0);
        setCurrentWordIndex(i => i + 1);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [step, currentWordIndex, onComplete]);

  return (
    <div className="intro-fullscreen black-bg">
      {step === 0 && <div className="white-circle expand" />}

      {currentWordIndex < words.length && (step === 1 || step === 2) && (
        <h1
          className={`intro-text
            ${slideUpActive && step === 1 ? 'slide-up' : ''}
            ${step === 2 ? 'pop-out' : ''}
          `}
        >
          {words[currentWordIndex]}
        </h1>
      )}
    </div>
  );
};

export default Introduction;
