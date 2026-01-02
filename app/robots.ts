import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://harmonyliving.edvaluechain.in'

  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/rooms',
          '/amenities',
          '/gallery',
          '/contact',
          '/rules',
        ],
        disallow: [
          '/private/',
          '/admin/',
          '/api/',
          '/_next/',
          '/favicon.ico',
          '*.json',
        ],
      },
      // Specific rules for major search engine bots
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
      // Block AI crawlers
      {
        userAgent: [
          'CCBot',
          'ChatGPT-User',
          'CCBot/2.0',
          'anthropic-ai',
          'ClaudeBot',
          'GPTBot',
        ],
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
