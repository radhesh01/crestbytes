'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Reveal from '../ui/Reveal'

interface Capability {
  index: string
  title: string
  description: string
  tags: string[]
  href: string
}

const CAPABILITIES: Capability[] = [
  {
    index: '01',
    title: 'Website Design & Art Direction',
    description: 'Bespoke aesthetic systems, editorial typography grids, and immersive digital identities designed to separate ambitious brands from cookie-cutter competitors.',
    tags: ['Art Direction', 'Typography Systems', 'Editorial Layout', 'Motion Design'],
    href: '/services',
  },
  {
    index: '02',
    title: 'Custom Web Development',
    description: 'Clean TypeScript architecture, modular component trees, and sub-second rendering engineered for long-term scalability, speed, and zero technical debt.',
    tags: ['Next.js App Router', 'TypeScript', 'Clean Architecture', 'API Integration'],
    href: '/services',
  },
  {
    index: '03',
    title: 'Ecommerce Architecture',
    description: 'High-conversion retail platforms, frictionless checkout funnels, and bespoke storefronts designed to maximize average order value and brand prestige.',
    tags: ['Custom Storefronts', 'Shopify / Headless', 'Checkout Funnels', 'Catalog Systems'],
    href: '/services',
  },
  {
    index: '04',
    title: 'Custom Web Applications',
    description: 'Interactive client portals, bespoke internal digital tools, and scalable SaaS web application interfaces built with relentless attention to workflow speed.',
    tags: ['SaaS Interfaces', 'Client Portals', 'Data Dashboards', 'State Architecture'],
    href: '/services',
  },
  {
    index: '05',
    title: 'Interface & UI/UX Systems',
    description: 'Comprehensive design systems, token architectures, and atomic component libraries crafted for effortless team handoff and brand consistency.',
    tags: ['Design Systems', 'Figma Tokens', 'Atomic Components', 'Micro-Interactions'],
    href: '/services',
  },
  {
    index: '06',
    title: 'Website Performance & SEO',
    description: 'Core Web Vitals compliance, layout stability, technical search structure, and asset optimization engineered for discoverability and speed.',
    tags: ['Core Web Vitals', 'Technical SEO', 'Asset Optimization', 'Edge Architecture'],
    href: '/services',
  },
]

