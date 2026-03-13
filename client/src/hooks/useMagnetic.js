import { useRef, useEffect } from 'react';

export const useMagnetic = () => {
  const magneticRef = useRef(null);

  useEffect(() => {
    const element = magneticRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = element.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;

      const strength = 40; // Adjust for more/less pull
      
      const x = distanceX / strength;
      const y = distanceY / strength;

      element.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseLeave = () => {
      element.style.transform = `translate(0px, 0px)`;
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return magneticRef;
};
