import './globals.css'
import Providers from '@/providers/Providers'
import { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://harmonyliving.edvaluechain.in'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Harmony Living | Best PG in Kudasan & Gandhinagar | Student Hostel Near Orbit Mall',
    template: '%s | Harmony Living - PG in Kudasan, Gandhinagar',
  },
  description: 'Best PG accommodation in Kudasan, Gandhinagar near Orbit Mall. Affordable student hostel with WiFi, meals, 24/7 security. Rooms available for students & working professionals. Book your stay today!',
  keywords: [
    // Primary Keywords
    'PG in Kudasan',
    'PG in Gandhinagar',
    'hostel in Kudasan',
    'hostel in Gandhinagar',
    'PG near Kudasan',
    'student hostel in Gandhinagar',
    // TCS Keywords
    'PG near TCS Gandhinagar',
    'hostel near TCS Gandhinagar',
    'TCS Gandhinagar PG',
    'accommodation near TCS',
    'PG for TCS employees Gandhinagar',
    'hostel for TCS workers',
    // DAIICT Keywords
    'PG near DAIICT',
    'hostel near DAIICT',
    'PG near DAIICT Gandhinagar',
    'hostel near DAIICT Gandhinagar',
    'DAIICT student hostel',
    'accommodation near DAIICT',
    'PG for DAIICT students',
    // GIFT City Keywords
    'PG near GIFT City',
    'hostel near GIFT City',
    'GIFT City PG accommodation',
    'PG for GIFT City employees',
    'hostel near GIFT City Gandhinagar',
    'accommodation near GIFT City',
    // University Keywords
    'PG near PDPU',
    'hostel near PDPU',
    'PG near Pandit Deendayal University',
    'PG near GNLU',
    'hostel near GNLU',
    'PG near Gujarat National Law University',
    'PG near NIRMA University',
    'hostel near NIRMA',
    // Location-based Keywords
    'PG near Orbit Mall',
    'hostel near Orbit Mall',
    'PG in Orbit Mall',
    'hostel in Orbit Mall Gandhinagar',
    'PG near Reliance Circle Kudasan',
    'PG near Infocity Gandhinagar',
    'hostel near Infocity',
    'PG near Sargasan',
    'hostel near Sargasan',
    'PG near Raksha Shakti University',
    'PG near DPS Kudasan',
    // Room/Stay Keywords
    'room stay in Gandhinagar',
    'renting room available Gandhinagar',
    'rooms for rent in Kudasan',
    'affordable rooms Gandhinagar',
    'furnished rooms Kudasan',
    'monthly room rent Gandhinagar',
    'paying guest Gandhinagar',
    'paying guest Kudasan',
    // Student Keywords
    'student accommodation Gandhinagar',
    'boys hostel Kudasan',
    'girls hostel Kudasan',
    'boys PG Gandhinagar',
    'girls PG Gandhinagar',
    'co-ed PG Kudasan',
    'student PG near GIFT City',
    'working professional PG Gandhinagar',
    'IT professional hostel Gandhinagar',
    // Feature Keywords
    'PG with food in Gandhinagar',
    'PG with WiFi Kudasan',
    'PG with meals Gandhinagar',
    'PG with AC Gandhinagar',
    'AC PG in Gandhinagar',
    'budget PG Kudasan',
    'cheap PG Gandhinagar',
    'affordable PG Kudasan',
    'best PG in Gandhinagar',
    'luxury PG Gandhinagar',
    'safe PG for girls Gandhinagar',
    'secure hostel Kudasan',
    // Long-tail Keywords
    'best PG near TCS Gandhinagar with food',
    'affordable hostel near DAIICT with WiFi',
    'PG with all facilities near GIFT City',
    'student friendly PG Kudasan',
    'working women hostel Gandhinagar',
    // Brand Keywords
    'Harmony Living',
    'Harmony Living PG',
    'Harmony Living hostel',
    'Ed Value hostel',
    'Pramukh Anand Mall PG',
    // Area Keywords
    'PG in Gujarat',
    'hostel in Gujarat',
    'best PG in Ahmedabad Gandhinagar',
  ],
  authors: [{ name: 'Harmony Living' }],
  creator: 'Harmony Living',
  publisher: 'Harmony Living',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: baseUrl,
    siteName: 'Harmony Living - PG Near TCS, DAIICT, GIFT City',
    title: 'Harmony Living | Best PG Near TCS, DAIICT, GIFT City in Gandhinagar',
    description: 'Best PG in Kudasan near TCS, DAIICT, GIFT City & Orbit Mall. Affordable rooms with WiFi, meals, 24/7 security for students & IT professionals.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harmony Living | Best PG Near TCS, DAIICT, GIFT City Gandhinagar',
    description: 'Best PG in Kudasan near TCS, DAIICT, GIFT City. WiFi, meals & 24/7 security. Book now!',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'HYD0QSoED75m7O9K2MXHqEKB_vXlqTcdvfDch9czAwg',
  },
  alternates: {
    canonical: baseUrl,
  },
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Kudasan, Gandhinagar',
    'geo.position': '23.201305;72.606734',
    'ICBM': '23.201305, 72.606734',
  },
}

