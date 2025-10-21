import { useState, useEffect } from 'react';

export const useScreenResolution = () => {
    const [isSmall, setIsSmall] = useState(false);
    const [isMedium, setIsMedium] = useState(false);
    const [isLarge, setIsLarge] = useState(false);
  
    useEffect(() => {
      const windowResized = () => {
        setIsSmall(
          window.matchMedia(`screen and (max-width: 479px)`)
            .matches
        );
        setIsMedium(
          window.matchMedia(
            `screen and (min-width: 480px) and (max-width: 767px)`
          ).matches
        );
        setIsLarge(
          window.matchMedia(
            `screen and (min-width: 768px)`
          ).matches
        );
      };
  
      window.addEventListener('resize', windowResized);
      windowResized();
      return () => window.removeEventListener('resize', windowResized);
    }, []);
  
    return { isSmall, isMedium, isLarge };
  };