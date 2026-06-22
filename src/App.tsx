import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import WorkProcess from './components/WorkProcess';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'portfolio', 'process', 'why-us', 'testimonials', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset for header trigger height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-studio-black text-[#E2E8F0] overflow-x-hidden selection:bg-studio-orange selection:text-white">
      {/* 1. Preloader Screen */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      {!loading && (
        <>
          {/* 2. Custom follow pointer dot cursor */}
          <CustomCursor />

          {/* 3. Glowing background noise overlay */}
          <div className="fixed inset-0 z-[1] noise-overlay pointer-events-none" />

          {/* 4. Core Agency Structural Modules */}
          <div className="relative z-10">
            <Header activeSection={activeSection} />
            <Hero />
            <Services />
            <About />
            <Portfolio />
            <WorkProcess />
            <WhyChooseUs />
            <Stats />
            <Testimonials />
            <Blog />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
}
