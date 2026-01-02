import Layout from '@/components/Layout'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rooms & Pricing | PG Rooms Near TCS, DAIICT, GIFT City Gandhinagar',
  description: 'Affordable PG rooms in Kudasan near TCS, DAIICT, GIFT City. Double, Triple & Four sharing rooms with WiFi, meals, AC. Best prices for students & IT professionals in Gandhinagar.',
  keywords: [
    'PG rooms Kudasan', 'room rent Gandhinagar', 'double sharing room near TCS',
    'affordable rooms near DAIICT', 'student room GIFT City', 'furnished rooms Kudasan',
    'PG room price Gandhinagar', 'monthly rent PG Kudasan'
  ],
  openGraph: {
    title: 'Rooms & Pricing | PG Near TCS, DAIICT, GIFT City',
    description: 'Affordable PG rooms in Kudasan near TCS, DAIICT. Double, Triple & Four sharing options.',
  },
}

const rooms = [
  { name: 'Double Sharing', description: 'Shared accommodation for two residents in one room', image: '/images/2bednewnew.jpeg', popular: true, amenities: ['Room shared by 2 residents','Common attached bathroom','Two individual study desks','Two wardrobes / storage spaces','High-speed Wi-Fi','Daily housekeeping','Meals included (Optional)'] },
  { name: 'Triple Sharing', description: 'Comfortable shared living for three residents', image: '/images/room.png', popular: false, amenities: ['Room shared by 3 residents','Common attached bathroom','Three individual study desks','Personal storage space','High-speed Wi-Fi','Daily housekeeping','Meals included (Optional)'] },
  { name: 'Four Sharing', description: 'Economical shared accommodation for four residents', image: '/images/4bednew.png', popular: false, amenities: ['Room shared by 4 residents','Common attached bathroom','Four individual study desks','Personal storage space','High-speed Wi-Fi','Daily housekeeping','Meals included (Optional)'] },
]

export default function Page() {
  return (
    <Layout>
      <section className="py-16 bg-card">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Rooms & Pricing</h1>
            <p className="text-lg text-muted-foreground">Choose the perfect room type that fits your needs and budget. All rooms include basic amenities with optional add-ons.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className={`overflow-hidden relative ${room.popular ? 'ring-2 ring-primary' : ''}`}>
                {room.popular && (<Badge className="absolute top-4 right-4 z-10">Most Popular</Badge>)}
                <div className="aspect-video overflow-hidden"><img src={room.image} alt={room.name} className="w-full h-full object-cover"/></div>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold">{room.name}</h3>
                      <p className="text-sm text-muted-foreground">{room.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-6"><span className="text-muted-foreground"></span></div>
                  <ul className="space-y-3 mb-6">
                    {room.amenities.map((amenity, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm"><Check className="h-4 w-4 text-primary flex-shrink-0"/> <span className="text-muted-foreground">{amenity}</span></li>
                    ))}
                  </ul>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Enquire Now <ArrowRight className="ml-2 h-4 w-4"/></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}