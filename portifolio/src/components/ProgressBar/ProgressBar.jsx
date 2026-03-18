import React, { useState, useEffect } from 'react';
import './ProgressBar.scss';

const ProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowSize = window.innerHeight;
      const bodyHeight = document.body.clientHeight;

      const maxScroll = bodyHeight - windowSize;

      if (maxScroll <= 0) {
        setScrollPercentage(0);
        return;
      }

      const percentage = (scrollPosition / maxScroll) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
