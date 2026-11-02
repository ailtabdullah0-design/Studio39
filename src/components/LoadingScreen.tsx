import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const taglines = [
  'ORCHESTRATING VISUAL NARRATIVES',
  'SCULPTING SPATIAL GEOMETRIES',
  'ALIGNING THE BRAND CHANNELS',
  'ENVELOPE MOVEMENT ENGAGED',
  'CHITRO DIGITAL ONLINE'
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Progress counter simulation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsDone(true);
          setTimeout(onComplete, 600); // Allow fadeout transition
          return 100;
        }
        
        // Fast at first, then stays a bit at 99
        const increment = prev > 80 ? Math.floor(Math.random() * 4) + 1 : Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    // Tagline cycler
    const taglineTimer = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 700);

    return () => {
      clearInterval(timer);
      clearInterval(taglineTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 bg-studio-black z-50 flex flex-col justify-between p-8 md:p-16 select-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          id="loading-screen"
        >
          {/* Top Row - Agency Sign */}
          <div className="flex justify-between items-center text-xs tracking-widest text-[#555] font-mono">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              CHITRO // CREATIVE INITIATIVES
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              KHULNA, BANGLADESH
            </motion.span>
          </div>

          {/* Central Typography and Visual Core */}
          <div className="my-auto max-w-4xl">
            <div className="overflow-hidden">
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white"
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                CHIT<span className="text-studio-orange font-light">RO</span>
              </motion.h1>
            </div>
            
            {/* Tagline Status Indicator */}
            <div className="h-6 overflow-hidden mt-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={taglineIndex}
                  className="text-xs md:text-sm font-mono tracking-widest text-studio-orange"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  // {taglines[taglineIndex]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Row - Progress and Percentage */}
          <div className="flex flex-col gap-6">
            {/* Elegant Line Progress */}
            <div className="relative w-full h-[1px] bg-white/5">
              <motion.div 
                className="absolute left-0 top-0 h-full bg-studio-orange shadow-[0_0_10px_#FF6B00]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'easeOut' }}
              />
            </div>

            <div className="flex justify-between items-end">
              <span className="text-xs font-mono text-[#555] max-w-xs leading-relaxed hidden sm:block">
                A premium digital agency weaving award-winning post production, marketing architecture, and structural installations.
              </span>
              
              {/* Massive Percentage */}
              <motion.span 
                className="text-7xl md:text-9xl font-heading font-extrabold text-white/10 select-none leading-none tracking-tighter"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {String(progress).padStart(3, '0')}%
              </motion.span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
