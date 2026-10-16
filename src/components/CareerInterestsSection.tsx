import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Stethoscope, 
  FileSpreadsheet, 
  KanbanSquare, 
  Activity, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const CareerInterestsSection: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Stethoscope: Stethoscope,
    FileSpreadsheet: FileSpreadsheet,
    KanbanSquare: KanbanSquare,
    ActivitySquare: Activity,
    Send: Send,
    Sparkles: Sparkles,
  };

  return (
    <section className="py-24 bg-[#09090D] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-2">
            Target Alignments &amp; Opportunities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F3F7] tracking-tight">
            Career <span className="text-[#D4AF72]">Interests</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF72] mt-4 mb-6" />
          <p className="text-[#A7A1AF] text-base sm:text-lg leading-relaxed">
            Roles and strategic capacities where full-stack software development fluency and hospital operations leadership intersect to create immediate organizational value.
          </p>
        </ScrollReveal>

        {/* Roles Grid */}
        <StaggerContainer delayChildren={0.15} staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.careerInterests.map((interest) => {
            const Icon = iconMap[interest.iconName] || Sparkles;
            return (
              <StaggerItem
                key={interest.title}
                className="p-6 sm:p-7 rounded-2xl bg-[#1B1721] border border-[#302838] hover:border-[#542B78] transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/40 hover:shadow-[#542B78]/15"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-[#121017] border border-[#302838] text-[#D4AF72] group-hover:border-[#D4AF72]/40 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium text-[#A7A1AF] tracking-wider uppercase">
                      Target Role
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#F5F3F7] group-hover:text-[#D4AF72] transition-colors mb-3 leading-snug">
                    {interest.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A7A1AF] leading-relaxed mb-6">
                    {interest.description}
                  </p>

                  {/* Transferable Strengths */}
                  <div className="pt-4 border-t border-[#302838]/80 space-y-2">
                    <div className="text-[11px] font-semibold text-[#D4AF72] uppercase tracking-wider mb-2">
                      Transferable Strengths
                    </div>
                    {interest.transferableStrengths.map((str, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#F5F3F7]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF72] shrink-0 mt-0.5" />
                        <span className="leading-tight">{str}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-[#302838]">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D4AF72] hover:text-[#E7C995] transition-colors"
                  >
                    <span>Discuss Opportunities</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Framing Disclaimer */}
        <ScrollReveal direction="up" delay={0.2} distance={15} className="mt-12 text-center">
          <p className="text-xs text-[#A7A1AF] italic max-w-xl mx-auto">
            These positions represent target domains of interest and strategic alignment based on verified competencies in technology and hospital operations.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
};
