import type { Metadata } from 'next'
import newrelic from 'newrelic'
import { generalFont } from '@/fonts'
import './globals.css'
import Script from 'next/script'

const isNewRelicEnabled = process.env.NEW_RELIC_ENABLED === 'true'

export const metadata: Metadata = {
  title: 'Jaquelline & Abraham',
  description: 'Estas invitado a nuestra boda',
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
      <body className={`${generalFont.className} flex h-screen flex-col`}>
        <main className='flex flex-col justify-center'>{children}</main>
      </body>
    </html>
  )
}
