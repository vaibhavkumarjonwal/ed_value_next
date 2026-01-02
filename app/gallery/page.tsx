import { Metadata } from 'next'
import GalleryClient from './page-client'

export const metadata: Metadata = {
  title: 'Photo Gallery | PG Rooms Near TCS, DAIICT, GIFT City Gandhinagar',
  description: 'View photos of Harmony Living PG rooms near TCS, DAIICT, GIFT City. See our furnished rooms, AC facilities, study area, mess, and common areas in Kudasan, Gandhinagar.',
  keywords: [
    'PG photos Kudasan', 'hostel rooms near TCS', 'DAIICT PG images',
    'GIFT City accommodation photos', 'furnished room pictures Gandhinagar',
    'PG gallery Kudasan'
  ],
  openGraph: {
    title: 'Photo Gallery | PG Rooms Near TCS, DAIICT in Gandhinagar',
    description: 'Explore photos of our PG rooms near TCS, DAIICT, GIFT City.',
  },
}

export default function Gallery() {
  return <GalleryClient />
}