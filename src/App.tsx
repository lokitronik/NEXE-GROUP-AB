import React from 'react';
import { Logo } from './components/Logo';
import { companies } from './data/companies';
import { ArrowUpRight } from 'lucide-react';

export default function App() {
  return (
    <div className="relative min-h-screen lg:h-screen lg:max-h-screen w-full flex flex-col justify-between items-center bg-[#050D1A] text-white selection:bg-slate-700 selection:text-white px-6 sm:px-10 lg:px-16 py-8 sm:py-10 lg:py-10 overflow-x-hidden">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Deep Nordic Radial Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#040A14] via-[#071526] to-[#040A14] opacity-95"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 60% 40% at 50% 20%, rgba(24, 60, 104, 0.28) 0%, transparent 75%),
              radial-gradient(ellipse 80% 50% at 50% 100%, rgba(8, 20, 36, 0.7) 0%, transparent 100%)
            `,
          }}
        />

        {/* Minimal Horizon Vector */}
        <svg
          className="absolute bottom-0 left-0 right-0 w-full h-40 sm:h-56 lg:h-64 object-cover opacity-20 text-[#10253E]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            fill="currentColor"
            d="M0,192L80,197.3C160,203,320,213,480,202.7C640,192,800,160,960,165.3C1120,171,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>

        {/* Subtle Vignette */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#050D1A]/30 to-[#050D1A]/90" />
      </div>

      {/* Top / Main Element: Official Logo */}
      <header className="relative z-10 w-full flex flex-col items-center pt-2 sm:pt-4">
        <div className="relative flex flex-col items-center">
          {/* Subtle Ambient Backlight Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-[480px] lg:w-[560px] h-28 sm:h-36 md:h-44 bg-blue-500/10 blur-3xl rounded-full pointer-events-none -z-10" />

          <div className="transition-transform duration-500 hover:scale-[1.015]">
            <Logo size="hero" variant="light" />
          </div>
        </div>
      </header>

      {/* Center Zone: Group Companies / Activities (Horizontal Minimal Layout) */}
      <main className="relative z-10 w-full max-w-4xl mx-auto my-auto py-6 sm:py-8 flex flex-col items-center">
        {/* Minimal Hierarchy Indicator */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 opacity-60">
          <div className="w-8 sm:w-12 h-[1px] bg-slate-500/50" />
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-slate-400">
            Verksamheter
          </span>
          <div className="w-8 sm:w-12 h-[1px] bg-slate-500/50" />
        </div>

        {/* Horizontal Companies Structure */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {companies.map((company) => {
            const hasExternalUrl = Boolean(company.url && company.url.trim() !== '');

            const cardContent = (
              <div
                id={`company-${company.id}`}
                className={`w-full p-5 sm:p-6 rounded-xs border transition-all duration-300 flex flex-col justify-between ${
                  hasExternalUrl
                    ? 'bg-[#0B1A2C]/60 hover:bg-[#10233B]/80 border-slate-700/60 hover:border-slate-400/80 group cursor-pointer'
                    : 'bg-[#0B1A2C]/30 border-slate-800/60'
                } backdrop-blur-xs`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="text-base sm:text-lg font-semibold tracking-tight text-slate-100 group-hover:text-white transition-colors">
                    {company.name}
                  </h2>
                  {hasExternalUrl && (
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
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
                  className="block focus:outline-hidden focus:ring-1 focus:ring-slate-400/50 rounded-xs"
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

      {/* Bottom Area: Minimal Contact & Discrete Footer */}
      <footer className="relative z-10 w-full flex flex-col items-center gap-4 pt-4 pb-2">
        {/* Contact */}
        <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 text-xs tracking-wider">
          <span className="font-mono uppercase text-slate-500 text-[10px] sm:text-xs">
            Kontakt:
          </span>
          <a
            href="mailto:kontakt@nexegroup.se"
            id="contact-email-link"
            className="text-slate-300 hover:text-white transition-colors duration-200 font-light border-b border-slate-700/60 hover:border-slate-300"
          >
            kontakt@nexegroup.se
          </a>
        </div>

        {/* Minimal Footer Note */}
        <p className="text-[10px] sm:text-[11px] font-mono text-slate-600 tracking-wide">
          © 2026 NEXE GROUP AB · Sverige
        </p>
      </footer>
    </div>
  );
}
