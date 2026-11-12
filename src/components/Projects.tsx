import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { projectsData, projectCategories, ProjectItem } from '../data/projects';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [expandedTechIds, setExpandedTechIds] = useState<Set<string>>(new Set());

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((proj) => proj.category === activeCategory);

  const toggleTechExpanded = (projectId: string) => {
    setExpandedTechIds((prev) => {
      const next = new Set(prev);
      if (next.has(projectId)) {
        next.delete(projectId);
      } else {
        next.add(projectId);
      }
      return next;
    });
  };

  const renderProjectArtwork = (project: ProjectItem) => {
    const { category } = project;
    const key = `${category.replace(/[^a-zA-Z]/g, '')}-${project.id.replace(/[^a-zA-Z0-9]/g, '')}`;
    const commonDefs = (
      <defs>
        <pattern id={`proj-grid-${key}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1" />
        </pattern>
        <radialGradient id={`proj-glow-a-${key}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#a5f3fc" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#a5f3fc" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`proj-glow-b-${key}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#d9f99d" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#d9f99d" stopOpacity="0" />
        </radialGradient>
      </defs>
    );

    if (category === 'Enterprise') {
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full hero-art" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {commonDefs}
          <rect width="400" height="250" fill={`url(#proj-grid-${key})`} />
          <circle cx="70" cy="60" r="90" fill={`url(#proj-glow-a-${key})`} className="hero-pulse" />
          <circle cx="330" cy="200" r="110" fill={`url(#proj-glow-b-${key})`} className="hero-pulse" />
          <g className="hero-float-slow" transform="translate(200 125)">
            <path d="M0 -46 L40 -28 V8 C40 32 22 52 0 64 C-22 52 -40 32 -40 8 V-28 Z" fill="#e0f2fe" fillOpacity="0.12" stroke="#bae6fd" strokeOpacity="0.7" strokeWidth="2" />
            <path d="M-12 6 L-2 16 L18 -8" fill="none" stroke="#d9f99d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g className="hero-float" transform="translate(88 170)">
            <rect x="-26" y="-18" width="52" height="36" rx="6" fill="#fef9c3" fillOpacity="0.08" stroke="#fde68a" strokeOpacity="0.6" strokeWidth="1.5" />
            <path d="M-14 -6 h28 M-14 2 h18 M-14 10 h10" stroke="#fde68a" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
          </g>
          <g className="hero-spin-slow" style={{ transformOrigin: '320px 70px' }}>
            <circle cx="320" cy="70" r="22" fill="none" stroke="#e9d5ff" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="4 6" />
            <circle cx="320" cy="70" r="5" fill="#e9d5ff" fillOpacity="0.7" />
            <circle cx="342" cy="70" r="3" fill="#bae6fd" fillOpacity="0.8" />
            <circle cx="298" cy="70" r="3" fill="#d9f99d" fillOpacity="0.8" />
          </g>
          <g className="hero-orbit" style={{ transformOrigin: '200px 125px' }}>
            <circle cx="200" cy="125" r="92" fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="1" />
            <circle cx="292" cy="125" r="4" fill="#bae6fd" fillOpacity="0.8" />
          </g>
        </svg>
      );
    }

    if (category === 'React & Next.js') {
      return (
        <svg viewBox="0 0 400 250" className="w-full h-full hero-art" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          {commonDefs}
          <rect width="400" height="250" fill={`url(#proj-grid-${key})`} />
          <circle cx="320" cy="60" r="90" fill={`url(#proj-glow-a-${key})`} className="hero-pulse" />
          <circle cx="80" cy="200" r="100" fill={`url(#proj-glow-b-${key})`} className="hero-pulse" />
          <g transform="translate(200 125)">
            <g className="hero-spin-slow" style={{ transformOrigin: '0px 0px' }}>
              <ellipse rx="62" ry="24" fill="none" stroke="#a5f3fc" strokeOpacity="0.7" strokeWidth="2" />
              <ellipse rx="62" ry="24" fill="none" stroke="#bae6fd" strokeOpacity="0.5" strokeWidth="2" transform="rotate(60)" />
              <ellipse rx="62" ry="24" fill="none" stroke="#d9f99d" strokeOpacity="0.45" strokeWidth="2" transform="rotate(120)" />
              <circle r="8" fill="#e0f2fe" fillOpacity="0.9" />
            </g>
          </g>
          <g className="hero-float" transform="translate(78 78)">
            <text x="0" y="0" fontFamily="monospace" fontSize="34" fontWeight="700" fill="#fef3c7" fillOpacity="0.85">&lt;/&gt;</text>
          </g>
          <g className="hero-float-slow" transform="translate(318 175)">
            <rect x="-28" y="-18" width="56" height="36" rx="8" fill="#dcfce7" fillOpacity="0.1" stroke="#bbf7d0" strokeOpacity="0.6" strokeWidth="1.5" />
            <path d="M-10 0 h20 M0 -10 v20" stroke="#bbf7d0" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" />
          </g>
          <path d="M40 140 C 90 100, 130 150, 170 120" fill="none" stroke="#bae6fd" strokeOpacity="0.4" strokeWidth="2" strokeDasharray="6 8" className="hero-dash" />
          <path d="M230 130 C 270 170, 310 110, 360 150" fill="none" stroke="#d9f99d" strokeOpacity="0.35" strokeWidth="2" strokeDasharray="6 8" className="hero-dash" />
        </svg>
      );
    }

    // E-commerce & CMS (and fallback)
    return (
      <svg viewBox="0 0 400 250" className="w-full h-full hero-art" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {commonDefs}
        <rect width="400" height="250" fill={`url(#proj-grid-${key})`} />
        <circle cx="90" cy="70" r="95" fill={`url(#proj-glow-b-${key})`} className="hero-pulse" />
        <circle cx="320" cy="190" r="100" fill={`url(#proj-glow-a-${key})`} className="hero-pulse" />
        <g className="hero-float" transform="translate(200 128)">
          <path d="M-44 -20 h14 l8 40 h52 l10 -28 h-58" fill="none" stroke="#e0f2fe" strokeOpacity="0.8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="-12" cy="30" r="6" fill="#fef3c7" fillOpacity="0.9" />
          <circle cx="22" cy="30" r="6" fill="#fef3c7" fillOpacity="0.9" />
          <path d="M-30 -20 l-6 -14 h-10" fill="none" stroke="#e0f2fe" strokeOpacity="0.7" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <g className="hero-float-slow" transform="translate(92 175)">
          <rect x="-22" y="-26" width="44" height="52" rx="6" fill="#fce7f3" fillOpacity="0.1" stroke="#fbcfe8" strokeOpacity="0.7" strokeWidth="1.5" />
          <circle cx="0" cy="-6" r="5" fill="#fbcfe8" fillOpacity="0.8" />
          <path d="M-10 10 h20 M-10 18 h14" stroke="#fbcfe8" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round" />
        </g>
        <g className="hero-spin-slow" style={{ transformOrigin: '312px 78px' }}>
          <circle cx="312" cy="78" r="24" fill="none" stroke="#bbf7d0" strokeOpacity="0.55" strokeWidth="2" strokeDasharray="5 7" />
          <text x="312" y="84" textAnchor="middle" fontFamily="monospace" fontSize="18" fontWeight="700" fill="#dcfce7" fillOpacity="0.85">%</text>
        </g>
        <g className="hero-orbit-reverse" style={{ transformOrigin: '200px 128px' }}>
          <circle cx="200" cy="128" r="96" fill="none" stroke="#ffffff" strokeOpacity="0.07" strokeWidth="1" />
          <circle cx="104" cy="128" r="4" fill="#d9f99d" fillOpacity="0.8" />
          <circle cx="296" cy="128" r="3" fill="#bae6fd" fillOpacity="0.8" />
        </g>
      </svg>
    );
  };

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-32 relative bg-[#121316] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18191d] border border-white/10 text-xs font-mono font-bold text-[#c8f31d] uppercase tracking-widest mb-3">
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Some Things I've Worked On
            </h2>
          </div>
          <p className="text-sm text-[#9ea0a6] max-w-md mt-4 md:mt-0 font-mono">
            Enterprise automotive portals, headless e-commerce builds &amp; high-impact web apps.
          </p>
        </div>

        {/* Filter Pills (Geekfolio Style) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {projectCategories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full whitespace-nowrap shrink-0 transition-all ${
                  isSelected
                    ? 'bg-[#c8f31d] text-black shadow-lg shadow-[#c8f31d]/20 scale-105'
                    : 'bg-[#18191d] text-zinc-400 hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#18191d] hover:bg-[#1e1f25] border border-white/5 hover:border-[#c8f31d]/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 shadow-2xl"
            >
              <div>
                {/* Visual Header */}
                <div className="relative aspect-[16/10] bg-[#0f1013] p-6 flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 pointer-events-none">
                    {renderProjectArtwork(project)}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />

                  {/* Top Badges */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                      {project.category}
                    </span>
                    {project.isEnterpriseClient && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-[#c8f31d] bg-black/70 border border-[#c8f31d]/30 px-2.5 py-0.5 rounded-full">
                        <ShieldCheck className="w-3.5 h-3.5" /> Enterprise
                      </span>
                    )}
                  </div>

                  {/* Title Preview */}
                  <div className="relative z-10 mt-auto">
                    <h3 className="text-xl font-bold text-white tracking-tight font-display group-hover:text-[#c8f31d] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-300 font-medium mt-1 truncate">
                      {project.clientType}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs sm:text-sm text-[#9ea0a6] leading-relaxed mb-5 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {(expandedTechIds.has(project.id)
                      ? project.technologies
                      : project.technologies.slice(0, 4)
                    ).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono text-zinc-300 bg-[#121316] border border-white/5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <button
                        type="button"
                        onClick={() => toggleTechExpanded(project.id)}
                        aria-expanded={expandedTechIds.has(project.id)}
                        className="px-2.5 py-1 text-[11px] font-mono font-bold text-[#c8f31d] bg-[#121316] border border-[#c8f31d]/20 rounded-md hover:bg-[#c8f31d]/10 transition-colors"
                      >
                        {expandedTechIds.has(project.id)
                          ? 'Show less'
                          : `+${project.technologies.length - 4} more`}
                      </button>
                    )}
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
