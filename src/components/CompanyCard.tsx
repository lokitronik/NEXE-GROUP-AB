import React from 'react';
import { Company } from '../types';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

interface CompanyCardProps {
  company: Company;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  const hasExternalUrl = Boolean(company.url && company.url.trim() !== '');

  return (
    <article
      id={`company-${company.id}`}
      className="bg-white border border-slate-200/90 rounded-xs p-8 sm:p-12 lg:p-14 transition-all duration-300 hover:border-slate-400/80 group"
    >
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
        {/* Left Column: Details */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
              {company.category}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0B2341] mb-4">
            {company.legalName}
          </h3>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-8">
            {company.description}
          </p>

          {/* Highlights / Scope */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {company.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-2.5 text-sm text-slate-500">
                <span className="w-1 h-1 rounded-full bg-[#0B2341]/60 shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Clean Action */}
        <div className="lg:pt-2 flex flex-col items-start lg:items-end justify-start shrink-0">
          {hasExternalUrl ? (
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              id={`cta-${company.id}`}
              aria-label={`Besök webbplatsen för ${company.legalName} (öppnas i ny flik)`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#0B2341] hover:text-[#143258] transition-colors py-2 group/btn border-b border-[#0B2341]/30 hover:border-[#0B2341]"
            >
              <span>{company.ctaText}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          ) : (
            <a
              href="#kontakt"
              id={`cta-${company.id}`}
              aria-label={`Kontakta NEXE GROUP gällande ${company.legalName}`}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#0B2341] hover:text-[#143258] transition-colors py-2 group/btn border-b border-[#0B2341]/30 hover:border-[#0B2341]"
            >
              <span>{company.ctaText}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
            </a>
          )}
          <span className="text-[11px] text-slate-400 mt-2 font-mono">
            {hasExternalUrl ? 'Extern webbplats' : 'Koncernförfrågan'}
          </span>
        </div>
      </div>
    </article>
  );
};
