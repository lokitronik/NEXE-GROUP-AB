import React from 'react';
import { Logo } from './Logo';
import { companies } from '../data/companies';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-structure"
      className="relative min-h-screen w-full flex flex-col justify-between items-center pt-28 pb-16 px-6 sm:px-8 lg:px-12 overflow-hidden bg-[#071322] text-white selection:bg-slate-700 selection:text-white"
    >
      {/* Landscape Background Unit */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* Subtle Atmospheric Nordic Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#050D18] via-[#091B30] to-[#06101D] opacity-95"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 70% 40% at 50% 10%, rgba(26, 68, 116, 0.35) 0%, transparent 80%),
              radial-gradient(ellipse 90% 50% at 50% 100%, rgba(10, 24, 44, 0.8) 0%, transparent 100%)
            `,
          }}
        />

        {/* Minimal Nordic horizon landscape vectors */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-56 sm:h-72 lg:h-96 object-cover opacity-25 text-[#132C4A]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            fill="currentColor"
            d="M0,192L60,197.3C120,203,240,213,360,202.7C480,192,600,160,720,165.3C840,171,960,213,1080,218.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
          <path
            fill="#030810"
            fillOpacity="0.75"
            d="M0,256L48,250.7C96,245,192,235,288,240C384,245,480,267,576,261.3C672,256,768,224,864,218.7C960,213,1056,235,1152,240C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>

        {/* Delicate Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#071322]/20 to-[#071322]/85" />
      </div>

      {/* Main Single Landscape Unit: Group Head & Subordinate Activities */}
      <div className="relative z-10 w-full max-w-5xl mx-auto my-auto flex flex-col items-center">
        
        {/* Top: Central NEXE GROUP Transparent Logo */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 sm:mb-8 transition-transform duration-500 hover:scale-[1.02]">
            <Logo size="hero" variant="light" />
          </div>

          <div className="space-y-2 max-w-2xl px-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-slate-100">
              NEXE GROUP AB
            </h1>
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] font-mono text-slate-400">
              Koncernmoderbolag & Central Struktur
            </p>
          </div>
        </div>

        {/* Minimal Hierarchy Connector */}
        <div className="flex flex-col items-center my-8 sm:my-10 w-full">
          <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-slate-400/80 via-slate-500/40 to-slate-600/20" />
          <div className="flex items-center gap-3 my-2">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
              Verksamheter & Bolag under NEXE-strukturen
            </span>
          </div>
          <div className="w-full max-w-2xl h-[1px] bg-slate-700/60 hidden md:block" />
        </div>

        {/* Corporate Units Grid (Easily expandable for future companies) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {companies.map((company) => {
            const hasExternalUrl = Boolean(company.url && company.url.trim() !== '');

            return (
              <div
                key={company.id}
                id={`unit-${company.id}`}
                className="bg-[#0D1E33]/80 backdrop-blur-md border border-slate-700/60 rounded-xs p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-400/70 hover:bg-[#11243D]/90 group"
              >
                <div>
                  {/* Category / Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                      {company.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                      Aktiv enhet
                    </span>
                  </div>

                  {/* Company Name */}
                  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-white mb-2">
                    {company.name}
                  </h2>

                  {/* Corporate description */}
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-6">
                    {company.description}
                  </p>
                </div>

                {/* Bottom link / action */}
                <div className="pt-4 border-t border-slate-700/50 flex items-center justify-between">
                  {hasExternalUrl ? (
                    <a
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-slate-200 hover:text-white transition-colors group/link"
                      aria-label={`Besök ${company.name} webbplats`}
                    >
                      <span>Webbplats</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-white" />
                    </a>
                  ) : (
                    <span className="text-xs uppercase tracking-widest font-mono text-slate-500">
                      Koncerndel
                    </span>
                  )}
                  <span className="text-[10px] font-mono text-slate-500">
                    NEXE GROUP AB
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle bottom scroll prompt to structure & contact */}
      <div className="relative z-10 w-full flex justify-center pt-8">
        <a
          href="#koncernstruktur"
          className="text-[11px] font-mono uppercase tracking-[0.2em] text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-2"
        >
          <span>Koncerninformation</span>
          <span className="opacity-60">↓</span>
        </a>
      </div>
    </section>
  );
};
