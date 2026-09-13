import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { Mail } from 'lucide-react';
import { Language, CompanyBanner } from './types';
import saneringBanner from './assets/NEXE_SPECIALSANERING.png';
import solarBanner from './assets/NEXE_SOLAR.png';

const companyBanners: CompanyBanner[] = [
  {
    id: 'nexe-specialsanering',
    name: 'NEXE SPECIALSANERING',
    url: 'https://lokitronik.github.io/NEXE-SANERING/',
    image: saneringBanner,
    altText: {
      sv: 'NEXE SPECIALSANERING – Specialiserad sanering och teknisk rengöring. Gå till Nexe Specialsanering.',
      en: 'NEXE SPECIALSANERING – Specialized remediation and technical cleaning. Visit Nexe Specialsanering.',
    },
  },
  {
    id: 'nexe-solar',
    name: 'NEXE SOLAR',
    url: 'https://lokitronik.github.io/NEXE-SOLAR/',
    image: solarBanner,
    altText: {
      sv: 'NEXE SOLAR – Solenergi och tekniska installationer. Gå till Nexe Solar.',
      en: 'NEXE SOLAR – Solar energy and technical installations. Visit Nexe Solar.',
    },
  },
];

export default function App() {
  const [lang, setLang] = useState<Language>('sv');

  const content = {
    sv: {
      headline: 'TVÅ SPECIALISTOMRÅDEN. ETT NEXE.',
      subhead: 'RENARE MILJÖER. SMARTARE ENERGILÖSNINGAR.',
      contactText: 'kontakt@nexegroup.se',
      footerLocation: 'NEXE GROUP AB · STOCKHOLM · SVERIGE',
      visitAria: (name: string) => `Besök ${name} officiella webbplats`,
    },
    en: {
      headline: 'TWO SPECIALIZED DIVISIONS. ONE NEXE.',
      subhead: 'CLEANER ENVIRONMENTS. SMARTER ENERGY SOLUTIONS.',
      contactText: 'kontakt@nexegroup.se',
      footerLocation: 'NEXE GROUP AB · STOCKHOLM · SWEDEN',
      visitAria: (name: string) => `Visit ${name} official website`,
    },
  };

  const current = content[lang];

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center bg-[#FFFFFF] text-slate-900 selection:bg-[#071322] selection:text-white overflow-x-hidden font-sans">
      
      {/* Background soft ambient structure */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute inset-0 bg-radial from-transparent via-[#F8FAFC]/40 to-[#EDF2F7]/50" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      {/* Top Bar: Language Switcher */}
      <header className="relative z-20 w-full max-w-5xl mx-auto pt-4 sm:pt-6 px-6 sm:px-8 flex justify-end items-center">
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
      <section className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center pt-2 sm:pt-4 px-6 text-center">
        {/* Official NEXE GROUP AB Logo */}
        <div className="transition-transform duration-500 hover:scale-[1.01] mb-5 sm:mb-7">
          <Logo size="hero" />
        </div>

        {/* Corporate Headings matching the exact user specification */}
        <div className="max-w-3xl flex flex-col items-center gap-1.5 sm:gap-2">
          <h1 className="text-base sm:text-lg md:text-xl font-bold uppercase tracking-[0.24em] text-slate-900">
            {current.headline}
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-slate-600">
            {current.subhead}
          </p>
        </div>
      </section>

      {/* Cards Section: Direct Interactive Banners */}
      <main className="relative z-10 w-full max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-8 py-6 sm:py-8 flex flex-col gap-6 sm:gap-8">
        {companyBanners.map((company) => {
          const isDark = company.id === 'nexe-specialsanering';

          return (
            <a
              key={company.id}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl focus:outline-hidden focus-visible:ring-3 focus-visible:ring-slate-900 shadow-md select-none ${
                isDark
                  ? 'border-slate-800/80 bg-[#071322]'
                  : 'border-slate-200/90 bg-[#EEF4FB]'
              }`}
              aria-label={current.visitAria(company.name)}
            >
              <img
                src={company.image}
                alt={company.altText[lang]}
                className="w-full h-auto object-cover block transition-transform duration-500 ease-out group-hover:scale-[1.015] aspect-[945/435]"
                loading="eager"
                decoding="sync"
              />
            </a>
          );
        })}
      </main>

      {/* Footer Area: Contact Button & Stockholm Sweden */}
      <footer className="relative z-10 w-full max-w-5xl mx-auto pt-3 pb-8 sm:pb-10 px-6 flex flex-col items-center gap-3 sm:gap-3.5 text-center">
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
