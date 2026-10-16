import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Calendar, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#121017] border-y border-[#302838] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-2">
            Academic &amp; Professional Growth
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F3F7] tracking-tight">
            Education &amp; <span className="text-[#D4AF72]">Continuous Learning</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF72] mt-4 mb-6" />
          <p className="text-[#A7A1AF] text-base sm:text-lg leading-relaxed">
            The deliberate synthesis of undergraduate engineering education with executive business administration and continuous practical enablement.
          </p>
        </ScrollReveal>

        {/* Education Degrees Grid */}
        <StaggerContainer delayChildren={0.15} staggerChildren={0.12} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <StaggerItem
              key={edu.degree}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                idx === 0
                  ? 'bg-[#1B1721] border-[#D4AF72]/40 shadow-xl shadow-black/60'
                  : 'bg-[#1B1721] border-[#302838] hover:border-[#542B78]'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[#121017] border border-[#302838] text-[#D4AF72]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#A7A1AF] bg-[#09090D] px-3 py-1.5 rounded-lg border border-[#302838]">
                    <Calendar className="w-3.5 h-3.5 text-[#D4AF72]" />
                    <span>{edu.timeline}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#F5F3F7] mb-1">
                  {edu.degree}
                </h3>
                <div className="text-sm font-semibold text-[#D4AF72] mb-1">
                  {edu.institution}
                </div>
                <div className="text-xs text-[#A7A1AF] mb-4">
                  Format: {edu.mode} · Status: <span className="text-[#F5F3F7]">{edu.status}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A7A1AF] leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Focus Areas */}
                <div className="pt-4 border-t border-[#302838]/80">
                  <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-2">
                    Core Curricular Emphases
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.focusAreas.map((area, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#F5F3F7]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF72] shrink-0 mt-0.5" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#302838] text-[11px] text-[#A7A1AF]">
                <span>Verified academic record</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Certifications & Professional Development Area */}
        <ScrollReveal direction="up" delay={0.2} distance={20} className="p-6 sm:p-8 rounded-2xl bg-[#1B1721] border border-[#302838]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-[#121017] border border-[#302838] text-[#D4AF72]">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#F5F3F7]">
                Certifications &amp; Professional Enablement
              </h3>
              <p className="text-xs text-[#A7A1AF]">
                Technical accreditations and applied operational coursework
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.certifications.map((cert) => (
              <div
                key={cert.title}
                className="p-5 rounded-xl bg-[#121017] border border-[#302838] hover:border-[#D4AF72]/30 transition-colors"
              >
                <div className="text-xs font-semibold text-[#D4AF72] mb-1">
                  {cert.status}
                </div>
                <div className="text-sm font-bold text-[#F5F3F7] mb-1">
                  {cert.title}
                </div>
                <div className="text-xs text-[#A7A1AF] mb-2 font-medium">
                  {cert.issuer}
                </div>
                <p className="text-[11px] text-[#A7A1AF] leading-relaxed">
                  {cert.focus}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#302838] text-xs text-[#A7A1AF] text-center">
            Additional professional certifications and specialized healthcare IT coursework can be updated in <code className="text-[#D4AF72]">portfolioData.ts</code>.
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

