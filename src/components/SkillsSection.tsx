import React, { useState } from 'react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';
import { Code2, Database, Stethoscope, Building2, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons: Record<string, React.ElementType> = {
    software: Code2,
    cloud: Database,
    healthcare: Stethoscope,
    operations: Building2,
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Experienced':
        return (
          <span className="text-[11px] font-semibold text-[#D4AF72] bg-[#D4AF72]/10 border border-[#D4AF72]/30 px-2 py-0.5 rounded">
            Experienced
          </span>
        );
      case 'Working Knowledge':
        return (
          <span className="text-[11px] font-medium text-[#F5F3F7] bg-[#542B78]/30 border border-[#542B78]/60 px-2 py-0.5 rounded">
            Working Knowledge
          </span>
        );
      case 'Continuous Learning':
      default:
        return (
          <span className="text-[11px] font-medium text-[#A7A1AF] bg-[#121017] border border-[#302838] px-2 py-0.5 rounded">
            Continuous Learning
          </span>
        );
    }
  };

  const filteredCategories: SkillCategory[] =
    selectedCategory === 'all'
      ? PORTFOLIO_DATA.skillsData
      : PORTFOLIO_DATA.skillsData.filter((c) => c.categoryKey === selectedCategory);

  return (
    <section id="skills" className="py-24 bg-[#121017] border-y border-[#302838] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-2">
            Competency Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F3F7] tracking-tight">
            Skills &amp; <span className="text-[#D4AF72]">Competencies</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF72] mt-4 mb-6" />
          <p className="text-[#A7A1AF] text-base sm:text-lg leading-relaxed">
            Transparently categorized competencies spanning enterprise software development, database architecture, healthcare operations, and cross-functional management.
          </p>
        </div>

        {/* Legend & Guidance */}
        <div className="mb-8 p-4 rounded-xl bg-[#1B1721] border border-[#302838] flex flex-wrap items-center justify-between gap-4">
          <div className="text-xs text-[#A7A1AF] font-medium">
            <span className="text-[#D4AF72] font-semibold">Credibility Notice:</span> Competencies are presented with honest operational and technical context—no arbitrary percentage meters.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#D4AF72]" />
              <span className="text-[#F5F3F7]">Experienced (Hands-on)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#542B78]" />
              <span className="text-[#A7A1AF]">Working Knowledge</span>
            </div>
          </div>
        </div>

        {/* Interactive Filter Tabs per Section 1.A */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-[#D4AF72] text-[#09090D] shadow-md shadow-[#D4AF72]/20'
                : 'bg-[#1B1721] text-[#A7A1AF] hover:text-[#F5F3F7] border border-[#302838]'
            }`}
          >
            All Competencies
          </button>

          {PORTFOLIO_DATA.skillsData.map((cat) => {
            const Icon = categoryIcons[cat.categoryKey] || Layers;
            const isSelected = selectedCategory === cat.categoryKey;
            return (
              <button
                key={cat.categoryKey}
                onClick={() => setSelectedCategory(cat.categoryKey)}
                className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-[#D4AF72] text-[#09090D] shadow-md shadow-[#D4AF72]/20 font-semibold'
                    : 'bg-[#1B1721] text-[#A7A1AF] hover:text-[#F5F3F7] border border-[#302838]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.categoryKey] || Layers;
            return (
              <div
                key={category.categoryKey}
                className="p-6 sm:p-8 rounded-2xl bg-[#1B1721] border border-[#302838] hover:border-[#542B78] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-[#121017] border border-[#302838] text-[#D4AF72]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#F5F3F7]">
                        {category.title}
                      </h3>
                      <p className="text-xs text-[#A7A1AF] mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="divide-y divide-[#302838]/60 mt-6">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="py-3 flex items-start justify-between gap-4">
                        <div className="space-y-0.5">
                          <div className="text-sm font-semibold text-[#F5F3F7]">
                            {skill.name}
                          </div>
                          {skill.note && (
                            <div className="text-xs text-[#A7A1AF]">
                              {skill.note}
                            </div>
                          )}
                        </div>
                        <div className="shrink-0 mt-0.5">
                          {getLevelBadge(skill.level)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#302838] flex items-center justify-between text-[11px] text-[#A7A1AF]">
                  <span>Domain verified</span>
                  <span className="text-[#D4AF72] font-mono">{category.skills.length} skills</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
