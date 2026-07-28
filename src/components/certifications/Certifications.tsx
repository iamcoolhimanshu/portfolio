import React from 'react';
import { Award, ExternalLink, Cpu, Sparkles, Server, Code, Terminal, Network, Database, FileCode } from 'lucide-react';
import { CERTIFICATIONS } from '../../data/portfolioData';

export const Certifications: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-5 h-5 text-blue-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-purple-400" />,
    Server: <Server className="w-5 h-5 text-emerald-400" />,
    Code: <Code className="w-5 h-5 text-cyan-400" />,
    Terminal: <Terminal className="w-5 h-5 text-amber-400" />,
    Network: <Network className="w-5 h-5 text-indigo-400" />,
    Database: <Database className="w-5 h-5 text-red-400" />,
    FileCode: <FileCode className="w-5 h-5 text-emerald-400" />
  };

  return (
    <section id="certifications" className="py-20 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/50 border border-emerald-800/40 text-emerald-400 text-xs font-mono">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED ACCOMPLISHMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Industry <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Certified technical competencies in AI strategy, Generative AI, Spring Boot microservices, Core Java, MySQL, and Data Structures.
          </p>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl bg-[#18181B]/80 border border-[#27272A] glass-panel-interactive flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-[#111111] border border-[#27272A]">
                    {iconMap[cert.icon] || <Award className="w-5 h-5 text-blue-400" />}
                  </div>
                  <span className="px-2 py-0.5 rounded bg-zinc-800/80 text-zinc-400 font-mono text-[10px]">
                    {cert.date}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono text-blue-400 font-semibold uppercase tracking-wider">
                    {cert.issuer}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug mt-0.5">
                    {cert.title}
                  </h3>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1 pt-2 border-t border-[#27272A]">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-[#111111] text-zinc-400 text-[10px] font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-between text-xs font-mono text-blue-400 hover:text-blue-300 pt-3 border-t border-[#27272A] transition-colors"
                >
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
