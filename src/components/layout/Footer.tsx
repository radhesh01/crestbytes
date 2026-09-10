const NAV_LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

const SERVICE_LINKS = [
  { label: 'Web Design', href: '#services' },
  { label: 'Web Development', href: '#services' },
  { label: 'Ecommerce', href: '#services' },
  { label: 'Brand & Digital Strategy', href: '#services' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">CrestBytes</span>
          <p className="footer__description">
            A premium digital agency designing and building websites and
            digital experiences for ambitious brands.
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <h3 className="footer__heading">Navigation</h3>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__nav" aria-label="Services">
          <h3 className="footer__heading">Services</h3>
          <ul>
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <h3 className="footer__heading">Start a project</h3>
          <p>Tell us about your project and we&apos;ll get back to you.</p>
          <a href="#contact" className="footer__contact-link">
            Get in touch
          </a>
        </div>
      </div>

      <div className="container footer__bottom">
        <p className="footer__copyright">
          &copy; {year} CrestBytes. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer