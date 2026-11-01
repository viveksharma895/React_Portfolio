export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
  features: string[];
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Website Development',
    tagline: 'Modern, scalable web solutions tailored for business impact',
    iconName: 'LayoutGrid',
    description:
      'High-performance, cleanly architected websites built from the ground up using React, Next.js, and modern frontend tools. Designed to convert visitors into loyal clients.',
    features: [
      'Business websites & corporate web portals',
      'High-converting landing pages for marketing campaigns',
      'React and Next.js Single & Multi-Page Applications',
      'Clean, modular, and maintainable component architectures',
    ],
    deliverables: ['Responsive Web App', 'SEO-Ready Markup', 'Component Design System', 'Clean GitHub Repository'],
  },
  {
    id: 'figma-code',
    number: '02',
    title: 'Figma / PSD to Code',
    tagline: 'Pixel-perfect translation from UI designs to working code',
    iconName: 'FileCode2',
    description:
      'Turn your design files (Figma, Adobe XD, PSD) into living, breathing web code that accurately reflects every margin, font weight, color shade, and interactive state.',
    features: [
      'Pixel-perfect design conversion down to the exact pixel',
      '100% fluid responsive development across all viewports',
      'Cross-browser testing (Chrome, Safari, Firefox, Edge)',
      'Subtle, delightful micro-animations & interaction states',
    ],
    deliverables: ['Production-grade Code', 'WCAG AA Compliant UI', 'Mobile & Tablet Optimized', 'Zero Layout Shift'],
  },
  {
    id: 'ecommerce',
    number: '03',
    title: 'E-commerce Development',
    tagline: 'Storefronts built to maximize cart conversion & retention',
    iconName: 'ShoppingBag',
    description:
      'Custom online shopping experiences powered by WooCommerce, Shopify, or Magento. From product discovery to friction-free checkout, every step is optimized for sales.',
    features: [
      'WordPress & WooCommerce custom stores and checkout funnels',
      'Shopify custom theme setup and Liquid template adjustments',
      'Magento 1.9 enterprise maintenance and feature extensions',
      'Secure payment gateway integration and order automation',
    ],
    deliverables: ['Custom Theme Setup', 'Payment & Shipping Integration', 'Catalog Configuration', 'Speed Optimization'],
  },
  {
    id: 'performance',
    number: '04',
    title: 'Website Performance Optimization',
    tagline: 'Lightning-fast load times that rank higher on Google',
    iconName: 'Gauge',
    description:
      'Diagnosing and resolving speed bottlenecks, reducing render-blocking resources, and improving Core Web Vitals to elevate user retention and organic SEO rankings.',
    features: [
      'Google PageSpeed Insights & GTmetrix score boosting',
      'Core Web Vitals remediation (LCP, FID/INP, CLS)',
      'Image compression, WebP conversion, and next-gen asset delivery',
      'Script deferral, CSS tree-shaking, and code-splitting',
    ],
    deliverables: ['Performance Audit Report', 'Core Web Vitals Pass', 'Asset Optimization', 'Under 2s First Contentful Paint'],
  },
  {
    id: 'analytics',
    number: '05',
    title: 'Analytics & Tracking',
    tagline: 'Accurate data attribution to measure every marketing rupee',
    iconName: 'LineChart',
    description:
      'Flawless tracking architecture setup so your marketing team never loses attribution. Gain clear visibility into user behaviors, conversion funnels, and ROAS.',
    features: [
      'Google Analytics 4 (GA4) full implementation & custom events',
      'Google Tag Manager (GTM) data layer variables & triggers',
      'Google Ads conversion tracking & remarketing tags',
      'Form submission, button click, and scroll depth tracking',
    ],
    deliverables: ['GTM Container Configuration', 'GA4 Event Dashboard', 'Conversion Tag Verification', 'Data Layer Guide'],
  },
  {
    id: 'maintenance',
    number: '06',
    title: 'Website Maintenance & Support',
    tagline: 'Dependable long-term support so your business never stalls',
    iconName: 'Wrench',
    description:
      'Reliable technical partnership for ongoing website updates, security patches, bug fixes, redesigns, and seamless server migrations without downtime.',
    features: [
      'Swift bug fixing, troubleshooting, and UI adjustments',
      'Website redesign, brand revamps, and feature enhancements',
      'Reliable hosting management, DNS records, and SSL renewals',
      'Proactive monitoring, backups, and security patching',
    ],
    deliverables: ['Fast Turnaround Support', 'Security & Backup Checks', 'Monthly Performance Health Checks', 'DNS & Server Peace of Mind'],
  },
];