function renderBlueprintSVG(index: number) {
  switch (index) {
    case 0:
      return (
        <div className="blueprint-visual blueprint-visual--design">
          <svg viewBox="0 0 360 240" fill="none" className="blueprint-svg">
            <line x1="20" y1="20" x2="340" y2="20" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
            <line x1="20" y1="80" x2="340" y2="80" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
            <line x1="20" y1="160" x2="340" y2="160" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
            <line x1="120" y1="20" x2="120" y2="220" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
            <line x1="240" y1="20" x2="240" y2="220" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />

            <rect x="30" y="30" width="180" height="24" rx="3" fill="rgba(107,216,199,0.12)" stroke="var(--accent)" strokeWidth="1.2" />
            <rect x="30" y="64" width="220" height="8" rx="2" fill="rgba(255,255,255,0.2)" />
            <rect x="30" y="78" width="160" height="8" rx="2" fill="rgba(255,255,255,0.1)" />

            <rect x="30" y="102" width="130" height="110" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" />
            <circle cx="95" cy="157" r="28" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4" />
            <path d="M 60 180 Q 95 120 130 180" stroke="rgba(107,216,199,0.5)" strokeWidth="1.5" fill="none" />

            <rect x="175" y="102" width="155" height="50" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(107,216,199,0.25)" />
            <rect x="175" y="162" width="155" height="50" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" />

            <path d="M 280 40 A 60 60 0 0 1 340 100" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="2 2" />
            <circle cx="280" cy="40" r="3" fill="var(--accent)" />
          </svg>
          <div className="blueprint-caption">
            <span>TYPE: EDITORIAL COMPOSITION</span>
            <span>GRID: 12-COL BESPOKE</span>
          </div>
        </div>
      )
    case 1:
      return (
        <div className="blueprint-visual blueprint-visual--dev">
          <svg viewBox="0 0 360 240" fill="none" className="blueprint-svg">
            <path d="M180 35 L180 75 M180 75 L80 115 M180 75 L180 115 M180 75 L280 115 M80 145 L80 175 M280 145 L280 175" stroke="rgba(107,216,199,0.4)" strokeWidth="1.5" />

            <rect x="120" y="15" width="120" height="32" rx="4" fill="rgba(14,16,20,0.9)" stroke="var(--accent)" strokeWidth="1.5" />
            <text x="180" y="35" fill="var(--accent)" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">&lt;RootApp /&gt;</text>

            <rect x="30" y="115" width="100" height="30" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" />
            <text x="80" y="133" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">&lt;LayoutEngine /&gt;</text>

            <rect x="135" y="115" width="90" height="30" rx="3" fill="rgba(107,216,199,0.1)" stroke="var(--accent)" />
            <text x="180" y="133" fill="var(--accent)" fontSize="9" fontFamily="monospace" textAnchor="middle">&lt;StateBus /&gt;</text>

            <rect x="230" y="115" width="100" height="30" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" />
            <text x="280" y="133" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">&lt;AsyncView /&gt;</text>

            <rect x="35" y="175" width="90" height="24" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" />
            <text x="80" y="190" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="monospace" textAnchor="middle">Static Layout</text>

            <rect x="235" y="175" width="90" height="24" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" />
            <text x="280" y="190" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="monospace" textAnchor="middle">Edge Cached</text>

            <circle cx="180" cy="75" r="3" fill="var(--accent)" />
            <circle cx="80" cy="115" r="2.5" fill="var(--accent)" />
            <circle cx="280" cy="115" r="2.5" fill="var(--accent)" />
          </svg>
          <div className="blueprint-caption">
            <span>ENGINE: TYPESCRIPT 5.x</span>
            <span>BUNDLE: OPTIMIZED BUILD</span>
          </div>
        </div>
      )
    case 2:
      return (
        <div className="blueprint-visual blueprint-visual--commerce">
          <svg viewBox="0 0 360 240" fill="none" className="blueprint-svg">
            <rect x="30" y="25" width="90" height="95" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
            <rect x="42" y="38" width="66" height="46" rx="2" fill="rgba(107,216,199,0.08)" />
            <rect x="42" y="92" width="40" height="6" rx="1" fill="rgba(255,255,255,0.3)" />
            <rect x="42" y="103" width="24" height="6" rx="1" fill="var(--accent)" />

            <rect x="135" y="25" width="90" height="95" rx="4" fill="rgba(107,216,199,0.06)" stroke="var(--accent)" strokeWidth="1.5" />
            <rect x="147" y="38" width="66" height="46" rx="2" fill="rgba(107,216,199,0.15)" />
            <rect x="147" y="92" width="45" height="6" rx="1" fill="rgba(255,255,255,0.4)" />
            <rect x="147" y="103" width="30" height="6" rx="1" fill="var(--accent)" />

            <rect x="240" y="25" width="90" height="95" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
            <rect x="252" y="38" width="66" height="46" rx="2" fill="rgba(255,255,255,0.05)" />
            <rect x="252" y="92" width="40" height="6" rx="1" fill="rgba(255,255,255,0.3)" />
            <rect x="252" y="103" width="24" height="6" rx="1" fill="var(--accent)" />

            <path d="M 40 160 L 320 160" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
            <path d="M 40 160 L 220 160" stroke="var(--accent)" strokeWidth="2" />
            <circle cx="80" cy="160" r="6" fill="#14161a" stroke="var(--accent)" strokeWidth="2" />
            <circle cx="160" cy="160" r="6" fill="#14161a" stroke="var(--accent)" strokeWidth="2" />
            <circle cx="240" cy="160" r="6" fill="var(--accent)" />
            <circle cx="300" cy="160" r="5" fill="#14161a" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

            <text x="80" y="185" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace" textAnchor="middle">Catalog</text>
            <text x="160" y="185" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace" textAnchor="middle">Cart Tray</text>
            <text x="240" y="185" fill="var(--accent)" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">Checkout</text>
            <text x="300" y="185" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace" textAnchor="middle">Receipt</text>
          </svg>
          <div className="blueprint-caption">
            <span>PIPELINE: STREAMLINED CHECKOUT</span>
            <span>STRUCTURE: MODULAR COMMERCE</span>
          </div>
        </div>
      )
    case 3:
      return (
        <div className="blueprint-visual blueprint-visual--app">
          <svg viewBox="0 0 360 240" fill="none" className="blueprint-svg">
            <rect x="25" y="20" width="310" height="185" rx="6" fill="rgba(14,16,20,0.85)" stroke="rgba(255,255,255,0.12)" />
            <line x1="90" y1="20" x2="90" y2="205" stroke="rgba(255,255,255,0.08)" />
            <rect x="36" y="38" width="40" height="8" rx="2" fill="var(--accent)" />
            <rect x="36" y="60" width="44" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
            <rect x="36" y="76" width="44" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
            <rect x="36" y="92" width="44" height="6" rx="2" fill="rgba(255,255,255,0.2)" />

            <rect x="105" y="35" width="215" height="80" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(107,216,199,0.2)" />
            <path d="M 115 95 Q 150 50, 190 75 T 260 45 T 310 60" stroke="var(--accent)" strokeWidth="2" fill="none" />
            <path d="M 115 95 Q 150 50, 190 75 T 260 45 T 310 60 L 310 110 L 115 110 Z" fill="url(#appGrad)" opacity="0.15" />
            <defs>
              <linearGradient id="appGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>

            <rect x="105" y="125" width="65" height="65" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
            <rect x="115" y="136" width="30" height="5" rx="1" fill="rgba(255,255,255,0.3)" />
            <text x="137" y="165" fill="#fff" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">STATE</text>

            <rect x="180" y="125" width="65" height="65" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
            <rect x="190" y="136" width="35" height="5" rx="1" fill="rgba(255,255,255,0.3)" />
            <text x="212" y="165" fill="var(--accent)" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">SYNC</text>

            <rect x="255" y="125" width="65" height="65" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
            <rect x="265" y="136" width="30" height="5" rx="1" fill="rgba(255,255,255,0.3)" />
            <text x="287" y="165" fill="#fff" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">ACTIVE</text>
          </svg>
          <div className="blueprint-caption">
            <span>SYSTEM: CLIENT INTERFACE</span>
            <span>ARCHITECTURE: EVENT DRIVEN</span>
          </div>
        </div>
      )
    case 4:
      return (
        <div className="blueprint-visual blueprint-visual--tokens">
          <svg viewBox="0 0 360 240" fill="none" className="blueprint-svg">
            <circle cx="50" cy="45" r="14" fill="var(--accent)" />
            <circle cx="90" cy="45" r="14" fill="#3CBFA6" />
            <circle cx="130" cy="45" r="14" fill="#1F1F1F" stroke="rgba(255,255,255,0.2)" />
            <circle cx="170" cy="45" r="14" fill="#141414" stroke="rgba(255,255,255,0.2)" />

            <rect x="36" y="80" width="130" height="34" rx="17" fill="var(--accent)" />
            <text x="101" y="102" fill="#0c0e11" fontSize="10" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Primary Pill</text>

            <rect x="180" y="80" width="144" height="34" rx="4" fill="transparent" stroke="var(--accent)" strokeWidth="1.5" />
            <text x="252" y="102" fill="var(--accent)" fontSize="10" fontFamily="sans-serif" fontWeight="500" textAnchor="middle">Ghost Action [Hover]</text>

            <line x1="36" y1="135" x2="324" y2="135" stroke="rgba(255,255,255,0.1)" />
            <text x="36" y="162" fill="#fff" fontSize="18" fontFamily="sans-serif" fontWeight="600">Heading Display // 48px</text>
            <text x="36" y="186" fill="rgba(255,255,255,0.6)" fontSize="12" fontFamily="sans-serif">Body Standard // 16px 1.5 Line-height</text>
            <text x="36" y="206" fill="var(--accent)" fontSize="9" fontFamily="monospace">MONOSPACE META // 12px 0.14em TRACKING</text>
          </svg>
          <div className="blueprint-caption">
            <span>TOKENS: FIGMA + CSS SYNC</span>
            <span>SCHEMA: DESIGN SYSTEM READY</span>
          </div>
        </div>
      )
    case 5:
      return (
        <div className="blueprint-visual blueprint-visual--perf">
          <svg viewBox="0 0 360 240" fill="none" className="blueprint-svg">
            <circle cx="100" cy="90" r="50" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
            <circle cx="100" cy="90" r="50" stroke="var(--accent)" strokeWidth="8" strokeDasharray="314" strokeDashoffset="28" strokeLinecap="round" />
            <text x="100" y="93" fill="#fff" fontSize="11" fontFamily="monospace" fontWeight="bold" textAnchor="middle">CORE WEB</text>
            <text x="100" y="107" fill="var(--accent)" fontSize="9" fontFamily="monospace" textAnchor="middle">VITALS</text>

            <rect x="175" y="45" width="150" height="28" rx="3" fill="rgba(255,255,255,0.03)" />
            <text x="185" y="63" fill="rgba(255,255,255,0.7)" fontSize="8.5" fontFamily="monospace">LCP // CONTENTFUL</text>
            <circle cx="310" cy="59" r="4" fill="var(--accent)" />

            <rect x="175" y="80" width="150" height="28" rx="3" fill="rgba(255,255,255,0.03)" />
            <text x="185" y="98" fill="rgba(255,255,255,0.7)" fontSize="8.5" fontFamily="monospace">INP // INTERACTION</text>
            <circle cx="310" cy="94" r="4" fill="var(--accent)" />

            <rect x="175" y="115" width="150" height="28" rx="3" fill="rgba(255,255,255,0.03)" />
            <text x="185" y="133" fill="rgba(255,255,255,0.7)" fontSize="8.5" fontFamily="monospace">CLS // STABILITY</text>
            <circle cx="310" cy="129" r="4" fill="var(--accent)" />

            <line x1="40" y1="180" x2="320" y2="180" stroke="rgba(255,255,255,0.1)" />
            <path d="M 40 180 L 100 160 L 160 172 L 220 152 L 280 162 L 320 148" stroke="var(--accent)" strokeWidth="2" fill="none" />
            <circle cx="320" cy="148" r="3" fill="var(--accent)" />
            <text x="40" y="200" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">REQUEST</text>
            <text x="320" y="200" fill="var(--accent)" fontSize="8" fontFamily="monospace" textAnchor="end">EDGE RESPONSE</text>
          </svg>
          <div className="blueprint-caption">
            <span>AUDIT: CORE WEB VITALS</span>
            <span>OPTIMIZATION: STRUCTURE & ASSETS</span>
          </div>
        </div>
      )
    default:
      return null
  }
}

