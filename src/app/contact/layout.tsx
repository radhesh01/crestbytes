import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — CrestBytes',
  description: 'Tell us about your project. Share a few details and we\'ll follow up.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
