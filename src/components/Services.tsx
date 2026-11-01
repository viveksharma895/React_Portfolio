import React from 'react';
import {
  LayoutGrid,
  FileCode2,
  ShoppingBag,
  Gauge,
  LineChart,
  Wrench,
  Check,
  ArrowUpRight,
} from 'lucide-react';
import { servicesData } from '../data/services';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const renderServiceIcon = (iconName: string) => {
  const props = { className: 'w-6 h-6 text-[#c8f31d]' };
  switch (iconName) {
    case 'LayoutGrid':
      return <LayoutGrid {...props} />;
    case 'FileCode2':
      return <FileCode2 {...props} />;
    case 'ShoppingBag':
      return <ShoppingBag {...props} />;
    case 'Gauge':
      return <Gauge {...props} />;
    case 'LineChart':
      return <LineChart {...props} />;
    case 'Wrench':
      return <Wrench {...props} />;
    default:
      return <LayoutGrid {...props} />;
  }
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0e0f11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18191d] border border-white/10 text-xs font-mono font-bold text-[#c8f31d] uppercase tracking-widest mb-3">
              <span>What I Offer</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              What I Can Do For Your Business
            </h2>
          </div>
          <p className="text-sm text-[#9ea0a6] max-w-md mt-4 md:mt-0">
            High-caliber frontend engineering and full-funnel web development services designed to scale your operations, accelerate speed-to-market, and maximize conversions.
          </p>
        </div>

        {/* 6 Geekfolio Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="group relative bg-[#18191d] hover:bg-[#1e1f25] border border-white/5 hover:border-[#c8f31d]/50 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              <div>
                {/* Header with Number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#121316] border border-white/10 rounded-xl group-hover:border-[#c8f31d]/30 transition-colors">
                    {renderServiceIcon(service.iconName)}
                  </div>
                  <span className="font-mono text-base font-extrabold text-[#c8f31d]">
                    {service.number}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-white mb-2 font-display group-hover:text-[#c8f31d] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-medium text-[#c8f31d] mb-4">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-[#9ea0a6] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-4 border-t border-white/5 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-[#c8f31d] mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Inquire Action Button */}
              <button
                onClick={() => onSelectService(service.title)}
                className="w-full mt-2 py-3 px-4 flex items-center justify-center gap-2 text-xs font-extrabold uppercase tracking-wider text-white hover:text-black bg-[#121316] hover:bg-[#c8f31d] border border-white/10 hover:border-[#c8f31d] rounded-xl transition-all duration-200"
              >
                <span>Inquire About This</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
