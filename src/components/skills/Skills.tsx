import React, { useState } from 'react';
import { Cpu, Server, Layout, Database, Bot, Cloud, Search, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ReactNode> = {
    'Backend Development': <Server className="w-5 h-5 text-blue-400" />,
    'Frontend & UI': <Layout className="w-5 h-5 text-purple-400" />,
    'Databases & Caching': <Database className="w-5 h-5 text-emerald-400" />,
    'AI Tools & Frameworks': <Bot className="w-5 h-5 text-cyan-400" />,
    'DevOps & Cloud Tools': <Cloud className="w-5 h-5 text-amber-400" />,
    'Core Engineering Competencies': <Cpu className="w-5 h-5 text-indigo-400" />
  };

  const categories = ['All', ...SKILL_CATEGORIES.map(cat => cat.title)];

  const filteredCategories = SKILL_CATEGORIES.map(category => {
    if (selectedCategory !== 'All' && category.title !== selectedCategory) {
      return null;
    }

    const filteredSkills = category.skills.filter(skill =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
    );

    if (filteredSkills.length === 0) return null;

    return {
      ...category,
      skills: filteredSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 bg-[#09090B] relative border-t border-[#27272A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/50 border border-purple-800/40 text-purple-400 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Specialized in backend microservices with Java & Spring Boot, modern React architectures, and AI tool integrations.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 max-w-full overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'bg-[#18181B] text-zinc-400 hover:text-zinc-200 border border-[#27272A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Instant Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills (e.g. Java, AI, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#18181B] border border-[#27272A] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors font-mono"
            />
          </div>

        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => category && (
            <div
              key={category.title}
              className="p-6 rounded-2xl bg-[#18181B]/80 border border-[#27272A] glass-panel-interactive flex flex-col justify-between"
            >
              <div>
                {/* Card Title Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#27272A]">
                  <div className="p-2.5 rounded-xl bg-[#111111] border border-[#27272A]">
                    {categoryIcons[category.title] || <Cpu className="w-5 h-5 text-blue-400" />}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3.5">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className={`font-medium flex items-center gap-1.5 ${
                          skill.highlight ? 'text-blue-300 font-semibold' : 'text-zinc-300'
                        }`}>
                          {skill.highlight && <CheckCircle2 className="w-3 h-3 text-blue-400 shrink-0" />}
                          {skill.name}
                        </span>
                        <span className="text-zinc-500 font-mono text-[10px]">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-[#111111] rounded-full overflow-hidden border border-zinc-800">
                        <div
                          className={`h-full rounded-full transition-all duration-700 ${
                            skill.highlight
                              ? 'bg-gradient-to-r from-blue-500 to-indigo-500'
                              : 'bg-zinc-600'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
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
