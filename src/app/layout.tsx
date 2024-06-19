import type { Metadata } from 'next'
import newrelic from 'newrelic'
import { generalFont } from '@/fonts'
import './globals.css'
import Script from 'next/script'

const isNewRelicEnabled = process.env.NEW_RELIC_ENABLED === 'true'
const metadataBase =
  process.env.NODE_ENV === 'production'
    ? `https://${process.env.APP_URL}`
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
  /**
   * For SSG pages the build is faster than the agent connect cycle
   * In those cases, let's wait for the agent to connect before getting
   * the browser agent script.
   */
  if (isNewRelicEnabled && !newrelic.agent?.collector.isConnected()) {
    await new Promise((resolve) => {
      newrelic.agent.on('connected', resolve)
    })
  }
  return (
    <html lang='es'>
      {isNewRelicEnabled ? (
        <head>
          <Script id='nr' strategy='beforeInteractive'>
            {newrelic.getBrowserTimingHeader({
              hasToRemoveScriptWrapper: true,
              allowTransactionlessInjection: true,
            })}
          </Script>
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
