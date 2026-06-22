import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { statistics } from '../data';
import { Award, Heart, CheckSquare, Users } from 'lucide-react';

function CountingItem({ value, label, prefix, suffix, iconName }: { value: number; label: string; prefix?: string; suffix?: string; iconName?: string; key?: string }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    // Scale duration based on value size
    const duration = 1.8; // 1.8 seconds transition
    const incrementTime = Math.floor((duration * 1000) / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(timer);
      }
    }, Math.max(incrementTime, 12)); // Safeguard against rapid timelines

    return () => clearInterval(timer);
  }, [isInView, value]);

  // Icon mapping helper
  const renderIcon = (type: string) => {
    const classStyle = "text-studio-orange shrink-0 mb-4";
    switch(type) {
      case 'stat-projects': return <CheckSquare className={classStyle} size={28} />;
      case 'stat-clients': return <Heart className={classStyle} size={28} />;
      case 'stat-experience': return <Award className={classStyle} size={28} />;
      case 'stat-members': return <Users className={classStyle} size={28} />;
      default: return null;
    }
  };

  return (
    <div 
      ref={containerRef}
      className="flex flex-col items-center lg:items-start text-center lg:text-left glass-card p-8 md:p-10 rounded-2xl border border-white/[0.02]"
    >
      {renderIcon(iconName || '')}
      
      <div className="flex items-baseline gap-1 mb-2">
        {prefix && <span className="text-2xl md:text-4xl font-black text-white">{prefix}</span>}
        <span className="text-5xl md:text-7xl font-heading font-extrabold text-white tracking-tighter leading-none select-none">
          {count}
        </span>
        {suffix && <span className="text-3xl md:text-4xl font-extrabold text-studio-orange">{suffix}</span>}
      </div>

      <p className="text-xs font-mono tracking-widest text-neutral-400 uppercase mt-2">
        // {label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-20 bg-studio-dark overflow-hidden border-y border-white/5 select-none" id="stats">
      
      {/* Absolute decorative layout glow */}
      <div className="absolute top-[40%] right-[-10%] w-[300px] h-[300px] rounded-full bg-studio-orange/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <CountingItem
              key={stat.id}
              value={stat.value}
              label={stat.label}
              prefix={stat.prefix}
              suffix={stat.suffix}
              iconName={stat.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
