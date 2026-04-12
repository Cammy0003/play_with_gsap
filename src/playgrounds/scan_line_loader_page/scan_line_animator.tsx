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

    const chars = container.current.querySelectorAll('.char');

    const tl = gsap.timeline();

    // The Ladd Company reveal has a slightly "randomized" but
    // progressive feel. We use a stagger with a 'start' focus.
    tl.fromTo(
      chars,
      {
        opacity: 0,
        y: 10, // A small vertical shift as they appear
        clipPath: 'inset(100% 0% 0% 0%)', // Start fully hidden from the bottom
      },
      {
        opacity: 1,
        y: 0,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 0.6,
        ease: "steps(10)", // "Steps" creates that retro/mechanical digital feel
        stagger: {
          each: 0.08,
          from: 'start',
        },
      }
    );

    // Subtle flicker effect to match old-school CRT monitors
    tl.to(chars, {
      opacity: 0.8,
      duration: 0.1,
      repeat: 3,
      yoyo: true,
      ease: "none",
      stagger: 0.05
    }, "<0.2"); // Start flicker shortly after the reveal begins

  }, { scope: container });

  return (
    <div ref={container} className={className} style={styles.container}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="char"
          style={{
            ...styles.char,
            whiteSpace: char === ' ' ? 'pre' : 'normal',
          }}
        >
          {char}
          {/* The "Scanline" Overlay Layer */}
          <span style={styles.scanlineOverlay} />
        </span>
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2px',
    backgroundColor: 'black', // Ensure black background for contrast
    padding: '20px',
  },
  char: {
    position: 'relative',
    display: 'inline-block',
    color: '#00ff41', // "Ladd" Green
    fontWeight: 'bold',
    fontSize: '4rem',
    fontFamily: '"Courier New", Courier, monospace',
    textShadow: '0 0 10px rgba(0, 255, 65, 0.7)',
    overflow: 'hidden',
  },
  scanlineOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    // This creates the horizontal "Ladd" line effect
    backgroundImage: 'linear-gradient(to bottom, transparent 50%, rgba(0, 0, 0, 0.8) 50%)',
    backgroundSize: '100% 4px', // Adjust 4px to change line density
    zIndex: 10,
  }
};

export default ScanTextReveal;