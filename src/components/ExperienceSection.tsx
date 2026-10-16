import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ChevronDown, ChevronUp, Briefcase, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('exp-hospital-ops');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-24 bg-[#09090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-2">
            Career Progression
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F3F7] tracking-tight">
            Professional <span className="text-[#D4AF72]">Experience</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF72] mt-4 mb-6" />
          <p className="text-[#A7A1AF] text-base sm:text-lg leading-relaxed">
            A clear trajectory from foundational full-stack software development at Cognizant to direct leadership in hospital operations management.
          </p>
        </ScrollReveal>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l border-[#302838] space-y-12 ml-2 sm:ml-4">
          
          {PORTFOLIO_DATA.experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            const isCurrent = exp.isCurrent;

            return (
              <ScrollReveal
                key={exp.id}
                direction="up"
                delay={index * 0.15}
                distance={24}
                className="relative group"
              >
                
                {/* Timeline Node Marker */}
                <div 
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isCurrent
                      ? 'bg-[#121017] border-2 border-[#D4AF72] text-[#D4AF72] shadow-[0_0_15px_rgba(212,175,114,0.3)]'
                      : 'bg-[#121017] border border-[#302838] text-[#A7A1AF] group-hover:border-[#542B78]'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-[#D4AF72]' : 'bg-[#542B78]'}`} />
                </div>

                {/* Experience Card */}
                <div
                  className={`rounded-2xl transition-all duration-300 border overflow-hidden ${
                    isCurrent
                      ? 'bg-[#1B1721] border-[#D4AF72]/30 shadow-xl shadow-black/60 ring-1 ring-[#D4AF72]/20'
                      : 'bg-[#121017] border-[#302838] hover:border-[#542B78]'
                  }`}
                >
                  {/* Card Header */}
                  <div className="p-6 sm:p-8 cursor-pointer" onClick={() => toggleExpand(exp.id)}>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                      
                      <div className="space-y-1">
                        <div className="flex items-center gap-3 flex-wrap">
                          <h3 className="text-xl sm:text-2xl font-bold text-[#F5F3F7]">
                            {exp.role}
                          </h3>
                          {isCurrent && (
                            <span className="text-[11px] font-semibold text-[#D4AF72] bg-[#542B78]/40 border border-[#D4AF72]/40 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                              Current Role
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-semibold text-[#D4AF72] flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-[#D4AF72]" />
                          <span>{exp.organization}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 text-xs text-[#A7A1AF] font-medium bg-[#09090D] px-3 py-1.5 rounded-lg border border-[#302838]">
                          <Calendar className="w-3.5 h-3.5 text-[#D4AF72]" />
                          <span>{exp.period}</span>
                        </div>
                        <button
                          type="button"
                          className="p-1.5 rounded-lg text-[#A7A1AF] hover:text-[#F5F3F7] hover:bg-[#251F2E] transition-colors"
                          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
                        >
                          {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </button>
                      </div>

                    </div>

                    {/* Summary */}
                    <p className="text-sm sm:text-base text-[#A7A1AF] leading-relaxed">
                      {exp.summary}
                    </p>

                    {/* Technology & Competency labels (unboxed text with separators per Zero-Pill rule) */}
                    <div className="mt-5 pt-4 border-t border-[#302838] flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#A7A1AF]">
                      <span className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider">Focus Areas:</span>
                      {exp.technologiesUsed.map((tech, idx) => (
                        <React.Fragment key={tech}>
                          <span className="text-[#F5F3F7]/90 hover:text-[#D4AF72] transition-colors">
                            {tech}
                          </span>
                          {idx < exp.technologiesUsed.length - 1 && (
                            <span className="text-[#302838]" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Section Details */}
                  {isExpanded && (
                    <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#302838]/80 bg-[#09090D]/40 space-y-6">
                      
                      {/* Key Responsibilities */}
                      <div>
                        <h4 className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-3">
                          Core Operational &amp; Technical Scope
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {exp.keyResponsibilities.map((resp, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F3F7]/85">
                              <CheckCircle2 className="w-4 h-4 text-[#D4AF72] shrink-0 mt-0.5" />
                              <span className="leading-relaxed">{resp}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Operational Bridge Highlights */}
                      <div className="p-4 rounded-xl bg-[#121017] border border-[#302838]">
                        <h4 className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-2 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF72]" />
                          Strategic Bridge &amp; Transferable Takeaways
                        </h4>
                        <ul className="space-y-1.5 text-xs text-[#A7A1AF]">
                          {exp.operationalBridges.map((bridge, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-[#D4AF72]">→</span>
                              <span>{bridge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  )}

                </div>

              </ScrollReveal>
            );
          })}

        </div>

        {/* Career Transition Summary Callout */}
        <ScrollReveal direction="up" delay={0.2} distance={20} className="mt-16 p-6 rounded-2xl bg-[#121017] border border-[#302838] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider">
              Career Trajectory &amp; Narrative
            </div>
            <div className="text-base font-bold text-[#F5F3F7]">
              Full-Stack Developer (Cognizant) <span className="text-[#D4AF72]">→</span> Hospital Operations Manager
            </div>
            <p className="text-xs text-[#A7A1AF] max-w-2xl leading-relaxed">
              Software engineering provided the foundational technical literacy in data structures, APIs, and cloud services. Hospital operations provides the human, logistical, and multi-departmental leadership required to make digital solutions succeed in production.
            </p>
          </div>

          <a
            href="#healthcare-it"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#D4AF72] bg-[#1B1721] hover:bg-[#251F2E] border border-[#D4AF72]/30 rounded-lg transition-colors whitespace-nowrap"
          >
            <span>See Workflow Framework</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
};
