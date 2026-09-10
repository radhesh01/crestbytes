export interface SeoConfig {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  siteName?: string;
}

const DEFAULT_SITE_NAME = 'CrestBytes';

/**
 * Applies document-level SEO metadata (title, description, canonical,
 * Open Graph, Twitter) for the static site. Intended to be called once
 * per page/route since this is a single-page static build.
 */
export function applySeo(config: SeoConfig): void {
  const { title, description, canonicalUrl, ogImage, siteName = DEFAULT_SITE_NAME } = config;

  document.title = title;

  setMetaByName('description', description);
  setMetaByProperty('og:title', title);
  setMetaByProperty('og:description', description);
  setMetaByProperty('og:site_name', siteName);
  setMetaByProperty('og:type', 'website');

  setMetaByName('twitter:card', 'summary_large_image');
  setMetaByName('twitter:title', title);
  setMetaByName('twitter:description', description);

  if (ogImage) {
    setMetaByProperty('og:image', ogImage);
    setMetaByName('twitter:image', ogImage);
  }

  if (canonicalUrl) {
    setCanonical(canonicalUrl);
    setMetaByProperty('og:url', canonicalUrl);
  }
}

function setMetaByName(name: string, content: string): void {
  let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaByProperty(property: string, content: string): void {
  let el = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(url: string): void {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}