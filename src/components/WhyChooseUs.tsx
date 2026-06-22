import { reasons } from '../data';
import { motion } from 'motion/react';
import { Check, ShieldCheck, Zap, Briefcase, HeartHandshake, TrendingUp, HelpCircle, Target } from 'lucide-react';

export default function WhyChooseUs() {
  
  // Icon selector helper
  const renderIcon = (title: string, className: string) => {
    switch (title) {
      case 'Creative Thinking': return <HelpCircle className={className} size={24} />;
      case 'Result-Driven Strategy': return <TrendingUp className={className} size={24} />;
      case 'Premium Quality': return <ShieldCheck className={className} size={24} />;
      case 'Experienced Team': return <Briefcase className={className} size={24} />;
      case 'Fast Delivery': return <Zap className={className} size={24} />;
      case 'Dedicated Support': return <HeartHandshake className={className} size={24} />;
      default: return <Target className={className} size={24} />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-studio-dark overflow-hidden select-none">
      
      {/* Background visual graphics */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] rounded-full bg-studio-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading Tag */}
        <div className="mb-16 md:mb-24 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-6 h-[1.5px] bg-studio-orange" />
            <span className="text-xs font-mono tracking-widest text-studio-orange uppercase">THE ADVANTAGES</span>
            <div className="w-6 h-[1.5px] bg-studio-orange" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-none">
            WHY BOLD CHAINS<br />
            <span className="text-transparent text-stroke-orange font-light">PARTNER WITH US</span>
          </h2>
        </div>

        {/* Benefits Cards dynamic loop staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-choose-us-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              className="group relative p-8 rounded-2xl glass-card hover:bg-neutral-900/80 border border-white/[0.02] hover:border-studio-orange/15 transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <div>
                <div className="flex justify-between items-start mb-8">
                  {/* Icon Block */}
                  <div className="p-3 bg-white/5 group-hover:bg-studio-orange/10 border border-white/10 group-hover:border-studio-orange/20 rounded-xl text-white group-hover:text-studio-orange transition-colors">
                    {renderIcon(reason.title, "transition-colors duration-300")}
                  </div>
                  
                  {/* Subtle metric overlay inside card */}
                  {reason.metric && (
                    <div className="text-right">
                      <span className="text-2xl font-black text-studio-orange block">{reason.metric}</span>
                      <span className="text-[8px] font-mono tracking-widest text-[#555] block uppercase">{reason.metricLabel}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold uppercase text-white mb-3 group-hover:text-studio-orange transition-colors">
                  {reason.title}
                </h3>
                <p className="text-neutral-400 text-sm font-light leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Verified Badge indicator at bottom */}
              <div className="flex items-center gap-2 border-t border-white/5 pt-5 mt-6 text-[#444] group-hover:text-studio-orange/40 transition-colors duration-300">
                <Check size={12} className="text-studio-orange/50" />
                <span className="text-[9px] font-mono uppercase tracking-widest">ST39_SECURE_VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
