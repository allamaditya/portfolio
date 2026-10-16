import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Code2, Building2, GitMerge, GraduationCap, CheckCircle2 } from 'lucide-react';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Software Development Background",
      subtitle: "Full-Stack Experience at Cognizant",
      description: "Previous hands-on experience in Java, Angular, SQL relational data design, and AWS cloud environments provides deep technical intuition for system boundaries and data lifecycles."
    },
    {
      icon: Building2,
      title: "Healthcare Operations",
      subtitle: "Day-to-Day Hospital Facility Management",
      description: "Managing operational workflows, coordinating across clinical departments, and understanding the practical pressures of patient admissions, scheduling, and staff ergonomics."
    },
    {
      icon: GitMerge,
      title: "Technical & Business Coordination",
      subtitle: "Vendor Management & System Evaluation",
      description: "Bridging the communication gap between healthcare executives, software vendor engineering teams, and hospital clinicians to specify practical digital solutions."
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      subtitle: "MBA at Andhra University & Emerging Tech",
      description: "Actively pursuing an online Master of Business Administration (expected 2027) to ground technology implementation within organizational leadership and financial discipline."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#121017] border-y border-[#302838] relative overflow-hidden">
      {/* Subtle purple radial background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#542B78]/10 blur-3xl pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider mb-2">
            Professional Narrative
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F3F7] tracking-tight">
            Technology Meets <span className="text-[#D4AF72]">Operations</span>
          </h2>
          <div className="w-16 h-0.5 bg-[#D4AF72] mt-4 mb-6" />
          <p className="text-[#A7A1AF] text-base sm:text-lg leading-relaxed">
            A distinctive career evolution from software engineering into healthcare operations management, built on the principle that digital systems succeed only when they align with human workflows.
          </p>
        </ScrollReveal>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative Journey */}
          <ScrollReveal direction="up" delay={0.1} distance={24} className="lg:col-span-6 space-y-6 text-[#A7A1AF] leading-relaxed text-base">
            <div className="p-6 rounded-2xl bg-[#1B1721] border border-[#302838]">
              <h3 className="text-lg font-bold text-[#F5F3F7] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D4AF72]" />
                The Core Positioning
              </h3>
              <p className="text-sm sm:text-base text-[#F5F3F7]/90 leading-relaxed font-normal">
                I am primarily an <strong className="text-[#D4AF72] font-semibold">operations professional who understands technology deeply</strong>. Rather than viewing healthcare through an abstract engineering lens or treating software as a secondary consideration, my background allows me to evaluate hospital systems from both operational realities and software capabilities.
              </p>
            </div>

            <p>
              My professional journey began in enterprise software engineering as a Full-Stack Developer at <span className="text-[#F5F3F7] font-medium">Cognizant</span>. Over two and a half years, I worked with Java, Angular, SQL, and AWS—building full-stack applications, designing databases, writing RESTful services, and debugging complex software issues. This technical foundation gave me an appreciation for system architecture, data models, APIs, and the real-world constraints of software delivery.
            </p>

            <p>
              I subsequently transitioned into <span className="text-[#F5F3F7] font-medium">hospital management</span>, where I currently serve as a Hospital Operations Manager. Here, the challenge shifts from writing lines of code to orchestrating complex multidisciplinary workflows: coordinating inter-departmental operations, collaborating with hospital software vendors, evaluating healthcare software (HIS), and observing first-hand where data transitions encounter operational friction.
            </p>

            <p>
              To complement this technical and operational foundation with strategic business rigor, I am currently enrolled in an online <span className="text-[#D4AF72] font-medium">Master of Business Administration (MBA) at Andhra University</span> (expected completion: June 2027).
            </p>

            {/* Core Values / Operational Approach */}
            <div className="pt-4 border-t border-[#302838] space-y-3">
              <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wider">
                My Guiding Philosophy
              </div>
              <ul className="space-y-2 text-sm text-[#F5F3F7]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF72] shrink-0 mt-0.5" />
                  <span>Healthcare software should ease clinical burden, never amplify administrative overhead.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF72] shrink-0 mt-0.5" />
                  <span>Translating business needs accurately prevents expensive rework and vendor miscommunication.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF72] shrink-0 mt-0.5" />
                  <span>Technology-driven process improvements must be grounded in verified day-to-day workflow data.</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Right Column: Compact Highlights Panel */}
          <StaggerContainer delayChildren={0.2} staggerChildren={0.12} className="lg:col-span-6 space-y-4">
            <div className="text-xs font-semibold text-[#A7A1AF] uppercase tracking-wider mb-2">
              Strategic Pillar Matrix
            </div>

            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem
                  key={item.title}
                  className="p-5 rounded-2xl bg-[#1B1721] border border-[#302838] hover:border-[#D4AF72]/40 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#121017] border border-[#302838] group-hover:border-[#D4AF72]/50 text-[#D4AF72] transition-colors shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-[#F5F3F7] group-hover:text-[#D4AF72] transition-colors">
                        {item.title}
                      </div>
                      <div className="text-xs font-medium text-[#D4AF72]/80">
                        {item.subtitle}
                      </div>
                      <p className="text-xs text-[#A7A1AF] leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}

            {/* Quick summary box */}
            <StaggerItem className="p-5 rounded-2xl bg-gradient-to-br from-[#1B1721] to-[#251833] border border-[#542B78]/40">
              <div className="text-xs font-semibold text-[#D4AF72] uppercase tracking-wide">
                Target Collaboration Focus
              </div>
              <p className="text-xs text-[#F5F3F7]/90 mt-2 leading-relaxed">
                Open to discussions with healthcare networks, health-tech companies, and digital transformation initiatives seeking a pragmatic leader who speaks both fluent engineering and operational healthcare.
              </p>
            </StaggerItem>
          </StaggerContainer>

        </div>

      </div>
    </section>
  );
};
