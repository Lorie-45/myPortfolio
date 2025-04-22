
import { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ value, duration = 2000, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef(null);
  
  // Animation for when counter comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Animation for counting up
  useEffect(() => {
    if (!isVisible) return;
    
    let start = 0;
    const end = parseInt(value);
    const incrementTime = (duration / end) > 20 ? (duration / end) : 20;
    
    // Don't animate if the value is 0 or negative
    if (end <= 0) {
      setCount(0);
      return;
    }
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => {
      clearInterval(timer);
    };
  }, [value, duration, isVisible]);

  return (
    <div className="font-bold text-3xl text-portfolio-dark" ref={countRef}>
      {prefix}{count}{suffix}
    </div>
  );
};

export default AnimatedCounter;
