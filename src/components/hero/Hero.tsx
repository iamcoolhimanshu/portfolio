import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Download, Mail, Terminal, Code2, Cpu, CheckCircle2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'java' | 'react' | 'terminal'>('java');
  const [terminalLineIndex, setTerminalLineIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Simulated terminal lines
  const terminalLines = [
    "$ spring-boot-cli init --archetype microservice",
    "✔ Compiling Java 17 Spring Boot backend service...",
    "✔ Connecting PostgreSQL & Redis caching layer...",
    "✔ Loading Spring AI agentic pipeline...",
    "✔ React 19 Frontend connected on http://localhost:5173",
    "⚡ System Status: ALL SERVICES OPERATIONAL (100% HEALTH)"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTerminalLineIndex((prev) => (prev < terminalLines.length - 1 ? prev + 1 : prev));
    }, 1200);
    return () => clearInterval(timer);
  }, [terminalLines.length]);

  // Lightweight 3D/2D glowing canvas particles visual
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number; color: string }> = [];
    const colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#60A5FA'];

    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        radius: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.15 - dist / 700})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-aurora">
      {/* Background Glows & Dot Overlay */}
      <div className="absolute inset-0 bg-dot-grid pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Introduction */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-mono w-fit shadow-sm shadow-emerald-900/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Java Full-Stack & AI Roles</span>
            </div>

            {/* Main Greeting Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Hi, I'm{' '}
                <span className="text-gradient">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              {/* Subtitles & Roles */}
              <div className="flex flex-wrap items-center gap-2 text-lg sm:text-xl font-heading font-medium text-blue-400 pt-1">
                <span className="text-zinc-300">Full Stack Java Developer</span>
                <span className="text-zinc-600">•</span>
                <span className="text-purple-400">Backend Engineer</span>
                <span className="text-zinc-600">•</span>
                <span className="text-cyan-400">AI Enthusiast</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              Building scalable backend systems with <span className="text-zinc-200 font-medium">Java & Spring Boot</span>, high-performance web applications using <span className="text-zinc-200 font-medium">React & TypeScript</span>, and integrating <span className="text-zinc-200 font-medium">Spring AI</span> into modern workflows.
            </p>

            {/* Key Skill Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {['Java 17', 'Spring Boot 3', 'Microservices', 'React 19', 'Spring AI', 'Docker', 'MySQL'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-[#18181B] border border-[#27272A] text-zinc-300 text-xs font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/25 hover:scale-105 active:scale-95 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#18181B] hover:bg-zinc-800 border border-[#27272A] hover:border-zinc-700 text-zinc-200 font-medium text-sm transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#18181B] hover:bg-zinc-800 border border-[#27272A] hover:border-zinc-700 text-zinc-300 font-medium text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Animated Developer Workspace Window */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-[#111111]/90 border border-[#27272A] shadow-2xl overflow-hidden glass-panel">
              {/* Canvas Overlay in background of editor */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <canvas ref={canvasRef} className="w-full h-full" />
              </div>

              {/* Editor Window Titlebar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#18181B] border-b border-[#27272A] relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-[#09090B] p-1 rounded-lg border border-[#27272A] text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('java')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'java' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>ProductivityService.java</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('react')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'react' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5" />
                    <span>App.tsx</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
                      activeTab === 'terminal' ? 'bg-blue-600 text-white' : 'text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>Terminal</span>
                  </button>
                </div>
              </div>

              {/* Editor Code Body */}
              <div className="p-5 font-mono text-xs leading-relaxed min-h-[300px] flex flex-col justify-between relative z-10">
                {activeTab === 'java' && (
                  <div className="space-y-1 text-zinc-300">
                    <p className="text-purple-400">@RestController</p>
                    <p className="text-purple-400">@RequestMapping<span className="text-zinc-300">(</span><span className="text-emerald-400">"/api/v1/lifeos"</span><span className="text-zinc-300">)</span></p>
                    <p className="text-blue-400">public class <span className="text-amber-300">LifeOsController</span> &#123;</p>
                    <p className="pl-4 text-zinc-400">// Spring AI & Backend Microservice</p>
                    <p className="pl-4"><span className="text-purple-400">private final</span> <span className="text-cyan-300">SpringAiService</span> aiService;</p>
                    <br />
                    <p className="pl-4 text-purple-400">@PostMapping<span className="text-zinc-300">(</span><span className="text-emerald-400">"/recommendations"</span><span className="text-zinc-300">)</span></p>
                    <p className="pl-4"><span className="text-blue-400">public</span> ResponseEntity&lt;PlanResponse&gt; generatePlan<span className="text-zinc-300">(</span></p>
                    <p className="pl-8"><span className="text-purple-400">@Valid @RequestBody</span> UserContext context<span className="text-zinc-300">) &#123;</span></p>
                    <p className="pl-12 text-emerald-400">return ResponseEntity.ok(aiService.analyze(context));</p>
                    <p className="pl-8">&#125;</p>
                    <p>&#125;</p>
                  </div>
                )}

                {activeTab === 'react' && (
                  <div className="space-y-1 text-zinc-300">
                    <p className="text-purple-400">import <span className="text-zinc-200">&#123; useState, useEffect &#125;</span> from <span className="text-emerald-400">'react'</span>;</p>
                    <p className="text-purple-400">import <span className="text-zinc-200">&#123; useQuery &#125;</span> from <span className="text-emerald-400">'@tanstack/react-query'</span>;</p>
                    <br />
                    <p className="text-blue-400">export const <span className="text-amber-300">Dashboard</span> = () =&gt; &#123;</p>
                    <p className="pl-4 text-zinc-400">// React 19 + TypeScript Full Stack UI</p>
                    <p className="pl-4"><span className="text-purple-400">const</span> &#123; data, isLoading &#125; = useQuery(&#123;</p>
                    <p className="pl-8"><span className="text-cyan-300">queryKey</span>: [<span className="text-emerald-400">'lifeos-analytics'</span>],</p>
                    <p className="pl-8"><span className="text-cyan-300">queryFn</span>: fetchUserMetrics</p>
                    <p className="pl-4">&#125;);</p>
                    <br />
                    <p className="pl-4 text-emerald-400">return &lt;LifeOsView metrics=&#123;data&#125; /&gt;;</p>
                    <p>&#125;;</p>
                  </div>
                )}

                {activeTab === 'terminal' && (
                  <div className="space-y-2 text-zinc-300 font-mono text-[11px]">
                    {terminalLines.slice(0, terminalLineIndex + 1).map((line, i) => (
                      <p
                        key={i}
                        className={`${
                          line.startsWith('✔')
                            ? 'text-emerald-400'
                            : line.startsWith('⚡')
                            ? 'text-cyan-300 font-semibold'
                            : 'text-zinc-300'
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                    <div className="flex items-center gap-1 text-blue-400 pt-2">
                      <span>$</span>
                      <span className="w-2 h-4 bg-blue-400 animate-pulse" />
                    </div>
                  </div>
                )}

                {/* Footer status bar in terminal */}
                <div className="pt-4 border-t border-[#27272A] flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Clean Architecture • SOLID</span>
                  </div>
                  <div className="flex items-center gap-1 text-purple-400">
                    <Sparkles className="w-3 h-3" />
                    <span>Spring AI Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
