export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Programming' | 'Frameworks' | 'CMS & E-commerce' | 'Analytics' | 'Infrastructure & Optimization';
  description: string;
  iconName: string;
  highlight?: boolean;
}

export const skillCategories = [
  'All',
  'Frontend',
  'Frameworks',
  'Programming',
  'CMS & E-commerce',
  'Analytics',
  'Infrastructure & Optimization',
] as const;

export const skillsData: SkillItem[] = [
  // Frameworks
  {
    name: 'React.js',
    category: 'Frameworks',
    description: 'Component architecture, Hooks, Custom State Management, Virtual DOM',
    iconName: 'Atom',
    highlight: true,
  },
  {
    name: 'Next.js',
    category: 'Frameworks',
    description: 'SSR, SSG, App Router, API Routes, Core Web Vitals optimization',
    iconName: 'Layers',
    highlight: true,
  },

  // Frontend
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    description: 'Utility-first design systems, responsive layouts, modern theme tokens',
    iconName: 'Palette',
    highlight: true,
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    description: 'Semantic markup, accessibility (a11y), clean DOM structure, SEO fundamentals',
    iconName: 'Code',
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    description: 'Flexbox, Grid, CSS animations, media queries, CSS variables',
    iconName: 'Layout',
  },
  {
    name: 'Bootstrap',
    category: 'Frontend',
    description: 'Grid systems, rapid prototyping, enterprise portal UI integration',
    iconName: 'Box',
  },
  {
    name: 'Material UI',
    category: 'Frontend',
    description: 'Theme customization, component styling, enterprise dashboard UI',
    iconName: 'Component',
  },

  // Programming
  {
    name: 'JavaScript (ES6+)',
    category: 'Programming',
    description: 'Async/Await, Closures, DOM manipulation, modular architecture',
    iconName: 'FileCode',
    highlight: true,
  },
  {
    name: 'TypeScript',
    category: 'Programming',
    description: 'Type safety, interfaces, strict compiler rules, scalable codebases',
    iconName: 'ShieldCheck',
    highlight: true,
  },
  {
    name: 'jQuery',
    category: 'Programming',
    description: 'Legacy web maintenance, DOM utilities, third-party plugin integration',
    iconName: 'Braces',
  },

  // CMS & E-commerce
  {
    name: 'WordPress',
    category: 'CMS & E-commerce',
    description: 'Custom theme development, plugin integration, headless WP setups',
    iconName: 'Globe',
    highlight: true,
  },
  {
    name: 'WooCommerce',
    category: 'CMS & E-commerce',
    description: 'Online store architecture, checkout customization, product catalogs',
    iconName: 'ShoppingBag',
    highlight: true,
  },
  {
    name: 'Shopify',
    category: 'CMS & E-commerce',
    description: 'Liquid templating, store customization, app integrations',
    iconName: 'Store',
    highlight: true,
  },
  {
    name: 'Magento 1.9',
    category: 'CMS & E-commerce',
    description: 'Enterprise catalog management, theme styling, multi-currency flows',
    iconName: 'Building2',
  },
  {
    name: 'OpenCart',
    category: 'CMS & E-commerce',
    description: 'E-commerce module extensions, responsive template adaptation',
    iconName: 'ShoppingCart',
  },

  // Analytics
  {
    name: 'Google Analytics 4',
    category: 'Analytics',
    description: 'Event tracking, conversion funnels, custom dimensions, user journey reports',
    iconName: 'BarChart3',
    highlight: true,
  },
  {
    name: 'Google Tag Manager',
    category: 'Analytics',
    description: 'Tag deployment, data layer configuration, trigger variables',
    iconName: 'Tag',
    highlight: true,
  },
  {
    name: 'Google Ads Conversion',
    category: 'Analytics',
    description: 'Remarketing pixels, lead conversion tracking, ROI measurement',
    iconName: 'Target',
  },

  // Infrastructure & Optimization
  {
    name: 'Website Optimization',
    category: 'Infrastructure & Optimization',
    description: 'Google PageSpeed Insights, Core Web Vitals (LCP, FID/INP, CLS)',
    iconName: 'Zap',
    highlight: true,
  },
  {
    name: 'Website Hosting & DNS',
    category: 'Infrastructure & Optimization',
    description: 'Domain configuration, SSL certificates, DNS propagation, CDN setup',
    iconName: 'Server',
  },
  {
    name: 'Website Migration',
    category: 'Infrastructure & Optimization',
    description: 'Zero-downtime server transfers, database exports, SEO link preservation',
    iconName: 'RefreshCw',
  },
  {
    name: 'Deployment & CI/CD',
    category: 'Infrastructure & Optimization',
    description: 'Vercel, Netlify, cPanel, Cloud servers, Git deployment pipelines',
    iconName: 'UploadCloud',
  },
];
