export type ProjectCategory =
  | 'Business'
  | 'Ecommerce'
  | 'Restaurant'
  | 'Portfolio'
  | 'Agency'
  | 'SaaS'
  | 'Landing Page'
  | 'Custom Web Application'
  | 'Creative / Digital Agency'
  | 'Healthcare / Pharmaceutical Platform'
  | string;

export interface ProjectImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
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
  description: string;
  shortDescription?: string;
  detailedDescription?: string;
  url: string;
  projectUrl?: string;
  logo?: ProjectImage;
  desktopScreenshot: ProjectImage;
  mobileScreenshot: ProjectImage;
  screenshots?: ProjectScreenshots;
  technologies: string[];
  results?: ProjectResult[];
  featured: boolean;
  year?: string;
}