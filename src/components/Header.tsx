import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Linkedin, Globe } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ activeSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of sticking header
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-studio-black/85 backdrop-blur-md py-4 border-b border-white/5 py-4' 
          : 'bg-transparent py-6'
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Visual Brand Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 group"
          id="logo-anchor"
        >
          <span className="text-xl md:text-2xl font-extrabold tracking-tighter text-white uppercase flex items-center">
            CHIT<span className="text-studio-orange font-light">RO</span>
          </span>
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-studio-orange shadow-[0_0_8px_#FF6B00]"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </a>

        {/* Desktop Navigation Link Cluster */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors duration-200 ${
                  isActive ? 'text-studio-orange' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 w-full h-[1.5px] bg-studio-orange shadow-[0_0_8px_#FF6B00]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Contact Indicators */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-5 py-2 group rounded-none font-bold text-xs tracking-widest uppercase border border-studio-orange text-studio-orange hover:bg-studio-orange hover:text-[#0B0B0B] transition-all duration-300"
            id="header-cta"
          >
            <span>Pitch Project</span>
          </a>
        </div>

        {/* Responsive Mobile Trigger button */}
        <button
          className="lg:hidden text-white hover:text-studio-orange p-1 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          id="mobile-drawer-trigger"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Slide - glass animated */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 w-[80%] max-w-sm bg-studio-black/95 backdrop-blur-xl border-l border-white/5 z-50 p-8 flex flex-col justify-between"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            id="mobile-drawer"
          >
            {/* Header Area inside drawer */}
            <div className="flex justify-between items-center">
              <span className="text-xl font-extrabold text-white tracking-widest uppercase">
                CHIT<span className="text-studio-orange font-light">RO</span>
              </span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-studio-orange transition-colors"
                id="drawer-close"
              >
                <X size={20} />
              </button>
            </div>

            {/* List Anchors inside Drawer */}
            <nav className="flex flex-col gap-5 my-auto">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-xl font-heading font-medium tracking-wide uppercase ${
                      isActive ? 'text-studio-orange pl-2 border-l-2 border-studio-orange' : 'text-neutral-400'
                    }`}
                    whileHover={{ x: 5, color: '#FF6B00' }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </nav>

            {/* Drawer Lower section socials and locations */}
            <div className="flex flex-col gap-6">
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full text-center bg-studio-orange hover:bg-studio-orange/90 text-white font-bold py-3 text-sm tracking-widest uppercase rounded cursor-pointer"
              >
                Let's Partner
              </a>

              <div className="flex gap-4 justify-center text-neutral-500">
                <a href="#instagram" className="hover:text-studio-orange transition-colors"><Instagram size={18} /></a>
                <a href="#linkedin" className="hover:text-studio-orange transition-colors"><Linkedin size={18} /></a>
                <a href="#dhaka" className="hover:text-studio-orange transition-colors"><Globe size={18} /></a>
              </div>

              <div className="text-center text-[10px] font-mono text-[#444]">
                DHAKA, BANGLADESH // GULSHAN OFFICE
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
