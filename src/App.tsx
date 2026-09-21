import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { Mail } from 'lucide-react';
import { Language, CompanyBanner } from './types';
import { getAssetUrl } from './utils';

const companyBanners: CompanyBanner[] = [
  {
    id: 'nexe-specialsanering',
    name: 'NEXE SPECIALSANERING',
    isUnderConstruction: true,
    image: getAssetUrl('NEXE_SPECIALSANERING.png'),
    altText: {
      sv: 'NEXE SPECIALSANERING – Specialiserad sanering och teknisk rengöring. Under uppbyggnad.',
      en: 'NEXE SPECIALSANERING – Specialized remediation and technical cleaning. Under construction.',
    },
  },
  {
    id: 'nexe-solar',
    name: 'NEXE SOLAR',
    url: 'https://nexesolar.se/',
    image: getAssetUrl('NEXE_SOLAR.png'),
    altText: {
      sv: 'NEXE SOLAR – Solenergi och tekniska installationer. Gå till nexesolar.se.',
      en: 'NEXE SOLAR – Solar energy and technical installations. Visit nexesolar.se.',
    },
  },
  {
    id: 'nexe-rivning',
    name: 'NEXE RIVNING',
    url: 'https://nexerivning.se/',
    image: getAssetUrl('NEXE_RIVNING.png'),
    altText: {
      sv: 'NEXE RIVNING – Rivning med omtanke, köksrivning och förberedelser inför renovering. Gå till nexerivning.se.',
      en: 'NEXE RIVNING – Thoughtful demolition, kitchen removal, and renovation prep. Visit nexerivning.se.',
    },
  },
];

export default function App() {
  const [lang, setLang] = useState<Language>('sv');

  const content = {
    sv: {
      headline: 'TRE SPECIALISTOMRÅDEN. ETT NEXE',
      subhead: 'RENARE MILJÖER · SMARTARE ENERGILÖSNINGAR · RIVNING MED OMTANKE',
      underConstruction: 'UNDER UPPBYGGNAD',
      contactText: 'kontakt@nexegroup.se',
      footerLocation: 'NEXE GROUP AB · STOCKHOLM · SVERIGE',
      visitAria: (name: string) => `Besök ${name} officiella webbplats`,
    },
    en: {
      headline: 'THREE SPECIALIZED DIVISIONS. ONE NEXE',
      subhead: 'CLEANER ENVIRONMENTS · SMARTER ENERGY SOLUTIONS · THOUGHTFUL DEMOLITION',
      underConstruction: 'UNDER CONSTRUCTION',
      contactText: 'kontakt@nexegroup.se',
      footerLocation: 'NEXE GROUP AB · STOCKHOLM · SWEDEN',
      visitAria: (name: string) => `Visit ${name} official website`,
    },
  };

  const current = content[lang];

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center bg-[#FFFFFF] text-slate-900 selection:bg-[#071322] selection:text-white overflow-x-hidden font-sans">
      
      {/* Background soft ambient structure */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-radial from-transparent via-[#F8FAFC]/40 to-[#EDF2F7]/50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* Top Bar: Language Switcher */}
      <header className="relative z-20 w-full max-w-6xl mx-auto pt-4 sm:pt-6 px-4 sm:px-6 lg:px-8 flex justify-end items-center">
        <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-slate-100/90 border border-slate-200/80 text-xs font-mono tracking-wider shadow-xs">
          <button
            type="button"
            onClick={() => setLang('sv')}
            className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
              lang === 'sv'
                ? 'bg-white text-slate-900 font-bold shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
            aria-label="Välj svenska"
          >
            SV
          </button>

          <span className="text-slate-300 text-xs select-none">|</span>

          <button
            type="button"
            onClick={() => setLang('en')}
            className={`px-2.5 py-1 rounded-full transition-all duration-200 ${
              lang === 'en'
                ? 'bg-white text-slate-900 font-bold shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
            aria-label="Select English"
          >
            EN
          </button>
        </div>
      </header>

      {/* Main Brand & Header Presentation */}
      <section className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center pt-2 sm:pt-3 px-4 sm:px-6 text-center">
        
        {/* Official NEXE GROUP AB Logo */}
        <div className="transition-transform duration-500 hover:scale-[1.01] mb-4 sm:mb-6">
          <Logo size="hero" />
        </div>

        {/* Corporate Headings */}
        <div className="max-w-[760px] flex flex-col items-center gap-1.5 sm:gap-2">
          <h1 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-[0.22em] text-slate-900">
            {current.headline}
          </h1>

          <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.16em] text-slate-600">
            {current.subhead}
          </p>
        </div>
      </section>

      {/* Cards Section: Direct Interactive Banners (Horizontal in 3 columns on tablet/desktop, stacked on mobile) */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 items-stretch">
        {companyBanners.map((company) => {
          const isDark = company.id === 'nexe-specialsanering';

          if (company.isUnderConstruction) {
            return (
              <div
                key={company.id}
                className="flex flex-col relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800/80 bg-[#071322] shadow-xs select-none"
                aria-label={`${company.name} – ${current.underConstruction}`}
              >
                <div className="w-full aspect-[945/435] overflow-hidden relative flex items-center justify-center">
                  {/* Subtle translucent banner with darkened opacity */}
                  <img
                    src={company.image}
                    alt={company.altText[lang]}
                    className="w-full h-full object-cover block opacity-40 filter brightness-90"
                    loading="eager"
                    decoding="sync"
                  />
                  {/* Semi-transparent frosted glass overlay with status badge */}
                  <div className="absolute inset-0 bg-[#071322]/40 backdrop-blur-[2px] flex items-center justify-center p-3">
                    <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-950/75 border border-slate-700/80 backdrop-blur-md shadow-lg">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400/90 animate-pulse" />
                      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-slate-200 whitespace-nowrap">
                        {current.underConstruction}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          }

          return (
            <a
              key={company.id}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl focus:outline-hidden focus-visible:ring-3 focus-visible:ring-slate-900 shadow-sm select-none ${
                isDark
                  ? 'border-slate-800/80 bg-[#071322]'
                  : company.id === 'nexe-rivning'
                    ? 'border-slate-200/90 bg-[#F8FAFC]'
                    : 'border-slate-200/90 bg-[#EEF4FB]'
              }`}
              aria-label={current.visitAria(company.name)}
            >
              <div className="w-full aspect-[945/435] overflow-hidden flex items-center justify-center">
                <img
                  src={company.image}
                  alt={company.altText[lang]}
                  className="w-full h-full object-cover block transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="eager"
                  decoding="sync"
                />
              </div>
            </a>
          );
        })}
      </main>

      {/* Footer Area: Contact Button & Stockholm Sweden */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto pt-2 pb-6 sm:pb-8 px-4 sm:px-6 flex flex-col items-center gap-2.5 sm:gap-3 text-center">
        
        {/* Email Pill Button */}
        <a
          href="mailto:kontakt@nexegroup.se"
          id="contact-email-link"
          className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full border border-slate-200 bg-slate-50/80 hover:bg-slate-100 hover:border-slate-300 text-slate-800 text-xs sm:text-sm font-medium transition-all duration-200 shadow-xs hover:shadow-sm"
          aria-label="Skicka e-post till kontakt@nexegroup.se"
        >
          <Mail className="w-4 h-4 text-slate-600" />
          <span>{current.contactText}</span>
        </a>

        {/* Location & Copyright */}
        <p className="text-[11px] sm:text-xs font-mono text-slate-500 tracking-wider">
          {current.footerLocation}
        </p>
      </footer>
    </div>
  );
}
