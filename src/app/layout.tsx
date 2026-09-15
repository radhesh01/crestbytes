import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import PageTransition from '../components/layout/PageTransition'
import CustomCursor from '../components/ui/CustomCursor'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://crestbytes.com'),
  title: 'CrestBytes — Premium Web Design & Development',
  description: 'A premium digital studio designing and building refined websites and digital experiences for ambitious brands.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'CrestBytes — Premium Web Design & Development',
    description: 'A premium digital studio designing and building refined websites and digital experiences for ambitious brands.',
    url: 'https://crestbytes.com',
    siteName: 'CrestBytes',
    images: [
      {
        url: '/brand/crestbytes-logo.png',
        width: 1536,
        height: 1024,
        alt: 'CrestBytes — Code • Design • Digital Impact',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body>
        <div className="app-root">
          <Header />
          <main className="app-main">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
        <CustomCursor />
      </body>
    </html>
  )
}
