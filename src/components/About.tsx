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

                {/* Rotating tech icons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2" aria-hidden="true">
                  <div className="w-10 h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-[#c8f31d] tech-icon-spin"
                      fill="none"
                      role="presentation"
                      focusable="false"
                    >
                      <ellipse cx="12" cy="12" rx="10" ry="4.2" stroke="currentColor" strokeWidth="1.2" />
                      <ellipse
                        cx="12"
                        cy="12"
                        rx="10"
                        ry="4.2"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        transform="rotate(60 12 12)"
                      />
                      <ellipse
                        cx="12"
                        cy="12"
                        rx="10"
                        ry="4.2"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        transform="rotate(120 12 12)"
                      />
                      <circle cx="12" cy="12" r="1.7" fill="currentColor" />
                    </svg>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-[#c8f31d] tech-icon-spin-reverse"
                      fill="none"
                      role="presentation"
                      focusable="false"
                    >
                      <path
                        d="M12 2.2 20.5 7.1v9.8L12 21.8 3.5 16.9V7.1L12 2.2Z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinejoin="round"
                      />
                      <text
                        x="12"
                        y="14.6"
                        textAnchor="middle"
                        fontFamily="'Sora', sans-serif"
                        fontSize="6.3"
                        fontWeight="800"
                        fill="currentColor"
                      >
                        ES6
                      </text>
                    </svg>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#121316]/85 backdrop-blur-md border border-[#c8f31d]/30 shadow-lg flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-[#c8f31d] tech-icon-spin-slow"
                      fill="none"
                      role="presentation"
                      focusable="false"
                    >
                      <circle cx="12" cy="12" r="9.6" stroke="currentColor" strokeWidth="1.2" />
                      <path
                        d="M8.7 16.3V7.7l7 9M15.7 7.7v8.6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
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
              A Little About Me
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
                    Spearheading delivery on scalable web solutions for marquee enterprise automotive leaders including{' '}
                    <strong className="text-white font-semibold">Tata Motors</strong> and{' '}
                    <strong className="text-white font-semibold">Maruti Suzuki</strong>. Delivering high-traffic, SEO-friendly,
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
