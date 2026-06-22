import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { testimonials } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIdx];

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-studio-black overflow-hidden select-none">
      
      {/* Decorative glows */}
      <div className="absolute top-[30%] left-[-10%] w-[350px] h-[350px] rounded-full bg-studio-orange/5 blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading Tag */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-[1.5px] bg-studio-orange" />
            <span className="text-xs font-mono tracking-widest text-studio-orange uppercase">VALUATION TESTIMONIALS</span>
            <div className="w-6 h-[1.5px] bg-studio-orange" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-none">
            REVIEWS OF OUR<br />
            <span className="text-transparent text-stroke-orange font-light">STRATEGIC PARTNERS</span>
          </h2>
        </div>

        {/* Carousel Slider Panel with Framer Motion AnimatePresence */}
        <div className="relative glass-card rounded-3xl p-8 md:p-16 border border-white/5" id="testimonial-slider-deck">
          {/* Absolute decorative subtle Quote Icon overlay */}
          <div className="absolute top-8 right-8 text-white/5 pointer-events-none select-none">
            <Quote size={120} className="stroke-1" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="flex flex-col gap-8 md:gap-10"
              id="testimonial-slide"
            >
              {/* Star Rating row */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, sIdx) => (
                  <Star 
                    key={sIdx} 
                    size={16} 
                    className={sIdx < current.rating ? 'text-studio-orange fill-studio-orange' : 'text-neutral-700'} 
                  />
                ))}
              </div>

              {/* Core Quote Content */}
              <blockquote className="text-lg md:text-2xl font-light text-neutral-100 leading-relaxed italic pr-6">
                "{current.quote}"
              </blockquote>

              {/* Client Profile Meta Area */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-studio-orange/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-base md:text-lg font-bold text-white uppercase tracking-wider">{current.name}</h4>
                  <p className="text-xs text-neutral-400 font-light leading-snug">
                    <span className="text-studio-orange font-medium">{current.role}</span> &mdash; {current.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Controls overlay */}
          <div className="flex gap-3 justify-end mt-10 md:mt-0 md:absolute md:bottom-16 md:right-16 z-20">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 hover:bg-studio-orange hover:text-studio-black text-white border border-white/5 transition-all cursor-pointer outline-none"
              aria-label="Previous Testimonial"
              id="testimonial-btn-prev"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 hover:bg-studio-orange hover:text-studio-black text-white border border-white/5 transition-all cursor-pointer outline-none"
              aria-label="Next Testimonial"
              id="testimonial-btn-next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Slide Bullets selectors */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer outline-none ${
                activeIdx === idx ? 'w-8 bg-studio-orange' : 'w-2 bg-neutral-700 hover:bg-neutral-500'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
