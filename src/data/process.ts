export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  output: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Understand Requirements',
    subtitle: 'Discovery & Goal Alignment',
    description:
      'We begin by diving deep into your business objectives, target audience, technical specifications, and key performance benchmarks to lay a crystal-clear foundation.',
    activities: [
      'Comprehensive project scope & feature audit',
      'Understanding target user expectations & business KPI goals',
      'Reviewing existing tech stack, design files, or legacy assets',
      'Clarifying milestones, deliverables, and communication cadence',
    ],
    output: 'Clear Project Scope & Architecture Roadmap',
  },
  {
    number: '02',
    title: 'Plan & Design',
    subtitle: 'System Architecture & UX Blueprint',
    description:
      'Translating your vision into technical architecture, component wireframes, design tokens, and modular directory structures for seamless development.',
    activities: [
      'Detailed component breakdown & design system mapping',
      'Database schema / API contract definition (where applicable)',
      'Responsive layout planning for desktop, tablet, and mobile',
      'Sprint scheduling & milestone planning',
    ],
    output: 'Technical Specifications & UI Component Matrix',
  },
  {
    number: '03',
    title: 'Development',
    subtitle: 'Clean, Scalable & Pixel-Perfect Code',
    description:
      'Writing modular, maintainable, and type-safe code using modern React, Next.js, TypeScript, and Tailwind CSS. Daily commits and continuous feedback loops.',
    activities: [
      'Pixel-perfect translation of Figma / PSD design assets',
      'State management, API integration, and dynamic routing',
      'Smooth, non-jarring micro-animations via Framer Motion',
      'CMS configuration (WordPress, Shopify, WooCommerce)',
    ],
    output: 'Production-Ready Codebase & Interactive Staging Build',
  },
  {
    number: '04',
    title: 'Testing & Optimization',
    subtitle: 'Performance, Cross-Browser & QA',
    description:
      'Rigorous quality assurance across modern web browsers, physical devices, and real network conditions. Fine-tuning Core Web Vitals and analytics tracking.',
    activities: [
      'Cross-browser compatibility testing (Chrome, Safari, Firefox, Edge)',
      'Mobile responsiveness testing on diverse screen resolutions',
      'Google PageSpeed Insights & Core Web Vitals optimization',
      'GA4 event & conversion tracking verification',
    ],
    output: 'Tested, High-Speed & Accessible Web Application',
  },
  {
    number: '05',
    title: 'Deployment & Support',
    subtitle: 'Launch, Zero Downtime & Long-Term Reliability',
    description:
      'Smooth production deployment, DNS setup, SSL certification, and post-launch monitoring to guarantee your website runs without interruption.',
    activities: [
      'Production deployment (Vercel, Netlify, cPanel, or Cloud VPS)',
      'Domain configuration, DNS management, and SSL certificate setup',
      'Handover documentation, component guide, or CMS training',
      'Post-launch warranty, ongoing maintenance, and feature iterations',
    ],
    output: 'Live Production Website & Ongoing Peace of Mind',
  },
];
