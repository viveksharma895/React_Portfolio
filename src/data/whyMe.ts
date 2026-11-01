export interface WhyMePillar {
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export const whyMePillars: WhyMePillar[] = [
  {
    title: 'Clean & Maintainable Code',
    tagline: 'Built to scale, easy to hand over',
    description:
      'I structure code with modular components, strict TypeScript typing, and intuitive directory hierarchies so any developer can onboard in minutes.',
    iconName: 'Code2',
  },
  {
    title: 'Pixel-Perfect UI Development',
    tagline: 'Figma to reality with microscopic accuracy',
    description:
      'Designs are preserved with surgical accuracy—respecting spacing, typestyle, micro-interactions, and visual harmony exactly as crafted.',
    iconName: 'Sparkles',
  },
  {
    title: 'Responsive & Cross-Browser Ready',
    tagline: 'Flawless across every screen and browser',
    description:
      'Extensively tested on mobile, tablet, 4K desktops, and modern engines (Blink, WebKit, Gecko) to eliminate visual glitches everywhere.',
    iconName: 'Smartphone',
  },
  {
    title: 'Performance & Core Web Vitals Focus',
    tagline: 'Under 2-second load times that Google loves',
    description:
      'I optimize Largest Contentful Paint (LCP), prevent layout shifts (CLS), and minimize JavaScript execution to boost organic SEO and user retention.',
    iconName: 'Zap',
  },
  {
    title: 'Multi-CMS & E-Commerce Mastery',
    tagline: 'From custom React to Shopify, WordPress & Magento',
    description:
      'Deep hands-on experience across both modern JavaScript frameworks and industry CMS platforms means I pick the right tool for your specific business goal.',
    iconName: 'ShoppingBag',
  },
  {
    title: 'Reliable Communication & Timely Delivery',
    tagline: 'No ghosting, no surprises, consistent progress',
    description:
      'Transparent milestones, proactive status updates, and clear timelines. I respect your schedule and keep commitments sacred.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Flexible Collaboration Models',
    tagline: 'Freelance sprints, retainer support, or dedicated delivery',
    description:
      'Whether you are a startup needing an MVP launch, an agency seeking a senior frontend contractor, or an enterprise needing stability, I adapt to your workflow.',
    iconName: 'Handshake',
  },
];
