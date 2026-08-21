export interface Company {
  id: string;
  name: string;
  tagline: string;
  url?: string;
  status?: 'active' | 'upcoming';
}
