import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { EXPERIENCES } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#09090B] relative border-t border-[#27272A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-950/50 border border-indigo-800/40 text-indigo-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PROFESSIONAL ENGAGEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Demonstrated engineering impact across production backend microservices and agile software teams.
          </p>
        </div>

        {/* Experience Cards Vertical Stack */}
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-6 md:before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-[#27272A] before:z-0">
          
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative z-10 flex flex-col md:flex-row gap-6 items-start ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Center Node */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#18181B] border-2 border-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
              </div>

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-1/2 p-6 sm:p-8 rounded-2xl bg-[#18181B]/90 border border-[#27272A] glass-panel-interactive space-y-4">
                
                {/* Role Header */}
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950/60 border border-blue-800/40 px-2.5 py-0.5 rounded-full">
                      {exp.type}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white pt-1">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="text-zinc-200 font-semibold">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-red-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed border-t border-[#27272A] pt-3">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-mono text-zinc-400">KEY RESPONSIBILITIES & DELIVERABLES:</p>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="pt-3 border-t border-[#27272A] flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#111111] border border-[#27272A] text-zinc-300 text-[10px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
