import { Project, Service, Testimonial, BlogPost, ProcessStep, WhyUsReason } from './types';

export const services: Service[] = [
  {
    id: 'video',
    title: 'Cinematic Video Editing',
    iconName: 'Video',
    description: 'Award-winning narrative and commercial editing. We craft pacing, color, and sound into unforgettable cinema.',
    details: 'Our post-production house blends advanced offline editing, sound engineering, and high-fidelity color grading in DaVinci Resolve.',
    features: ['4K/8K HDR Post-Production', 'Dynamic Motion Typography & VFX', 'Advanced Spatial Sound Design', 'Cinematic Color Grading (LUTs Crafting)'],
    stats: '240M+ Cumulative Views'
  },
  {
    id: 'marketing',
    title: 'Digital Marketing & Strategy',
    iconName: 'Megaphone',
    description: 'Hyper-targeted performance marketing campaigns designed to scale digital businesses across South Asia and beyond.',
    details: 'From positioning strategies to creative ad execution, we optimize every pixel and Taka to turn target demographics into life-long brand champions.',
    features: ['Omnichannel Creative Campaigns', 'ROAS Optimization & Lead Engines', 'South-Asian Influencer Networks', 'Deep Analytics & Conversion Funnels'],
    stats: 'Up to 6.2x Average ROAS'
  },
  {
    id: 'graphic',
    title: 'Graphic & Brand Design',
    iconName: 'Palette',
    description: 'Brutalist, elegant, and timeless visual identities. We design logos, design systems, and packaging that command attention.',
    details: 'We believe brand design is a strategic blueprint, not just decoration. We blend modern European brutalism with rich Bangladeshi heritage textures.',
    features: ['Comprehensive Graphic Standards', 'Bespoke Package Design', '3D Asset Design & Typography', 'Interactive Design Systems (Figma/Web)'],
    stats: '45+ Brands Reimagined'
  },
  {
    id: 'interior',
    title: 'Premium Interior Design',
    iconName: 'Layout',
    description: 'Bespoke architectural spaces. We orchestrate luxury minimalist layouts, corporate HQs, and retail environments.',
    details: 'CHITRO structures physical space with a high-end cinematic attitude. We integrate custom metalwork, concrete brutality, and orange ambient lighting.',
    features: ['Corporate HQ Space Orchestration', 'Luxurious Minimalist Residential', 'Interactive Lighting Design', 'Custom Craft Furniture Design'],
    stats: '120k+ Sq. Ft. Sculpted'
  }
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'The Pulse of Dhaka',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1542204172-e7052809a850?auto=format&fit=crop&q=80&w=800',
    client: 'Dhaka Arts Collective',
    tags: ['Cinematic Directing', 'Soundscape', 'Color Grading'],
    description: 'A multi-award winning urban documentary chronicling Dhaka\'s vibrant nightlife, glowing neon rickshaws, and concrete heartbeat styled in high-contrast cinema.',
    year: '2025'
  },
  {
    id: 'proj-2',
    title: 'Aarong Narrative Campaign',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1505156012773-b1c8f55772a1?auto=format&fit=crop&q=80&w=800',
    client: 'Aarong Lifestyle',
    tags: ['Brand Re-Positioning', 'Campaign Narrative', 'Photography'],
    description: 'Reintroducing heritage Bangladeshi textiles to Gen-Z through modern brutalist lifestyle layouts and influencer storytelling, driving a 2.4x hike in native e-commerce engagement.',
    year: '2026'
  },
  {
    id: 'proj-3',
    title: 'Brutalist Legacy Identity',
    category: 'graphic',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800',
    client: 'Bengal Craft Brewery',
    tags: ['Custom Logotype', 'Packaging Design', '3D Mockups'],
    description: 'A rebellious, bespoke design language for Bengal\'s leading beverage labels. Utilizing hand-drawn type, heavy typography alignments, and neon copper-foil textures.',
    year: '2025'
  },
  {
    id: 'proj-4',
    title: 'Banani Glasshouse Lounge',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    client: 'Apex Duplex Lounge',
    tags: ['Luxury Minimalism', 'Lighting Scenographies', 'Custom Woodworks'],
    description: 'An elite lounge space in Banani, Dhaka. Featuring raw sand-blasted concrete monolithic blocks, rich Burmese teak wood accents, and warm concealed glowing lights.',
    year: '2026'
  },
  {
    id: 'proj-5',
    title: 'Pathao Food Campaign',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    client: 'Pathao Delivery Ltd',
    tags: ['Performance Campaign', 'Visual Content Scripting', 'SEO Engagements'],
    description: 'CHITRO created 12 high-octane rapid-cut video ads and mapped targeted creative funnels, scaling app orders during Ramadan of 2025 to record milestones.',
    year: '2025'
  },
  {
    id: 'proj-6',
    title: 'CHITRO Khulna Workspace HQ',
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    client: 'CHITRO In-house',
    tags: ['Brutalist Architecture', 'Industrial Steel', 'Orange Neon Lines'],
    description: 'Our own headquarters in Khulna, sculpted to act as a physical manifesto of our brand identity: deep black matte walls, industrial metal plates, and vibrant orange LED shafts.',
    year: '2026'
  },
  {
    id: 'proj-7',
    title: 'Cyberpunk Sound EP Movie',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=800',
    client: 'Vocaloid Labs South-Asia',
    tags: ['VFX Editing', 'Hyper-lapse Coding', 'Pacing'],
    description: 'A fast-paced, high-frame-rate visualizer merging futuristic Cyberpunk elements with Dhaka street-culture elements, designed for an international audio project rollout.',
    year: '2026'
  },
  {
    id: 'proj-8',
    title: 'Bangladesh Art Summit Poster System',
    category: 'graphic',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
    client: 'National Art Archive',
    tags: ['Brutal Poster Systems', 'Silkscreen Framing', 'Cultural Identity'],
    description: 'Visual system and spatial branding for the 2026 Dhaka Contemporary Art Exhibit. Using raw monochromatic layouts offset with high-contrast screen-printed orange layers.',
    year: '2026'
  }
];

