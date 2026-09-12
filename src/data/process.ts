export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We learn your business, audience, and goals to define a clear project direction.',
  },
  {
    step: '02',
    title: 'Design',
    description:
      'We craft interfaces with intentional typography, layout, and visual identity.',
  },
  {
    step: '03',
    title: 'Build',
    description:
      'We engineer fast, accessible, maintainable front-end experiences.',
  },
  {
    step: '04',
    title: 'Launch',
    description:
      'We ship, verify, and support the site as it goes live.',
  },
];