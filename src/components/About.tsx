import { motion } from 'motion/react';
import { Target, Eye, Award, Sparkles, MapPin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Nayeem Hasan',
    role: 'Co-Founder & Creative Director',
    specialty: 'Packaging & Spatial Directing',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300'
  },
  {
    name: 'Zishan Karim',
    role: 'Lead Post-Production Artist',
    specialty: 'Offline Editing & Sounds',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300'
  },
  {
    name: 'Farhana Chowdhury',
    role: 'Partner, Performance Director',
    specialty: 'Marketing Tactics & Funnels',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300'
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-studio-black overflow-hidden select-none">
      <div className="absolute top-[20%] right-[-10%] w-72 h-72 rounded-full bg-studio-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 animate-fade-in-up">
        {/* Section Heading Tag */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-[1.5px] bg-studio-orange" />
            <span className="text-xs font-mono tracking-widest text-studio-orange uppercase">WHO WE ARE</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-none">
            RE-DEFINING VISUAL SECTOR<br />
            <span className="text-transparent text-stroke-orange font-light">IN BANGLADESH</span>
          </h2>
        </div>

        {/* Story Intro / Mission Vision split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          {/* Left Column Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-neutral-300">
            <h3 className="text-2xl md:text-3xl font-bold uppercase text-white tracking-tight">
              We operate at the volatile intersection of cinematic narrative & high-conversion visual design.
            </h3>
            <p className="leading-relaxed font-light text-neutral-400">
              Founded in Dhaka, Studio39 emerged from a shared frustration with cookie-cutter corporate designs and template commercial videos. We saw an opportunity to establish an elite visual authority that marries cutting-edge European brutalist philosophies with the vibrant heritage of Bangladesh.
            </p>
            <p className="leading-relaxed font-light text-neutral-400">
              Whether editing high-retention video stories, composing robust performance ad frameworks, structuring graphic systems, or architectural spatial designs—we sculpt with custom aesthetics that refuse to blend into the background.
            </p>

            <div className="flex gap-8 mt-4 border-t border-white/5 pt-8">
              <div>
                <h4 className="text-4xl md:text-5xl font-black text-studio-orange">08+</h4>
                <p className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase mt-1">Creative Seasons</p>
              </div>
              <div className="border-r border-white/10" />
              <div>
                <h4 className="text-4xl md:text-5xl font-black text-studio-orange">180+</h4>
                <p className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase mt-1">Active Deliveries</p>
              </div>
              <div className="border-r border-white/10" />
              <div>
                <h4 className="text-4xl md:text-5xl font-black text-studio-orange"> Dhaka</h4>
                <p className="text-[10px] font-mono tracking-wider text-neutral-400 uppercase mt-1">HQ Central Location</p>
              </div>
            </div>
          </div>

          {/* Right Column Mission & Vision blocks */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Mission Box */}
            <motion.div 
              className="glass-card-orange p-8 rounded-2xl flex gap-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-3 bg-studio-orange/10 border border-studio-orange/20 rounded-xl max-h-min text-studio-orange">
                <Target size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Our Mission</h4>
                <p className="text-sm font-light text-neutral-400 leading-relaxed">
                  To eliminate visual mediocrity by arming bold brands with cinematic materials and physical architectures that translate cultural essence into unmatched market attention.
                </p>
              </div>
            </motion.div>

            {/* Vision Box */}
            <motion.div 
              className="glass-card p-8 rounded-2xl flex gap-6"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl max-h-min text-white">
                <Eye size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white uppercase tracking-wider mb-2">Our Vision</h4>
                <p className="text-sm font-light text-neutral-400 leading-relaxed">
                  To elevate Bangladeshi post-production and design standards to the global forefront—establishing Studio39 as an international paradigm of raw, luxury visual craft.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Team Highlights Row */}
        <div>
          <div className="flex justify-between items-end mb-12 border-b border-white/5 pb-6">
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white flex items-center gap-2">
              <Award size={20} className="text-studio-orange" />
              The Creative Command
            </h3>
            <span className="text-[10px] font-mono text-neutral-500 uppercase">MAVERICKS IN UNIFIED SYNC</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <motion.div
                key={member.name}
                className="group relative overflow-hidden rounded-2xl glass-card aspect-square md:aspect-[4/5]"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                data-cursor-text="CREATOR"
              >
                {/* Photo with responsive hover filters */}
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 filter grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-90"
                  referrerPolicy="no-referrer"
                />

                {/* Card Glow bottom shadow block */}
                <div className="absolute inset-0 bg-gradient-to-t from-studio-black via-studio-black/20 to-transparent opacity-80 group-hover:from-studio-black group-hover:opacity-90 transition-opacity duration-300" />

                {/* Team detail details overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col gap-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-mono tracking-widest text-studio-orange uppercase flex items-center gap-1">
                    <MapPin size={8} /> {member.specialty}
                  </span>
                  <h4 className="text-lg md:text-xl font-bold text-white tracking-widest uppercase truncate">{member.name}</h4>
                  <p className="text-xs font-light text-neutral-400 group-hover:text-neutral-300 transition-colors">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
