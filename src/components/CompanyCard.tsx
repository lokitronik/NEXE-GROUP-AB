import React from 'react';
import { Company } from '../types';
import { ExternalLink, CheckCircle2, Building2, ArrowRight } from 'lucide-react';

interface CompanyCardProps {
  company: Company;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  const hasExternalUrl = Boolean(company.url && company.url.trim() !== '');

  return (
    <article
      id={`company-${company.id}`}
      className="bg-white border border-slate-200/90 rounded-sm p-8 sm:p-10 lg:p-12 transition-all duration-300 hover:border-slate-300 hover:shadow-lg relative overflow-hidden"
    >
      {/* Top accent bar matching NEXE corporate navy */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#0B2341]" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        {/* Left / Main Info */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-[#0B2341] text-xs font-semibold uppercase tracking-wider rounded-xs">
              <Building2 className="w-3.5 h-3.5" />
              <span>Specialiserad verksamhet</span>
            </span>
            <span className="text-xs text-slate-400 font-mono tracking-tight">
              {company.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0B2341] mb-3">
            {company.legalName}
          </h3>

          <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed mb-6">
            {company.description}
          </p>

          {/* Key competence tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 mb-2">
            {company.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-4 h-4 text-[#0B2341] shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right / CTA Area */}
        <div className="lg:border-l lg:border-slate-200 lg:pl-10 flex flex-col justify-center shrink-0">
          {hasExternalUrl ? (
            <>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                id={`cta-${company.id}`}
                aria-label={`Besök webbplatsen för ${company.legalName} (öppnas i ny flik)`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0B2341] hover:bg-[#143258] text-white text-sm font-semibold tracking-wide rounded-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.99] whitespace-nowrap group"
              >
                <span>{company.ctaText}</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="text-xs text-slate-400 mt-2.5 text-center lg:text-left">
                Öppnas på extern domän
              </p>
            </>
          ) : (
            <>
              <a
                href="#kontakt"
                id={`cta-${company.id}`}
                aria-label={`Kontakta NEXE GROUP gällande ${company.legalName}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0B2341] hover:bg-[#143258] text-white text-sm font-semibold tracking-wide rounded-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.99] whitespace-nowrap group"
              >
                <span>{company.ctaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="text-xs text-slate-400 mt-2.5 text-center lg:text-left">
                Förfrågan via koncernen
              </p>
            </>
          )}
        </div>
      </div>
    </article>
  );
};
