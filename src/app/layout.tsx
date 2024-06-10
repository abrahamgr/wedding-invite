import type { Metadata } from 'next'
import { Cabin } from 'next/font/google'
import { NavBar } from '@/components/NavBar'
import './globals.css'

const generalFont = Cabin({ subsets: ['latin'] })

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
        <header>
          <NavBar />
        </header>
        <main className='flex flex-col justify-center'>{children}</main>
      </body>
    </html>
  )
}
