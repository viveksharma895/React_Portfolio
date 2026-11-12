import React from 'react';
import { Briefcase, MapPin, ArrowRight, Download } from 'lucide-react';

interface AboutProps {
  onContactClick: () => void;
}

export const About: React.FC<AboutProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-32 bg-[#0e0f11] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Portrait & Experience Frame (Geekfolio Style) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#18191d] border border-white/10 shadow-2xl">
                <img
                  src="/assets/aistudio/new.webp"
                  width={1085}
                  height={1450}
                  alt="Vivek Sharma Portrait"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Frontend technology icons */}
                <div
                  className="absolute top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] flex flex-row flex-wrap items-center justify-center gap-2"
                  aria-hidden="true"
                >
                  {/* HTML5 */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center" title="HTML5">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#c8f31d]" fill="none">
                      <path d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                      <path d="M7 7h10l-.4 4.5H9.2l.2 2.5 2.6.8 2.6-.8.2-2h2.2l-.4 4.2-4.6 1.4-4.6-1.4L7 7Z" fill="currentColor" fillOpacity="0.9" />
                    </svg>
                  </div>
                  {/* CSS3 */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center" title="CSS3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#c8f31d]" fill="none">
                      <path d="M4 3h16l-1.5 17L12 22l-6.5-2L4 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                      <path d="M7.5 7h9l-.3 2.3H10l.2 2h6.7l-.6 5-4.3 1.3-4.3-1.3-.3-2.6h2.2l.1 1.1 2.3.7 2.3-.7.2-2.4H7.8L7.5 7Z" fill="currentColor" fillOpacity="0.9" />
                    </svg>
                  </div>
                  {/* JavaScript */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center" title="JavaScript">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#c8f31d]" fill="none">
                      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M10 8v6.2c0 1.2-.6 1.8-1.7 1.8-.7 0-1.2-.3-1.6-.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M16.8 10.1c-.3-.7-.9-1.1-1.7-1.1-.9 0-1.5.4-1.5 1.1 0 1.6 3.7.8 3.7 3.5 0 1.5-1.2 2.4-2.8 2.4-1.3 0-2.3-.5-2.8-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  {/* TypeScript */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center" title="TypeScript">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#c8f31d]" fill="none">
                      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M7.2 9.2h4.2M9.3 9.2v6.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      <path d="M16.8 10.1c-.3-.7-.9-1.1-1.7-1.1-.9 0-1.5.4-1.5 1.1 0 1.6 3.7.8 3.7 3.5 0 1.5-1.2 2.4-2.8 2.4-1.3 0-2.3-.5-2.8-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  {/* React */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center" title="React">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#c8f31d] tech-icon-spin-slow" fill="none">
                      <ellipse cx="12" cy="12" rx="9.5" ry="4" stroke="currentColor" strokeWidth="1.2" />
                      <ellipse cx="12" cy="12" rx="9.5" ry="4" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
                      <ellipse cx="12" cy="12" rx="9.5" ry="4" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
                      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
                    </svg>
                  </div>
                  {/* Next.js */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center" title="Next.js">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#c8f31d]" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M9 15.5V8.5l6 7V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {/* Tailwind CSS */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center" title="Tailwind CSS">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#c8f31d]" fill="none">
                      <path d="M7 9c.8-2 2.2-3 4.2-3 3 0 3.4 2.2 4.9 2.8 1 .4 1.9.1 2.9-.8-.8 2-2.2 3-4.2 3-3 0-3.4-2.2-4.9-2.8-1-.4-1.9-.1-2.9.8Z" fill="currentColor" fillOpacity="0.9" />
                      <path d="M4 15c.8-2 2.2-3 4.2-3 3 0 3.4 2.2 4.9 2.8 1 .4 1.9.1 2.9-.8-.8 2-2.2 3-4.2 3-3 0-3.4-2.2-4.9-2.8-1-.4-1.9-.1-2.9.8Z" fill="currentColor" fillOpacity="0.9" />
                    </svg>
                  </div>
                  {/* Redux */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center" title="Redux">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#c8f31d]" fill="none">
                      <path d="M12 6.5c2.2-1.8 4.8-1.6 6 .3 1.1 1.8.2 4-2 5.2M8.5 8.2C6.4 9.7 5.8 12 7 13.8c1.2 1.8 3.6 2.2 5.8 1M14.8 16.8c.5-2.4-.4-4.5-2.4-5.5-2-1-4.3-.3-5.6 1.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <circle cx="14.8" cy="15.8" r="1.2" fill="currentColor" />
                      <circle cx="8.8" cy="9.2" r="1.2" fill="currentColor" />
                      <circle cx="15.8" cy="8.4" r="1.2" fill="currentColor" />
                    </svg>
                  </div>
                  {/* Sass */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center" title="Sass">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#c8f31d]" fill="none">
                      <path d="M12 4c4.5 0 7.5 2 7.5 4.7 0 2.2-2 3.8-5.2 4.6-1.4.4-2.4 1-2.4 1.9 0 .7.7 1.1 1.8 1.1 1.4 0 2.8-.5 4.1-1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                      <path d="M9.2 8.2c-2.8 1.2-4.7 3.4-4.7 5.8 0 2.1 1.5 3.5 4 3.5 1.8 0 3.5-.7 4.8-1.9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                  </div>
                  {/* Bootstrap */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center" title="Bootstrap">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#c8f31d]" fill="none">
                      <rect x="4" y="4" width="16" height="16" rx="3.5" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M9 8h4.2c1.4 0 2.3.7 2.3 1.8 0 .8-.5 1.4-1.2 1.6.9.2 1.5.9 1.5 1.9 0 1.3-1 2.2-2.6 2.2H9V8Zm2 3h1.8c.6 0 1-.3 1-.8s-.4-.8-1-.8H11v1.6Zm0 3.1h2c.7 0 1.1-.3 1.1-.9s-.4-.9-1.1-.9h-2v1.8Z" fill="currentColor" />
                    </svg>
                  </div>
                  {/* Git */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center" title="Git">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#c8f31d]" fill="none">
                      <path d="M4.5 12.5 11.5 19.5a1.4 1.4 0 0 0 2 0l6-6a1.4 1.4 0 0 0 0-2l-6-6a1.4 1.4 0 0 0-2 0l-1.2 1.2 1.7 1.7a1.7 1.7 0 1 1-1.2 1.2L9.2 8l2.3 2.3a1.7 1.7 0 1 1-1.1 1.1L8 9.1l-3.5 3.4Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {/* Vite */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center" title="Vite">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#c8f31d]" fill="none">
                      <path d="M12 21 4.5 5.5c-.3-.6.3-1.2.9-1l4.4 1.6 1.8-3.4c.2-.4.8-.4 1 0l1.8 3.4 4.4-1.6c.6-.2 1.2.4.9 1L12 21Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                      <path d="M9.5 10.5 12 15l2.5-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {/* Photoshop */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center" title="Photoshop">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#c8f31d]" fill="none">
                      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M8 15.5V8.5h2.8c1.5 0 2.5.9 2.5 2.2 0 1.4-1 2.3-2.6 2.3H9.6v2.5H8Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                      <path d="M9.6 11.7h1.1c.6 0 1-.3 1-.9s-.4-.9-1-.9H9.6v1.8Z" fill="currentColor" />
                      <path d="M16.8 10.9c-.3-.4-.7-.6-1.2-.6-.6 0-1 .3-1 .7 0 1.1 2.7.5 2.7 2.5 0 1.1-.9 1.8-2.2 1.8-.9 0-1.6-.3-2.1-.9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </div>
                  {/* WordPress */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center" title="WordPress">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#c8f31d]" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M6.2 9.2h2.1l1.8 6.1 1.7-4.8-.5-1.3h1.9l1.9 6.1 1.7-6.1h1.8M8.6 9.2c.8 0 1.2-.4 1.2-1s-.4-1-1-1c-.7 0-1.2.5-1.2 1.1 0 .5.4.9 1 .9Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {/* eCommerce */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center" title="eCommerce">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6 text-[#c8f31d]" fill="none">
                      <path d="M4 7h2l1.2 8.2a1.5 1.5 0 0 0 1.5 1.3h7.6a1.5 1.5 0 0 0 1.5-1.2L19 9.5H7.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="10" cy="18.5" r="1.2" fill="currentColor" />
                      <circle cx="16.2" cy="18.5" r="1.2" fill="currentColor" />
                      <path d="M12.2 9.2v3.8M10.5 11.4h3.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-5 left-5 right-5 bg-[#18191d]/90 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-white font-display">Vivek Sharma</p>
                      <p className="text-xs text-[#9ea0a6]">Engineer Delivery · AdGlobal360</p>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#c8f31d] bg-[#c8f31d]/10 px-2.5 py-1 rounded-full border border-[#c8f31d]/20">
                      8+ Yrs Exp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18191d] border border-white/10 text-xs font-mono font-bold text-[#c8f31d] uppercase tracking-widest">
              <span>About Me</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              About Vivek Sharma
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#9ea0a6] leading-relaxed">
              <p>
                I'm a Frontend Developer passionate about building modern, responsive, user-friendly, and performance-optimized websites.
              </p>
              <p>
                I help startups, entrepreneurs, and businesses build and improve their digital presence through website development, e-commerce solutions, UI implementation, and website optimization.
              </p>
              <p>
                I specialize in converting Figma and PSD designs into pixel-perfect websites, developing React/Next.js applications, and customizing CMS platforms.
              </p>
            </div>

            {/* Current Role Card */}
            <div className="p-6 rounded-2xl bg-[#18191d] border border-white/10 relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#c8f31d]/10 border border-[#c8f31d]/20 text-[#c8f31d] rounded-xl shrink-0">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white font-display mb-1">
                    Current Role: Engineer Delivery
                  </h3>
                  <p className="text-xs text-[#9ea0a6] mb-3 flex flex-wrap items-center gap-2">
                    <span className="text-white font-medium">AdGlobal360 Hakuhodo, Ltd.</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 font-mono text-[#c8f31d]">
                      <MapPin className="w-3.5 h-3.5" /> Gurgaon, Haryana, India
                    </span>
                  </p>
                  <p className="text-xs sm:text-sm text-[#9ea0a6] leading-relaxed">
                    Spearheading delivery on scalable web solutions for enterprise clients including{' '}
                    <strong className="text-white font-semibold">Pulse Shift Tool</strong>,{' '}
                    <strong className="text-white font-semibold">Maruti Suzuki</strong>,{' '}
                    <strong className="text-white font-semibold">TVS Motors</strong>, and{' '}
                    <strong className="text-white font-semibold">Muthoot Finance</strong>. Delivering high-traffic, SEO-friendly,
                    and cross-browser compatible digital properties in tight-knit Agile teams.
                  </p>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-black bg-[#c8f31d] hover:bg-white rounded-full transition-all shadow-lg shadow-[#c8f31d]/15"
              >
                <span>Let's Discuss Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="/Vivek_Sharma_Engineer_Delivery.docx"
                download="Vivek_Sharma_Engineer_Delivery.docx"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-transparent border border-white/20 hover:border-[#c8f31d] hover:text-[#c8f31d] rounded-full transition-all"
              >
                <span>Download Resume</span>
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
