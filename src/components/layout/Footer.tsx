'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { siteConfig } from '../../data/site'

const NAV_LINKS = [
  { label: 'Work', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  const [isInteracting, setIsInteracting] = useState(false)

  return (
    <footer className="footer" aria-label="Site footer">
      {/* Top Interface Border with Central Signal Node */}
      <div className="footer__top-border" aria-hidden="true">
        <div className="footer__top-line footer__top-line--left" />
        <div className="footer__top-signal">
          <span className="footer__top-signal-dot" />
          <span className="footer__top-signal-glow" />
        </div>
        <div className="footer__top-line footer__top-line--right" />
      </div>

      {/* Background Refined Technical Grid & Editorial Geometry */}
      <div className="footer__backdrop" aria-hidden="true">
        <svg className="footer__backdrop-svg" viewBox="0 0 1600 480" fill="none" preserveAspectRatio="none">
          {/* Subtle Horizontal & Vertical Guide Lines */}
          <line x1="0" y1="90" x2="1600" y2="90" stroke="rgba(255,255,255,0.025)" strokeDasharray="4 4" />
          <line x1="0" y1="360" x2="1600" y2="360" stroke="rgba(255,255,255,0.025)" strokeDasharray="4 4" />
          <line x1="280" y1="0" x2="280" y2="480" stroke="rgba(255,255,255,0.02)" strokeDasharray="4 4" />
          <line x1="1120" y1="0" x2="1120" y2="480" stroke="rgba(255,255,255,0.02)" strokeDasharray="4 4" />

          {/* Coordinate Crosshairs */}
          <g opacity="0.35">
            {/* Top Left Crosshair */}
            <path d="M 274 90 H 286 M 280 84 V 96" stroke="var(--accent)" strokeWidth="1" />
            <circle cx="280" cy="90" r="1.5" fill="var(--accent)" />

            {/* Top Right Crosshair */}
            <path d="M 1114 90 H 1126 M 1120 84 V 96" stroke="var(--accent)" strokeWidth="1" />
            <circle cx="1120" cy="90" r="1.5" fill="var(--accent)" />

            {/* Bottom Left Crosshair */}
            <path d="M 274 360 H 286 M 280 354 V 366" stroke="var(--accent)" strokeWidth="1" />
            <circle cx="280" cy="360" r="1.5" fill="var(--accent)" />

            {/* Bottom Right Crosshair */}
            <path d="M 1114 360 H 1126 M 1120 354 V 366" stroke="var(--accent)" strokeWidth="1" />
            <circle cx="1120" cy="360" r="1.5" fill="var(--accent)" />
          </g>

          {/* Ambient Signal Node */}
          <circle cx="800" cy="240" r="120" fill="url(#footer-ambient-radial)" opacity="0.15" />
          <defs>
            <radialGradient id="footer-ambient-radial" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#6BD8C7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#6BD8C7" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Main Closing Interface Stage (Direct Composition — Not Inside a Card) */}
      <div className="container footer__container">
        <div className={`footer__stage ${isInteracting ? 'footer__stage--active' : ''}`}>
          
          {/* Left Column: Official CrestBytes Brand Block */}
          <div className="footer__brand-block">
            <Link href="/" className="footer__brand-link" aria-label="CrestBytes home">
              <Image
                src={siteConfig.footerLogo || siteConfig.logo}
                alt="CrestBytes — Code • Design • Digital Impact"
                width={260}
                height={70}
                className="footer__brand-logo"
                priority={false}
              />
            </Link>
            <div className="footer__brand-meta">
              <span className="footer__brand-dot" aria-hidden="true" />
              <span className="footer__brand-status">DIGITAL STUDIO // DIGITAL IMPACT</span>
            </div>
          </div>

          {/* Center/Main Column: Massive Dominant Editorial CTA & Directional Connector Arrow */}
          <div
            className="footer__cta-block"
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
          >
            <span className="footer__cta-eyebrow">READY TO TURN IDEAS INTO REALITY?</span>
            <div className="footer__cta-heading-wrap">
              <h2 className="footer__cta-heading">
                <span className="footer__cta-text-white">LET&apos;S BUILD</span>
                <span className="footer__cta-text-accent"> SOMETHING</span>
              </h2>
              
              {/* Directional SVG Connecting Arrow Rail pointing to Contact */}
              <div className="footer__cta-connector" aria-hidden="true">
                <svg viewBox="0 0 160 32" fill="none" className="footer__connector-svg">
                  <path
                    d="M 0 16 L 140 16 M 140 16 L 124 6 M 140 16 L 124 26"
                    stroke="var(--accent)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="footer__connector-path"
                  />
                  <circle cx="4" cy="16" r="3" fill="var(--accent)" className="footer__connector-dot" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Interactive Contact Interface */}
          <div className="footer__contact-block">
            <a
              href={`mailto:${siteConfig.email}`}
              className="footer__contact-interface"
              aria-label={`Send email to ${siteConfig.email}`}
              onMouseEnter={() => setIsInteracting(true)}
              onMouseLeave={() => setIsInteracting(false)}
            >
              {/* Header Label with Signal Pulse */}
              <div className="footer__contact-header">
                <span className="footer__contact-label">DIRECT CONTACT</span>
                <span className="footer__contact-indicator" aria-hidden="true" />
              </div>

              {/* Main Interactive Email Row with Action Button */}
              <div className="footer__contact-email-row">
                <span className="footer__contact-email-text">{siteConfig.email}</span>
                <span className="footer__contact-arrow-btn" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M 3.5 9 H 14.5 M 14.5 9 L 9.5 4 M 14.5 9 L 9.5 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>

              {/* Caption & Response Invitation */}
              <div className="footer__contact-caption">
                <span>DROP A MESSAGE. LET&apos;S START THE CONVERSATION.</span>
              </div>

              {/* Turquoise Active Bottom Line Accent */}
              <div className="footer__contact-active-line" aria-hidden="true" />
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Technical System Bar */}
      <div className="footer__bottom-bar">
        <div className="container footer__bottom-inner">
          {/* Left: Copyright */}
          <div className="footer__bottom-left">
            <span className="footer__copyright">
              &copy; {year} {siteConfig.brandName}. All rights reserved.
            </span>
          </div>

          {/* Center: Studio Identity Label */}
          <div className="footer__bottom-center">
            <span className="footer__studio-coordinate">CRESTBYTES // DIGITAL STUDIO</span>
          </div>

          {/* Right: Navigation + Verified Social Channels */}
          <div className="footer__bottom-right">
            <nav className="footer__nav-list" aria-label="Footer navigation">
              {NAV_LINKS.map((link) => (
                <Link key={link.label} href={link.to} className="footer__nav-item">
                  <span className="footer__nav-pip" aria-hidden="true" />
                  <span>{link.label}</span>
                </Link>
              ))}
            </nav>

            <div className="footer__social-list" aria-label="Social profiles">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="CrestBytes on Instagram"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href={siteConfig.social.threads}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="CrestBytes on Threads"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M19 12c0 4.418-3.582 8-8 8s-8-3.582-8-8 3.582-8 8-8 8 3.582 8 8Z" />
                  <path d="M14.5 10c-.5-1-1.5-1.5-2.5-1.5-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5c1.5 0 2.5-.75 3-1.8" />
                  <path d="M14.5 10v4c0 2 1.5 3 3.5 3" />
                </svg>
                <span>Threads</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}