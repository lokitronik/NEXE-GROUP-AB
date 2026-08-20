import React from 'react';
import { Layers, Target, ShieldCheck } from 'lucide-react';

export const ValuesSection: React.FC = () => {
  return (
    <section id="vardegrund" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-3 block">
            Styrning & Ambition
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B2341] leading-tight mb-4">
            Strukturerat ägande för hållbar framgång
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Som moderbolag säkerställer NEXE GROUP AB rätt förutsättningar för våra operativa
            verksamheter att utvecklas och leverera högsta möjliga värde till sina uppdragsgivare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#FAFBFD] p-8 border border-slate-200/80 rounded-sm">
            <div className="w-10 h-10 rounded-sm bg-[#0B2341] text-white flex items-center justify-center mb-6">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0B2341] mb-3">Fokus & Autonomi</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Varje verksamhet behåller sitt operativa entreprenörskap och specialisering, med
              frihet att agera snabbt och nära kundens behov.
            </p>
          </div>

          <div className="bg-[#FAFBFD] p-8 border border-slate-200/80 rounded-sm">
            <div className="w-10 h-10 rounded-sm bg-[#0B2341] text-white flex items-center justify-center mb-6">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0B2341] mb-3">Koncernsynergier</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Gemensamma funktioner inom administration, affärsutveckling och kvalitetssäkring ger
              stabila stordriftsfördelar.
            </p>
          </div>

          <div className="bg-[#FAFBFD] p-8 border border-slate-200/80 rounded-sm">
            <div className="w-10 h-10 rounded-sm bg-[#0B2341] text-white flex items-center justify-center mb-6">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0B2341] mb-3">Kvalitetsgaranti</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Varumärket NEXE står för högsta noggrannhet, certifierad kompetens och ett
              tryggt samarbete för alla parter.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