// JSON-LD Structured Data for Local Business SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  '@id': `${baseUrl}/#organization`,
  name: 'Harmony Living - Ed Value',
  alternateName: ['Harmony Living', 'Harmony Living PG', 'Ed Value Hostel', 'Harmony Living Kudasan'],
  description: 'Best PG accommodation in Kudasan, Gandhinagar near TCS, DAIICT, GIFT City & Orbit Mall. Affordable student hostel with WiFi, meals, 24/7 security for students and IT professionals.',
  url: baseUrl,
  logo: `${baseUrl}/favicon.svg`,
  image: `${baseUrl}/images/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Block-E 316, Pramukh Anand Mall, Reliance Circle',
    addressLocality: 'Kudasan, Gandhinagar',
    addressRegion: 'Gujarat',
    postalCode: '382421',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 23.201305,
    longitude: 72.606734,
  },
  telephone: '+91-9106161585',
  email: 'harmonylivingorbit@gmail.com',
  priceRange: '₹₹',
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
    { '@type': 'LocationFeatureSpecification', name: 'Free High-Speed WiFi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Home-Style Meals', value: true },
    { '@type': 'LocationFeatureSpecification', name: '24/7 Security & CCTV', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Power Backup', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Dedicated Study Room', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Laundry Service', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'AC Rooms Available', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
  ],
  hasMap: 'https://maps.google.com/?cid=4033917929155457665',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '200',
    bestRating: '5',
    worstRating: '1',
  },
  // Nearby landmarks for local SEO
  containedInPlace: {
    '@type': 'Place',
    name: 'Kudasan, Gandhinagar',
  },
  // Keywords for search engines
  keywords: 'PG near TCS Gandhinagar, hostel near DAIICT, PG near GIFT City, student hostel Kudasan, affordable PG Gandhinagar, rooms for rent near Orbit Mall',
}

// Additional Local Business Schema for nearby landmarks
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Harmony Living PG',
  description: 'Premium PG accommodation near TCS, DAIICT, GIFT City, PDPU, GNLU in Gandhinagar',
  areaServed: [
    { '@type': 'Place', name: 'TCS Gandhinagar' },
    { '@type': 'Place', name: 'DAIICT' },
    { '@type': 'Place', name: 'GIFT City' },
    { '@type': 'Place', name: 'PDPU - Pandit Deendayal Petroleum University' },
    { '@type': 'Place', name: 'GNLU - Gujarat National Law University' },
    { '@type': 'Place', name: 'Infocity Gandhinagar' },
    { '@type': 'Place', name: 'Orbit Mall Kudasan' },
    { '@type': 'Place', name: 'Sargasan' },
    { '@type': 'City', name: 'Gandhinagar' },
    { '@type': 'City', name: 'Ahmedabad' },
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'LodgingReservation',
        name: 'Double Sharing Room',
        description: 'Comfortable double sharing PG room with attached bathroom, study desk, WiFi',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'LodgingReservation',
        name: 'Triple Sharing Room',
        description: 'Affordable triple sharing PG room with all amenities',
      },
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'LodgingReservation',
        name: 'Four Sharing Room',
        description: 'Budget-friendly four sharing PG room for students',
      },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}


