import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ScrollToTop from '../components/layout/ScrollToTop'
import PageTransition from '../components/layout/PageTransition'

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
    <html lang="en">
      <body>
        <div className="app-root">
          <ScrollToTop />
          <Header />
          <main className="app-main">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
