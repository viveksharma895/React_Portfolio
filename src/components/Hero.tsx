import React from 'react';
import { ArrowUpRight, Send, Mail, Phone, Globe, CheckCircle2, Award, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreWork: () => void;
  onWorkTogether: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onWorkTogether }) => {
  return (
    <section id="hero" className="relative pt-28 pb-14 md:pt-44 md:pb-28 overflow-hidden geek-grid-pattern">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#c8f31d]/5 blur-[120px] rounded-full -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-500/5 blur-[120px] rounded-full -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column (7 cols): Geekfolio Freelancer Typography */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Intro Kicker Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#18191d] border border-white/10 text-xs font-mono font-semibold tracking-wider text-zinc-300 mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#c8f31d] animate-ping" />
              <span>👋 Hello, I'm Vivek Sharma</span>
              <span className="text-zinc-400">·</span>
              <span className="text-[#c8f31d]">Available For Hire</span>
            </div>

            {/* Main Headline (Geekfolio signature oversized typography) */}
            <h1 className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.08] mb-6 font-display">
              Building Digital Experiences That{' '}
              <span className="text-[#c8f31d] underline decoration-[#c8f31d]/40 underline-offset-8">
                Drive Business Growth.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#9ea0a6] leading-relaxed max-w-2xl mb-8">
              I'm <strong className="text-white font-semibold">Vivek Sharma</strong>, an{' '}
              <span className="text-[#c8f31d] font-semibold">Engineer Delivery at AdGlobal360 Hakuhodo</span> with{' '}
              <strong className="text-white font-semibold">8+ years of experience</strong> specializing in React, Next.js, WordPress, and E-commerce development. I build modern, responsive, and performance-optimized websites that help businesses grow online.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onWorkTogether}
                className="group inline-flex items-center gap-2.5 px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-black bg-[#c8f31d] hover:bg-white rounded-full shadow-xl shadow-[#c8f31d]/20 transition-all duration-300"
              >
                <span>Let's Work Together</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreWork}
                className="inline-flex items-center gap-2.5 px-7 py-4 text-xs font-bold uppercase tracking-widest text-white hover:text-[#c8f31d] bg-[#18191d]/80 hover:bg-[#18191d] border border-white/10 hover:border-[#c8f31d] rounded-full transition-all duration-300"
              >
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#c8f31d]" />
              </button>
            </div>

            {/* Contact Links Strip */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-[#9ea0a6]">
              <a
                href="mailto:sharma.vivek895@gmail.com"
                className="flex items-center gap-2 hover:text-[#c8f31d] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#c8f31d]" />
                <span className="font-mono text-zinc-300">sharma.vivek895@gmail.com</span>
              </a>

              <a
                href="https://wa.me/919717679664?text=Hi%20Vivek,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#c8f31d] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#c8f31d]" />
                <span className="font-mono text-zinc-300">+91 9717679664</span>
              </a>

              <a
                href="https://www.viveksharmacoder.in/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#c8f31d] transition-colors"
              >
                <Globe className="w-4 h-4 text-[#c8f31d]" />
                <span className="font-mono text-zinc-300">viveksharmacoder.in</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Animated abstract web-development artwork */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Backglow neon ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#c8f31d]/20 to-cyan-500/10 rounded-[2.5rem] blur-2xl" />

              {/* Geekfolio Arched/Curved Container */}
              <div className="relative bg-[#18191d] border border-white/10 rounded-[2rem] p-4 shadow-2xl overflow-hidden">
                <div className="relative aspect-[4/5] rounded-[1.5rem] overflow-hidden bg-black">
                  <div className="absolute inset-0 hero-art" aria-hidden="true">
                    <svg
                      viewBox="0 0 400 500"
                      className="w-full h-full"
                      preserveAspectRatio="xMidYMid slice"
                      role="presentation"
                      focusable="false"
                    >
                      <defs>
                        <radialGradient id="hero-glow-lime" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#c8f31d" stopOpacity="0.22" />
                          <stop offset="100%" stopColor="#c8f31d" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="hero-glow-cyan" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="hero-arc" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#c8f31d" />
                          <stop offset="100%" stopColor="#22d3ee" />
                        </linearGradient>
                        <pattern id="hero-grid" width="24" height="24" patternUnits="userSpaceOnUse">
                          <path
                            d="M 24 0 L 0 0 0 24"
                            fill="none"
                            stroke="#ffffff"
                            strokeOpacity="0.045"
                            strokeWidth="1"
                          />
                        </pattern>
                      </defs>

                      {/* Ambient background */}
                      <rect width="400" height="500" fill="#0b0c0e" />
                      <rect width="400" height="500" fill="url(#hero-grid)" />
                      <circle cx="70" cy="105" r="170" fill="url(#hero-glow-lime)" className="hero-pulse" />
                      <circle cx="345" cy="415" r="190" fill="url(#hero-glow-cyan)" />
                      <circle cx="340" cy="120" r="95" fill="url(#hero-glow-cyan)" opacity="0.7" />

                      {/* Orbiting rings */}
                      <g className="hero-orbit">
                        <ellipse
                          cx="200"
                          cy="255"
                          rx="152"
                          ry="196"
                          fill="none"
                          stroke="url(#hero-arc)"
                          strokeOpacity="0.3"
                          strokeWidth="1"
                          strokeDasharray="3 13"
                        />
                        <circle cx="48" cy="255" r="3" fill="#c8f31d" />
                        <circle cx="352" cy="255" r="2.5" fill="#22d3ee" />
                      </g>
                      <g className="hero-orbit-reverse">
                        <ellipse
                          cx="200"
                          cy="255"
                          rx="120"
                          ry="160"
                          fill="none"
                          stroke="#ffffff"
                          strokeOpacity="0.07"
                          strokeWidth="1"
                        />
                        <circle cx="320" cy="255" r="2" fill="#ffffff" opacity="0.55" />
                      </g>

                      {/* Connection traces */}
                      <path
                        className="hero-dash"
                        d="M 330 132 C 300 152, 290 168, 268 192"
                        fill="none"
                        stroke="url(#hero-arc)"
                        strokeWidth="1.5"
                        strokeDasharray="7 9"
                        strokeLinecap="round"
                        opacity="0.6"
                      />
                      <path
                        className="hero-dash"
                        style={{ animationDelay: '-2s' }}
                        d="M 78 148 C 96 174, 112 192, 132 212"
                        fill="none"
                        stroke="url(#hero-arc)"
                        strokeWidth="1.5"
                        strokeDasharray="7 9"
                        strokeLinecap="round"
                        opacity="0.45"
                      />

                      {/* React-style atom */}
                      <g transform="translate(330 92)">
                        <g className="hero-spin-slow">
                          <ellipse rx="30" ry="11" fill="none" stroke="#22d3ee" strokeOpacity="0.8" strokeWidth="1.2" />
                          <ellipse
                            rx="30"
                            ry="11"
                            transform="rotate(60)"
                            fill="none"
                            stroke="#22d3ee"
                            strokeOpacity="0.55"
                            strokeWidth="1.2"
                          />
                          <ellipse
                            rx="30"
                            ry="11"
                            transform="rotate(120)"
                            fill="none"
                            stroke="#22d3ee"
                            strokeOpacity="0.35"
                            strokeWidth="1.2"
                          />
                          <circle r="3" fill="#c8f31d" />
                        </g>
                      </g>

                      {/* Floating code tag */}
                      <g transform="translate(62 118)">
                        <g className="hero-float-slow">
                          <rect
                            x="-26"
                            y="-14"
                            width="52"
                            height="28"
                            rx="14"
                            fill="#141518"
                            stroke="#c8f31d"
                            strokeOpacity="0.4"
                          />
                          <text
                            x="0"
                            y="4"
                            textAnchor="middle"
                            fontFamily="'JetBrains Mono', monospace"
                            fontSize="11"
                            fontWeight="600"
                            fill="#c8f31d"
                          >
                            {'</>'}
                          </text>
                        </g>
                      </g>

                      {/* Browser / code editor window */}
                      <g transform="translate(66 170)">
                        <g className="hero-float">
                          <rect width="268" height="242" rx="18" fill="#141518" stroke="#ffffff" strokeOpacity="0.12" />
                          <path d="M18 0 H250 A18 18 0 0 1 268 18 V36 H0 V18 A18 18 0 0 1 18 0 Z" fill="#1b1c21" />
                          <circle cx="20" cy="18" r="4" fill="#f87171" opacity="0.85" />
                          <circle cx="34" cy="18" r="4" fill="#fbbf24" opacity="0.85" />
                          <circle cx="48" cy="18" r="4" fill="#34d399" opacity="0.85" />
                          <rect
                            x="68"
                            y="11"
                            width="176"
                            height="14"
                            rx="7"
                            fill="#0e0f11"
                            stroke="#ffffff"
                            strokeOpacity="0.08"
                          />
                          <circle cx="78" cy="18" r="2" fill="#c8f31d" />
                          <rect x="86" y="16" width="52" height="4" rx="2" fill="#c8f31d" opacity="0.55" />
                          <rect x="146" y="16" width="26" height="4" rx="2" fill="#ffffff" opacity="0.18" />

                          {/* Animated code lines */}
                          <g className="hero-code" style={{ animationDelay: '0.15s' }}>
                            <rect x="20" y="58" width="18" height="7" rx="3.5" fill="#c8f31d" opacity="0.9" />
                            <rect x="46" y="58" width="66" height="7" rx="3.5" fill="#ffffff" opacity="0.3" />
                            <rect x="120" y="58" width="42" height="7" rx="3.5" fill="#22d3ee" opacity="0.7" />
                          </g>
                          <g className="hero-code" style={{ animationDelay: '0.3s' }}>
                            <rect x="36" y="77" width="44" height="7" rx="3.5" fill="#22d3ee" opacity="0.55" />
                            <rect x="88" y="77" width="96" height="7" rx="3.5" fill="#ffffff" opacity="0.18" />
                          </g>
                          <g className="hero-code" style={{ animationDelay: '0.45s' }}>
                            <rect x="36" y="96" width="26" height="7" rx="3.5" fill="#c8f31d" opacity="0.75" />
                            <rect x="70" y="96" width="112" height="7" rx="3.5" fill="#ffffff" opacity="0.26" />
                            <rect x="190" y="96" width="30" height="7" rx="3.5" fill="#c8f31d" opacity="0.5" />
                          </g>
                          <g className="hero-code" style={{ animationDelay: '0.6s' }}>
                            <rect x="36" y="115" width="76" height="7" rx="3.5" fill="#ffffff" opacity="0.3" />
                            <rect x="120" y="115" width="54" height="7" rx="3.5" fill="#22d3ee" opacity="0.45" />
                          </g>
                          <g className="hero-code" style={{ animationDelay: '0.75s' }}>
                            <rect x="20" y="134" width="34" height="7" rx="3.5" fill="#c8f31d" opacity="0.65" />
                            <rect x="62" y="134" width="48" height="7" rx="3.5" fill="#22d3ee" opacity="0.5" />
                            <rect x="118" y="134" width="82" height="7" rx="3.5" fill="#ffffff" opacity="0.18" />
                          </g>

                          {/* Terminal */}
                          <rect
                            x="20"
                            y="162"
                            width="228"
                            height="56"
                            rx="10"
                            fill="#0b0c0e"
                            stroke="#ffffff"
                            strokeOpacity="0.08"
                          />
                          <circle cx="34" cy="178" r="3" fill="#c8f31d" opacity="0.8" />
                          <text
                            x="44"
                            y="182"
                            fontFamily="'JetBrains Mono', monospace"
                            fontSize="10"
                            fill="#c8f31d"
                            opacity="0.85"
                          >
                            $ npm run build
                          </text>
                          <text
                            x="32"
                            y="202"
                            fontFamily="'JetBrains Mono', monospace"
                            fontSize="9"
                            fill="#9ea0a6"
                          >
                            ✓ optimized in 0.42s
                          </text>
                          <rect className="hero-blink" x="158" y="196" width="6" height="10" rx="1" fill="#c8f31d" opacity="0.8" />
                        </g>
                      </g>

                      {/* Floating technology tag */}
                      <g transform="translate(350 305)">
                        <g className="hero-float-slow" style={{ animationDelay: '-3s' }}>
                          <rect
                            x="-22"
                            y="-13"
                            width="44"
                            height="26"
                            rx="13"
                            fill="#141518"
                            stroke="#22d3ee"
                            strokeOpacity="0.35"
                          />
                          <text
                            x="0"
                            y="4"
                            textAnchor="middle"
                            fontFamily="'JetBrains Mono', monospace"
                            fontSize="10"
                            fontWeight="600"
                            fill="#22d3ee"
                          >
                            TS
                          </text>
                        </g>
                      </g>

                      {/* Small drifting particles */}
                      <circle cx="96" cy="338" r="2" fill="#c8f31d" className="hero-pulse" />
                      <circle cx="356" cy="205" r="1.5" fill="#22d3ee" opacity="0.8" />
                      <circle cx="288" cy="64" r="1.5" fill="#ffffff" opacity="0.45" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top Geekfolio Pill */}
                  <div className="absolute top-4 left-4 bg-[#18191d]/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-white/90 border border-white/15 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#c8f31d]" />
                    <span>Senior Engineer Delivery</span>
                  </div>

                  {/* Circular floating 8+ Years Badge */}
                  <div className="absolute bottom-4 right-4 bg-[#c8f31d] text-black rounded-full p-4 shadow-xl text-center flex flex-col items-center justify-center w-20 h-20 border-2 border-[#18191d]">
                    <span className="text-xl font-black font-display leading-none">8+</span>
                    <span className="text-[9px] font-bold uppercase tracking-tight mt-0.5 leading-none">Years Exp</span>
                  </div>

                  {/* Bottom Role Info */}
                  <div className="absolute bottom-4 left-4 max-w-[210px] bg-[#18191d]/90 backdrop-blur-md p-3 rounded-xl border border-white/10">
                    <p className="text-xs font-bold text-white">AdGlobal360 Hakuhodo</p>
                    <p className="text-[11px] text-[#9ea0a6] mt-0.5">Tata Motors &amp; Maruti Suzuki</p>
                  </div>
                </div>

                {/* Sub-strip tags */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-[#121316] border border-white/5 rounded-xl p-3">
                    <span className="text-[10px] font-mono uppercase text-[#9ea0a6] block">Frontend Stack</span>
                    <span className="font-bold text-white text-xs">React, Next.js, TS</span>
                  </div>
                  <div className="bg-[#121316] border border-white/5 rounded-xl p-3">
                    <span className="text-[10px] font-mono uppercase text-[#9ea0a6] block">CMS &amp; Commerce</span>
                    <span className="font-bold text-white text-xs">WordPress &amp; Shopify</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Metrics Strip (Geekfolio Counters) */}
        <div className="mt-12 md:mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-[#18191d]/70 border border-white/5">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-display">08+</div>
            <div className="text-xs text-[#9ea0a6] uppercase tracking-wider font-semibold mt-1">Years Experience</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#18191d]/70 border border-white/5">
            <div className="text-xl sm:text-2xl font-bold text-[#c8f31d] font-display">Tata &amp; Maruti</div>
            <div className="text-xs text-zinc-400 uppercase tracking-wider font-semibold mt-1">Enterprise Clients</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#18191d]/70 border border-white/5">
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-display">95+</div>
            <div className="text-xs text-[#9ea0a6] uppercase tracking-wider font-semibold mt-1">Core Web Vitals Pass</div>
          </div>

          <div className="p-5 rounded-2xl bg-[#18191d]/70 border border-white/5">
            <div className="text-xl sm:text-2xl font-bold text-white font-display">100%</div>
            <div className="text-xs text-[#9ea0a6] uppercase tracking-wider font-semibold mt-1">Pixel-Perfect Delivery</div>
          </div>
        </div>
      </div>
    </section>
  );
};
