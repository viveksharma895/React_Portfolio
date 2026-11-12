import React from 'react';
import { Briefcase, Calendar, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';

export const Resume: React.FC = () => {
  const experiences = [
    {
      period: '2022 - PRESENT',
      role: 'Engineer Delivery',
      company: 'AdGlobal360 Hakuhodo, Ltd.',
      location: 'Gurgaon, Haryana, India',
      description:
        'Leading frontend engineering delivery for enterprise clients including Pulse Shift Tool, Maruti Suzuki, TVS Motors, and Muthoot Finance. Architecting scalable, responsive web experiences with strict performance budgets, sub-second LCP, and seamless cross-browser parity.',
      skills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Core Web Vitals', 'GTM', 'Agile Delivery'],
    },
    {
      period: '2019 - 2022',
      role: 'Senior Frontend & E-Commerce Developer',
      company: 'Digital Solutions & Enterprise Brands',
      location: 'India',
      description:
        'Specialized in converting complex Figma and PSD specifications into pixel-perfect React and Next.js applications. Engineered custom WooCommerce and Shopify storefronts with optimized checkout funnels and conversion tracking.',
      skills: ['React.js', 'Next.js', 'WordPress', 'WooCommerce', 'Shopify Liquid', 'Figma to Code', 'GA4'],
    },
    {
      period: '2016 - 2019',
      role: 'Frontend & CMS Developer',
      company: 'Web Agency & Client Services',
      location: 'India',
      description:
        'Built modern responsive websites, corporate portals, and e-commerce stores across Magento 1.9, OpenCart, and WordPress. Handled DNS setup, server migrations, and website speed optimizations.',
      skills: ['JavaScript ES6+', 'HTML5/CSS3', 'WordPress Theme Dev', 'Magento 1.9', 'Bootstrap', 'Website Migration'],
    },
  ];

  return (
    <section id="resume" className="py-12 sm:py-16 md:py-32 bg-[#121316] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18191d] border border-white/10 text-xs font-mono font-bold text-[#c8f31d] uppercase tracking-widest mb-3">
              <span>Experience Timeline</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Work Experience
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#9ea0a6] max-w-sm mt-4 md:mt-0 font-mono">
            8+ years trajectory delivering web systems for enterprise leaders &amp; ambitious clients.
          </p>
        </div>

        {/* Experience Cards (Geekfolio Resume Style) */}
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group p-6 sm:p-8 rounded-2xl bg-[#18191d] hover:bg-[#1e1f25] border border-white/5 hover:border-[#c8f31d]/40 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Time & Company (4 cols) */}
                <div className="lg:col-span-4 space-y-1">
                  <span className="text-xs font-mono font-bold text-[#c8f31d] tracking-wider uppercase block">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-white font-display group-hover:text-[#c8f31d] transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-[11px] text-zinc-400 font-mono">
                    {exp.location}
                  </p>
                </div>

                {/* Description & Skills (8 cols) */}
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-sm text-[#9ea0a6] leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-xs font-mono bg-[#121316] text-zinc-300 border border-white/5 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
