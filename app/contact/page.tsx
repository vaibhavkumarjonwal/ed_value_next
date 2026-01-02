import { Metadata } from 'next'
import ContactClient from './page-client'

export const metadata: Metadata = {
  title: 'Contact & Book | PG Near TCS, DAIICT, GIFT City Gandhinagar',
  description: 'Book PG in Kudasan near TCS, DAIICT, GIFT City. Visit Pramukh Anand Mall, Kudasan. Call +91 9106161585 or WhatsApp for instant room booking. Best rates for students & professionals!',
  keywords: [
    'book PG Kudasan', 'contact Harmony Living', 'PG enquiry near TCS',
    'hostel booking DAIICT', 'room availability GIFT City', 'PG phone number Gandhinagar',
    'WhatsApp PG booking', 'visit PG Kudasan'
  ],
  openGraph: {
    title: 'Contact & Book | PG Near TCS, DAIICT, GIFT City',
    description: 'Book PG near TCS, DAIICT. Call +91 9106161585 for instant booking.',
  },
}

export default function Contact() {
  return <ContactClient />
}