import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface ScanTextProps {
  text: string;
  className?: string;
}

const ScanTextReveal: React.FC<ScanTextProps> = ({ text, className }) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    // Target all individual character spans
    const chars = container.current.querySelectorAll('.char');

    const tl = gsap.timeline();

    tl.fromTo(
      chars,
      {
        // Start: clipped from the bottom (invisible)
        clipPath: 'inset(0% 0% 100% 0%)',
        opacity: 0,
      },
      {
        // End: fully revealed
        clipPath: 'inset(0% 0% 0% 0%)',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.inOut',
        // This creates the "Left to Right" progression
        stagger: {
          each: 0.1,
          from: 'start',
        },
      }
    );
  }, { scope: container });

  return (
    <div ref={container} className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="char"
          style={{
            display: 'inline-block',
            whiteSpace: char === ' ' ? 'pre' : 'normal',
            willChange: 'clip-path',
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default ScanTextReveal;
