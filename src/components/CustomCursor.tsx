import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClickable, setIsClickable] = useState(false);
  const [cursorText, setCursorText] = useState('');

  // Mouse position springs
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      return;
    }

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check clickable selectors
      const isClickableElement = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.getAttribute('role') === 'button';
        
      setIsClickable(!!isClickableElement);

      // Check specific interactive data attributes
      const hoverText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');
      if (hoverText) {
        setIsHovered(true);
        setCursorText(hoverText);
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer follow element */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference hidden lg:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          border: isClickable ? '2px solid #FF6B00' : '1.5px solid #ffffff',
          backgroundColor: isClickable ? 'rgba(255, 107, 0, 0.1)' : 'transparent',
        }}
        animate={{
          scale: isHovered ? 2.5 : isClickable ? 1.4 : 1,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      />

      {/* Inner precise dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50 bg-studio-orange shadow-[0_0_10px_#FF6B00] hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovered ? 0 : isClickable ? 1.5 : 1,
        }}
      />

      {/* Hover action label, e.g. "VIEW" or "ZOOM" */}
      {isHovered && cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 text-[10px] font-mono tracking-widest text-[#0B0B0B] font-bold bg-studio-orange px-2 py-1 rounded hidden lg:block uppercase shadow-lg shadow-studio-orange/20"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: '20px',
            translateY: '-50%',
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  );
}
