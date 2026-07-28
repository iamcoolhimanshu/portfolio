import React, { useState } from 'react';
import { BookOpen, Clock, X, ChevronRight, Search } from 'lucide-react';
import { BLOG_ARTICLES } from '../../data/portfolioData';
import type { BlogArticle } from '../../data/portfolioData';

export const BlogSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = BLOG_ARTICLES.filter(
    (art) =>
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="blog" className="py-20 bg-[#09090B] relative border-t border-[#27272A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/50 border border-purple-800/40 text-purple-400 text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>DEVELOPER INSIGHTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Technical <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Articles & technical breakdowns on Java backend microservices, Spring AI integration, and modern web architectures.
          </p>
        </div>

        {/* Search Input */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles by topic or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#18181B] border border-[#27272A] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors font-mono"
            />
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="p-6 rounded-2xl bg-[#18181B]/80 border border-[#27272A] glass-panel-interactive cursor-pointer flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-blue-400 font-semibold">{article.category}</span>
                  <div className="flex items-center gap-1 text-zinc-400">
                    <Clock className="w-3 h-3 text-purple-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white hover:text-blue-400 transition-colors leading-snug">
                  {article.title}
                </h3>

                <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#27272A] flex items-center justify-between">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-[#111111] text-zinc-400 text-[10px] font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <ChevronRight className="w-4 h-4 text-blue-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div
              className="relative w-full max-w-3xl max-h-[85vh] bg-[#111111] border border-[#27272A] rounded-2xl overflow-y-auto p-6 sm:p-8 shadow-2xl glass-panel text-left space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-[#27272A] pb-4">
                <div>
                  <span className="text-xs font-mono text-blue-400 font-semibold">
                    {selectedArticle.category} • {selectedArticle.date}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {selectedArticle.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-2 rounded-full bg-[#18181B] text-zinc-400 hover:text-white border border-[#27272A]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body Content */}
              <div className="text-zinc-300 text-sm leading-relaxed space-y-4 font-sans whitespace-pre-line">
                {selectedArticle.content}
              </div>

              <div className="pt-4 border-t border-[#27272A] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>Written by Himanshu Vishwakarma</span>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
