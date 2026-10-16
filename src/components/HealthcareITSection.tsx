import React, { useState } from 'react';
import { PORTFOLIO_DATA, WorkflowStage } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Stethoscope, Layers, FileText, Database, ShieldCheck, RefreshCw } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const HealthcareITSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const currentStage = PORTFOLIO_DATA.digitalTransformationStages.find(
    (s) => s.step === activeStep
  ) || PORTFOLIO_DATA.digitalTransformationStages[0];

  const focusAreas = [
    { title: "Healthcare IT Implementation", desc: "Structured rollout of clinical & administrative software" },
    { title: "Hospital Information Systems (HIS)", desc: "Operational navigation across EHR, billing, and triage" },
    { title: "Software & Vendor Coordination", desc: "Bilingual technical translation of operational requirements" },
    { title: "Data Migration Planning", desc: "Schema validation and cutover planning to minimize clinical downtime" },
    { title: "Operational Workflow Analysis", desc: "Mapping patient touchpoints to isolate bottlenecks" },
    { title: "Digital Transformation", desc: "Modernizing manual hospital paperwork into agile digital records" },
    { title: "Business & Tech Communication", desc: "Aligning executive leadership, clinicians, and software engineers" }
  ];

  return (
    <section id="healthcare-it" className="py-24 bg-[#121017] border-y border-[#302838] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#542B78]/15 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#D4AF72]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-2">
            Healthcare IT &amp; Digital Transformation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F3F7] tracking-tight">
            Connecting Business Needs with <span className="text-[#D4AF72]">Technology</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF72] mt-4 mb-6" />
          <p className="text-[#A7A1AF] text-base sm:text-lg leading-relaxed">
            My combined background helps me approach technology challenges from both a technical and operational perspective, with an interest in making software systems more useful for the people and organizations that depend on them.
          </p>
        </ScrollReveal>

        {/* Interactive 6-Stage Workflow Container */}
        <ScrollReveal direction="up" delay={0.15} distance={24} className="rounded-2xl bg-[#1B1721] border border-[#D4AF72]/30 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-black/80 relative">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#302838]">
            <div>
              <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider">
                End-to-End Delivery Lifecycle
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F3F7] mt-1">
                The Operational &amp; Technology Bridge Framework
              </h3>
            </div>
            <div className="text-xs text-[#A7A1AF] font-medium">
              Click any stage below to inspect the operational vs. technical synergy
            </div>
          </div>

          {/* Stepper Tabs Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {PORTFOLIO_DATA.digitalTransformationStages.map((stage) => {
              const isActive = activeStep === stage.step;
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStep(stage.step)}
                  className={`p-3.5 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#542B78]/40 border-[#D4AF72] shadow-lg shadow-[#542B78]/20'
                      : 'bg-[#121017] border-[#302838] hover:border-[#542B78] text-[#A7A1AF]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className={`text-[11px] font-mono font-bold ${isActive ? 'text-[#D4AF72]' : 'text-[#A7A1AF]'}`}>
                      0{stage.step}
                    </span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#D4AF72]" />
                    )}
                  </div>
                  <div className={`text-xs font-bold leading-tight ${isActive ? 'text-[#F5F3F7]' : 'text-[#F5F3F7]/80'}`}>
                    {stage.name}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Breakdown Panel */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#121017] border border-[#302838] space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#302838] pb-4">
              <div className="space-y-1">
                <span className="text-xs font-mono font-semibold text-[#D4AF72]">
                  STAGE 0{currentStage.step} OF 06
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-[#F5F3F7]">
                  {currentStage.name}
                </h4>
                <p className="text-xs sm:text-sm text-[#D4AF72]/90 font-medium">
                  {currentStage.tagline}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStep((prev) => (prev > 1 ? prev - 1 : 6))}
                  className="px-3 py-1.5 text-xs text-[#A7A1AF] hover:text-[#F5F3F7] bg-[#1B1721] rounded border border-[#302838] transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveStep((prev) => (prev < 6 ? prev + 1 : 1))}
                  className="px-3 py-1.5 text-xs text-[#09090D] font-semibold bg-[#D4AF72] hover:bg-[#E7C995] rounded transition-colors"
                >
                  Next Stage
                </button>
              </div>
            </div>

            {/* Dual Perspective Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Operational Lens */}
              <div className="p-5 rounded-xl bg-[#1B1721] border border-[#302838] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF72] uppercase tracking-wider">
                  <Stethoscope className="w-4 h-4 text-[#D4AF72]" />
                  <span>The Operational Reality</span>
                </div>
                <p className="text-xs sm:text-sm text-[#F5F3F7]/90 leading-relaxed">
                  {currentStage.operationalPerspective}
                </p>
              </div>

              {/* Technical Lens */}
              <div className="p-5 rounded-xl bg-[#1B1721] border border-[#302838] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF72] uppercase tracking-wider">
                  <Layers className="w-4 h-4 text-[#D4AF72]" />
                  <span>The Technical Execution</span>
                </div>
                <p className="text-xs sm:text-sm text-[#F5F3F7]/90 leading-relaxed">
                  {currentStage.technicalPerspective}
                </p>
              </div>

            </div>

            {/* Deliverables */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-[#A7A1AF] uppercase tracking-wider mb-2">
                Key Stage Deliverables &amp; Artifacts
              </div>
              <div className="flex flex-wrap gap-2">
                {currentStage.deliverables.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-[#F5F3F7] bg-[#1B1721] border border-[#302838]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF72]" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

          </div>

        </ScrollReveal>

        {/* Focus Areas Grid */}
        <div className="mt-16">
          <ScrollReveal direction="up" distance={15} className="mb-8">
            <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-2">
              Core Competency Domains
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F3F7]">
              Digital Transformation Focus Areas
            </h3>
          </ScrollReveal>

          <StaggerContainer delayChildren={0.1} staggerChildren={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, i) => (
              <StaggerItem
                key={i}
                className="p-5 rounded-2xl bg-[#1B1721] border border-[#302838] hover:border-[#542B78] transition-colors"
              >
                <div className="text-xs font-mono font-bold text-[#D4AF72] mb-1">
                  0{i + 1}.
                </div>
                <div className="text-sm font-bold text-[#F5F3F7] mb-1.5">
                  {area.title}
                </div>
                <p className="text-xs text-[#A7A1AF] leading-relaxed">
                  {area.desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

      </div>
    </section>
  );
};
