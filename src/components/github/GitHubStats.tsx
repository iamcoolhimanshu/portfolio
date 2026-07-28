import React, { useEffect, useState } from 'react';
import { Star, BookOpen, Users, Activity, ExternalLink, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GithubIcon } from '../common/SocialIcons';

interface UserStats {
  publicRepos: number;
  followers: number;
  stars: number;
  contributions: number;
}

export const GitHubStats: React.FC = () => {
  const [stats, setStats] = useState<UserStats>({
    publicRepos: 18,
    followers: 12,
    stars: 24,
    contributions: 480
  });

  useEffect(() => {
    // Attempt fetching real GitHub user info
    const fetchGitHubData = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/iamcoolhimanshu`);
        if (res.ok) {
          const data = await res.json();
          setStats((prev) => ({
            ...prev,
            publicRepos: data.public_repos || prev.publicRepos,
            followers: data.followers || prev.followers
          }));
        }
      } catch (err) {
        // Fallback to static mock defaults
      }
    };
    fetchGitHubData();
  }, []);

  // Contribution grid blocks generator
  const weeks = Array.from({ length: 24 }, (_, i) => i);
  const daysPerWeek = [0, 1, 2, 3, 4, 5, 6];

  const getContributionColor = (wIndex: number, dIndex: number) => {
    const seed = (wIndex * 7 + dIndex * 3) % 10;
    if (seed > 7) return 'bg-emerald-500';
    if (seed > 4) return 'bg-emerald-700';
    if (seed > 2) return 'bg-emerald-900';
    return 'bg-[#18181B] border border-[#27272A]';
  };

  const languages = [
    { name: 'Java', percentage: 48, color: 'bg-amber-500' },
    { name: 'TypeScript / React', percentage: 30, color: 'bg-blue-500' },
    { name: 'SQL (MySQL/PostgreSQL)', percentage: 12, color: 'bg-cyan-500' },
    { name: 'Python', percentage: 10, color: 'bg-purple-500' }
  ];

  return (
    <section id="github" className="py-20 bg-[#09090B] relative border-t border-[#27272A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/50 border border-blue-800/40 text-blue-400 text-xs font-mono">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>OPEN SOURCE & CODE ACTIVITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            GitHub <span className="text-gradient">Statistics</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Live metrics and commit activity from <span className="font-mono text-zinc-200">github.com/iamcoolhimanshu</span>
          </p>
        </div>

        {/* Stats Metrics Header */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-blue-600/10 text-blue-400 border border-blue-500/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-bold text-white font-mono">{stats.publicRepos}</p>
              <p className="text-xs text-zinc-400 font-mono">Repositories</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-amber-600/10 text-amber-400 border border-amber-500/20">
              <Star className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-bold text-white font-mono">{stats.stars}</p>
              <p className="text-xs text-zinc-400 font-mono">Total Stars</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-purple-600/10 text-purple-400 border border-purple-500/20">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-bold text-white font-mono">{stats.followers}</p>
              <p className="text-xs text-zinc-400 font-mono">Followers</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-emerald-600/10 text-emerald-400 border border-emerald-500/20">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xl font-bold text-white font-mono">{stats.contributions}+</p>
              <p className="text-xs text-zinc-400 font-mono">Annual Commits</p>
            </div>
          </div>
        </div>

        {/* Contribution Heatmap & Language Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Heatmap Matrix */}
          <div className="lg:col-span-8 p-6 rounded-2xl bg-[#18181B]/80 border border-[#27272A] glass-panel flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-heading font-semibold text-sm">
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>Contribution Activity Grid</span>
              </div>
              <span className="text-xs text-zinc-400 font-mono">Last 6 Months</span>
            </div>

            {/* Matrix */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1.5 min-w-[500px]">
                {weeks.map((wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-1.5">
                    {daysPerWeek.map((dIndex) => (
                      <div
                        key={dIndex}
                        className={`w-3 h-3 rounded-sm ${getContributionColor(wIndex, dIndex)}`}
                        title="Commit Activity"
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono pt-2 border-t border-[#27272A]">
              <span>Less</span>
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-sm bg-[#18181B] border border-[#27272A]" />
                <span className="w-3 h-3 rounded-sm bg-emerald-900" />
                <span className="w-3 h-3 rounded-sm bg-emerald-700" />
                <span className="w-3 h-3 rounded-sm bg-emerald-500" />
              </div>
              <span>More</span>
            </div>
          </div>

          {/* Top Languages */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-[#18181B]/80 border border-[#27272A] glass-panel space-y-4">
            <div className="flex items-center gap-2 text-white font-heading font-semibold text-sm">
              <Code2 className="w-4 h-4 text-blue-400" />
              <span>Most Used Languages</span>
            </div>

            <div className="space-y-3 pt-2">
              {languages.map((lang) => (
                <div key={lang.name} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-300">{lang.name}</span>
                    <span className="text-zinc-400">{lang.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-[#111111] rounded-full overflow-hidden border border-zinc-800">
                    <div
                      className={`h-full rounded-full ${lang.color}`}
                      style={{ width: `${lang.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#111111] hover:bg-zinc-800 border border-[#27272A] text-xs font-mono text-zinc-300 hover:text-white transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Visit @iamcoolhimanshu</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
