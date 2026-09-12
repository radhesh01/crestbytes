import Link from 'next/link'
import { siteConfig } from '../../data/site'

const NAV_LINKS = [
  { label: 'Work', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const SERVICE_LINKS = [
  { label: 'Web Design', to: '/services' },
  { label: 'Web Development', to: '/services' },
  { label: 'Ecommerce', to: '/services' },
  { label: 'Brand & Digital Strategy', to: '/services' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">{siteConfig.brandName}</span>
          <p className="footer__description">
            A premium digital agency designing and building websites and
            digital experiences for ambitious brands.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h3 className="footer__heading">Navigation</h3>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link href={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__nav" aria-label="Services">
          <h3 className="footer__heading">Services</h3>
          <ul>
            {SERVICE_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <h3 className="footer__heading">Start a project</h3>
          <p>Tell us about your project and we&apos;ll get back to you.</p>
          <Link href="/contact" className="footer__contact-link">
            Get in touch
          </Link>
          <Link href="/schedule" className="footer__contact-link">
            Book a meeting
          </Link>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copyright">
          &copy; {year} {siteConfig.brandName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer