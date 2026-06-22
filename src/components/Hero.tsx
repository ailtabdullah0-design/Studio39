import { motion } from 'motion/react';
import { ArrowUpRight, Play, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const targetElement = document.querySelector(id);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-studio-black"
    >
      {/* 1. Dynamic background layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-[0]" />
      
      {/* Ambient Moving Orange Glowing Bulbs */}
      <motion.div 
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-studio-orange/10 blur-[150px] pointer-events-none"
        animate={{
          x: [0, 80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-[-100px] w-[500px] h-[500px] rounded-full bg-studio-orange/5 blur-[180px] pointer-events-none"
        animate={{
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      {/* Floating abstract decorative elements (luxury digital concept layout) */}
      <div className="absolute inset-0 pointer-events-none z-[1] hidden md:block">
        {/* Dhaka location code tag */}
        <motion.div 
          className="absolute top-[25%] left-[8%] glass-card px-4 py-2 rounded-xl text-[10px] font-mono tracking-widest text-[#777] flex items-center gap-2"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="w-1.5 h-1.5 bg-studio-orange rounded-full animate-ping" />
          ESTD // DHAKA 23.8103° N
        </motion.div>

        {/* Framing metrics */}
        <motion.div 
          className="absolute bottom-[20%] left-[6%] text-[10px] font-mono text-[#555] flex flex-col gap-1 border-l border-studio-orange/30 pl-4 py-1"
          animate={{ x: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div>FRAME CAP // 24.00 fps</div>
          <div>LUT GRID // ST39-NEON_LUT</div>
        </motion.div>

        {/* Concept graphic layout block */}
        <motion.div 
          className="absolute top-[30%] right-[10%] glass-card border border-white/5 p-4 rounded-xl max-w-[200px]"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="text-[12px] font-bold text-white mb-1">CINEMATIC RETE</div>
          <div className="w-full h-1 bg-white/10 rounded overflow-hidden">
            <div className="w-3/4 h-full bg-studio-orange" />
          </div>
          <div className="text-[9px] font-mono text-[#666] mt-2 flex justify-between">
            <span>BITRATE // HIGH</span>
            <span>98.6%</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Abstract Design Elements (Editorial Aesthetic) */}
      <motion.div 
        className="absolute bottom-[20%] right-[38%] w-24 h-24 border border-studio-orange/30 z-0 pointer-events-none hidden md:block"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute top-[40%] right-[15%] w-12 h-12 border border-white/10 z-0 pointer-events-none hidden md:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Hero Core Content Panel */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 z-10 w-full flex flex-col items-center text-center">
        {/* Animated Pill Tagline */}
        <motion.div 
          className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-widest text-[#FF6B00] uppercase mb-8 cursor-default"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, borderColor: '#FF6B00' }}
        >
          <Sparkles size={12} className="text-studio-orange animate-pulse" />
          <span>Award Winning Digital Studio</span>
        </motion.div>

        {/* Large Cinematic Typography (Editorial Aesthetic) */}
        <div className="max-w-5xl mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-black tracking-tighter text-white leading-[0.9] uppercase">
            <motion.span 
              className="block"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            >
              We Turn Ideas
            </motion.span>
            <motion.span 
              className="block py-1 text-stroke-orange text-transparent"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            >
              Into Powerful
            </motion.span>
            <motion.span 
              className="block text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            >
              Visual Experiences
            </motion.span>
          </h1>
        </div>

        {/* Agency Introduction Description */}
        <motion.p 
          className="max-w-2xl text-white/50 text-base md:text-lg lg:text-xl mb-10 leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Based in Dhaka, Bangladesh, Studio39 executes high-caliber commercials, viral performance campaigns, brand designs, and high-end brutalist spaces.
        </motion.p>

        {/* CTA Button Block */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Main primary action CTA button */}
          <button
            onClick={() => handleScrollTo('#contact')}
            className="group px-8 py-4 bg-studio-orange hover:bg-studio-orange/95 text-[#0B0B0B] font-black text-sm uppercase tracking-widest rounded-none transition-all duration-300 flex items-center gap-2 cursor-pointer"
            id="hero-cta-started"
          >
            <span>Get Started</span>
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          {/* Secondary visual video button */}
          <button
            onClick={() => handleScrollTo('#portfolio')}
            className="group px-8 py-4 bg-transparent hover:bg-white/5 text-white font-bold text-sm uppercase tracking-widest rounded-none border border-white/20 hover:border-white/50 transition-all duration-300 flex items-center gap-2 cursor-pointer"
            id="hero-cta-portfolio"
          >
            <Play size={14} className="fill-white group-hover:fill-studio-orange group-hover:text-studio-orange transition-colors" />
            <span>View Portfolio</span>
          </button>
        </motion.div>

        {/* Visual Scroll Bottom Pointer */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
          onClick={() => handleScrollTo('#services')}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          id="scroll-pointer"
        >
          <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">Scroll Down</span>
          <div className="w-[1px] h-10 bg-white/25 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full h-1/2 bg-studio-orange"
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
