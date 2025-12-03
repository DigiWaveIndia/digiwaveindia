import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'DigiWave India - Smart Digital Solutions'
export const size = { width: 1200, height: 630 }
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
          background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'white',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
              fontSize: '24px',
              fontWeight: 'bold',
              color: '#3B82F6',
            }}
          >
            DWI
          </div>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            DigiWave India
          </div>
        </div>
        <div
          style={{
            fontSize: '32px',
            color: 'rgba(255, 255, 255, 0.9)',
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Smart Digital Solutions for Every Business
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}