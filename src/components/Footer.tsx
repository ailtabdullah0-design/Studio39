import React from 'react';
import { Instagram, Linkedin, Facebook, ArrowUp, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-studio-black border-t border-white/5 py-12 md:py-16 select-none overflow-hidden" id="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 flex flex-col gap-12">
        {/* Top Link rows */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-white/5">
          {/* Logo Brand Meta Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, '#home')}
              className="inline-flex items-center gap-2"
            >
              <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-widest leading-none">
                CHIT<span className="text-studio-orange font-light">RO</span>
              </h3>
              <div className="w-1.5 h-1.5 rounded-full bg-studio-orange shadow-[0_0_8px_#FF6B00]" />
            </a>
            
            <p className="max-w-xs text-xs md:text-sm font-light text-neutral-400 leading-relaxed uppercase mt-2">
              Bespoke digital solutions post production, visual campaigning, brutal packaging graphics, and spatial architectural layouts.
            </p>
          </div>

          {/* Quick links columns */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <h4 className="text-xs font-mono text-studio-orange tracking-widest uppercase mb-2">QUICK NAVIGATION</h4>
            <ul className="flex flex-col gap-2">
              {['Home', 'Services', 'About', 'Portfolio', 'Process', 'Contact'].map((nav) => (
                <li key={nav}>
                  <a 
                    href={`#${nav.toLowerCase()}`}
                    onClick={(e) => handleNavClick(e, `#${nav.toLowerCase()}`)}
                    className="text-xs md:text-sm text-neutral-400 hover:text-white hover:underline transition-colors block"
                  >
                    &raquo; {nav}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services quick links column */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-mono text-studio-orange tracking-widest uppercase mb-2">Pillar Services</h4>
            <p className="text-xs text-neutral-500 font-mono leading-relaxed mb-1 uppercase">KHULNA HQ SECURE COMPLIANCE</p>
            <ul className="grid grid-cols-1 gap-2 text-xs text-neutral-400">
              <li>&bull; Cinematic Post Action (Video)</li>
              <li>&bull; Programmatic Campaigns & Performance (Marketing)</li>
              <li>&bull; Brutalist Identity Systems (Graphics)</li>
              <li>&bull; Monolithic Concrete Arenas (Interiors)</li>
            </ul>
          </div>
        </div>

        {/* Bottom Social Media and Copyright actions row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-[10px] font-mono text-[#555] uppercase text-center sm:text-left leading-normal">
            &copy; {currentYear} CHITRO Ltd. All rights reserved. Deployed from Khulna, Bangladesh.<br />
            Visual components secure SLA. Auth system verification.
          </div>

          <div className="flex items-center gap-6">
            {/* Social channels */}
            <div className="flex gap-4 text-neutral-500">
              <a href="#instagram" className="hover:text-studio-orange transition-colors" title="Instagram Channel"><Instagram size={16} /></a>
              <a href="#linkedin" className="hover:text-studio-orange transition-colors" title="LinkedIn Channel"><Linkedin size={16} /></a>
              <a href="#facebook" className="hover:text-studio-orange transition-colors" title="Facebook Page"><Facebook size={16} /></a>
              <a href="#khulna" className="hover:text-studio-orange transition-colors" title="Bangladesh Registry"><Globe size={16} /></a>
            </div>

            {/* Back to top bullet button */}
            <button
              onClick={handleScrollTop}
              className="p-3 bg-white/5 border border-white/10 hover:border-studio-orange hover:bg-studio-orange hover:text-studio-black text-white rounded transition-all cursor-pointer"
              title="Return to top"
              id="footer-back-to-top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
