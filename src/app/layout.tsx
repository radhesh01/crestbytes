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
  title: 'CrestBytes — Premium Web Design & Development',
  description: 'A premium digital agency designing and building websites and digital experiences for ambitious brands.',
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
