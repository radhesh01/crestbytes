'use client'

import { useState } from 'react'
import Link from 'next/link'
import Reveal from '../ui/Reveal'

interface TriadSystem {
  id: string
  num: string
  title: string
  subtitle: string
  statement: string
  metrics: string[]
  details: string
}

const TRIAD_SYSTEMS: TriadSystem[] = [
  {
    id: 'design',
    num: '01',
    title: 'DESIGN',
    subtitle: 'Art Direction & Typography',
    statement: 'Aesthetics are not decoration — they are the fastest path to establishing instant commercial credibility and emotional resonance.',
    metrics: ['Editorial Grid Standards', 'Bespoke Motion Kinetics', 'Spatial Hierarchy', 'Spatial Proportion'],
    details: 'Every layout, type scale, and transition is custom-crafted to mirror the brand’s positioning and command customer attention.',
  },
  {
    id: 'engineering',
    num: '02',
    title: 'ENGINEERING',
    subtitle: 'Architecture & Durability',
    statement: 'Clean, type-safe architecture without the bloat of visual page builders or fragile third-party dependencies.',
    metrics: ['Next.js 15 App Router', 'TypeScript Strict Mode', 'Component Modularity', 'Static Edge Deployments'],
    details: 'We write resilient, modern front-end code that compiles to pure, lightweight static assets designed to function flawlessly under real traffic.',
  },
  {
    id: 'performance',
    num: '03',
    title: 'PERFORMANCE',
    subtitle: 'Sub-Second Optimization',
    statement: 'Speed is a core brand asset. Fast sites rank higher, convert visitors at higher rates, and feel exponentially more premium.',
    metrics: ['< 0.8s Largest Contentful Paint', 'Zero Cumulative Layout Shift', '100/100 Lighthouse Benchmark', 'Edge Asset Distribution'],
    details: 'Zero layout shift, optimized image assets, and lean script execution ensure your audience experiences zero friction on any device.',
  },
]

export default function About() {
  const [activeTriad, setActiveTriad] = useState(0)

  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="container about-section__container">
        {/* Section Header */}
        <div className="about-section__header">
          <Reveal direction="none">
            <div className="section-tag about-section__tag">
              <span className="section-tag-dot" aria-hidden="true" />
              <span className="section-tag-index">04</span>
              <span className="section-tag-separator" aria-hidden="true">/</span>
              <span className="section-tag-label">STUDIO IDENTITY</span>
            </div>
          </Reveal>

          <div className="about-section__title-row">
            <Reveal delay={100}>
              <h2 id="about-heading" className="about-section__title">
                A studio built around{' '}
                <span className="about-section__title-accent">strategy, design, and engineering.</span>
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <div className="about-section__lead-wrapper">
                <p className="about-section__lead">
                  We started CrestBytes with a singular conviction: ambitious brands deserve digital platforms crafted with
                  the same precision, taste, and technical discipline found in high-end industrial engineering.
                </p>
                <Link href="/about" className="about-section__link">
                  <span>More About CrestBytes</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9m0 0L7.5 3m4 4L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Visual Technical Identity Triad (Interactive Conduits & Systems) */}
        <div className="about-triad" role="region" aria-label="CrestBytes Core Systems Triad">
          {/* Interconnected Conduits Line Graphic */}
          <div className="about-triad__conduits hide-on-mobile" aria-hidden="true">
            <svg viewBox="0 0 900 60" fill="none" className="about-triad__conduits-svg">
              <line x1="150" y1="30" x2="450" y2="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
              <line x1="450" y1="30" x2="750" y2="30" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
              <line
                x1="150"
                y1="30"
                x2="450"
                y2="30"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeDasharray="300"
                strokeDashoffset={activeTriad >= 1 ? '0' : '300'}
                style={{ transition: 'stroke-dashoffset 400ms ease' }}
              />
              <line
                x1="450"
                y1="30"
                x2="750"
                y2="30"
                stroke="var(--accent)"
                strokeWidth="1.5"
                strokeDasharray="300"
                strokeDashoffset={activeTriad >= 2 ? '0' : '300'}
                style={{ transition: 'stroke-dashoffset 400ms ease' }}
              />
              <circle cx="150" cy="30" r="5" fill={activeTriad === 0 ? 'var(--accent)' : '#1f2228'} stroke="var(--accent)" strokeWidth="2" />
              <circle cx="450" cy="30" r="5" fill={activeTriad === 1 ? 'var(--accent)' : '#1f2228'} stroke="var(--accent)" strokeWidth="2" />
              <circle cx="750" cy="30" r="5" fill={activeTriad === 2 ? 'var(--accent)' : '#1f2228'} stroke="var(--accent)" strokeWidth="2" />
            </svg>
          </div>

          {/* Triad Cards */}
          <div className="about-triad__grid">
            {TRIAD_SYSTEMS.map((system, index) => {
              const isActive = activeTriad === index
              return (
                <div
                  key={system.id}
                  tabIndex={0}
                  className={`about-triad-card ${isActive ? 'about-triad-card--active' : ''}`}
                  onMouseEnter={() => setActiveTriad(index)}
                  onFocus={() => setActiveTriad(index)}
                  onClick={() => setActiveTriad(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveTriad(index)
                    }
                  }}
                >
                  <div className="about-triad-card__header">
                    <span className="about-triad-card__num">{system.num}</span>
                    <span className="about-triad-card__signal" aria-hidden="true" />
                    <span className="about-triad-card__title">{system.title}</span>
                  </div>

                  <p className="about-triad-card__subtitle">{system.subtitle}</p>
                  <p className="about-triad-card__statement">{system.statement}</p>

                  <div className="about-triad-card__specs">
                    {system.metrics.map((m) => (
                      <div key={m} className="about-triad-card__spec-item">
                        <span className="about-triad-card__spec-bullet" aria-hidden="true" />
                        <span>{m}</span>
                      </div>
                    ))}
                  </div>

                  <div className="about-triad-card__footer">
                    <span className="about-triad-card__status">
                      {isActive ? 'SYSTEM ILLUMINATED' : 'EXPLORE'}
                    </span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7h9m0 0L7.5 3m4 4L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
