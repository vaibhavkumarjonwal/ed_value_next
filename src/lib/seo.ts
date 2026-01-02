import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://harmonyliving.edvaluechain.in'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
  noIndex?: boolean
}

/**
 * Generate page-specific metadata for SEO
 */
export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  ogImage = '/images/og-image.jpg',
  canonicalUrl,
  noIndex = false,
}: SEOProps): Metadata {
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`
  
  return {
    title,
    description,
    keywords: [
      'Harmony Living',
      'PG accommodation',
      'paying guest',
      ...keywords,
    ],
    openGraph: {
      title,
      description,
      url: canonicalUrl ? `${baseUrl}${canonicalUrl}` : undefined,
      images: [
        {
          url: fullOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullOgImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: canonicalUrl
      ? { canonical: `${baseUrl}${canonicalUrl}` }
      : undefined,
  }
}

/**
 * Organization structured data for local business - Critical for Google Maps & Local SEO
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  '@id': `${baseUrl}/#organization`,
  name: 'Harmony Living - Ed Value',
  alternateName: ['Harmony Living', 'Harmony Living PG', 'Ed Value Hostel'],
  description: 'Best PG accommodation in Kudasan, Gandhinagar near Orbit Mall. Affordable student hostel with WiFi, meals, 24/7 security for students and working professionals.',
  url: baseUrl,
  logo: `${baseUrl}/favicon.svg`,
  image: `${baseUrl}/images/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Block-E 316, Pramukh Anand Mall, Reliance Circle',
    addressLocality: 'Kudasan',
    addressRegion: 'Gujarat',
    postalCode: '382421',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.20130485056978,
    longitude: 72.6067343880902,
  },
  telephone: '+91-9106161585',
  email: 'harmonylivingorbit@gmail.com',
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Bank Transfer',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '10:00',
      closes: '17:00',
    },
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Free WiFi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Laundry Service', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Meals Included', value: true },
    { '@type': 'LocationFeatureSpecification', name: '24/7 Security', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'CCTV Surveillance', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Power Backup', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Study Room', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
  ],
  areaServed: [
    { '@type': 'City', name: 'Gandhinagar' },
    { '@type': 'Place', name: 'Kudasan' },
    { '@type': 'Place', name: 'GIFT City' },
  ],
  hasMap: 'https://maps.google.com/?cid=4033917929155457665',
  sameAs: [
    'https://www.edvaluechain.in',
  ],
}

/**
 * Breadcrumb structured data generator
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  }
}

/**
 * FAQ structured data generator
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}
