import { useEffect, useRef, useState } from 'react';
import './SlideIndicator.scss';

export const SlideIndicator = ({ sectionIds }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef(null);

  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id));

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.indexOf(entry.target);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.9, // fires when a section is ~70% visible
      }
    );

    sections.forEach((section) => observerRef.current.observe(section));

    return () => observerRef.current?.disconnect();
  }, [sectionIds]);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="slideIndicator">
      {sectionIds.map((id, index) => (
        <button
          key={id}
          className={`slideDot ${index === activeIndex ? 'active' : ''}`}
          onClick={() => scrollToSection(id)}
          aria-label={`Go to section ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default SlideIndicator;