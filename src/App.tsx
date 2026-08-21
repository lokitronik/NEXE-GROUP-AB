import React from 'react';
import { Logo } from './components/Logo';
import { companies } from './data/companies';
import { ArrowUpRight } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen lg:h-screen lg:max-h-screen w-full flex flex-col justify-between items-center bg-[#FFFFFF] text-slate-900 selection:bg-slate-800 selection:text-white overflow-x-hidden">
      
      {/* Subtle light background refinement */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          className="absolute inset-0 bg-radial from-transparent via-[#F8FAFC]/50 to-[#EDF2F7]/70"
        />
        {/* Soft geometric hairline accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* Main Top Header: Official Logo on White Canvas */}
      <header className="relative z-10 w-full flex flex-col items-center pt-8 sm:pt-10 lg:pt-12 px-6">
        <div className="relative flex flex-col items-center">
          <div className="transition-transform duration-500 hover:scale-[1.015]">
            <Logo size="hero" variant="default" />
          </div>
        </div>
      </header>

      {/* Center Zone: Group Companies / Activities - Dark Contrast Cards */}
      <main className="relative z-10 w-full max-w-4xl mx-auto my-auto px-6 sm:px-10 lg:px-12 py-6 sm:py-8 flex flex-col items-center">
        {/* Minimal Section Divider */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 opacity-70">
          <div className="w-8 sm:w-12 h-[1px] bg-slate-300" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-slate-500 font-medium">
            Verksamheter
          </span>
          <div className="w-8 sm:w-12 h-[1px] bg-slate-300" />
        </div>

        {/* Horizontal Companies Structure (Dark Cards on White Background) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {companies.map((company) => {
            const hasExternalUrl = Boolean(company.url && company.url.trim() !== '');

            const cardContent = (
              <div
                id={`company-${company.id}`}
                className={`w-full p-6 sm:p-7 rounded-sm border transition-all duration-300 flex flex-col justify-between shadow-lg shadow-slate-900/10 ${
                  hasExternalUrl
                    ? 'bg-[#071322] hover:bg-[#0B1E34] border-[#132A4A] hover:border-slate-500 text-white group cursor-pointer hover:shadow-xl hover:shadow-slate-900/20 hover:-translate-y-0.5'
                    : 'bg-[#091728] border-[#132A4A]/80 text-white'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <h2 className="text-base sm:text-lg font-semibold tracking-tight text-white group-hover:text-slate-100 transition-colors">
                    {company.name}
                  </h2>
                  {hasExternalUrl && (
                    <div className="p-1 rounded-xs bg-slate-800/80 group-hover:bg-slate-700/80 transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 shrink-0" />
                    </div>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {company.tagline}
                </p>
              </div>
            );

            if (hasExternalUrl) {
              return (
                <a
                  key={company.id}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-hidden focus:ring-2 focus:ring-[#071322]/40 rounded-sm"
                  aria-label={`Besök ${company.name}`}
                >
                  {cardContent}
                </a>
              );
            }

            return <div key={company.id}>{cardContent}</div>;
          })}
        </div>
      </main>

      {/* Bottom Area: Dark Footer Banner */}
      <footer className="relative z-10 w-full bg-[#071322] text-white border-t border-slate-800/90 py-5 sm:py-6 px-6 sm:px-10 lg:px-16 shadow-2xl">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          {/* Contact */}
          <div className="flex items-center gap-2 tracking-wider">
            <span className="font-mono uppercase text-slate-400 text-[10px] sm:text-xs">
              Kontakt:
            </span>
            <a
              href="mailto:kontakt@nexegroup.se"
              id="contact-email-link"
              className="text-slate-200 hover:text-white transition-colors duration-200 font-normal border-b border-slate-600/80 hover:border-slate-300"
            >
              kontakt@nexegroup.se
            </a>
          </div>

          {/* Minimal Copyright */}
          <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 tracking-wide">
            © 2026 NEXE GROUP AB · Sverige
          </p>
        </div>
      </footer>
    </div>
  );
}
