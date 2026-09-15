'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import Reveal from '../ui/Reveal'

interface ServiceItem {
  id: string
  num: string
  title: string
  tagline: string
  description: string
  keywords: string[]
  href: string
}

const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-design',
    num: '01',
    title: 'Website Design & Art Direction',
    tagline: 'Distinct brand aesthetics that leave a lasting mark',
    description: 'We construct bespoke visual languages, art direction, and editorial typography that break through generic web monotony and command client authority.',
    keywords: ['Art Direction', 'Editorial Typography', 'Spatial Layout', 'Motion Systems'],
    href: '/services',
  },
  {
    id: 'web-development',
    num: '02',
    title: 'Custom Web Development',
    tagline: 'Resilient TypeScript code built for speed and longevity',
    description: 'Bespoke front-end architecture using Next.js App Router and TypeScript. Zero template bloat, sub-second edge delivery, and rock-solid maintainability.',
    keywords: ['Next.js App Router', 'TypeScript', 'Clean Architecture', 'API Integration'],
    href: '/services',
  },
  {
    id: 'ecommerce',
    num: '03',
    title: 'Ecommerce Platforms',
    tagline: 'High-conversion storefronts engineered for revenue',
    description: 'Fast, frictionless retail experiences engineered to convert browsers into loyal customers. Custom product configuration, seamless checkout, and scalable inventories.',
    keywords: ['Headless Storefronts', 'Shopify Architecture', 'Checkout Funnels', 'Inventory Sync'],
    href: '/services',
  },
  {
    id: 'web-apps',
    num: '04',
    title: 'Custom Web Applications',
    tagline: 'Complex workflows turned into effortless interfaces',
    description: 'Interactive client portals, SaaS interfaces, and bespoke internal tools engineered with fluid real-time state management and zero interface friction.',
    keywords: ['Client Portals', 'SaaS Dashboards', 'Workflow Automation', 'Real-time State'],
    href: '/services',
  },
  {
    id: 'strategy',
    num: '05',
    title: 'Brand & Digital Strategy',
    tagline: 'Sharp positioning that resonates with high-value clients',
    description: 'We help brands uncover their core differentiators, structure their narrative, and build digital touchpoints that convert skepticism into trust.',
    keywords: ['Brand Architecture', 'Conversion Strategy', 'Content Hierarchy', 'Competitor Audits'],
    href: '/services',
  },
  {
    id: 'performance',
    num: '06',
    title: 'Performance & Optimization',
    tagline: 'Sub-second speeds that dominate search rankings',
    description: 'Auditing, refactoring, and optimizing existing web infrastructure for perfect Core Web Vitals, instant page loads, and superior SEO visibility.',
    keywords: ['Core Web Vitals', 'Lighthouse 100/100', 'Edge Caching', 'Technical SEO'],
    href: '/services',
  },
]

