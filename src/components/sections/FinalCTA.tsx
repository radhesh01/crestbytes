'use client'

import { useState } from 'react'
import Link from 'next/link'
import Reveal from '../ui/Reveal'

export default function FinalCTA() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20
    setMouseOffset({ x, y })
  }

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 })
  }

  return (
    <section
      className="final-cta"
      id="contact"
      aria-labelledby="final-cta-heading"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Interactive Atmospheric Matrix */}
      <div
        className="final-cta__backdrop"
        style={{
          transform: `translate3d(${mouseOffset.x * 0.4}px, ${mouseOffset.y * 0.4}px, 0)`,
        }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 1200 600" fill="none" className="final-cta__grid-svg">
          {/* Subtle grid lines */}
          <line x1="0" y1="150" x2="1200" y2="150" stroke="rgba(255,255,255,0.03)" />
          <line x1="0" y1="300" x2="1200" y2="300" stroke="rgba(255,255,255,0.04)" />
          <line x1="0" y1="450" x2="1200" y2="450" stroke="rgba(255,255,255,0.03)" />
          <line x1="300" y1="0" x2="300" y2="600" stroke="rgba(255,255,255,0.03)" />
          <line x1="600" y1="0" x2="600" y2="600" stroke="rgba(255,255,255,0.04)" />
          <line x1="900" y1="0" x2="900" y2="600" stroke="rgba(255,255,255,0.03)" />

          {/* Central Conduit Ring */}
          <circle cx="600" cy="300" r="220" stroke="rgba(107,216,199,0.12)" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="600" cy="300" r="140" stroke="rgba(107,216,199,0.08)" strokeWidth="1" />
          <circle cx="600" cy="300" r="5" fill="var(--accent)" opacity="0.6" />
        </svg>
      </div>

      <div className="container final-cta__container">
        {/* Technical Status Bar */}
        <div className="final-cta__status-bar">
          <div className="final-cta__badge">
            <span className="final-cta__pulse" aria-hidden="true" />
            <span className="final-cta__badge-text">STATUS: AVAILABLE FOR SELECT COMMISSIONS</span>
          </div>
          <span className="final-cta__coords hide-on-mobile">LAT: 28.6139° N // LON: 77.2090° E</span>
        </div>

        {/* Core Conversion Callout */}
        <div className="final-cta__content">
          <Reveal delay={100}>
            <h2 id="final-cta-heading" className="final-cta__headline">
              Ready to build something{' '}
              <span className="final-cta__headline-accent">worth remembering?</span>
            </h2>
          </Reveal>

          <Reveal delay={180}>
            <p className="final-cta__lead">
              Tell us about your project vision, timeline, and commercial goals. We respond within 24 hours with an honest
              technical appraisal and next steps.
            </p>
          </Reveal>

          {/* Interactive Conversion Action Group */}
          <Reveal delay={260}>
            <div className="final-cta__actions">
              <Link href="/contact" className="final-cta__primary-btn">
                <span>Start a Project</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              <Link href="/schedule" className="final-cta__secondary-btn">
                <span>Book an Initial Call</span>
                <span className="final-cta__btn-meta">30 MIN // VIDEO</span>
              </Link>
            </div>
          </Reveal>
        </div>

        {/* System Footer Metadata */}
        <div className="final-cta__system-meta">
          <div className="final-cta__meta-item">
            <span className="final-cta__meta-label">DIRECT INQUIRIES</span>
            <a href="mailto:hello@crestbytes.com" className="final-cta__meta-val">hello@crestbytes.com</a>
          </div>
          <div className="final-cta__meta-item">
            <span className="final-cta__meta-label">ARCHITECTURE</span>
            <span className="final-cta__meta-val">NEXT.JS APP ROUTER // TS</span>
          </div>
          <div className="final-cta__meta-item hide-on-mobile">
            <span className="final-cta__meta-label">DELIVERY MODEL</span>
            <span className="final-cta__meta-val">END-TO-END OWNERSHIP</span>
          </div>
        </div>
      </div>
    </section>
  )
}
