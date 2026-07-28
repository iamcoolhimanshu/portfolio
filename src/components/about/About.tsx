import React, { useState } from 'react';
import { GraduationCap, Briefcase, Award, Compass, Heart, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const About: React.FC = () => {
  const [profileImgSrc, setProfileImgSrc] = useState('/profile.jpg');
  const [profileImgError, setProfileImgError] = useState(false);

  const handleImgError = () => {
    if (profileImgSrc === '/profile.jpg') {
      setProfileImgSrc('/projects/profile.jpg');
    } else {
      setProfileImgError(true);
    }
  };

  return (
    <section id="about" className="py-20 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>BACKGROUND & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="text-gradient">Himanshu Vishwakarma</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Passionate about backend performance, software craftsmanship, microservices, and AI integrations.
          </p>
        </div>

        {/* 2x2 Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Profile Photo Card */}
          {!profileImgError && (
            <div className="p-6 rounded-2xl bg-[#18181B]/80 border border-[#27272A] glass-panel-interactive flex flex-col items-center text-center justify-between space-y-4">
              <div className="relative w-32 h-32 rounded-2xl p-1 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600 shadow-xl shadow-blue-500/20">
                <img
                  src={profileImgSrc}
                  alt={PERSONAL_INFO.name}
                  onError={handleImgError}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-mono text-blue-400 mt-0.5">
                  {PERSONAL_INFO.roleTitle}
                </p>
                <p className="text-xs font-mono text-zinc-400 mt-1">
                  📍 {PERSONAL_INFO.location}
                </p>
              </div>

              <div className="pt-2 border-t border-[#27272A] w-full text-xs text-zinc-300">
                <p className="italic text-zinc-400 text-[11px]">
                  "Building robust microservices & agentic AI software."
                </p>
              </div>
            </div>
          )}

          {/* Education Card */}
          <div className="p-6 rounded-2xl bg-[#18181B]/80 border border-[#27272A] glass-panel-interactive flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-400 text-xs font-mono font-bold">
                  {PERSONAL_INFO.education.cgpa}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  {PERSONAL_INFO.education.degree}
                </h3>
                <p className="text-blue-400 text-xs font-mono mt-1">
                  {PERSONAL_INFO.education.institution} • {PERSONAL_INFO.education.location}
                </p>
                <p className="text-zinc-400 text-xs font-mono mt-0.5">
                  Duration: {PERSONAL_INFO.education.period}
                </p>
              </div>

              <div className="pt-2 border-t border-[#27272A] space-y-2">
                <p className="text-xs text-zinc-400 font-mono">Relevant Coursework:</p>
                <div className="flex flex-wrap gap-1.5">
                  {PERSONAL_INFO.education.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-2 py-0.5 rounded bg-[#111111] border border-[#27272A] text-zinc-300 text-[11px]"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Current Experience Card */}
          <div className="p-6 rounded-2xl bg-[#18181B]/80 border border-[#27272A] glass-panel-interactive flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-purple-600/10 border border-purple-500/20 text-purple-400">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-mono">
                  Feb 2026 - Current
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  Java Full Stack Developer
                </h3>
                <p className="text-purple-400 text-xs font-mono mt-1">
                  Real IT Solution Pune • Remote
                </p>
                <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                  Building microservices with Java & Spring Boot, integrating modern React 19 UIs, and deploying Spring AI capabilities.
                </p>
              </div>

              <div className="pt-2 border-t border-[#27272A] space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>35% backend latency reduction</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Spring AI & Agentic Tooling</span>
                </div>
              </div>
            </div>
          </div>

          {/* Internship Experience Card */}
          <div className="p-6 rounded-2xl bg-[#18181B]/80 border border-[#27272A] glass-panel-interactive flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl bg-cyan-600/10 border border-cyan-500/20 text-cyan-400">
                  <Award className="w-6 h-6" />
                </div>
                <span className="px-2.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-mono">
                  Sep - Nov 2025
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white">
                  Java Developer Intern
                </h3>
                <p className="text-cyan-400 text-xs font-mono mt-1">
                  Elevate Labs • Remote
                </p>
                <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                  Developed RESTful APIs with Core Java, Spring Boot, Hibernate JPA, and MySQL database optimization in agile sprints.
                </p>
              </div>

              <div className="pt-2 border-t border-[#27272A] space-y-1.5">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>15+ Secure REST APIs delivered</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Automated unit testing & Git</span>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Philosophy */}
          <div className="p-6 rounded-2xl bg-[#18181B]/80 border border-[#27272A] glass-panel-interactive md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-lg bg-amber-600/10 text-amber-400 border border-amber-500/20">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">
                Personal Philosophy & Engineering Standard
              </h3>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed italic">
              "{PERSONAL_INFO.philosophy}"
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-[#27272A]">
              <div className="p-3 rounded-xl bg-[#111111] border border-[#27272A]">
                <p className="text-xs font-bold text-blue-400">Clean Architecture</p>
                <p className="text-[11px] text-zinc-400 mt-0.5">SOLID principles & modular separation of concerns.</p>
              </div>
              <div className="p-3 rounded-xl bg-[#111111] border border-[#27272A]">
                <p className="text-xs font-bold text-purple-400">High Throughput</p>
                <p className="text-[11px] text-zinc-400 mt-0.5">DB query optimization & JPA caching strategies.</p>
              </div>
              <div className="p-3 rounded-xl bg-[#111111] border border-[#27272A]">
                <p className="text-xs font-bold text-emerald-400">AI Innovation</p>
                <p className="text-[11px] text-zinc-400 mt-0.5">Integrating LLM tools natively with Spring AI.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
