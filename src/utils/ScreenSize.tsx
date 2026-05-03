import { useState, useEffect } from 'react';

export const useScreenResolution = () => {
    const [isXSmall, setIsXSmall] = useState(false);
    const [isSmall, setIsSmall] = useState(false);
    const [isMedium, setIsMedium] = useState(false);
    const [isLarge, setIsLarge] = useState(false);
  
    useEffect(() => {
      const windowResized = () => {
        setIsXSmall(
          window.matchMedia(`screen and (max-width: 479px)`)
            .matches
        );
        setIsSmall(
          window.matchMedia(
            `screen and (min-width: 480px) and (max-width: 767px)`
          ).matches
        );
        setIsMedium(
          window.matchMedia(
            `screen and (min-width: 768px) and (max-width: 1043px)`
          ).matches
        );
        setIsLarge(
          window.matchMedia(
            `screen and (min-width: 1044px)`
          ).matches
        );
      };
  
      window.addEventListener('resize', windowResized);
      windowResized();
      return () => window.removeEventListener('resize', windowResized);
    }, []);
  
    return { isXSmall, isSmall, isMedium, isLarge };
  };