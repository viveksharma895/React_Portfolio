import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'services', 'projects', 'resume', 'skills', 'process', 'why-me', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Works' },
    { id: 'resume', label: 'Resume' },
    { id: 'skills', label: 'Skills' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 sm:py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between gap-8 px-6 py-3.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#18191d]/90 backdrop-blur-md border border-white/10 shadow-2xl shadow-black/60'
              : 'bg-[#18191d]/60 backdrop-blur-sm border border-white/5'
          }`}
        >
          {/* Brand Wordmark (Geekfolio style) */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="flex items-center gap-2 group text-left focus-visible:outline-none"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#c8f31d] animate-pulse" />
            <span className="text-base font-extrabold tracking-tight text-white font-display group-hover:text-[#c8f31d] transition-colors">
              Vivek Sharma
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-zinc-400">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`transition-colors relative py-1 hover:text-white focus-visible:outline-none ${
                    isActive ? 'text-[#c8f31d] font-bold' : ''
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#c8f31d] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA: Let's Talk button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleLinkClick('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#c8f31d] hover:bg-white transition-all rounded-full shadow-lg shadow-[#c8f31d]/20 whitespace-nowrap focus-visible:outline-none"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-400 hover:text-white bg-[#22242a] border border-white/10 rounded-full transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mx-4 mt-2 border border-white/10 bg-[#18191d]/95 backdrop-blur-xl rounded-2xl p-5 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                  activeSection === link.id
                    ? 'bg-[#c8f31d] text-black'
                    : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 border-t border-white/10 space-y-3">
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#c8f31d] rounded-full hover:bg-white transition-colors"
              >
                <span>Let's Talk / Hire Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-between pt-1 px-1 text-xs text-zinc-400">
                <a href="tel:+919717679664" className="flex items-center gap-1.5 hover:text-[#c8f31d]">
                  <Phone className="w-3.5 h-3.5 text-[#c8f31d]" />
                  <span>+91 9717679664</span>
                </a>
                <a href="mailto:sharma.vivek895@gmail.com" className="flex items-center gap-1.5 hover:text-[#c8f31d]">
                  <Mail className="w-3.5 h-3.5 text-[#c8f31d]" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
