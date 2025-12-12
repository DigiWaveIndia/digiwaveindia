import { ImageResponse } from 'next/og';

export const alt = 'DigiWave India - Smart Digital Solutions';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'system-ui',
      }}
    >
      <div
        style={{
          fontSize: 72,
          fontWeight: 'bold',
          marginBottom: 20,
        }}
      >
        DigiWave
      </div>
      <div
        style={{
          fontSize: 24,
          opacity: 0.9,
          marginBottom: 40,
        }}
      >
        India
      </div>
      <div
        style={{
          fontSize: 32,
          textAlign: 'center',
          maxWidth: 800,
          lineHeight: 1.2,
        }}
      >
        Fast, Affordable Mobile Apps & Websites
      </div>
      <div
        style={{
          fontSize: 24,
          marginTop: 20,
          opacity: 0.8,
        }}
      >
        Empowering Small Businesses to Thrive Digitally
      </div>
    </div>,
    {
      ...size,
    }
  );
}
