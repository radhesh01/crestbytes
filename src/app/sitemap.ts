import { MetadataRoute } from 'next'
import { siteConfig } from '../data/site'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/projects',
    '/about',
    '/contact',
    '/schedule',
  ]

  return routes.map((route) => ({
    url: `${siteConfig.websiteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