export default function Services() {
  const [activeService, setActiveService] = useState(0)
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(0)
  const [pointerOffset, setPointerOffset] = useState({ x: 0, y: 0 })
  const previewRef = useRef<HTMLDivElement>(null)

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!previewRef.current) return
    const rect = previewRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 14
    setPointerOffset({ x, y })
  }

  const handlePointerLeave = () => {
    setPointerOffset({ x: 0, y: 0 })
  }

  const toggleMobileAccordion = (index: number) => {
    setMobileExpanded((prev) => (prev === index ? null : index))
  }

  return (
    <section className="services-section" id="services" aria-labelledby="services-heading">
      <div className="container services-section__container">
        {/* Section Header */}
        <div className="services-section__header">
          <Reveal direction="none">
            <div className="section-tag services-section__tag">
              <span className="section-tag-dot" aria-hidden="true" />
              <span className="section-tag-index">03</span>
              <span className="section-tag-separator" aria-hidden="true">/</span>
              <span className="section-tag-label">SERVICES</span>
            </div>
          </Reveal>

          <div className="services-section__title-row">
            <Reveal delay={100}>
              <h2 id="services-heading" className="services-section__title">
                End-to-end digital craftsmanship.{' '}
                <span className="services-section__title-accent">Built to perform.</span>
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <div className="services-section__header-meta">
                <p className="services-section__lead">
                  Every engagement is tailored to your specific commercial goals. We don&apos;t use templates or hand off
                  half-baked code. We take full ownership from initial concept to high-performance launch.
                </p>
                <Link href="/services" className="services-section__explore-btn">
                  <span>Explore All Services</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9m0 0L7.5 3m4 4L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Desktop Split Experience: Interactive Index + Synchronized Visual Panel */}
        <div className="services-section__desktop-layout hide-on-mobile">
          {/* Left/Main: Service Items Index */}
          <div className="services-index" role="tablist" aria-label="Services list">
            {SERVICES_DATA.map((service, index) => {
              const isActive = activeService === index
              return (
                <div
                  key={service.id}
                  role="tab"
                  id={`service-tab-${index}`}
                  aria-selected={isActive}
                  aria-controls={`service-preview-${index}`}
                  tabIndex={0}
                  className={`service-item ${isActive ? 'service-item--active' : ''}`}
                  onMouseEnter={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActiveService(index)
                    }
                  }}
                >
                  <div className="service-item__top">
                    <span className="service-item__num">{service.num}</span>
                    <h3 className="service-item__title">{service.title}</h3>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className="service-item__arrow"
                    >
                      <path
                        d="M4 10H16M16 10L10.5 4.5M16 10L10.5 15.5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Expandable details when active */}
                  <div className="service-item__expandable">
                    <p className="service-item__description">{service.description}</p>
                    <div className="service-item__keywords">
                      {service.keywords.map((kw) => (
                        <span key={kw} className="service-item__kw-tag">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: Synchronized Technical Blueprint Preview Panel */}
          <div
            className="services-preview-wrapper"
            ref={previewRef}
            onMouseMove={handlePointerMove}
            onMouseLeave={handlePointerLeave}
          >
            <div
              className="services-preview-panel"
              style={{
                transform: `perspective(1000px) rotateY(${pointerOffset.x * 0.35}deg) rotateX(${-pointerOffset.y * 0.35}deg) translate3d(${pointerOffset.x * 0.25}px, ${pointerOffset.y * 0.25}px, 0)`,
              }}
            >
              <div className="services-preview-panel__bar">
                <div className="services-preview-panel__status-dot" />
                <span className="services-preview-panel__tag">
                  SYSTEM // {SERVICES_DATA[activeService].num} : {SERVICES_DATA[activeService].title.toUpperCase()}
                </span>
                <span className="services-preview-panel__active-badge">ACTIVE SPEC</span>
              </div>

              {/* Dynamic SVG Visual Representation */}
              <div className="services-preview-panel__stage">
                {activeService === 0 && (
                  /* Website Design Blueprint */
                  <div className="services-blueprint">
                    <svg viewBox="0 0 380 260" fill="none" className="services-blueprint__svg">
                      <rect x="25" y="25" width="330" height="210" rx="6" fill="#0f1115" stroke="rgba(255,255,255,0.1)" />
                      {/* Browser Mock header */}
                      <line x1="25" y1="55" x2="355" y2="55" stroke="rgba(255,255,255,0.08)" />
                      <circle cx="45" cy="40" r="3.5" fill="rgba(255,255,255,0.2)" />
                      <circle cx="57" cy="40" r="3.5" fill="rgba(255,255,255,0.2)" />
                      <circle cx="69" cy="40" r="3.5" fill="rgba(255,255,255,0.2)" />
                      <rect x="90" y="34" width="160" height="12" rx="3" fill="rgba(255,255,255,0.04)" />

                      {/* Editorial Canvas Wireframe */}
                      <rect x="45" y="75" width="140" height="24" rx="2" fill="rgba(107,216,199,0.15)" stroke="var(--accent)" />
                      <rect x="45" y="107" width="190" height="8" rx="2" fill="rgba(255,255,255,0.25)" />
                      <rect x="45" y="121" width="150" height="8" rx="2" fill="rgba(255,255,255,0.12)" />

                      {/* Visual Blocks */}
                      <rect x="45" y="145" width="90" height="70" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" />
                      <rect x="145" y="145" width="90" height="70" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" />
                      <rect x="250" y="75" width="85" height="140" rx="3" fill="rgba(107,216,199,0.04)" stroke="var(--accent)" strokeDasharray="3 3" />
                      <circle cx="292" cy="145" r="22" stroke="var(--accent)" strokeWidth="1.5" />
                    </svg>
                  </div>
                )}

                {activeService === 1 && (
                  /* Web Development Blueprint */
                  <div className="services-blueprint">
                    <svg viewBox="0 0 380 260" fill="none" className="services-blueprint__svg">
                      <rect x="25" y="25" width="330" height="210" rx="6" fill="#0f1115" stroke="rgba(255,255,255,0.1)" />
                      {/* Code Shell Header */}
                      <line x1="25" y1="55" x2="355" y2="55" stroke="rgba(255,255,255,0.08)" />
                      <text x="45" y="44" fill="var(--accent)" fontSize="10" fontFamily="monospace">src/app/page.tsx</text>

                      {/* Code Syntax Visual Simulation */}
                      <rect x="45" y="75" width="90" height="10" rx="2" fill="rgba(107,216,199,0.4)" />
                      <rect x="145" y="75" width="60" height="10" rx="2" fill="rgba(255,255,255,0.3)" />

                      <rect x="65" y="95" width="140" height="10" rx="2" fill="rgba(255,255,255,0.2)" />
                      <rect x="65" y="115" width="110" height="10" rx="2" fill="rgba(107,216,199,0.6)" />
                      <rect x="85" y="135" width="180" height="10" rx="2" fill="rgba(255,255,255,0.25)" />
                      <rect x="85" y="155" width="95" height="10" rx="2" fill="var(--accent)" />

                      {/* Compiler / Architecture Pulse Status */}
                      <rect x="45" y="185" width="290" height="34" rx="4" fill="rgba(107,216,199,0.08)" stroke="var(--accent)" />
                      <circle cx="65" cy="202" r="4" fill="var(--accent)" />
                      <text x="78" y="206" fill="#ffffff" fontSize="10" fontFamily="monospace">TYPESCRIPT CHECK: 0 ERRORS // STATIC EXPORT READY</text>
                    </svg>
                  </div>
                )}

                {activeService === 2 && (
                  /* Ecommerce Blueprint */
                  <div className="services-blueprint">
                    <svg viewBox="0 0 380 260" fill="none" className="services-blueprint__svg">
                      <rect x="25" y="25" width="330" height="210" rx="6" fill="#0f1115" stroke="rgba(255,255,255,0.1)" />
                      {/* Products Architecture Wireframe */}
                      <rect x="45" y="45" width="85" height="110" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
                      <rect x="55" y="55" width="65" height="55" rx="2" fill="rgba(107,216,199,0.1)" />
                      <rect x="55" y="120" width="45" height="7" rx="1" fill="rgba(255,255,255,0.4)" />
                      <rect x="55" y="133" width="30" height="7" rx="1" fill="var(--accent)" />

                      <rect x="145" y="45" width="85" height="110" rx="4" fill="rgba(107,216,199,0.06)" stroke="var(--accent)" />
                      <rect x="155" y="55" width="65" height="55" rx="2" fill="rgba(107,216,199,0.2)" />
                      <rect x="155" y="120" width="50" height="7" rx="1" fill="rgba(255,255,255,0.5)" />
                      <rect x="155" y="133" width="35" height="7" rx="1" fill="var(--accent)" />

                      <rect x="245" y="45" width="90" height="110" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.12)" />
                      <rect x="255" y="55" width="70" height="55" rx="2" fill="rgba(255,255,255,0.08)" />
                      <rect x="255" y="120" width="45" height="7" rx="1" fill="rgba(255,255,255,0.4)" />
                      <rect x="255" y="133" width="30" height="7" rx="1" fill="var(--accent)" />

                      {/* Checkout Funnel Status */}
                      <path d="M 45 185 L 335 185" stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                      <path d="M 45 185 L 245 185" stroke="var(--accent)" strokeWidth="2" />
                      <circle cx="95" cy="185" r="6" fill="#0f1115" stroke="var(--accent)" strokeWidth="2" />
                      <circle cx="185" cy="185" r="6" fill="#0f1115" stroke="var(--accent)" strokeWidth="2" />
                      <circle cx="275" cy="185" r="6" fill="var(--accent)" />
                      <text x="185" y="215" fill="var(--accent)" fontSize="10" fontFamily="monospace" textAnchor="middle">CONVERSION RATE OPTIMIZED</text>
                    </svg>
                  </div>
                )}

                {activeService === 3 && (
                  /* Web Applications Blueprint */
                  <div className="services-blueprint">
                    <svg viewBox="0 0 380 260" fill="none" className="services-blueprint__svg">
                      <rect x="25" y="25" width="330" height="210" rx="6" fill="#0f1115" stroke="rgba(255,255,255,0.1)" />
                      <rect x="45" y="45" width="80" height="170" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" />
                      <rect x="55" y="60" width="60" height="10" rx="2" fill="var(--accent)" />
                      <rect x="55" y="80" width="60" height="8" rx="2" fill="rgba(255,255,255,0.2)" />
                      <rect x="55" y="98" width="60" height="8" rx="2" fill="rgba(255,255,255,0.2)" />
                      <rect x="55" y="116" width="60" height="8" rx="2" fill="rgba(255,255,255,0.2)" />

                      {/* Portal Analytics Card */}
                      <rect x="140" y="45" width="195" height="95" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(107,216,199,0.25)" />
                      <path d="M 155 110 Q 185 70, 220 95 T 280 65 T 320 85" stroke="var(--accent)" strokeWidth="2" fill="none" />
                      <circle cx="280" cy="65" r="4" fill="var(--accent)" />

                      {/* Stat Widgets */}
                      <rect x="140" y="150" width="90" height="65" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
                      <text x="150" y="170" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">THROUGHPUT</text>
                      <text x="150" y="195" fill="#ffffff" fontSize="16" fontFamily="monospace" fontWeight="bold">120K/s</text>

                      <rect x="245" y="150" width="90" height="65" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
                      <text x="255" y="170" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">UPTIME</text>
                      <text x="255" y="195" fill="var(--accent)" fontSize="16" fontFamily="monospace" fontWeight="bold">99.99%</text>
                    </svg>
                  </div>
                )}

                {activeService === 4 && (
                  /* Brand & Digital Strategy Blueprint */
                  <div className="services-blueprint">
                    <svg viewBox="0 0 380 260" fill="none" className="services-blueprint__svg">
                      <rect x="25" y="25" width="330" height="210" rx="6" fill="#0f1115" stroke="rgba(255,255,255,0.1)" />
                      {/* Connected Strategy Triad */}
                      <circle cx="190" cy="75" r="32" fill="rgba(107,216,199,0.1)" stroke="var(--accent)" strokeWidth="1.5" />
                      <text x="190" y="78" fill="var(--accent)" fontSize="9" fontFamily="monospace" textAnchor="middle" fontWeight="bold">POSITIONING</text>

                      <circle cx="110" cy="180" r="30" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.2)" />
                      <text x="110" y="183" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">NARRATIVE</text>

                      <circle cx="270" cy="180" r="30" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.2)" />
                      <text x="270" y="183" fill="#ffffff" fontSize="9" fontFamily="monospace" textAnchor="middle">CONVERSION</text>

                      <line x1="170" y1="95" x2="125" y2="155" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="210" y1="95" x2="255" y2="155" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="3 3" />
                      <line x1="140" y1="180" x2="240" y2="180" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                    </svg>
                  </div>
                )}

                {activeService === 5 && (
                  /* Performance & Optimization Blueprint */
                  <div className="services-blueprint">
                    <svg viewBox="0 0 380 260" fill="none" className="services-blueprint__svg">
                      <rect x="25" y="25" width="330" height="210" rx="6" fill="#0f1115" stroke="rgba(255,255,255,0.1)" />
                      {/* Circular Gauge */}
                      <circle cx="115" cy="115" r="54" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                      <circle cx="115" cy="115" r="54" stroke="var(--accent)" strokeWidth="8" strokeDasharray="339" strokeDashoffset="24" strokeLinecap="round" />
                      <text x="115" y="122" fill="#ffffff" fontSize="26" fontFamily="monospace" fontWeight="bold" textAnchor="middle">100</text>
                      <text x="115" y="140" fill="var(--accent)" fontSize="8" fontFamily="monospace" textAnchor="middle">LIGHTHOUSE</text>

                      {/* Vitals Diagnostics */}
                      <rect x="195" y="55" width="145" height="34" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
                      <text x="208" y="76" fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="monospace">LCP: 0.58s [FAST]</text>

                      <rect x="195" y="98" width="145" height="34" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
                      <text x="208" y="119" fill="rgba(255,255,255,0.7)" fontSize="10" fontFamily="monospace">CLS: 0.000 [ZERO]</text>

                      <rect x="195" y="141" width="145" height="34" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" />
                      <text x="208" y="162" fill="var(--accent)" fontSize="10" fontFamily="monospace">SEO SCORE: 100/100</text>

                      <text x="190" y="210" fill="var(--accent)" fontSize="9" fontFamily="monospace" textAnchor="middle">ENGINEERED FOR SUB-SECOND EDGE RENDERING</text>
                    </svg>
                  </div>
                )}
              </div>

              {/* Action Link in Preview */}
              <div className="services-preview-panel__footer">
                <Link href={SERVICES_DATA[activeService].href} className="services-preview-panel__btn">
                  <span>Inquire for {SERVICES_DATA[activeService].title}</span>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9m0 0L7.5 3m4 4L7.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion Experience */}
        <div className="services-section__mobile-layout">
          {SERVICES_DATA.map((service, index) => {
            const isExpanded = mobileExpanded === index
            return (
              <div
                key={service.id}
                className={`mobile-service-card ${isExpanded ? 'mobile-service-card--open' : ''}`}
              >
                <button
                  type="button"
                  className="mobile-service-card__trigger"
                  onClick={() => toggleMobileAccordion(index)}
                  aria-expanded={isExpanded}
                  aria-controls={`mobile-service-content-${index}`}
                >
                  <span className="mobile-service-card__num">{service.num}</span>
                  <span className="mobile-service-card__title">{service.title}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    aria-hidden="true"
                    className={`mobile-service-card__chevron ${isExpanded ? 'mobile-service-card__chevron--rotated' : ''}`}
                  >
                    <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div
                  id={`mobile-service-content-${index}`}
                  className="mobile-service-card__content"
                  aria-hidden={!isExpanded}
                >
                  <p className="mobile-service-card__desc">{service.description}</p>
                  <div className="mobile-service-card__tags">
                    {service.keywords.map((kw) => (
                      <span key={kw} className="mobile-service-card__tag">
                        {kw}
                      </span>
                    ))}
                  </div>
                  <Link href={service.href} className="mobile-service-card__link">
                    <span>Learn More</span>
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
