import React from 'react';
import { Logo } from './Logo';
import { ChevronDown, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[90vh] flex flex-col justify-center items-center pt-28 pb-16 px-6 sm:px-8 lg:px-12 bg-linear-to-b from-white via-[#F8FAFC] to-[#F1F5F9] border-b border-slate-200/70 overflow-hidden"
    >
      {/* Subtle Architectural Grid Pattern (Refined, minimal) */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0B2341 1px, transparent 1px), linear-gradient(to right, #0B2341 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Official NEXE GROUP AB Logo Display */}
        <div className="mb-10 sm:mb-12 transition-transform duration-500 hover:scale-[1.01]">
          <Logo size="hero" />
        </div>

        {/* Swedish Corporate Tagline */}
        <h1
          id="hero-tagline"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0B2341] max-w-4xl leading-[1.15] mb-6"
        >
          Specialiserade verksamheter.{' '}
          <span className="text-slate-600 font-semibold block sm:inline">
            Gemensamma ambitioner.
          </span>
        </h1>

        {/* Understated Sub-intro in Swedish */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed mb-10">
          NEXE GROUP samlar specialiserade verksamheter inom olika områden, med ett gemensamt fokus på kvalitet,
          teknik och långsiktig utveckling.
        </p>

        {/* Clean, single primary CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#verksamheter"
            id="hero-explore-cta"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0B2341] text-white text-sm font-semibold tracking-wider uppercase rounded-sm hover:bg-[#143258] transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.99] group"
          >
            <span>Utforska verksamheter</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#om-koncernen"
            className="inline-flex items-center justify-center px-7 py-4 text-sm font-medium tracking-wide text-slate-700 hover:text-[#0B2341] transition-colors"
          >
            Om koncernen
          </a>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="relative z-10 mt-16 sm:mt-20 flex flex-col items-center text-slate-400">
        <a
          href="#om-koncernen"
          aria-label="Skrolla ned till om koncernen"
          className="flex flex-col items-center gap-1 hover:text-[#0B2341] transition-colors text-xs font-medium uppercase tracking-widest"
        >
          <span>Koncernstruktur</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
