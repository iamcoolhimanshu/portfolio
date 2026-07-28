import React from 'react';
import { History } from 'lucide-react';
import { TIMELINE_MILESTONES } from '../../data/portfolioData';

export const TechTimeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/50 border border-cyan-800/40 text-cyan-400 text-xs font-mono">
            <History className="w-3.5 h-3.5" />
            <span>EVOLUTION & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Tech Stack <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Tracking software learning milestones, framework adoption, and engineering accomplishments.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TIMELINE_MILESTONES.map((item) => (
            <div
              key={item.year}
              className="p-6 rounded-2xl bg-[#18181B]/80 border border-[#27272A] glass-panel-interactive flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold font-mono text-blue-400">
                    {item.year}
                  </span>
                  {item.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-300 text-[10px] font-mono">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-purple-400 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-zinc-300 text-xs leading-relaxed pt-2 border-t border-[#27272A]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
