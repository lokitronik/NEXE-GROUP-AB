export type Language = 'sv' | 'en';

export interface CompanyBanner {
  id: string;
  name: string;
  url: string;
  image: string;
  altText: {
    sv: string;
    en: string;
  };
}
