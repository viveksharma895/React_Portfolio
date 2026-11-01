export interface ProjectItem {
  id: string;
  title: string;
  clientType: string;
  category: 'All' | 'React & Next.js' | 'E-commerce & CMS' | 'Enterprise';
  summary: string;
  challenge: string;
  solution: string;
  technologies: string[];
  liveUrl?: string;
  demoNote?: string;
  isEnterpriseClient?: boolean;
  featured: boolean;
  accentColor: string;
}

export const projectCategories = ['All', 'Enterprise', 'React & Next.js', 'E-commerce & CMS'] as const;

export const projectsData: ProjectItem[] = [
  {
    id: 'tata-motors',
    title: 'Tata Motors Digital Experience & Showroom Portal',
    clientType: 'Enterprise Automotive Client (via AdGlobal360 Hakuhodo)',
    category: 'Enterprise',
    isEnterpriseClient: true,
    summary:
      'Engineered scalable, responsive frontend interfaces for Tata Motors digital ecosystem, ensuring rapid vehicle configuration and seamless lead generation.',
    challenge:
      'High traffic volume demanding sub-second load times, complex interactive vehicle feature comparisons, and strict brand design compliance across desktop and mobile.',
    solution:
      'Built modular React components with optimized asset pipelines, implemented fine-grained Core Web Vitals optimizations, and streamlined user exploration funnels.',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'GTM', 'Core Web Vitals'],
    liveUrl: 'https://www.viveksharmacoder.in/',
    demoNote: 'Enterprise Production Client — Deliverable under AdGlobal360 Hakuhodo',
    featured: true,
    accentColor: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'maruti-suzuki',
    title: 'Maruti Suzuki Dealer & Customer Web Platform',
    clientType: 'Enterprise Automotive Leader (via AdGlobal360 Hakuhodo)',
    category: 'Enterprise',
    isEnterpriseClient: true,
    summary:
      'Delivered robust web modules for Maruti Suzuki dealership engagement and customer enquiry management, integrating real-time telemetry and analytics.',
    challenge:
      'Coordinating cross-functional delivery across distributed Agile teams, managing complex state across multiple user flows, and maintaining cross-browser parity.',
    solution:
      'Architected reusable component libraries, integrated GA4 and Google Ads conversion events for attribution, and enforced automated performance checks.',
    technologies: ['React.js', 'JavaScript (ES6+)', 'HTML5/CSS3', 'GA4', 'Google Tag Manager', 'REST API'],
    liveUrl: 'https://www.viveksharmacoder.in/',
    demoNote: 'Enterprise Production Client — Deliverable under AdGlobal360 Hakuhodo',
    featured: true,
    accentColor: 'from-cyan-600 to-blue-700',
  },
  {
    id: 'nextjs-headless-commerce',
    title: 'Headless Next.js E-Commerce Storefront',
    clientType: 'E-commerce / Retail Showcase',
    category: 'React & Next.js',
    summary:
      'Ultra-fast headless e-commerce storefront engineered with Next.js App Router, featuring instant cart updates and mobile-first responsive interactions.',
    challenge:
      'Traditional monolithic e-commerce platforms suffered from sluggish transitions, poor PageSpeed scores, and low mobile checkout conversion.',
    solution:
      'Decoupled the frontend using Next.js Server Components, implemented optimistic UI updates for cart items, and achieved 95+ Lighthouse performance scores.',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'TypeScript', 'Shopify / REST API', 'Framer Motion'],
    liveUrl: 'https://www.viveksharmacoder.in/',
    demoNote: 'Featured Showcase — Code & Live Architecture Available on Request',
    featured: true,
    accentColor: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'woocommerce-brand-store',
    title: 'Custom WooCommerce Premium Brand Store',
    clientType: 'Direct-to-Consumer Brand',
    category: 'E-commerce & CMS',
    summary:
      'Bespoke WordPress & WooCommerce store with custom product builders, tailored checkout flow, and automated stock notification integration.',
    challenge:
      'Off-the-shelf themes loaded bloated external plugins that weighed down server response times and disrupted mobile customer checkout.',
    solution:
      'Developed a custom, lightweight WordPress theme from scratch, optimized database queries, minimized third-party dependencies, and added custom conversion tracking.',
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'JavaScript', 'Tailwind CSS', 'Google Tag Manager'],
    liveUrl: 'https://www.viveksharmacoder.in/',
    demoNote: 'Client Case Project — Custom WordPress Theme & Checkout Customization',
    featured: false,
    accentColor: 'from-purple-600 to-indigo-700',
  },
  {
    id: 'saas-landing-conversion',
    title: 'High-Impact B2B SaaS Landing Page',
    clientType: 'Tech Startup / Venture-backed SaaS',
    category: 'React & Next.js',
    summary:
      'Pixel-perfect conversion landing page translated directly from high-fidelity Figma designs with smooth interactive scroll animations.',
    challenge:
      'Translating intricate Figma designer specs, interactive pricing calculator, and micro-interactions without causing layout shifts or frame drops.',
    solution:
      'Built using React and Framer Motion with hardware-accelerated transforms, balanced typography, and client-side form validation connected to CRM webhook.',
    technologies: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Figma to Code', 'GA4 Event Tracking'],
    liveUrl: 'https://www.viveksharmacoder.in/',
    demoNote: 'Figma to Code Showcase — Tested on Chrome, Safari, Firefox, Edge',
    featured: false,
    accentColor: 'from-amber-600 to-orange-700',
  },
  {
    id: 'magento-performance-revamp',
    title: 'Magento E-Commerce Speed & Core Web Vitals Audit',
    clientType: 'High-SKU Multi-Category Retailer',
    category: 'E-commerce & CMS',
    summary:
      'Comprehensive performance overhaul of an enterprise multi-category store, eliminating render-blocking scripts and boosting PageSpeed score.',
    challenge:
      'Heavy unoptimized product hero images, unminified legacy scripts, and Cumulative Layout Shift (CLS) degrading user trust and search rankings.',
    solution:
      'Converted image pipelines to WebP, implemented critical CSS inlining, delayed non-essential third-party analytics scripts, and tuned server caching headers.',
    technologies: ['Magento', 'Core Web Vitals', 'Google PageSpeed', 'GTmetrix', 'JavaScript', 'Nginx Cache'],
    liveUrl: 'https://www.viveksharmacoder.in/',
    demoNote: 'Performance Audit & Optimization Deliverable',
    featured: false,
    accentColor: 'from-rose-600 to-pink-700',
  },
];
