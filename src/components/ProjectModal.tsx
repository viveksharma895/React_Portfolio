import React, { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-[#18191d] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-[#121316]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#c8f31d] block font-bold">
              {project.clientType}
            </span>
            <h3 id="modal-title" className="text-lg sm:text-xl font-bold text-white mt-0.5 font-display">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white bg-[#22242a] hover:bg-[#2c2f37] border border-white/10 rounded-full transition-colors focus-visible:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-[#9ea0a6]">
          {/* Banner Graphic Frame */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gradient-to-tr from-black via-[#18191d] to-black border border-white/10 flex items-center justify-center p-6 text-center">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#c8f31d] uppercase tracking-widest block font-bold">
                {project.category} Showcase
              </span>
              <p className="text-xl sm:text-2xl font-bold text-white max-w-md font-display">
                {project.title}
              </p>
              {project.isEnterpriseClient && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#c8f31d]/10 border border-[#c8f31d]/30 rounded-full text-xs text-[#c8f31d] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Enterprise Delivery · Tata Motors &amp; Maruti Suzuki Portfolio</span>
                </div>
              )}
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2 font-display">
              Project Overview
            </h4>
            <p className="text-[#9ea0a6] leading-relaxed">{project.summary}</p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#121316] border border-white/5 rounded-xl">
              <h5 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1.5 font-mono">
                The Engineering Challenge
              </h5>
              <p className="text-xs text-[#9ea0a6] leading-relaxed">{project.challenge}</p>
            </div>

            <div className="p-4 bg-[#121316] border border-white/5 rounded-xl">
              <h5 className="text-xs font-bold text-[#c8f31d] uppercase tracking-wider mb-1.5 font-mono">
                The Solution &amp; Impact
              </h5>
              <p className="text-xs text-[#9ea0a6] leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5 font-display">
              Technologies &amp; Architecture
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-mono bg-[#121316] border border-white/5 rounded-md text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Live Attribution Note */}
          {project.demoNote && (
            <div className="p-3 bg-[#121316] border border-white/5 rounded-xl text-xs text-zinc-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#c8f31d] shrink-0" />
              <span>{project.demoNote}</span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-white/10 bg-[#121316] flex items-center justify-between gap-4">
          <span className="text-xs text-zinc-400 font-mono">
            Direct Line: +91 9717679664
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
            >
              Close
            </button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-[#c8f31d] hover:bg-white rounded-full transition-colors shadow-sm"
              >
                <span>Live Portfolio Link</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
