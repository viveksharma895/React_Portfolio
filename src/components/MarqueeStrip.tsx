import React from 'react';

export const MarqueeStrip: React.FC = () => {
  const items = [
    'React.js Developer',
    'Next.js 15',
    'Pulse Shift Tool',
    'Maruti Suzuki Platform',
    'TVS Motors Digital',
    'Muthoot Finance Web',
    'WordPress & WooCommerce',
    'Shopify Headless',
    'TypeScript ES6+',
    'Core Web Vitals 95+',
    'Figma to Pixel-Perfect Code',
    'Google Analytics 4 & GTM',
    'AdGlobal360 Hakuhodo Delivery',
  ];

  return (
    <div className="w-full overflow-hidden border-y border-white/10 bg-[#141518] py-5">
      <div className="animate-marquee flex items-center space-x-10 text-xs sm:text-sm font-extrabold tracking-widest uppercase text-white font-display">
        {items.map((item, idx) => (
          <div key={`m1-${idx}`} className="flex items-center gap-6 shrink-0">
            <span>{item}</span>
            <span className="text-[#c8f31d] text-base">★</span>
          </div>
        ))}
        {items.map((item, idx) => (
          <div key={`m2-${idx}`} className="flex items-center gap-6 shrink-0">
            <span>{item}</span>
            <span className="text-[#c8f31d] text-base">★</span>
          </div>
        ))}
      </div>
    </div>
  );
};
