import React, { useState } from 'react';
import { Eye, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { projectsData, projectCategories, ProjectItem } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projectsData
      : projectsData.filter((proj) => proj.category === activeCategory);

  return (
    <section id="projects" className="py-24 md:py-32 relative bg-[#121316] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/10">
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
                <div className={`relative aspect-[16/10] bg-gradient-to-br ${project.accentColor} p-6 flex flex-col justify-between overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

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
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono text-zinc-300 bg-[#121316] border border-white/5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 text-[11px] font-mono font-bold text-[#c8f31d] bg-[#121316] border border-[#c8f31d]/20 rounded-md">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Actions Row */}
              <div className="px-6 pb-6 pt-3 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#c8f31d] transition-colors"
                >
                  <Eye className="w-4 h-4 text-[#c8f31d]" />
                  <span>Technical Breakdown</span>
                </button>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#c8f31d] hover:text-white transition-colors"
                  >
                    <span>Live Showcase</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal Lightbox */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
