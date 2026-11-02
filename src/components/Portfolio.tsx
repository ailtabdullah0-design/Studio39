import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects } from '../data';
import { Project } from '../types';
import { Columns, Grid, Layers, X, PlusCircle, ArrowUpRight, FolderOpen } from 'lucide-react';

type FilterCategory = 'all' | 'video' | 'marketing' | 'graphic' | 'interior';

export default function Portfolio() {
  const [filter, setFilter] = useState<FilterCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter projects helper
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(proj => proj.category === filter);

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'video', label: 'Video Production' },
    { value: 'marketing', label: 'Digital Campaigns' },
    { value: 'graphic', label: 'Brand & Graphic' },
    { value: 'interior', label: 'Premium Interiors' }
  ];

  return (
    <section id="portfolio" className="relative py-24 md:py-32 bg-studio-black overflow-hidden select-none">
      
      {/* Decorative ambient visual lighting blocks */}
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-studio-orange/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Title Tag */}
        <div className="mb-16 md:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[1px] bg-studio-orange"></span>
            <span className="text-xs font-mono tracking-widest text-[#FF6B00] uppercase">PORTFOLIO DECK</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-none">
            SELECTED CAMPAIGNS<br />
            <span className="text-transparent text-stroke-orange font-light">& CREATIVES</span>
          </h2>
        </div>

        {/* Tab Filters layout (Editorial Aesthetic: Sharp Borders, Monospaced Vibe) */}
        <div className="flex flex-wrap gap-3 mb-12 border-b border-white/10 pb-8" id="portfolio-filters">
          {categories.map((cat) => {
            const isActive = filter === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value as FilterCategory)}
                className={`px-5 py-2.5 rounded-none text-[10px] uppercase tracking-widest font-bold cursor-pointer transition-all duration-300 border ${
                  isActive 
                    ? 'border-studio-orange bg-studio-orange text-[#0B0B0B] font-black' 
                    : 'border-white/10 text-white/60 hover:text-white hover:border-white/40'
                }`}
                aria-label={`Filter by ${cat.label}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid Masonry-Vibe Layout with Motion Layout interpolation */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              // Custom height classes on card layouts to achieve a dynamic "masonry visual rhythm"
              const isTall = idx === 1 || idx === 3 || idx === 6;
              const hClass = isTall ? 'aspect-[3/4]' : 'aspect-square';

              return (
                <motion.div
                  layout
                  key={project.id}
                  className={`group relative overflow-hidden rounded-2xl glass-card border border-white/5 ${hClass} cursor-pointer`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                  onClick={() => setSelectedProject(project)}
                  data-cursor-text="ZOOM"
                >
                  {/* Photo Component with hover triggers */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:blur-[1px]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-studio-black/20 to-transparent group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Glowing orange focus layer on hover */}
                  <div className="absolute inset-0 border border-studio-orange/0 group-hover:border-studio-orange/20 rounded-2xl transition-all duration-300 pointer-events-none" />

                  {/* Hover visual detailed block */}
                  <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col justify-end h-full">
                    {/* Hover items slide-up animations */}
                    <div className="transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[9px] font-mono tracking-widest text-studio-orange uppercase mb-1.5 block">
                        // {project.client}
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-wider mb-2 leading-tight group-hover:text-studio-orange transition-colors">
                        {project.title}
                      </h3>
                      
                      <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                        {project.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 rounded text-[9px] font-mono text-neutral-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Absolute Corner Expand indicator */}
                  <div className="absolute top-4 right-4 p-2 rounded-full bg-studio-black/40 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty placeholder filter safety */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-neutral-500 font-mono text-sm uppercase">
            <FolderOpen size={40} className="mx-auto mb-4 text-[#333]" />
            No Projects in this specific pillar yet
          </div>
        )}

        {/* Cinematic Lightbox overlay */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 select-none" id="portfolio-lightbox">
              <motion.div
                className="absolute inset-0 bg-studio-black/95 backdrop-blur-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
              />

              {/* Box core sheet */}
              <motion.div
                className="relative w-full max-w-5xl bg-[#111111] border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                id="lightbox-content"
              >
                {/* Close Button cursor pointer */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-studio-orange text-white hover:text-studio-black transition-all cursor-pointer z-10"
                  aria-label="Close project view"
                  id="lightbox-close"
                >
                  <X size={18} />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mt-6">
                  {/* Photo Column */}
                  <div className="lg:col-span-7 relative rounded-2xl overflow-hidden glass-card aspect-video lg:aspect-[4/3] group shadow-inner">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover rounded-2xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Strategic Metadata text column */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full">
                    <div>
                      {/* Sub Client line */}
                      <span className="text-xs font-mono tracking-widest text-studio-orange uppercase block mb-1">
                        // CLIENT: {selectedProject.client}
                      </span>
                      
                      <h3 className="text-2xl md:text-3.5xl font-black uppercase text-white tracking-wider leading-tight mb-4">
                        {selectedProject.title}
                      </h3>

                      <p className="text-sm font-light text-neutral-300 leading-relaxed mb-6">
                        {selectedProject.description}
                      </p>

                      {/* Technical specifications logs */}
                      <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6 mb-6">
                        <div>
                          <span className="text-[10px] font-mono text-[#555] block uppercase">Execution Year</span>
                          <span className="text-sm font-bold text-white uppercase">{selectedProject.year}</span>
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-[#555] block uppercase">Pillar Sector</span>
                          <span className="text-sm font-bold text-studio-orange uppercase">{selectedProject.category} Post</span>
                        </div>
                      </div>

                      {/* Tags loop */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {selectedProject.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-neutral-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Book similar project action trigger */}
                    <div className="border-t border-white/5 pt-6 flex flex-col gap-3">
                      <button
                        onClick={() => {
                          setSelectedProject(null);
                          const contactBlock = document.querySelector('#contact');
                          if (contactBlock) {
                            contactBlock.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                        className="w-full text-center bg-studio-orange hover:bg-studio-orange/92 text-white font-bold py-3.5 text-xs tracking-widest uppercase rounded cursor-pointer transition-colors shadow-lg shadow-studio-orange/10"
                        id="lightbox-cta"
                      >
                        Consult on Similar Solutions
                      </button>
                    </div>
                  </div>
                </div>

                {/* Foot layout metadata branding */}
                <div className="text-[8px] font-mono text-[#444] text-center uppercase tracking-widest pt-8 border-t border-white/5 mt-8">
                  CHITRO // CAMPAIGN CODE CHITRO-{selectedProject.id.toUpperCase()} // KHULNA HQ
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
