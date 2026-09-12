export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription?: string;
  capabilities?: string[];
  technologies?: string[];
}

export const services: ServiceItem[] = [
  {
    id: 'web-design',
    title: 'Web Design',
    shortDescription:
      'Distinctive, premium interface design built around brand identity and user intent.',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortDescription:
      'Fast, robust, and maintainable front-end engineering using modern web standards.',
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce',
    shortDescription:
      'Conversion-focused online stores designed for growth and a frictionless checkout experience.',
  },
  {
    id: 'custom-web-apps',
    title: 'Custom Web Applications',
    shortDescription:
      'Tailored web applications engineered around specific business workflows.',
  },
  {
    id: 'brand-strategy',
    title: 'Brand & Digital Strategy',
    shortDescription:
      'Positioning, messaging, and digital direction that align design with business goals.',
  },
  {
    id: 'performance',
    title: 'Performance & Optimization',
    shortDescription:
      'Technical refinement for speed, accessibility, and search visibility.',
  },
];