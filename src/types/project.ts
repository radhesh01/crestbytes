export type ProjectCategory =
  | 'Business'
  | 'Ecommerce'
  | 'Restaurant'
  | 'Portfolio'
  | 'Agency'
  | 'SaaS'
  | 'Landing Page'
  | 'Custom Web Application';

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectScreenshots {
  desktop: ProjectImage[];
  mobile: ProjectImage[];
}

export interface ProjectResult {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  category: ProjectCategory;
  shortDescription: string;
  detailedDescription?: string;
  logo?: ProjectImage;
  screenshots: ProjectScreenshots;
  /** Real, direct URL only. Omit if no live project URL exists. */
  projectUrl?: string;
  technologies: string[];
  results?: ProjectResult[];
  featured: boolean;
}