export const reasons: WhyUsReason[] = [
  {
    title: 'Creative Thinking',
    description: 'We don\'t do templates. Every concept starts on a clean blackboard, built from raw emotion and authentic strategy.',
    metric: '100%',
    metricLabel: 'Bespoke Concepts'
  },
  {
    title: 'Result-Driven Strategy',
    description: 'We couple gorgeous cinematography and typography with bulletproof ROI tracking, analytics dashboards, and campaign analytics.',
    metric: '6.2x',
    metricLabel: 'Average ROAS Metric'
  },
  {
    title: 'Premium Quality',
    description: 'We implement elite design standards, cinematic 4K resolution specs, color correction files, and flawless construction components.',
    metric: 'Ultra-HD',
    metricLabel: 'Production Standard'
  },
  {
    title: 'Experienced Team',
    description: 'A stellar network of directors, packaging gurus, performance marketers, and architects working in perfect, fluid sync.',
    metric: '15+',
    metricLabel: 'Creative Mavericks'
  },
  {
    title: 'Fast Delivery',
    description: 'We operate with agile production schedules and rapid-loop feedback pipelines to deploy campaigns with zero friction.',
    metric: '100%',
    metricLabel: 'On-Time Milestones'
  },
  {
    title: 'Dedicated Support',
    description: 'Direct Slack, WhatsApp, and physical access to creative directors throughout the course of your mission.',
    metric: '24/7',
    metricLabel: 'Dedicated SLA Channel'
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Audit',
    subtitle: 'Extracting Essence',
    description: 'We dive deep into your brand, run detailed competitor analysis, unpack your creative blockages, and discover what truly triggers your target audience.',
    deliverables: ['Creative Action Brief', 'Competitor Visual Audit', 'Aesthetic Positioning Matrix']
  },
  {
    number: '02',
    title: 'Strategic Framework',
    subtitle: 'Planning The Script',
    description: 'We map out a bulletproof strategy, establishing cinematic themes, design direction mockups, copywriting tones, and campaign funnel coordinates.',
    deliverables: ['Creative Concept Deck', 'Ad Funnel Blueprints', 'Media Architecture Plan']
  },
  {
    number: '03',
    title: 'Premium Design Lab',
    subtitle: 'Structuring Layouts',
    description: 'This is where typography meets space. We compose logo structures, interior mood board mockups, 3D visualizations, and interactive UI frameworks.',
    deliverables: ['Custom Brand Assets', 'Spatial Architectural CADs', 'Interactive Prototypes']
  },
  {
    number: '04',
    title: 'Cinematic Production',
    subtitle: 'Crafting Masterpieces',
    description: 'Our high-intensity production run. We edit footage with meticulous pacing, grade colors with high-tension glows, and execute visual campaigns.',
    deliverables: ['Master 4K Video Files', 'Live Target Campaigns', 'Custom Built Spaces']
  },
  {
    number: '05',
    title: 'Flawless Delivery',
    subtitle: 'Igniting the Senses',
    description: 'We launch, publish, and open are creations to the world. We continuous optimize, gather user feedback maps, and secure maximum return of vision.',
    deliverables: ['Completed Campaign Source Pack', 'ROAS Performance Audit', 'Photographic Project Debrief']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Naseem Anwer',
    role: 'Chief Marketing Officer',
    company: 'Bengal Beverages Ltd.',
    quote: 'CHITRO transformed our local beverage line into a premium cult brand overnight. Their graphic standards, video editing precision, and sheer strategic drive surpassed any agency we have ever worked with.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-2',
    name: 'Sabeera Rahman',
    role: 'Brand Lead',
    company: 'Apex Design Collective',
    quote: 'The Banani duplex lounge designed by CHITRO represents the absolute peak of modern luxury interior architectures in Dhaka. Raw concrete offset with warm orange LED lighting - it is a sheer masterpiece!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-3',
    name: 'Imran Chowdhury',
    role: 'Development Chief',
    company: 'Hive Co-working Dhaka',
    quote: 'From digital campaigns that convert, to video edits that raise adrenaline, CHITRO is the only team we entrust our real estate growth strategies to. Highly responsive, premium design craft experts.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'test-4',
    name: 'Mark Henderson',
    role: 'Founder',
    company: 'Elysium Agency London',
    quote: 'Even working remotely across continents, CHITRO delivered world-class graphic identities and video components. Their taste level is exceptionally high. Deep blacks and vitalizing orange are their playground.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'The Brutalist Rebellion: Decoding Dhaka\'s Spatial & Branding Shift',
    excerpt: 'Why raw concrete blocks and minimalist typography are taking over modern Banani and Gulshan workspaces, shifting away from generic visual clutter.',
    date: 'June 18, 2026',
    category: 'Design Philosophy',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=500',
    readTime: '5 min read',
    author: {
      name: 'Nayeem Hasan',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100'
    }
  },
  {
    id: 'blog-2',
    title: 'Mastering Cinematic Pacing: The Secret Behind High-Retention Videography',
    excerpt: 'How audio-visual micro-beats, sound spatialization, and strict color-blocking can keep your viewers hooked for the crucial first 3 seconds of a commercial ad.',
    date: 'May 28, 2026',
    category: 'Video Craft',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=500',
    readTime: '7 min read',
    author: {
      name: 'Zishan Karim',
      role: 'Chief Editor',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100'
    }
  },
  {
    id: 'blog-3',
    title: 'How We Scaled Pathao\'s ROAS: A Behind-The-Scenes Marketing Case Study',
    excerpt: 'An in-depth look at how we combined rapid-production user-generated style videos with contextual programmatic targeting maps in South Asia.',
    date: 'April 14, 2026',
    category: 'Growth & Strategy',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=500',
    readTime: '10 min read',
    author: {
      name: 'Farhana Chowdhury',
      role: 'Performance Lead',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100'
    }
  }
];

export const statistics = [
  { id: 'stat-projects', value: 180, label: 'Projects Completed', prefix: '', suffix: '+' },
  { id: 'stat-clients', value: 95, label: 'Happy Clients', prefix: '', suffix: '%' },
  { id: 'stat-experience', value: 8, label: 'Years Experience', prefix: '', suffix: '+' },
  { id: 'stat-members', value: 16, label: 'Team Members', prefix: '', suffix: '' }
];
