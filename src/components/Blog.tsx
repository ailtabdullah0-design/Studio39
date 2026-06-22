import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { blogPosts } from '../data';
import { BlogPost } from '../types';
import { Clock, Calendar, ArrowRight, X, User } from 'lucide-react';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Creative write-ups mapping to expand case detail content
  const getFullArticleText = (id: string, title: string) => {
    switch(id) {
      case 'blog-1':
        return `
          ### Introduction
          In recent years, the visual identity of metropolitan Dhaka has undergone a seismic shift. Walk through any newly structured building in Banani, Gulshan, or Dhanmondi, and you will notice a common theme: raw sand-blasted concrete walls, industrial steel pipelines, open ceilings, and minimalistic, high-contrast typography. This is architectural brutalism colliding with brand design - and it is completely reforming how businesses in Bangladesh talk to their audiences.

          ### Overcoming Visual Pollution
          For decades, the South Asian commercial space was dominated by high-saturation billboards, bloated layouts, and frantic, competing slogans. Every square Taka of a creative canvas was stuffed with graphics. It created high environmental fatigue. Today, local trailblazers are discovering that silence is actually the loudest thing in the room.

          ### Case Point: Studio39 HQ philosophy
          When designing our own creative laboratory in Dhaka, we chose raw, tactile industrial materials. This physical brutalism translates directly into our digital layout blueprints:
          1. **Tight typographic scales**: Choosing classic premium grotesque fonts (Outfit, Space Grotesk) and aligning them with strict vertical grids.
          2. **Vibrant color-blocking**: Isolating deep, infinite matte blacks with precise, hyper-pigmented bursts of electric orange.
          3. **Intelligent raw assets**: Dropping heavy borders in favor of fluid glassmorphism sheets, negative spacing, and subtle micro-shadowing.

          ### Summary
          This aesthetic shift is not just a trend; it is a declaration of confidence. Brands are proving that safe legacies can successfully communicate with GenZ audiences under strict, elite graphic systems. Minimalist brutalism has landed in Dhaka, and it is here to command.
        `;
      case 'blog-2':
        return `
          ### The Battle for Neural Real Estate
          With average user attention spans dropping to less than 2.8 seconds, high-retaining digital videography is no longer an art-piece: it is a highly calculated psychological combat. If your visual pace is slow, the viewer swerves away.

          ### The Studio39 Videography Formula
          To construct high-retention post production pieces for clients like Pathao and Bengal Beverages, we execute under a strict three-tier editing framework:

          #### 1. The Critical Frame Hook
          The first 1.5 seconds must feature a highly contrastive, physical sound or visual punch. We use tight motion cropping, split-second reverse audio beats, and bright color adjustments to trigger an immediate dopamine tick in the scrolling index.

          #### 2. The Soundscape Anchor
          generic commercial backing music is dead. We custom-mix environmental audio effects (Rickshaw bells, distant traffic, concrete hammers, mechanical key taps) and structure them into tight rhythms to act as temporal anchors. The pacing of the edit is physically driven by these audio spikes, not just the bassline.

          #### 3. Strict Color Blocking (LUT Design)
          We build robust, custom Look-Up Tables (LUTs). By keeping high-contrast colors locked within specific shades (deep matte charcoal, neon copper foil, warm amber lights), we keep the viewer's eyes directed to key campaign triggers.

          ### Summary
          Great cinematic post production does not look expensive because of the camera used. It looks elite because the pace respects target psychology, dragging viewers down a meticulous path of custom audio-visual micro-moments.
        `;
      case 'blog-3':
        return `
          ### Background
          When Pathao, Bangladesh's leading ride-sharing and food delivery titan, launched its premium Ramadan campaigns, they confronted a massive puzzle: how do you capture active orders in a saturated, high-bidding programmatic space where CPCs are skyrocketing?

          ### The Studio39 Performance Blueprint
          Other standard design houses delivered static carousel banners or bloated promotional videos. Studio39 came to the matrix armed with custom programmatic video funnels and context-mapped targets:

          #### First Step: Dynamic Multi-Variant Cuts
          Instead of compiling one single 30-second ad, we filmed and executed over 16 distinct rapid-cut variant videos. Each version was tailored around different micro themes: late-night Sehri cravings, Banani traffic avoidance times, and family Iftar warmth.

          #### Second Step: Contextual Scheduling
          We synchronized are performance ad bids to run in direct correlation with local meteorological and traffic API conditions. If Dhaka rain maps spiked or roads in Gulshan-1 locked up, our targeted "Instant Hot Iftar Delivery" ads went live immediately with elevated bids.

          #### Third Step: Trust Building Graphics
          We replaced generic template stock graphics with high-contrast, brutalist typography and photography featuring actual delivery partners on Dhaka streets, building immediate local authenticity.

          ### The Final Metrics
          - **Cumulative CTR Increase**: +120% improvement compared to previous season averages.
          - **Average Campaign ROAS**: 6.2x average metric.
          - **Total Conversion Volumetrics**: Pathao’s highest logged singular campaign milestone.

          ### Summary
          Visual aesthetic is only half the battle. Coupling creative excellence with hyper-contextual scheduling algorithms is how Studio39 transforms branding into high-performance revenue engines.
        `;
      default:
        return 'Detailed Case Study text compiling... Please consult our Dhaka post house for specific campaign audit spreadsheets.';
    }
  };

  return (
    <section id="blog" className="relative py-24 md:py-32 bg-studio-dark overflow-hidden select-none">
      
      {/* Decorative background visual blob */}
      <div className="absolute bottom-[20%] left-[-15%] w-96 h-96 rounded-full bg-studio-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading Tag */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-[1.5px] bg-studio-orange" />
              <span className="text-xs font-mono tracking-widest text-studio-orange uppercase">JOURNAL & INSIGHTS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-none">
              LATEST PERSPECTIVES<br />
              <span className="text-transparent text-stroke-orange font-light">& CASE CONCEPTS</span>
            </h2>
          </div>
          <p className="max-w-xs text-neutral-400 text-sm md:text-base leading-relaxed font-light">
            We don't keep our discoveries hidden. Read our detailed write-ups on design systems, video editing pacing, and conversion performance strategies.
          </p>
        </div>

        {/* Blog Post Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="blog-posts-grid">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              className="group relative rounded-2xl glass-card hover:bg-neutral-900 border border-white/[0.02] hover:border-studio-orange/15 transition-all duration-300 flex flex-col h-full cursor-pointer overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedPost(post)}
              data-cursor-text="READ"
            >
              {/* Photo Area with visual scaling */}
              <div className="overflow-hidden aspect-video border-b border-white/5 relative bg-neutral-950">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-115 brightness-90 group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                
                {/* Float Category card */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-studio-black/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-mono font-medium tracking-wide text-studio-orange">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Text Area layout */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  {/* Meta indices row */}
                  <div className="flex gap-4 items-center text-[10px] text-neutral-500 font-mono uppercase mb-4">
                    <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold uppercase text-white mb-4 line-clamp-2 leading-snug group-hover:text-studio-orange transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-400 font-light text-xs md:text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Card Button footer link */}
                <div className="flex justify-between items-center border-t border-white/5 pt-5 mt-auto">
                  <div className="flex items-center gap-3">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-6 h-6 rounded-full object-cover border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    <span className="text-[10px] font-mono text-neutral-400">{post.author.name} &bull; {post.author.role}</span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-mono text-studio-orange group-hover:gap-2.5 transition-all text-glow">
                    <span>Read Text</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Case detail expansion interactive lightbox */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6" id="blog-reader-modal">
              <motion.div
                className="absolute inset-0 bg-studio-black/92 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
              />

              {/* Text sheet */}
              <motion.div
                className="relative w-full max-w-3xl bg-[#111111] border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl overflow-y-auto max-h-[85vh]"
                initial={{ scale: 0.95, y: 30, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 30, opacity: 0 }}
                transition={{ duration: 0.35 }}
                id="blog-reader-content"
              >
                {/* Close pointer button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-studio-orange text-white hover:text-studio-black transition-all cursor-pointer z-10"
                  aria-label="Close article reader"
                  id="blog-reader-close"
                >
                  <X size={18} />
                </button>

                {/* Article Header info */}
                <div className="mb-8 pb-6 border-b border-white/5 mt-4">
                  <span className="px-3 py-1 bg-studio-orange/10 border border-studio-orange/20 rounded-full text-[10px] font-mono tracking-widest text-studio-orange uppercase mb-4 inline-block">
                    {selectedPost.category}
                  </span>
                  
                  <h3 className="text-2xl md:text-3.5xl font-black uppercase text-white tracking-wider leading-tight mb-4">
                    {selectedPost.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 items-center text-[10px] text-neutral-400 font-mono uppercase">
                    <span className="flex items-center gap-1.5"><Calendar size={12} className="text-studio-orange"  /> {selectedPost.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-studio-orange" /> {selectedPost.readTime}</span>
                    <span className="flex items-center gap-1.5"><User size={12} className="text-studio-orange" /> {selectedPost.author.name} ({selectedPost.author.role})</span>
                  </div>
                </div>

                {/* Article markdown style copy */}
                <div className="text-neutral-300 font-light text-sm md:text-base leading-relaxed flex flex-col gap-5 whitespace-pre-line overflow-y-auto max-h-[45vh] pr-2">
                  {getFullArticleText(selectedPost.id, selectedPost.title)}
                </div>

                {/* Back action */}
                <div className="border-t border-white/5 pt-6 mt-8 flex justify-between items-center text-[9px] font-mono text-[#555] uppercase tracking-widest">
                  <span>STUDIO39 // JOURNAL CODE {selectedPost.id.toUpperCase()}</span>
                  <button 
                    onClick={() => setSelectedPost(null)}
                    className="text-studio-orange hover:font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Close Sheet
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
