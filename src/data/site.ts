export interface SiteConfig {
  brandName: string;
  tagline: string;
  websiteUrl: string;
  /** External scheduling provider URL (Calendly, Cal.com, etc). Empty until provided. */
  bookingUrl: string;
  contactEmail: string;
  social: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
    github?: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: 'CrestBytes',
  tagline: 'Websites built to make brands impossible to ignore.',
  websiteUrl: 'https://crestbytes.com',
  bookingUrl: '',
  contactEmail: '',
  social: {},
};