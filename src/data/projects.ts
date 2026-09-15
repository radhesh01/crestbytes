import type { Project } from '../types/project'

/**
 * Centralized Project Showcase Data
 * Only verified real projects with active URLs and confirmed client scope.
 */
export const projects: Project[] = [
  {
    id: 'house-of-social',
    name: 'House Of Social',
    client: 'House Of Social',
    category: 'Creative / Digital Agency',
    description:
      'An internet-native creative agency focused on culture-first marketing, influencer partnerships, content production, and digital campaigns. CrestBytes designed and engineered a bold, high-energy digital presence with striking editorial typography, fluid responsive layouts, and interactive visual direction.',
    shortDescription:
      'Culture-first digital agency website featuring bold typography, interactive art direction, and responsive front-end engineering.',
    url: 'https://houseofsocial.io/',
    projectUrl: 'https://houseofsocial.io/',
    desktopScreenshot: {
      src: '/projects/house-of-social/desktop.png',
      alt: 'House Of Social creative agency website desktop experience designed by CrestBytes',
      width: 1440,
      height: 900,
    },
    mobileScreenshot: {
      src: '/projects/house-of-social/mobile.png',
      alt: 'House Of Social website mobile view designed and engineered by CrestBytes',
      width: 390,
      height: 844,
    },
    logo: {
      src: '/projects/house-of-social/logo.png',
      alt: 'House Of Social logo',
    },
    technologies: [],
    featured: true,
  },
  {
    id: 'ikris-health-plus',
    name: 'Ikris Health+',
    client: 'Ikris Health+',
    category: 'Healthcare / Pharmaceutical Platform',
    description:
      'A specialized pharmaceutical access platform connecting healthcare providers and international buyers with rare and hard-to-source medicines from India. CrestBytes engineered a functional, information-dense platform featuring therapeutic medicine discovery, ingredient-based search, enquiry workflows, and a responsive digital architecture.',
    shortDescription:
      'Pharmaceutical access and medicine discovery platform engineered for international search, therapeutic navigation, and enquiry flows.',
    url: 'https://ikrishealthplus.com/',
    projectUrl: 'https://ikrishealthplus.com/',
    desktopScreenshot: {
      src: '/projects/ikris-health-plus/desktop.png',
      alt: 'Ikris Health+ pharmaceutical access platform desktop interface built by CrestBytes',
      width: 1440,
      height: 900,
    },
    mobileScreenshot: {
      src: '/projects/ikris-health-plus/mobile.png',
      alt: 'Ikris Health+ platform mobile interface built by CrestBytes',
      width: 390,
      height: 844,
    },
    logo: {
      src: '/projects/ikris-health-plus/logo.png',
      alt: 'Ikris Health+ logo',
    },
    technologies: [],
    featured: true,
  },
]