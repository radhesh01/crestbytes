export interface SiteConfig {
  brandName: string;
  name: string;
  tagline: string;
  slogan: string;
  websiteUrl: string;
  /** External scheduling provider URL (Calendly, Cal.com, etc). */
  bookingUrl: string;
  contactEmail: string;
  email: string;
  logo: string;
  logoSolid: string;
  footerLogo: string;
  favicon: string;
  social: {
    instagram: string;
    threads: string;
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const siteConfig: SiteConfig = {
  brandName: 'CrestBytes',
  name: 'CrestBytes',
  tagline: 'Websites built to make brands impossible to ignore.',
  slogan: 'CODE • DESIGN • DIGITAL IMPACT',
  websiteUrl: 'https://crestbytes.com',
  bookingUrl: '',
  contactEmail: 'hello@crestbytes.com',
  email: 'hello@crestbytes.com',
  logo: '/brand/crestbytes-logo.png',
  logoSolid: '/brand/crestbytes-logo-solid.png',
  footerLogo: '/brand/crestbytes-footer-logo.png',
  favicon: '/favicon.ico',
  social: {
    instagram: 'https://www.instagram.com/crestbytess/',
    threads: 'https://www.threads.com/@crestbytess',
  },
};