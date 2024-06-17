import type { Metadata } from 'next'
import './globals.css'
import { generalFont } from '@/fonts'

export const metadata: Metadata = {
  title: 'Jaquelline & Abraham',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className={`${generalFont.className} flex h-screen flex-col`}>
        <main className='flex flex-col justify-center'>{children}</main>
      </body>
    </html>
  )
}
