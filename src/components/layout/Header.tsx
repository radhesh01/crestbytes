'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '../ui/Button'

const NAV_LINKS = [
  { label: 'Work', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!isMenuOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link href="/" className="header__logo" aria-label="CrestBytes — home">
          CrestBytes
        </Link>

        <nav className="header__nav" aria-label="Primary">
          <ul className="header__nav-list">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.to
              return (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className={`header__nav-link ${isActive ? 'header__nav-link--active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="header__cta">
          <Button href="/schedule" variant="text" className="header__cta-secondary">
            Book a Meeting
          </Button>
          <Button href="/contact" variant="primary">
            Start a Project
          </Button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          className="header__menu-btn"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {isMenuOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <nav aria-label="Mobile">
          <ul className="mobile-menu__list">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.to
              return (
                <li key={link.to}>
                  <Link
                    href={link.to}
                    className={`mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`}
                    onClick={closeMenu}
                    tabIndex={isMenuOpen ? 0 : -1}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="mobile-menu__actions">
            <Button
              href="/schedule"
              variant="secondary"
              className="mobile-menu__cta"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Book a Meeting
            </Button>
            <Button
              href="/contact"
              variant="primary"
              className="mobile-menu__cta"
              onClick={closeMenu}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              Start a Project
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header