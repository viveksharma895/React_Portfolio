import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { processSteps } from '../data/process';

export const Process: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = processSteps[activeStepIndex];

  return (
    <section id="process" className="py-12 sm:py-16 md:py-32 bg-[#121316] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18191d] border border-white/10 text-xs font-mono font-bold text-[#c8f31d] uppercase tracking-widest mb-3">
              <span>My Workflow</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              My Development Approach
            </h2>
          </div>
          <p className="text-sm text-[#9ea0a6] max-w-md mt-4 md:mt-0 font-mono">
            A milestone-driven engineering approach forged through 8+ years of enterprise delivery.
          </p>
        </div>

        {/* Stepper Buttons (Geekfolio Style) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          {processSteps.map((step, idx) => {
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl text-left border transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#18191d] border-[#c8f31d] shadow-lg shadow-[#c8f31d]/10 scale-105'
                    : 'bg-[#141518] border-white/5 hover:border-white/20 text-[#9ea0a6] hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-sm font-extrabold ${
                      isSelected ? 'text-[#c8f31d]' : 'text-zinc-400'
                    }`}
                  >
                    {step.number}
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#c8f31d] animate-pulse" />
                  )}
                </div>
                <div
                  className={`text-xs sm:text-sm font-bold font-display truncate ${
                    isSelected ? 'text-white' : 'text-zinc-400'
                  }`}
                >
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Card */}
        <div className="bg-[#18191d] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            {/* Left Col: Step overview */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 bg-[#c8f31d]/10 border border-[#c8f31d]/30 rounded-full text-[#c8f31d] font-mono text-xs font-bold uppercase tracking-wider">
                  Step {activeStep.number} of 05
                </span>
                <span className="text-xs text-[#9ea0a6] font-mono">{activeStep.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-display">
                {activeStep.title}
              </h3>

              <p className="text-[#9ea0a6] text-sm sm:text-base leading-relaxed">
                {activeStep.description}
              </p>

              {/* Tangible Output Highlight */}
              <div className="p-5 rounded-2xl bg-[#121316] border border-white/5 flex items-start gap-4">
                <Sparkles className="w-5 h-5 text-[#c8f31d] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-[#c8f31d] uppercase tracking-wider block font-mono mb-1">
                    Tangible Milestone Deliverable
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {activeStep.output}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Col: Activities Checklist */}
            <div className="lg:col-span-6 bg-[#121316] border border-white/5 rounded-2xl p-6 sm:p-7">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2 font-display">
                <ShieldCheck className="w-4 h-4 text-[#c8f31d]" />
                Phase Actions &amp; Quality Gates
              </h4>

              <div className="space-y-3.5">
                {activeStep.activities.map((act, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#9ea0a6]">
                    <CheckCircle2 className="w-4 h-4 text-[#c8f31d] mt-0.5 shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>

              {/* Stepper controls */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="text-xs font-bold text-zinc-400 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  Previous Phase
                </button>

                <button
                  disabled={activeStepIndex === processSteps.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(processSteps.length - 1, prev + 1))}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#c8f31d] hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
                >
                  <span>Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
