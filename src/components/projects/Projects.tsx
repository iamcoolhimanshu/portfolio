import React, { useState } from 'react';
import { ExternalLink, Layers, Search, Sparkles, FolderGit2 } from 'lucide-react';
import { PROJECTS } from '../../data/portfolioData';
import type { Project } from '../../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from '../common/SocialIcons';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'AI', 'Full Stack', 'Backend', 'Enterprise'];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 bg-[#09090B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED SOFTWARE ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Production-grade full-stack applications showcasing Java microservices, React UIs, Spring AI integration, and robust database schemas.
          </p>
        </div>

        {/* Filter Buttons & Instant Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-[#18181B] text-zinc-400 hover:text-zinc-200 border border-[#27272A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search projects by tech or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#18181B] border border-[#27272A] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors font-mono"
            />
          </div>

        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#18181B]/80 border border-[#27272A] overflow-hidden glass-panel-interactive flex flex-col justify-between"
            >
              {/* Card Image Header with Error Fallback */}
              <div className="relative h-48 overflow-hidden bg-[#111111]">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    // Fallback to online preset image if local screenshot hasn't been added yet
                    const target = e.target as HTMLImageElement;
                    if (target.src !== project.fallbackImage) {
                      target.src = project.fallbackImage;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-transparent opacity-80" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-zinc-700 text-blue-400 text-[11px] font-mono font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Featured Glow */}
                {project.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-md bg-purple-950/80 border border-purple-700 text-purple-300 text-[11px] font-mono">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#111111] border border-[#27272A] text-zinc-300 text-[10px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 5 && (
                    <span className="px-2 py-0.5 rounded bg-[#111111] text-zinc-500 text-[10px] font-mono">
                      +{project.techStack.length - 5} more
                    </span>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#27272A] flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Architecture Details</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-[#111111] hover:bg-zinc-800 border border-[#27272A] text-zinc-300 hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-sm shadow-blue-600/30"
                        title="Open Live Deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Architecture Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
