import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'
import PageTransition from './PageTransition'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="app-root">
      <ScrollToTop />
      <Header />
      <main className="app-main">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </div>
  )
}

export default Layout