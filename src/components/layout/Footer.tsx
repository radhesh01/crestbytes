import Link from 'next/link'
import { siteConfig } from '../../data/site'

const NAV_LINKS = [
  { label: 'Work', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const SERVICE_LINKS = [
  { label: 'Website Design & Art Direction', to: '/services' },
  { label: 'Custom Web Development', to: '/services' },
  { label: 'Ecommerce Architecture', to: '/services' },
  { label: 'Custom Web Applications', to: '/services' },
  { label: 'Interface & UI/UX Systems', to: '/services' },
  { label: 'Website Performance & SEO', to: '/services' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" aria-label="Site footer">
      {/* Decorative Technical Top Rule */}
      <div className="footer__top-rail" aria-hidden="true">
        <div className="container footer__top-rail-inner">
          <span className="footer__rail-indicator" />
          <span className="footer__rail-label">CRESTBYTES // DIGITAL EXPERIENCES // ALL SYSTEMS NOMINAL</span>
        </div>
      </div>

      <div className="container footer__inner">
        {/* Brand & Mission Column */}
        <div className="footer__brand">
          <Link href="/" className="footer__logo" aria-label="CrestBytes home">
            <span className="footer__logo-text">{siteConfig.brandName}</span>
            <span className="footer__logo-dot" aria-hidden="true" />
          </Link>
          <p className="footer__description">
            An independent digital agency and web engineering studio crafting bespoke websites and digital platforms for
            ambitious brands worldwide.
          </p>
          <div className="footer__system-badge">
            <span className="footer__system-pulse" aria-hidden="true" />
            <span>GLOBAL EDGE DEPLOYMENT // LAT: 28.6139° N</span>
          </div>
        </div>

        {/* Primary Navigation Column */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <h3 className="footer__heading">Navigation</h3>
          <ul className="footer__list">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link href={link.to} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Services Column */}
        <nav className="footer__nav footer__nav--services" aria-label="Services navigation">
          <h3 className="footer__heading">Capabilities</h3>
          <ul className="footer__list">
            {SERVICE_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.to} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Start a Project / Actions Column */}
        <div className="footer__contact">
          <h3 className="footer__heading">Initiate</h3>
          <p className="footer__contact-desc">
            Have a project in mind? We respond within 24 hours with an honest appraisal.
          </p>
          <div className="footer__contact-links">
            <Link href="/contact" className="footer__btn footer__btn--primary">
              <span>Start a Project</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6h8m0 0L6.5 2.5M10 6L6.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/schedule" className="footer__btn footer__btn--secondary">
              Book a Meeting
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Telemetry Row */}
      <div className="container footer__bottom">
        <p className="footer__copyright">
          &copy; {year} {siteConfig.brandName}. Engineered with Next.js App Router & TypeScript.
        </p>
        <div className="footer__legal-links">
          <Link href="/privacy" className="footer__legal-link">Privacy Policy</Link>
          <span className="footer__separator" aria-hidden="true">/</span>
          <Link href="/terms" className="footer__legal-link">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer