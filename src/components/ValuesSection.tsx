import React from 'react';

export const ValuesSection: React.FC = () => {
  return (
    <section id="arbetssatt" className="py-28 sm:py-36 lg:py-44 px-6 sm:px-8 lg:px-16 bg-[#FAFBFD] border-t border-slate-200/80">
      {/* Invisible anchor target for backwards compatibility */}
      <span id="vardegrund" className="sr-only" />

      <div className="max-w-6xl mx-auto">
        {/* Section Identifier */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs uppercase tracking-[0.25em] font-mono text-slate-400">
              03 — Arbetssätt & Filosofi
            </span>
            <div className="h-[1px] w-12 bg-slate-300" />
          </div>

          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#0B2341] leading-tight mb-6">
              Strukturerat ägande för långsiktig framgång
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Som moderbolag säkerställer NEXE GROUP AB rätt strategiska förutsättningar för våra operativa
              verksamheter att utvecklas och leverera högsta värde till sina uppdragsgivare.
            </p>
          </div>
        </div>

        {/* Minimal Editorial 3-Column Layout with Subtle Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-8 border-t border-slate-200">
          <div className="space-y-4">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
              Pelare 01
            </span>
            <h3 className="text-xl font-medium text-[#0B2341]">
              Fokus & Autonomi
            </h3>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Varje verksamhet behåller sitt entreprenörskap och sin specialisering, med full
              frihet att agera snabbt och lyhört nära kundens behov.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
              Pelare 02
            </span>
            <h3 className="text-xl font-medium text-[#0B2341]">
              Koncernsynergier
            </h3>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Gemensamma funktioner inom affärsutveckling, strategi och administration ger
              stabila stordriftsfördelar och en trygg grund.
            </p>
          </div>

          <div className="space-y-4">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">
              Pelare 03
            </span>
            <h3 className="text-xl font-medium text-[#0B2341]">
              Kvalitetsgaranti
            </h3>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Varumärket NEXE representerar kompromisslös noggrannhet, certifierad kompetens och
              långsiktigt hållbara samarbeten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
