import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Trash2, Globe } from 'lucide-react';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  service: string;
  message: string;
  timestamp: string;
  status: 'PENDING EXECUTIVE AUDIT' | 'ACTIVE REVIEWS';
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'video',
    message: ''
  });

  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');
  const [pastInquiries, setPastInquiries] = useState<Inquiry[]>([]);
  const [showSubmissions, setShowSubmissions] = useState(false);

  // Load submissions from localStorage on load
  useEffect(() => {
    const saved = localStorage.getItem('s39_inquiries');
    if (saved) {
      try {
        setPastInquiries(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormState('sending');

    // Simulate elite post house network processing
    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: 'st39-' + Math.random().toString(36).substr(2, 7).toUpperCase(),
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) + ' ' + new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit' }),
        status: 'PENDING EXECUTIVE AUDIT'
      };

      const updated = [newInquiry, ...pastInquiries];
      setPastInquiries(updated);
      localStorage.setItem('s39_inquiries', JSON.stringify(updated));

      setFormState('success');
      setFormData({ name: '', email: '', service: 'video', message: '' });

      // Reset success notification after 5 seconds
      setTimeout(() => {
        setFormState('idle');
      }, 5000);
    }, 1800);
  };

  const handleDeleteInquiry = (id: string) => {
    const filtered = pastInquiries.filter(item => item.id !== id);
    setPastInquiries(filtered);
    localStorage.setItem('s39_inquiries', JSON.stringify(filtered));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-studio-black overflow-hidden select-none">
      
      {/* Decorative vector overlays */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-studio-orange/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Section Heading Tag */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-[1.5px] bg-studio-orange" />
            <span className="text-xs font-mono tracking-widest text-studio-orange uppercase">PROJECT DECK PITCH</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white leading-none">
            COMMISSION US IF YOU<br />
            <span className="text-transparent text-stroke-orange font-light">WANT TO DOMINATE</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Dynamic Pitch Form / User Inbox */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="glass-card rounded-3xl p-8 md:p-10 border border-white/5 relative overflow-hidden" id="brief-sheet">
              
              {/* Submission visual state tabs */}
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-studio-orange rounded-full animate-pulse" />
                  CHITRO-COMMISSION_LINK_SECURE
                </span>

                {pastInquiries.length > 0 && (
                  <button
                    onClick={() => setShowSubmissions(!showSubmissions)}
                    className="text-[10px] font-mono tracking-widest text-[#FF6B00] hover:text-white uppercase transition-colors pointer-events-auto cursor-pointer"
                  >
                    {showSubmissions ? 'Show Brief Sheet' : `My Briefs (${pastInquiries.length})`}
                  </button>
                )}
              </div>

              <AnimatePresence mode="wait">
                {showSubmissions && pastInquiries.length > 0 ? (
                  // User's Submitted Briefs panel
                  <motion.div
                    key="submissions-list"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col gap-4 max-h-[420px] overflow-y-auto pr-2"
                  >
                    <h3 className="text-sm font-mono tracking-widest text-neutral-400 uppercase mb-2">Registered Project Pitches</h3>
                    
                    {pastInquiries.map((inq) => (
                      <div 
                        key={inq.id}
                        className="p-5 rounded-xl bg-studio-dark border border-white/5 flex flex-col gap-3 group relative hover:border-studio-orange/20 transition-all"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] font-mono text-studio-orange block">{inq.id}</span>
                            <span className="text-xs font-mono text-neutral-500 uppercase">{inq.service} post pillar</span>
                          </div>
                          
                          <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-400 uppercase">
                            {inq.status}
                          </span>
                        </div>

                        <p className="text-xs text-neutral-300 font-light italic leading-relaxed line-clamp-2">
                          "{inq.message}"
                        </p>

                        <div className="flex justify-between items-center text-[9px] font-mono text-neutral-600 border-t border-white/5 pt-2 mt-1">
                          <span className="flex items-center gap-1"><Clock size={10} /> Deployed: {inq.timestamp}</span>
                          <button
                            onClick={() => handleDeleteInquiry(inq.id)}
                            className="text-neutral-500 hover:text-red-500 p-1 flex items-center gap-1 transition-colors cursor-pointer"
                            title="Delete brief"
                          >
                            <Trash2 size={10} /> Delete
                          </button>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  // Standard briefing input form
                  <motion.form
                    key="input-form"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.25 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                    id="contact-form"
                  >
                    {/* Name input row */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-name" className="text-xs font-mono tracking-wider text-neutral-400 uppercase">
                        Who Are You? *
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Naseem Anwer (Apex Beverage Ltd)"
                        required
                        className="w-full bg-[#151515] hover:bg-[#181818] border border-white/5 focus:border-studio-orange focus:outline-none p-4 rounded-xl text-sm font-medium text-white transition-all placeholder-[#555]"
                      />
                    </div>

                    {/* Email input row */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-email" className="text-xs font-mono tracking-wider text-neutral-400 uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. managing@apex.com"
                        required
                        className="w-full bg-[#151515] hover:bg-[#181818] border border-white/5 focus:border-studio-orange focus:outline-none p-4 rounded-xl text-sm font-medium text-white transition-all placeholder-[#555]"
                      />
                    </div>

                    {/* Project select inputs */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-service" className="text-xs font-mono tracking-wider text-neutral-400 uppercase">
                        Select Focus Pillar
                      </label>
                      <select
                        id="form-service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-[#151515] hover:bg-[#181818] border border-white/5 focus:border-studio-orange focus:outline-none p-4 rounded-xl text-sm font-medium text-white transition-all cursor-pointer"
                      >
                        <option value="video">Cinematic Video Editing (DaVinci Post)</option>
                        <option value="marketing">Digital Marketing & ROI Growth Systems</option>
                        <option value="graphic">Brand Identity & brutal systems design</option>
                        <option value="interior">Corporate & Premium luxury Interior architectures</option>
                        <option value="multi">All sectors (Multi-Disciplinary Campaign)</option>
                      </select>
                    </div>

                    {/* Scope description text block */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-message" className="text-xs font-mono tracking-wider text-neutral-400 uppercase">
                        Brief Outline & Milestones *
                      </label>
                      <textarea
                        id="form-message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe target market, campaign specs, and desired visual themes..."
                        required
                        className="w-full bg-[#151515] hover:bg-[#181818] border border-white/5 focus:border-studio-orange focus:outline-none p-4 rounded-xl text-sm font-medium text-white transition-all placeholder-[#555] resize-none"
                      />
                    </div>

                    {/* Submit layout area */}
                    <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-4">
                      <span className="text-[10px] font-mono text-[#555] text-center sm:text-left leading-relaxed">
                        By deploying this brief, you initiate an in-house feasibility review. We respond in under 12 hours.
                      </span>

                      <button
                        type="submit"
                        disabled={formState !== 'idle'}
                        className={`w-full sm:w-auto px-8 py-4 rounded font-bold text-xs uppercase tracking-widest cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                          formState === 'sending'
                            ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                            : formState === 'success'
                            ? 'bg-green-700 text-white shadow-green-900/10'
                            : 'bg-studio-orange text-white hover:bg-studio-orange/92 hover:-translate-y-0.5 shadow-studio-orange/15'
                        }`}
                        id="brief-submit-btn"
                      >
                        {formState === 'sending' ? (
                          <>
                            <motion.div 
                              className="w-3.5 h-3.5 rounded-full border border-neutral-600 border-t-white"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            />
                            <span>Encrypting...</span>
                          </>
                        ) : formState === 'success' ? (
                          <>
                            <CheckCircle size={14} />
                            <span>Pitch Registered</span>
                          </>
                        ) : (
                          <>
                            <span>Transmit Brief</span>
                            <Send size={12} />
                          </>
                        )}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column - Address details & Interactive Vector SVG Dhaka Map */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Core Contact Cards */}
            <div className="flex flex-col gap-6">
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-studio-orange">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-[#555] tracking-widest uppercase mb-1">Corporate HQ address</h4>
                  <p className="text-sm font-semibold text-white uppercase block">Floor 7, Glass Tower Block Alpha</p>
                  <p className="text-xs font-light text-neutral-400">Road 12, Gulshan-1, Dhaka 1212, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-studio-orange">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-[#555] tracking-widest uppercase mb-1">Secure Digital Mail</h4>
                  <p className="text-sm font-semibold text-white hover:text-studio-orange transition-colors"><a href="mailto:pitch@chitro.media">pitch@chitro.media</a></p>
                  <p className="text-xs font-light text-neutral-400">Direct query lines with strategic directors</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-studio-orange">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono text-[#555] tracking-widest uppercase mb-1">VOIP Communications</h4>
                  <p className="text-sm font-semibold text-white uppercase"><a href="tel:+8801739393939">+880 1739-393939</a></p>
                  <p className="text-xs font-light text-neutral-400">Office hours (GMT+6): 10:00 AM &mdash; 08:00 PM</p>
                </div>
              </div>
            </div>

            {/* Custom Google Maps Integration - Fully Interactive Vector custom Dhaka map blueprint blueprint layout  */}
            <div 
              className="relative aspect-video lg:aspect-square rounded-3xl glass-card overflow-hidden border border-white/5 flex flex-col justify-between p-6 cursor-crosshair group"
              id="vector-dhaka-map"
            >
              {/* Map background grid visual design of Gulshan Lakes & Streets layout blueprints */}
              <div className="absolute inset-0 z-0 bg-[#070707] transition-all group-hover:bg-[#040404] duration-75">
                <svg viewBox="0 0 400 400" className="w-full h-full opacity-35 group-hover:opacity-65 transition-opacity" xmlns="http://www.w3.org/2000/svg">
                  {/* Lakes elements */}
                  <path d="M 50,50 Q 80,120 120,160 T 220,180 T 320,380" fill="none" stroke="#222" strokeWidth="8" />
                  <path d="M 280,30 Q 250,110 320,160 T 380,240" fill="none" stroke="#222" strokeWidth="4" />
                  
                  {/* Grid Roads */}
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#161616" strokeWidth="1" />
                  <line x1="0" y1="200" x2="400" y2="200" stroke="#1c1c1c" strokeWidth="1.5" />
                  <line x1="0" y1="300" x2="400" y2="300" stroke="#161616" strokeWidth="1" />
                  
                  <line x1="100" y1="0" x2="100" y2="400" stroke="#161616" strokeWidth="1" />
                  <line x1="200" y1="0" x2="200" y2="400" stroke="#1d1d1d" strokeWidth="1.5" />
                  <line x1="300" y1="0" x2="300" y2="400" stroke="#161616" strokeWidth="1" />

                  {/* Gulshan Avenue central road (Bright highlight vector) */}
                  <path d="M 200,0 Q 180,180 230,220 T 260,400" fill="none" stroke="#333" strokeWidth="1.5" className="group-hover:stroke-studio-orange/35 transition-colors" />
                  <path d="M 0,220 Q 220,220 220,220" fill="none" stroke="#333" strokeWidth="1" />
                  
                  {/* Target coordinates rings */}
                  <circle cx="215" cy="205" r="15" fill="none" stroke="#FF6B00" strokeWidth="0.5" strokeDasharray="3" className="animate-[spin_20s_infinite_linear]" />
                  <circle cx="215" cy="205" r="5" fill="none" stroke="#FF6B00" strokeWidth="1" />
                </svg>
              </div>

              {/* Top map telemetry info */}
              <div className="relative z-10 flex justify-between items-start text-[8px] font-mono text-[#444] group-hover:text-neutral-400 transition-colors uppercase">
                <div>LOC_RADAR // DHAKA GULSHAN OFFICE</div>
                <div>SECURE LINK</div>
              </div>

              {/* Pulsing Orange Pinpoint */}
              <div className="absolute top-[51%] left-[54%] z-10 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                {/* Ping rings */}
                <span className="absolute w-8 h-8 rounded-full bg-studio-orange/20 animate-ping pointer-events-none" />
                <span className="w-3.5 h-3.5 rounded-full bg-studio-orange border-2 border-[#111] shadow-[0_0_15px_#FF6B00] z-20" />
                
                {/* Floating label tag */}
                <motion.div 
                  className="bg-[#111] border border-studio-orange/30 px-3 py-1.5 rounded-lg text-[9px] font-mono text-white mt-2 font-bold uppercase whitespace-nowrap shadow-xl"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                >
                  CHITRO HQ // ROAD 12
                </motion.div>
              </div>

              {/* Bottom map coordinates info */}
              <div className="relative z-10 flex justify-between items-end">
                <div className="text-[10px] font-mono text-neutral-400">
                  <div className="font-extrabold text-white text-xs">GULSHAN-1 COORDS</div>
                  <div className="text-[#666]">23.7749° N, 90.4150° E</div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 bg-studio-orange/10 border border-studio-orange/20 rounded text-[9px] font-mono text-studio-orange uppercase font-bold">
                  <Globe size={8} /> Active Radar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
