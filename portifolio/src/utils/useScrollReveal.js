import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '50px',
      duration: 1500,
      delay: 200,
      reset: true,
      easing: 'ease-in-out',
    });

    sr.reveal('.reveal-top', { origin: 'top' });
    sr.reveal('.reveal-bottom', { origin: 'bottom' });
    sr.reveal('.reveal-left', { origin: 'left' });
    sr.reveal('.reveal-right', { origin: 'right' });
    sr.reveal('.reveal-stagger', { origin: 'bottom', interval: 100 });

    // Cleanup is handled by ScrollReveal reset: true
  }, [location.pathname]); // Re-trigger when the route changes
};

export default useScrollReveal;
