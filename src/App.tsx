import React from 'react';
import { Logo } from './components/Logo';
import { companies } from './data/companies';
import { ArrowUpRight } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-[100dvh] lg:h-[100dvh] lg:max-h-[100dvh] w-full flex flex-col justify-between items-center bg-[#FFFFFF] text-slate-900 selection:bg-slate-800 selection:text-white overflow-x-hidden">
      
      {/* Subtle light background refinement */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute inset-0 bg-radial from-transparent via-[#F8FAFC]/50 to-[#EDF2F7]/70" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* Main Top Header: Official Logo on White Canvas */}
      <header className="relative z-10 w-full flex flex-col items-center pt-6 sm:pt-8 lg:pt-10 px-4 sm:px-6">
        {/* Hidden SEO H1 for search engines & assistive tech */}
        <h1 className="sr-only">NEXE GROUP AB – Specialiserade verksamhetsgrenar</h1>

        <div className="relative flex flex-col items-center">
          <div className="transition-transform duration-300 hover:scale-[1.01]">
            <Logo size="hero" variant="default" />
          </div>
        </div>
      </header>

      {/* Center Zone: Group Companies / Activities - Dark Contrast Cards */}
      <main className="relative z-10 w-full max-w-4xl mx-auto my-auto px-4 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 flex flex-col items-center">
        {/* Minimal Section Divider */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6 lg:mb-8 opacity-70" aria-hidden="true">
          <div className="w-8 sm:w-12 h-[1px] bg-slate-300" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-slate-500 font-medium">
            Verksamheter
          </span>
          <div className="w-8 sm:w-12 h-[1px] bg-slate-300" />
        </div>

        {/* Horizontal Companies Structure (Dark Cards on White Background) */}
        <section
          aria-label="Verksamhetsgrenar inom NEXE GROUP AB"
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-6 lg:gap-8"
        >
          {companies.map((company) => {
            const hasExternalUrl = Boolean(company.url && company.url.trim() !== '');

            const cardContent = (
              <article
                id={`company-${company.id}`}
                className={`w-full p-4.5 sm:p-6 lg:p-7 rounded-sm border transition-all duration-200 flex flex-col justify-between shadow-md sm:shadow-lg shadow-slate-900/5 ${
                  hasExternalUrl
                    ? 'bg-[#071322] hover:bg-[#0B1E34] border-[#132A4A] hover:border-slate-500 text-white group cursor-pointer hover:shadow-xl hover:shadow-slate-900/15 hover:-translate-y-0.5 active:scale-[0.99]'
                    : 'bg-[#091728] border-[#132A4A]/80 text-white'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-2 sm:mb-2.5">
                  <h2 className="text-sm sm:text-base lg:text-lg font-semibold tracking-tight text-white group-hover:text-slate-100 transition-colors">
                    {company.name}
                  </h2>
                  {hasExternalUrl && (
                    <div className="p-1 rounded-xs bg-slate-800/80 group-hover:bg-slate-700/80 transition-colors shrink-0">
                      <ArrowUpRight
                        className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  {company.tagline}
                </p>
              </article>
            );

            if (hasExternalUrl) {
              return (
                <a
                  key={company.id}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#071322] rounded-sm touch-manipulation min-h-[44px]"
                  aria-label={`Besök ${company.name} – öppnas i ny flik`}
                >
                  {cardContent}
                </a>
              );
            }

            return <div key={company.id}>{cardContent}</div>;
          })}
        </section>
      </main>

      {/* Bottom Area: Dark Footer Banner */}
      <footer className="relative z-10 w-full bg-[#071322] text-white border-t border-slate-800/90 py-4 sm:py-5 lg:py-6 px-4 sm:px-8 lg:px-16 shadow-2xl">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-xs">
          {/* Contact (Semantic address tag for local SEO & accessibility) */}
          <address className="not-italic flex items-center gap-2 tracking-wider">
            <span className="font-mono uppercase text-slate-400 text-[10px] sm:text-xs">
              Kontakt:
            </span>
            <a
              href="mailto:kontakt@nexegroup.se"
              id="contact-email-link"
              className="text-slate-200 hover:text-white transition-colors duration-200 font-normal border-b border-slate-600/80 hover:border-slate-300 inline-flex items-center min-h-[36px] sm:min-h-[auto] py-1 touch-manipulation"
              aria-label="Skicka e-post till NEXE GROUP AB på kontakt@nexegroup.se"
            >
              kontakt@nexegroup.se
            </a>
          </address>

          {/* Minimal Copyright */}
          <p className="text-[10px] sm:text-[11px] font-mono text-slate-400 tracking-wide text-center sm:text-right">
            © 2026 NEXE GROUP AB · Sverige
          </p>
        </div>
      </footer>
    </div>
  );
}
