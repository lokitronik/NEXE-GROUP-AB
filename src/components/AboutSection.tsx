import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="bolagsstruktur" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-16 bg-[#FAFBFD] text-slate-900 border-b border-slate-200">
      <div className="max-w-5xl mx-auto">
        {/* Minimal Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
            Struktur & Verksamhet
          </span>
          <div className="h-[1px] w-12 bg-slate-300" />
        </div>

        {/* Corporate Definition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[#0B2341] leading-snug">
              Ett bolag. Flera specialiserade verksamheter.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg sm:text-xl font-light text-slate-800 leading-relaxed">
              NEXE GROUP AB är ett aktiebolag som samlar och driver flera specialiserade verksamhetsgrenar under en gemensam bolagsstruktur.
            </p>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              Varje verksamhetsgren verkar inom sitt specifika fackområde och kan ha ett eget särskilt företagsnamn gentemot marknaden. All övergripande bolagsstyrning, ekonomi, administration och fakturering sker centralt genom det juridiska bolaget NEXE GROUP AB.
            </p>
          </div>
        </div>

        {/* 3 Core Structural Points */}
        <div className="mt-20 pt-12 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-8 text-slate-700">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
              01 · Juridisk Enhet
            </span>
            <h3 className="text-base font-semibold text-[#0B2341] mb-2">
              Centralt Aktiebolag
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
              NEXE GROUP AB är den formella avtalsparten som innehar rättigheter, sluter avtal och ansvarar för bolagets åtaganden.
            </p>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
              02 · Särskilda Företagsnamn
            </span>
            <h3 className="text-base font-semibold text-[#0B2341] mb-2">
              Tydliga Verksamhetsgrenar
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
              Varje gren profileras mot sin specifika bransch och kundkrets under sitt eget etablerade verksamhetsnamn.
            </p>
          </div>

          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
              03 · Administration
            </span>
            <h3 className="text-base font-semibold text-[#0B2341] mb-2">
              Samordning & Fakturering
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
              Gemensam administration och fakturering under NEXE GROUP AB säkerställer ordning, trygghet och effektiv drift.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
