import React from 'react';
import {
  Code2,
  Sparkles,
  Smartphone,
  Zap,
  ShoppingBag,
  CheckCircle2,
  Handshake,
  Check,
} from 'lucide-react';
import { whyMePillars } from '../data/whyMe';

const renderWhyIcon = (iconName: string) => {
  const props = { className: 'w-6 h-6 text-[#c8f31d] group-hover:scale-110 transition-transform duration-300' };
  switch (iconName) {
    case 'Code2':
      return <Code2 {...props} />;
    case 'Sparkles':
      return <Sparkles {...props} />;
    case 'Smartphone':
      return <Smartphone {...props} />;
    case 'Zap':
      return <Zap {...props} />;
    case 'ShoppingBag':
      return <ShoppingBag {...props} />;
    case 'CheckCircle2':
      return <CheckCircle2 {...props} />;
    case 'Handshake':
      return <Handshake {...props} />;
    default:
      return <CheckCircle2 {...props} />;
  }
};

export const WhyWorkWithMe: React.FC = () => {
  return (
    <section id="why-me" className="py-24 md:py-32 relative bg-[#0e0f11] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18191d] border border-white/10 text-xs font-mono font-bold text-[#c8f31d] uppercase tracking-widest mb-3">
              <span>Why Hire Me</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Why Work With Me?
            </h2>
          </div>
          <p className="text-sm text-[#9ea0a6] max-w-md mt-4 md:mt-0 font-mono">
            Direct collaboration with a senior delivery engineer. Fast turnarounds and zero compromise.
          </p>
        </div>

        {/* 7 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyMePillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className={`group relative bg-[#18191d] hover:bg-[#1e1f25] border border-white/5 hover:border-[#c8f31d]/40 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 shadow-xl ${
                idx === 6 ? 'md:col-span-2 lg:col-span-3 lg:max-w-xl lg:mx-auto w-full' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#121316] border border-white/10 rounded-xl group-hover:border-[#c8f31d]/30 transition-colors shrink-0">
                  {renderWhyIcon(pillar.iconName)}
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-[#c8f31d] transition-colors mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#c8f31d] mb-2.5">
                    {pillar.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#9ea0a6] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Assurance Box */}
        <div className="mt-14 p-8 rounded-3xl bg-[#18191d] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl font-bold text-white font-display">Direct Access, Zero Agency Middlemen</h4>
            <p className="text-xs sm:text-sm text-[#9ea0a6] max-w-xl">
              You communicate directly with Vivek Sharma—the senior engineer writing and architecting your code. Instant feedback, faster turnaround, and zero miscommunication.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-mono font-bold text-black bg-[#c8f31d] px-4 py-2 rounded-full flex items-center gap-2">
              <Check className="w-3.5 h-3.5" /> Rapid Turnaround Guaranteed
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
