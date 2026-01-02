import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Harmony Living - Best PG in Kudasan, Gandhinagar near TCS, DAIICT, GIFT City'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1a1a2e',
          backgroundImage: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #f39c12, #e74c3c, #f39c12)',
          }}
        />
        
        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 60px',
            textAlign: 'center',
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '10px',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            🏠 Harmony Living
          </div>
          
          {/* Tagline */}
          <div
            style={{
              fontSize: 32,
              color: '#f39c12',
              fontWeight: 600,
              marginBottom: '30px',
            }}
          >
            Premium PG Accommodation
          </div>
          
          {/* Location */}
          <div
            style={{
              fontSize: 28,
              color: '#ecf0f1',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            📍 Kudasan, Gandhinagar | Near Orbit Mall
          </div>
          
          {/* Key features */}
          <div
            style={{
              display: 'flex',
              gap: '30px',
              marginTop: '20px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {['Near TCS', 'Near DAIICT', 'Near GIFT City'].map((item) => (
              <div
                key={item}
                style={{
                  backgroundColor: 'rgba(243, 156, 18, 0.2)',
                  border: '2px solid #f39c12',
                  borderRadius: '25px',
                  padding: '10px 25px',
                  fontSize: 22,
                  color: '#f39c12',
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>
          
          {/* Amenities */}
          <div
            style={{
              display: 'flex',
              gap: '40px',
              marginTop: '35px',
              color: '#bdc3c7',
              fontSize: 20,
            }}
          >
            <span>✓ WiFi</span>
            <span>✓ Meals</span>
            <span>✓ AC Rooms</span>
            <span>✓ 24/7 Security</span>
          </div>
          
          {/* CTA */}
          <div
            style={{
              marginTop: '35px',
              backgroundColor: '#f39c12',
              color: '#1a1a2e',
              padding: '15px 40px',
              borderRadius: '30px',
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            📞 +91 9106161585 | Book Now!
          </div>
        </div>
        
        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            fontSize: 18,
            color: '#7f8c8d',
          }}
        >
          harmonyliving.edvaluechain.in
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
