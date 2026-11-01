import React, { useState } from 'react';
import {
  Code,
  Layers,
  Palette,
  FileCode,
  ShieldCheck,
  Globe,
  ShoppingBag,
  Store,
  Building2,
  ShoppingCart,
  BarChart3,
  Tag,
  Target,
  Zap,
  Server,
  RefreshCw,
  UploadCloud,
  Layout,
  Box,
  Component,
  Braces,
  Atom,
} from 'lucide-react';
import { skillsData, skillCategories } from '../data/skills';

const renderSkillIcon = (iconName: string) => {
  const props = { className: 'w-6 h-6 text-[#c8f31d] group-hover:scale-110 transition-transform duration-300' };
  switch (iconName) {
    case 'Atom':
      return <Atom {...props} />;
    case 'Layers':
      return <Layers {...props} />;
    case 'Palette':
      return <Palette {...props} />;
    case 'Code':
      return <Code {...props} />;
    case 'Layout':
      return <Layout {...props} />;
    case 'Box':
      return <Box {...props} />;
    case 'Component':
      return <Component {...props} />;
    case 'FileCode':
      return <FileCode {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck {...props} />;
    case 'Braces':
      return <Braces {...props} />;
    case 'Globe':
      return <Globe {...props} />;
    case 'ShoppingBag':
      return <ShoppingBag {...props} />;
    case 'Store':
      return <Store {...props} />;
    case 'Building2':
      return <Building2 {...props} />;
    case 'ShoppingCart':
      return <ShoppingCart {...props} />;
    case 'BarChart3':
      return <BarChart3 {...props} />;
    case 'Tag':
      return <Tag {...props} />;
    case 'Target':
      return <Target {...props} />;
    case 'Zap':
      return <Zap {...props} />;
    case 'Server':
      return <Server {...props} />;
    case 'RefreshCw':
      return <RefreshCw {...props} />;
    case 'UploadCloud':
      return <UploadCloud {...props} />;
    default:
      return <Code {...props} />;
  }
};

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredSkills =
    activeCategory === 'All'
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-[#0e0f11] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18191d] border border-white/10 text-xs font-mono font-bold text-[#c8f31d] uppercase tracking-widest mb-3">
              <span>Stack &amp; Skills</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
              Technical Skills
            </h2>
          </div>
          <p className="text-sm text-[#9ea0a6] max-w-md mt-4 md:mt-0 font-mono">
            A comprehensive matrix of modern frameworks, CMS engines, and optimization tooling.
          </p>
        </div>

        {/* Category Filters (Geekfolio Pills) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {skillCategories.map((cat) => {
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

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-[#18191d] hover:bg-[#1e1f25] border border-white/5 hover:border-[#c8f31d]/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3.5 bg-[#121316] border border-white/10 rounded-xl group-hover:border-[#c8f31d]/30 transition-colors shrink-0">
                  {renderSkillIcon(skill.iconName)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base font-bold text-white font-display group-hover:text-[#c8f31d] transition-colors truncate">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono text-[#9ea0a6] uppercase tracking-wider whitespace-nowrap">
                      {skill.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#9ea0a6] leading-relaxed line-clamp-2">
                    {skill.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
