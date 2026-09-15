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
    description: 'Sub-second Core Web Vitals, zero layout shifts, technical search architecture, and obsessive asset optimization that turns speed into competitive advantage.',
    tags: ['Core Web Vitals', '100/100 Lighthouse', 'Semantic SEO', 'Edge Caching'],
    href: '/services',
  },
]

export default function Positioning() {
  const [activeIndex, setActiveIndex] = useState(0)
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

        {/* Interactive Capability System: List + Live Technical Preview */}
        <div className="positioning__interactive-grid">
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

          {/* Right Column: Live Technical Blueprint Preview Panel */}
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
              {/* Header Bar with Coordinates */}
              <div className="positioning__preview-header">
                <div className="positioning__preview-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="positioning__preview-coord">
                  <span>MODULE // {CAPABILITIES[activeIndex].index}</span>
                  <span className="positioning__preview-status">ACTIVE</span>
                </div>
              </div>

              {/* Dynamic Visual Content based on active capability */}
              <div className="positioning__preview-canvas">
                {activeIndex === 0 && (
                  /* 01: Website Design: Wireframe Layout & Golden Ratio Grid */
                  <div className="blueprint-visual blueprint-visual--design">
                    <svg viewBox="0 0 360 240" fill="none" className="blueprint-svg">
                      {/* Grid Lines */}
                      <line x1="20" y1="20" x2="340" y2="20" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                      <line x1="20" y1="80" x2="340" y2="80" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                      <line x1="20" y1="160" x2="340" y2="160" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                      <line x1="120" y1="20" x2="120" y2="220" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                      <line x1="240" y1="20" x2="240" y2="220" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />

                      {/* Editorial Canvas Frames */}
                      <rect x="30" y="30" width="180" height="24" rx="3" fill="rgba(107,216,199,0.12)" stroke="var(--accent)" strokeWidth="1.2" />
                      <rect x="30" y="64" width="220" height="8" rx="2" fill="rgba(255,255,255,0.2)" />
                      <rect x="30" y="78" width="160" height="8" rx="2" fill="rgba(255,255,255,0.1)" />

                      {/* Asymmetric Visual Blocks */}
                      <rect x="30" y="102" width="130" height="110" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" />
                      <circle cx="95" cy="157" r="28" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4" />
                      <path d="M 60 180 Q 95 120 130 180" stroke="rgba(107,216,199,0.5)" strokeWidth="1.5" fill="none" />

                      <rect x="175" y="102" width="155" height="50" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(107,216,199,0.25)" />
                      <rect x="175" y="162" width="155" height="50" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" />

                      {/* Golden Ratio Arc */}
                      <path d="M 280 40 A 60 60 0 0 1 340 100" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="2 2" />
                      <circle cx="280" cy="40" r="3" fill="var(--accent)" />
                    </svg>
                    <div className="blueprint-caption">
                      <span>TYPE: EDITORIAL COMPOSITION</span>
                      <span>GRID: 12-COL BESPOKE</span>
                    </div>
                  </div>
                )}

                {activeIndex === 1 && (
                  /* 02: Custom Web Development: Component Architecture & Data Pipeline */
                  <div className="blueprint-visual blueprint-visual--dev">
                    <svg viewBox="0 0 360 240" fill="none" className="blueprint-svg">
                      {/* Tree Flow Connections */}
                      <path d="M180 35 L180 75 M180 75 L80 115 M180 75 L180 115 M180 75 L280 115 M80 145 L80 175 M280 145 L280 175" stroke="rgba(107,216,199,0.4)" strokeWidth="1.5" />

                      {/* Root Node */}
                      <rect x="120" y="15" width="120" height="32" rx="4" fill="rgba(14,16,20,0.9)" stroke="var(--accent)" strokeWidth="1.5" />
                      <text x="180" y="35" fill="var(--accent)" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">&lt;RootApp /&gt;</text>

                      {/* Branch Nodes */}
                      <rect x="30" y="115" width="100" height="30" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" />
                      <text x="80" y="133" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">&lt;LayoutEngine /&gt;</text>

                      <rect x="135" y="115" width="90" height="30" rx="3" fill="rgba(107,216,199,0.1)" stroke="var(--accent)" />
                      <text x="180" y="133" fill="var(--accent)" fontSize="9" fontFamily="monospace" textAnchor="middle">&lt;StateBus /&gt;</text>

                      <rect x="230" y="115" width="100" height="30" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" />
                      <text x="280" y="133" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">&lt;AsyncView /&gt;</text>

                      {/* Terminal Nodes */}
                      <rect x="35" y="175" width="90" height="24" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" />
                      <text x="80" y="190" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="monospace" textAnchor="middle">0ms hydration</text>

                      <rect x="235" y="175" width="90" height="24" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" />
                      <text x="280" y="190" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="monospace" textAnchor="middle">Edge Cached</text>

                      {/* Glowing Signal Dots */}
                      <circle cx="180" cy="75" r="3" fill="var(--accent)" />
                      <circle cx="80" cy="115" r="2.5" fill="var(--accent)" />
                      <circle cx="280" cy="115" r="2.5" fill="var(--accent)" />
                    </svg>
                    <div className="blueprint-caption">
                      <span>ENGINE: TYPESCRIPT 5.x</span>
                      <span>BUNDLE: ZERO DEAD-CODE</span>
                    </div>
                  </div>
                )}

                {activeIndex === 2 && (
                  /* 03: Ecommerce: Catalog Grid & High-Conversion Checkout Pipeline */
                  <div className="blueprint-visual blueprint-visual--commerce">
                    <svg viewBox="0 0 360 240" fill="none" className="blueprint-svg">
                      {/* Products Frame Grid */}
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

                      {/* Conversion Pipeline Flow */}
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
                      <span>PIPELINE: FRICTIONLESS CHECKOUT</span>
                      <span>SPEED: 1-STEP ORDER</span>
                    </div>
                  </div>
                )}

                {activeIndex === 3 && (
                  /* 04: Web Applications: Dashboard Wireframe & Data Streams */
                  <div className="blueprint-visual blueprint-visual--app">
                    <svg viewBox="0 0 360 240" fill="none" className="blueprint-svg">
                      {/* App Frame */}
                      <rect x="25" y="20" width="310" height="185" rx="6" fill="rgba(14,16,20,0.85)" stroke="rgba(255,255,255,0.12)" />
                      {/* Sidebar */}
                      <line x1="90" y1="20" x2="90" y2="205" stroke="rgba(255,255,255,0.08)" />
                      <rect x="36" y="38" width="40" height="8" rx="2" fill="var(--accent)" />
                      <rect x="36" y="60" width="44" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
                      <rect x="36" y="76" width="44" height="6" rx="2" fill="rgba(255,255,255,0.2)" />
                      <rect x="36" y="92" width="44" height="6" rx="2" fill="rgba(255,255,255,0.2)" />

                      {/* Main Chart Area */}
                      <rect x="105" y="35" width="215" height="80" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(107,216,199,0.2)" />
                      <path d="M 115 95 Q 150 50, 190 75 T 260 45 T 310 60" stroke="var(--accent)" strokeWidth="2" fill="none" />
                      <path d="M 115 95 Q 150 50, 190 75 T 260 45 T 310 60 L 310 110 L 115 110 Z" fill="url(#appGrad)" opacity="0.15" />
                      <defs>
                        <linearGradient id="appGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--accent)" />
                          <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                      </defs>

                      {/* Metric Widgets */}
                      <rect x="105" y="125" width="65" height="65" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
                      <rect x="115" y="136" width="30" height="5" rx="1" fill="rgba(255,255,255,0.3)" />
                      <text x="115" y="165" fill="#fff" fontSize="13" fontFamily="monospace" fontWeight="bold">99.8%</text>

                      <rect x="180" y="125" width="65" height="65" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
                      <rect x="190" y="136" width="35" height="5" rx="1" fill="rgba(255,255,255,0.3)" />
                      <text x="190" y="165" fill="var(--accent)" fontSize="13" fontFamily="monospace" fontWeight="bold">&lt;18ms</text>

                      <rect x="255" y="125" width="65" height="65" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
                      <rect x="265" y="136" width="30" height="5" rx="1" fill="rgba(255,255,255,0.3)" />
                      <text x="265" y="165" fill="#fff" fontSize="13" fontFamily="monospace" fontWeight="bold">Active</text>
                    </svg>
                    <div className="blueprint-caption">
                      <span>SYSTEM: REAL-TIME PORTAL</span>
                      <span>LATENCY: ZERO POLLING</span>
                    </div>
                  </div>
                )}

                {activeIndex === 4 && (
                  /* 05: Interface & UI/UX Systems: Atomic Design Tokens */
                  <div className="blueprint-visual blueprint-visual--tokens">
                    <svg viewBox="0 0 360 240" fill="none" className="blueprint-svg">
                      {/* Color Palette Tokens */}
                      <circle cx="50" cy="45" r="14" fill="var(--accent)" />
                      <circle cx="90" cy="45" r="14" fill="#3CBFA6" />
                      <circle cx="130" cy="45" r="14" fill="#1F1F1F" stroke="rgba(255,255,255,0.2)" />
                      <circle cx="170" cy="45" r="14" fill="#141414" stroke="rgba(255,255,255,0.2)" />

                      {/* Component States Matrix */}
                      <rect x="36" y="80" width="130" height="34" rx="17" fill="var(--accent)" />
                      <text x="101" y="102" fill="#0c0e11" fontSize="10" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">Primary Pill</text>

                      <rect x="180" y="80" width="144" height="34" rx="4" fill="transparent" stroke="var(--accent)" strokeWidth="1.5" />
                      <text x="252" y="102" fill="var(--accent)" fontSize="10" fontFamily="sans-serif" fontWeight="500" textAnchor="middle">Ghost Action [Hover]</text>

                      {/* Typography Scale Guide */}
                      <line x1="36" y1="135" x2="324" y2="135" stroke="rgba(255,255,255,0.1)" />
                      <text x="36" y="162" fill="#fff" fontSize="18" fontFamily="sans-serif" fontWeight="600">Heading Display // 48px</text>
                      <text x="36" y="186" fill="rgba(255,255,255,0.6)" fontSize="12" fontFamily="sans-serif">Body Standard // 16px 1.5 Line-height</text>
                      <text x="36" y="206" fill="var(--accent)" fontSize="9" fontFamily="monospace">MONOSPACE META // 12px 0.14em TRACKING</text>
                    </svg>
                    <div className="blueprint-caption">
                      <span>TOKENS: FIGMA + CSS SYNC</span>
                      <span>SCHEMA: WCAG AAA COMPLIANT</span>
                    </div>
                  </div>
                )}

                {activeIndex === 5 && (
                  /* 06: Performance & SEO: Speed Curve & Core Web Vitals */
                  <div className="blueprint-visual blueprint-visual--perf">
                    <svg viewBox="0 0 360 240" fill="none" className="blueprint-svg">
                      {/* Radar / Dial */}
                      <circle cx="100" cy="90" r="50" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                      <circle cx="100" cy="90" r="50" stroke="var(--accent)" strokeWidth="8" strokeDasharray="314" strokeDashoffset="28" strokeLinecap="round" />
                      <text x="100" y="96" fill="#fff" fontSize="24" fontFamily="monospace" fontWeight="bold" textAnchor="middle">100</text>
                      <text x="100" y="112" fill="var(--accent)" fontSize="8" fontFamily="monospace" textAnchor="middle">PERFORMANCE</text>

                      {/* Speed Metrics Table */}
                      <rect x="175" y="45" width="150" height="28" rx="3" fill="rgba(255,255,255,0.03)" />
                      <text x="185" y="63" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="monospace">LCP: 0.62s</text>
                      <circle cx="310" cy="59" r="4" fill="var(--accent)" />

                      <rect x="175" y="80" width="150" height="28" rx="3" fill="rgba(255,255,255,0.03)" />
                      <text x="185" y="98" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="monospace">INP: 18ms</text>
                      <circle cx="310" cy="94" r="4" fill="var(--accent)" />

                      <rect x="175" y="115" width="150" height="28" rx="3" fill="rgba(255,255,255,0.03)" />
                      <text x="185" y="133" fill="rgba(255,255,255,0.7)" fontSize="9" fontFamily="monospace">CLS: 0.000</text>
                      <circle cx="310" cy="129" r="4" fill="var(--accent)" />

                      {/* Telemetry Axis */}
                      <line x1="40" y1="180" x2="320" y2="180" stroke="rgba(255,255,255,0.1)" />
                      <path d="M 40 180 L 100 160 L 160 172 L 220 152 L 280 162 L 320 148" stroke="var(--accent)" strokeWidth="2" fill="none" />
                      <circle cx="320" cy="148" r="3" fill="var(--accent)" />
                      <text x="40" y="200" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="monospace">LOAD START</text>
                      <text x="320" y="200" fill="var(--accent)" fontSize="8" fontFamily="monospace" textAnchor="end">TTFB &lt; 80ms</text>
                    </svg>
                    <div className="blueprint-caption">
                      <span>METRIC: ZERO LAYOUT SHIFT</span>
                      <span>STATUS: SUB-SECOND EDGE RENDER</span>
                    </div>
                  </div>
                )}
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
      </div>
    </section>
  )
}
