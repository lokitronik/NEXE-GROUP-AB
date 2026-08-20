export interface Company {
  id: string;
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url?: string;
  category: string;
  highlights: string[];
  status: 'active' | 'upcoming';
  ctaText: string;
}

export interface ValuePillar {
  id: string;
  title: string;
  description: string;
  indexNumber: string;
}
