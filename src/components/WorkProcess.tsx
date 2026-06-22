import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { processSteps } from '../data';
import { Check, ClipboardList, ShieldAlert, Sparkles, ChevronRight } from 'lucide-react';

export default function WorkProcess() {
  const [activeStepIdx, setActiveStepIdx] = useState<number>(0);
  const activeStep = processSteps[activeStepIdx];

  return (
    <section id="process" className="relative py-24 md:py-32 bg-studio-black overflow-hidden select-none">
      
      {/* Decorative moving visual glows */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-studio-orange/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading Tag */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[1.5px] bg-studio-orange" />
              <span className="text-xs font-mono tracking-widest text-studio-orange uppercase">THE INTEGRATION</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-none">
              OUR STRATEGIC<br />
              <span className="text-transparent text-stroke-orange font-light">WORK PROCESS</span>
            </h2>
          </div>
          <p className="max-w-xs text-neutral-400 text-sm md:text-base leading-relaxed font-light">
            We do not believe in luck or lightning-strike moments. We believe in meticulous execution pipelines that consistently deliver creative brilliance on tight margins.
          </p>
        </div>

        {/* Process Linear Grid Selector */}
        <div className="grid grid-cols-5 gap-3 border-b border-white/5 pb-8 mb-12 overflow-x-auto min-w-[650px] sm:min-w-0" id="timeline-triggers">
          {processSteps.map((step, idx) => {
            const isActive = activeStepIdx === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIdx(idx)}
                className="group flex flex-col text-left cursor-pointer outline-none relative"
                aria-label={`Go to step ${step.number}: ${step.title}`}
              >
                {/* Horizontal line selector overlay */}
                {isActive && (
                  <motion.div 
                    layoutId="activeProcessTimeline"
                    className="absolute top-0 left-0 w-full h-[2px] bg-studio-orange shadow-[0_0_8px_#FF6B00] z-10"
                    style={{ y: -1 }}
                  />
                )}

                <div className="pt-4 flex flex-col gap-2">
                  <span className={`text-xs md:text-sm font-mono tracking-wider ${isActive ? 'text-studio-orange font-bold' : 'text-neutral-600 group-hover:text-neutral-300 transition-colors'}`}>
                    PHASE_{step.number}
                  </span>
                  <h3 className={`text-sm md:text-base lg:text-lg font-bold uppercase truncate transition-colors duration-200 ${isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'}`}>
                    {step.title.split(' ')[0]} {/* Grab first word for high-density button */}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card Display utilizing high-end Motion transition layouts */}
        <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16 border border-white/5" id="process-content-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepIdx}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
            >
              {/* Left text description column */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl md:text-6xl font-black text-studio-orange/15 font-mono select-none">
                    {activeStep.number}
                  </span>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#555] block uppercase">// {activeStep.subtitle}</span>
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">{activeStep.title}</h3>
                  </div>
                </div>

                <p className="text-sm md:text-base font-light leading-relaxed text-neutral-300 mt-6 mb-8 col-span-3">
                  {activeStep.description}
                </p>

                {/* Micro operational standards indicators */}
                <div className="flex gap-4 border-t border-white/5 pt-8">
                  <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase">
                    <ClipboardList size={12} className="text-studio-orange" />
                    <span>SLA Approved Gateways</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 uppercase">
                    <Sparkles size={12} className="text-studio-orange animate-pulse" />
                    <span>In-House Audits</span>
                  </div>
                </div>
              </div>

              {/* Right deliverables Checklist Column */}
              <div className="lg:col-span-5 bg-studio-black/40 border border-white/5 rounded-2xl p-6 md:p-8">
                <h4 className="text-xs font-mono text-studio-orange tracking-widest uppercase mb-6 flex items-center gap-2">
                  <span>DEPLOYED DELIVERABLES</span>
                  <ChevronRight size={12} />
                </h4>

                <div className="flex flex-col gap-4">
                  {activeStep.deliverables.map((del, dIdx) => (
                    <motion.div 
                      className="flex items-start gap-3 text-xs md:text-sm text-neutral-300"
                      key={del}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: dIdx * 0.1 }}
                    >
                      <div className="p-1 rounded bg-studio-orange/10 border border-studio-orange/20 text-studio-orange mt-0.5">
                        <Check size={10} className="stroke-2" />
                      </div>
                      <span className="leading-tight font-light">{del}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
