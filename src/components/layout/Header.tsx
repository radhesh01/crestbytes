'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Button from '../ui/Button'
import { siteConfig } from '../../data/site'

const NAV_LINKS = [
  { label: 'Work', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false

    const updateScroll = () => {
      const y = window.scrollY
      setIsScrolled(y > 20)

      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? Math.min(Math.max(y / docHeight, 0), 1) : 0
      setScrollProgress(pct)
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll)
        ticking = true
      }
    }

    updateScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      {/* Global Scroll Progress Indicator */}
      <div
        className="header__scroll-progress"
        style={{ transform: `scaleX(${scrollProgress})` }}
        aria-hidden="true"
      />

      <div className="container header__inner">
        {/* Brand Logo */}
        <Link href="/" className="header__logo" aria-label="CrestBytes home">
          <Image
            src={siteConfig.logo}
            alt="CrestBytes"
            width={140}
            height={38}
            priority
            className="header__logo-img"
          />
        </Link>

        {/* Primary Desktop Navigation */}
        <nav className="header__nav" aria-label="Primary navigation">
          <ul className="header__nav-list">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.to
              return (
                <li key={link.to} className="header__nav-item">
                  <Link
                    href={link.to}
                    className={`header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="header__nav-text">{link.label}</span>
                    <span className="header__nav-indicator" aria-hidden="true" />
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Desktop CTA Group */}
        <div className="header__cta">
          <Button href="/schedule" variant="text" className="header__cta-secondary">
            Book a Meeting
          </Button>
          <Button href="/contact" variant="primary" className="header__cta-primary">
            <span>Start a Project</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              className="header__cta-arrow"
            >
              <path
                d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>

        {/* Custom SVG Mobile Menu Toggle */}
        <button
          ref={menuButtonRef}
          type="button"
          className={`header__menu-btn ${isMenuOpen ? 'header__menu-btn--open' : ''}`}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <span className="header__menu-icon" aria-hidden="true">
            <span className="header__menu-line header__menu-line--top" />
            <span className="header__menu-line header__menu-line--bottom" />
          </span>
        </button>
      </div>

      {/* Full-Screen Mobile Navigation Layer */}
      <div
        id="mobile-menu"
        className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-menu__inner container">
          <div className="mobile-menu__eyebrow">
            <span className="mobile-menu__eyebrow-dot" aria-hidden="true" />
            <span>NAVIGATION</span>
          </div>

          <nav aria-label="Mobile navigation" className="mobile-menu__nav">
            <ul className="mobile-menu__list">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.to
                return (
                  <li
                    key={link.to}
                    className="mobile-menu__item"
                    style={{ '--nav-index': i } as React.CSSProperties}
                  >
                    <Link
                      href={link.to}
                      className={`mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`}
                      onClick={closeMenu}
                      tabIndex={isMenuOpen ? 0 : -1}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="mobile-menu__link-num">0{i + 1}</span>
                      <span className="mobile-menu__link-text">{link.label}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                        className="mobile-menu__link-arrow"
                      >
                        <path
                          d="M3 8h10M9 4l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div
            className="mobile-menu__actions"
            style={{ '--nav-index': NAV_LINKS.length } as React.CSSProperties}
          >
            <Button
              href="/contact"
              variant="primary"
              className="mobile-menu__cta-primary"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              <span>Start a Project</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="mobile-menu__cta-arrow"
              >
                <path
                  d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Button>
            <Button
              href="/schedule"
              variant="secondary"
              className="mobile-menu__cta-secondary"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Book a Meeting
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header