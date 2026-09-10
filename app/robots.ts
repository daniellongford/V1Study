import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dashboard', '/quiz', '/progress', '/reset-password', '/forgot-password'],
      },
    ],
    sitemap: 'https://v1study.com.au/sitemap.xml',
  }
}
