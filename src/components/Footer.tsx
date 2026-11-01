import React from 'react';
import { ArrowUp, Phone, Mail, Globe, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Works' },
    { id: 'resume', label: 'Resume' },
    { id: 'skills', label: 'Skills' },
    { id: 'process', label: 'Process' },
    { id: 'why-me', label: 'Why Me' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-[#0e0f11] border-t border-white/10 text-[#9ea0a6] pt-20 pb-12 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Geekfolio Callout Header */}
        <div className="pb-16 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#c8f31d] block mb-2">
              Have a Project?
            </span>
            <h2 className="text-3xl sm:text-6xl font-black text-white font-display tracking-tight leading-tight">
              LET'S TALK <span className="text-[#c8f31d]">TOGETHER</span>
            </h2>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-black bg-[#c8f31d] hover:bg-white rounded-full transition-all shadow-xl shadow-[#c8f31d]/20 w-fit"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-14 border-b border-white/5">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-white block font-display">
                Vivek Sharma
              </span>
              <p className="text-xs font-semibold text-[#c8f31d] mt-1 font-mono uppercase tracking-wider">
                Engineer Delivery &amp; Frontend Developer
              </p>
            </div>
            <p className="text-xs text-[#9ea0a6] leading-relaxed max-w-sm">
              Currently working as Engineer Delivery at AdGlobal360 Hakuhodo, Ltd. Delivering scalable web platforms for Tata Motors and Maruti Suzuki.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#c8f31d]" />
              <span>Gurgaon, Haryana, India</span>
            </div>
          </div>

          {/* Quick Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-left text-[#9ea0a6] hover:text-[#c8f31d] transition-colors py-0.5"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Direct Channels (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Direct Contact
            </h3>
            <div className="space-y-2.5 text-xs">
              <a
                href="tel:+919717679664"
                className="flex items-center gap-2 text-zinc-300 hover:text-[#c8f31d] transition-colors font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[#c8f31d] shrink-0" />
                <span>+91 9717679664</span>
              </a>
              <a
                href="mailto:sharma.vivek895@gmail.com"
                className="flex items-center gap-2 text-zinc-300 hover:text-[#c8f31d] transition-colors font-mono truncate"
              >
                <Mail className="w-3.5 h-3.5 text-[#c8f31d] shrink-0" />
                <span className="truncate">sharma.vivek895@gmail.com</span>
              </a>
              <a
                href="https://www.viveksharmacoder.in/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-zinc-300 hover:text-[#c8f31d] transition-colors font-mono"
              >
                <Globe className="w-3.5 h-3.5 text-[#c8f31d] shrink-0" />
                <span>viveksharmacoder.in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Dynamic Year and Back to Top Button */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
          <p>
            &copy; {currentYear} Vivek Sharma. Geekfolio Freelancer Dark Theme. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#18191d] hover:bg-[#22242a] text-white border border-white/10 rounded-full transition-colors focus-visible:outline-none"
            aria-label="Back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#c8f31d]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
