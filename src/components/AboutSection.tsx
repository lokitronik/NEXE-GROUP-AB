import React from 'react';
import { ShieldCheck, Compass, TrendingUp } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="om-koncernen" className="py-24 sm:py-32 px-6 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and Brand Statement */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-xs uppercase font-bold tracking-widest text-slate-500 mb-3">
              Koncept & Filosofi
            </span>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B2341] leading-tight mb-6"
            >
              En koncern.{' '}
              <span className="text-slate-500 block">Flera specialistområden.</span>
            </h2>
            <div className="w-12 h-1 bg-[#0B2341] mb-6" />
          </div>

          {/* Right Column: Short and Sophisticated Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xl sm:text-2xl font-normal text-slate-800 leading-relaxed mb-6">
              NEXE GROUP AB samlar specialiserade verksamheter inom olika områden, med ett gemensamt fokus på kvalitet,
              teknik och långsiktig utveckling.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Vår koncernstruktur ger varje specialistområde operativ frihet och spetskompetens,
              medan koncernen säkerställer strategisk stabilitet, gemensamma resurser och enhetlig kvalitet.
            </p>
          </div>
        </div>

        {/* 3 High-Level Group Foundations */}
        <div className="mt-20 pt-16 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <div className="flex flex-col">
            <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center text-[#0B2341] mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0B2341] mb-2">Precision & Kvalitet</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Kompromisslösa kvalitetskrav och noggrannhet i alla processer och tekniska utföranden.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center text-[#0B2341] mb-4">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0B2341] mb-2">Specialiserad Expertis</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Fokuserade verksamheter med djup branschkunskap och certifierad kompetens för krävande uppdrag.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center text-[#0B2341] mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-[#0B2341] mb-2">Långsiktig Utveckling</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Ett stabilt och ansvarsfullt ägande med målsättning att bygga hållbara värden över tid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
