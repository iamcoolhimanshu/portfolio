import React from 'react';
import { X, ExternalLink, Database, ShieldCheck, Cpu, Zap, Layers } from 'lucide-react';
import type { Project } from '../../data/portfolioData';
import { GithubIcon } from '../common/SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#111111] border border-[#27272A] rounded-2xl overflow-y-auto shadow-2xl glass-panel text-left flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden border-b border-[#27272A]">
          <img
            src={project.image}
            alt={project.title}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src !== project.fallbackImage) {
                target.src = project.fallbackImage;
              }
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-zinc-300 hover:text-white hover:bg-black/90 border border-zinc-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Banner Overlay Content */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-full bg-blue-600/80 text-white text-xs font-mono font-medium">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                {project.title}
              </h2>
              <p className="text-zinc-300 text-xs sm:text-sm mt-1">
                {project.tagline}
              </p>
            </div>

            {/* Action Links */}
            <div className="flex items-center gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all shadow-md shadow-blue-600/30"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#18181B] hover:bg-zinc-800 border border-[#27272A] text-zinc-200 text-xs font-medium transition-all"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">

          {/* Architecture Overview */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-400 font-heading font-semibold text-base">
              <Layers className="w-5 h-5" />
              <h3>System & Architecture Overview</h3>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed bg-[#18181B] p-4 rounded-xl border border-[#27272A]">
              {project.architectureOverview}
            </p>
          </div>

          {/* Key Features & Optimizations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-heading font-semibold text-base">
                <Cpu className="w-5 h-5" />
                <h3>Core Features</h3>
              </div>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-xs text-zinc-300 flex items-start gap-2 bg-[#18181B]/60 p-3 rounded-lg border border-[#27272A]">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Optimizations */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-purple-400 font-heading font-semibold text-base">
                <Zap className="w-5 h-5" />
                <h3>Performance Optimizations</h3>
              </div>
              <ul className="space-y-2">
                {project.optimizations.map((opt, i) => (
                  <li key={i} className="text-xs text-zinc-300 flex items-start gap-2 bg-[#18181B]/60 p-3 rounded-lg border border-[#27272A]">
                    <span className="text-purple-400 font-bold">•</span>
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Database & Security Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#27272A]">
            
            <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] space-y-1">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold">
                <Database className="w-4 h-4" />
                <span>Database Schema & Storage</span>
              </div>
              <p className="text-xs text-zinc-300 pt-1">{project.database}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] space-y-1">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>Authentication & Security</span>
              </div>
              <p className="text-xs text-zinc-300 pt-1">{project.auth}</p>
            </div>

          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-zinc-400">TECHNOLOGY BADGES</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-blue-950/40 border border-blue-800/40 text-blue-300 text-xs font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
