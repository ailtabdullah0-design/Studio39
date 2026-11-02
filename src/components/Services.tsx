import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { services } from '../data';
import { Video, Megaphone, Palette, Layout, Sparkles, MoveRight, X, CheckCircle } from 'lucide-react';
import { Service } from '../types';

export default function Services() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  // Icon mapping helper
  const renderIcon = (iconName: string, className: string) => {
    switch(iconName) {
      case 'Video': return <Video className={className} size={32} />;
      case 'Megaphone': return <Megaphone className={className} size={32} />;
      case 'Palette': return <Palette className={className} size={32} />;
      case 'Layout': return <Layout className={className} size={32} />;
      default: return <Sparkles className={className} size={32} />;
    }
  };

  const handleBookClick = () => {
    setActiveService(null);
    const targetElement = document.querySelector('#contact');
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
    <section id="services" className="relative py-24 md:py-32 bg-studio-dark overflow-hidden select-none">
      {/* Visual glowing blob */}
      <div className="absolute top-[40%] left-[-10%] w-96 h-96 rounded-full bg-studio-orange/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[1.5px] bg-studio-orange" />
              <span className="text-xs font-mono tracking-widest text-studio-orange uppercase text-glow">WHAT WE DEPLOY</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-none">
              OUR DESTRUCTIVELY<br />
              <span className="text-transparent text-stroke-orange font-light">GOOD CAPABILITIES</span>
            </h2>
          </div>
          <p className="max-w-sm text-white/50 text-sm md:text-base leading-relaxed font-light">
            We do not dilute our quality across 100 avenues. We focus intensely on four pillars, optimizing each for maximum aesthetic dominance and commercial conversion.
          </p>
        </div>

        {/* Services interactive cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative rounded-2xl p-8 lg:p-12 bg-white/[0.02] hover:bg-neutral-900/60 border border-white/10 hover:border-studio-orange/50 transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveService(service)}
              data-cursor-text="EXPAND"
            >
              {/* Outer decorative light shaft */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-studio-orange/0 group-hover:bg-studio-orange/5 blur-3xl transition-colors duration-500 pointer-events-none" />

              <div>
                {/* Micro layout items */}
                <div className="flex justify-between items-start mb-10">
                  <div className="group-hover:border-studio-orange/50 transition-colors">
                    {renderIcon(service.iconName, "text-studio-orange group-hover:text-white transition-colors duration-300")}
                  </div>
                  <span className="w-8 h-8 flex items-center justify-center border border-studio-orange text-studio-orange text-xs font-mono rounded-none">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold uppercase text-white mb-4 group-hover:text-studio-orange transition-colors">
                  {service.title}
                </h3>
                <p className="font-light text-white/40 text-sm lg:text-base mb-8 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Card Footer Detail indicator */}
              <div className="flex justify-between items-center border-t border-white/5 pt-6 mt-4">
                <span className="text-xs font-mono text-neutral-500 tracking-wider">
                  {service.stats}
                </span>
                
                <div className="flex items-center gap-1 text-xs font-mono text-studio-orange group-hover:gap-3 transition-all duration-300 group-hover:font-extrabold uppercase">
                  <span>Explore Specs</span>
                  <MoveRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Drawer details overlay (Expands upon service card selection) */}
        <AnimatePresence>
          {activeService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 select-none" id="service-modal-overlay">
              {/* Backdrop filter backdrop close blur click */}
              <motion.div
                className="absolute inset-0 bg-studio-black/85 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveService(null)}
              />

              {/* Core responsive modal panel details */}
              <motion.div
                className="relative w-full max-w-3xl bg-[#111111] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl overflow-y-auto max-h-[90vh]"
                initial={{ scale: 0.95, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 30, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                id="service-modal-content"
              >
                {/* Close Button element */}
                <button
                  onClick={() => setActiveService(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-studio-orange text-white hover:text-studio-black transition-all cursor-pointer z-10"
                  aria-label="Close details"
                  id="service-modal-close"
                >
                  <X size={18} />
                </button>

                {/* Modal Title and Concept */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 mb-8 border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="p-4 rounded-2xl bg-studio-orange/10 text-studio-orange border border-studio-orange/20">
                      {renderIcon(activeService.iconName, "w-8 h-8")}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#666] uppercase">CHITRO CAPABILITY</span>
                      <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-wider">{activeService.title}</h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono text-studio-orange block">{activeService.stats}</span>
                    <span className="text-[9px] font-mono text-[#555] block uppercase mt-0.5">Verified Cumulative ROI</span>
                  </div>
                </div>

                {/* Modal main detailed message layout */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
                  <div className="md:col-span-7">
                    <h4 className="text-xs font-mono text-neutral-400 tracking-widest uppercase mb-3">// PROCESS SUMMARY</h4>
                    <p className="text-sm font-light text-neutral-300 leading-relaxed mb-6">
                      {activeService.details}
                    </p>

                    {/* Book Now trigger section inside details */}
                    <div className="border-t border-white/5 pt-6">
                      <button
                        onClick={handleBookClick}
                        className="px-6 py-3.5 bg-studio-orange hover:bg-studio-orange/95 text-white font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer inline-flex items-center gap-2 shadow-[0_0_15px_rgba(255,107,0,0.15)] hover:shadow-[0_0_25px_rgba(255,107,0,0.3)] duration-300"
                        id="modal-cta-book"
                      >
                        <span>Collaborate on this Pillar</span>
                        <MoveRight size={12} />
                      </button>
                    </div>
                  </div>

                  <div className="md:col-span-5 bg-studio-black/50 border border-white/5 rounded-2xl p-6">
                    <h4 className="text-xs font-mono text-studio-orange tracking-widest uppercase mb-4">// UNIQUE DELIVERABLES</h4>
                    <ul className="flex flex-col gap-3">
                      {activeService.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs text-neutral-300">
                          <CheckCircle size={14} className="text-studio-orange shrink-0 mt-0.5" />
                          <span className="leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Fine technical signature layout */}
                <div className="text-[9px] font-mono text-[#444] text-center uppercase tracking-widest pt-4 border-t border-white/5">
                  CHITRO // GULSHAN OFFICE BD // ENTRUSTED CRITERIA SECURE
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