export default function Positioning() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(0)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const previewRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!previewRef.current) return
    const rect = previewRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16
    setMousePos({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 })
  }

  const toggleMobileAccordion = (index: number) => {
    setMobileExpanded((prev) => (prev === index ? null : index))
  }

  return (
    <section className="positioning" aria-labelledby="positioning-heading">
      <div className="container positioning__container">
        {/* Editorial Section Header */}
        <div className="positioning__header">
          <Reveal direction="none">
            <div className="section-tag positioning__tag">
              <span className="section-tag-dot" aria-hidden="true" />
              <span className="section-tag-index">01</span>
              <span className="section-tag-separator" aria-hidden="true">/</span>
              <span className="section-tag-label">WHAT WE DO</span>
            </div>
          </Reveal>

          <div className="positioning__heading-row">
            <Reveal delay={100}>
              <h2 id="positioning-heading" className="positioning__statement">
                We engineer bespoke digital experiences that make ambitious brands{' '}
                <span className="positioning__statement-highlight">easier to discover, trust, and remember.</span>
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <p className="positioning__lead">
                CrestBytes is an independent digital studio operating at the intersection of refined aesthetic craft and
                rigorous front-end engineering. We partner with leaders who reject generic templates and demand a distinct
                competitive advantage online.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Desktop Interactive Capability System (List + Live Technical Preview) */}
        <div className="positioning__interactive-grid hide-on-mobile">
          {/* Left Column: Interactive Capability Selector List */}
          <div className="positioning__capabilities-list" role="tablist" aria-label="Capabilities list">
            {CAPABILITIES.map((cap, i) => {
              const isActive = activeIndex === i
              return (
                <div
                  key={cap.index}
                  role="tab"
                  id={`capability-tab-${i}`}
                  aria-selected={isActive}
                  aria-controls={`capability-panel-${i}`}
                  tabIndex={0}
                  className={`positioning__capability-row ${isActive ? 'positioning__capability-row--active' : ''}`}
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveIndex(i)
                    }
                  }}
                >
                  <div className="positioning__capability-meta">
                    <span className="positioning__capability-num">{cap.index}</span>
                    <span className="positioning__capability-bar" aria-hidden="true" />
                  </div>

                  <div className="positioning__capability-body">
                    <div className="positioning__capability-title-row">
                      <h3 className="positioning__capability-title">{cap.title}</h3>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        aria-hidden="true"
                        className="positioning__capability-arrow"
                      >
                        <path
                          d="M3.75 9H14.25M14.25 9L9 3.75M14.25 9L9 14.25"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <p className="positioning__capability-desc">{cap.description}</p>

                    {/* Tag Pills (Active State) */}
                    <div className="positioning__capability-tags" aria-hidden={!isActive}>
                      {cap.tags.map((tag) => (
                        <span key={tag} className="positioning__capability-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Column: Live Technical Blueprint Preview Panel with Mouse Parallax */}
          <div
            className="positioning__preview-wrapper"
            ref={previewRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            aria-live="polite"
          >
            <div
              className="positioning__preview-panel"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 0.4}deg) rotateX(${-mousePos.y * 0.4}deg) translate3d(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px, 0)`,
              }}
            >
              {/* Header Bar with Module Indicator */}
              <div className="positioning__preview-header">
                <div className="positioning__preview-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="positioning__preview-coord">
                  <span>MODULE // {CAPABILITIES[activeIndex].index}</span>
                  <span className="positioning__preview-status">ACTIVE SPEC</span>
                </div>
              </div>

              {/* Dynamic Visual Content */}
              <div className="positioning__preview-canvas">
                {renderBlueprintSVG(activeIndex)}
              </div>

              {/* Panel Footer Action */}
              <div className="positioning__preview-footer">
                <Link href={CAPABILITIES[activeIndex].href} className="positioning__preview-cta">
                  <span>Explore {CAPABILITIES[activeIndex].title}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9m0 0L7.5 3m4 4L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Experience with Inline Blueprint Visuals */}
        <div className="positioning__mobile-accordion hide-on-desktop">
          {CAPABILITIES.map((cap, i) => {
            const isExpanded = mobileExpanded === i
            return (
              <div
                key={cap.index}
                className={`positioning__mobile-card ${isExpanded ? 'positioning__mobile-card--open' : ''}`}
              >
                <button
                  type="button"
                  className="positioning__mobile-trigger"
                  onClick={() => toggleMobileAccordion(i)}
                  aria-expanded={isExpanded}
                  aria-controls={`capability-mobile-panel-${i}`}
                >
                  <span className="positioning__mobile-num">{cap.index}</span>
                  <span className="positioning__mobile-title">{cap.title}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                    className={`positioning__mobile-chevron ${isExpanded ? 'positioning__mobile-chevron--rotated' : ''}`}
                  >
                    <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div
                  id={`capability-mobile-panel-${i}`}
                  className="positioning__mobile-content"
                  aria-hidden={!isExpanded}
                >
                  <p className="positioning__mobile-desc">{cap.description}</p>
                  <div className="positioning__mobile-tags">
                    {cap.tags.map((tag) => (
                      <span key={tag} className="positioning__mobile-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Inline Technical Blueprint Canvas on Mobile */}
                  <div className="positioning__mobile-blueprint">
                    {renderBlueprintSVG(i)}
                  </div>

                  <Link href={cap.href} className="positioning__mobile-link">
                    <span>Explore {cap.title}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                      <path d="M2.5 7h9m0 0L7.5 3m4 4L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

