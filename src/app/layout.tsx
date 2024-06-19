import type { Metadata } from 'next'
import { generalFont } from '@/fonts'
import './globals.css'
import Script from 'next/script'

const isProd = process.env.NODE_ENV === 'production'
const metadataBase = isProd
  ? (process.env.APP_URL as string)
  : `http://localhost:${process.env.PORT || 3000}`

const baseMetadata = {
  title: 'Jaquelline & Abraham',
  description: 'Nuestra boda',
}

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL(metadataBase),
  openGraph: {
    ...baseMetadata,
    images: '/_next/image?url=/gallery/inf-91.jpg&w=750&q=50',
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      {isProd ? (
        <head>
          <Script strategy='beforeInteractive' src='/nr.js' />
        </head>
      ) : null}
      <body
        className={`${generalFont.className} flex h-screen flex-col bg-yellow-50 md:items-center`}
      >
        <main className='flex w-full flex-col justify-center xl:max-w-screen-xl'>
          {children}
        </main>
      </body>
    </html>
  )
}
