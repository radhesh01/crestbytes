'use client'

import { useState, useEffect, useRef } from 'react'
import Reveal from '../ui/Reveal'

interface Step {
  num: string
  title: string
  phase: string
  deliverable: string
  description: string
  bullets: string[]
}

const PROCESS_STEPS: Step[] = [
  {
    num: '01',
    title: 'Discover & Align',
    phase: 'PHASE 01 // STRATEGY',
    deliverable: 'Commercial Strategy & Technical Brief',
    description: 'We audit your market landscape, user expectations, and functional requirements to define the digital positioning and technical foundation before engineering begins.',
    bullets: ['Goals & Brand Alignment', 'Audience & UX Benchmarking', 'Requirements & Feature Scope', 'Architecture Planning'],
  },
  {
    num: '02',
    title: 'Design & Prototype',
    phase: 'PHASE 02 // ART DIRECTION',
    deliverable: 'Interactive Prototype & Visual Systems',
    description: 'We construct your digital visual language from the ground up: typography systems, spatial hierarchies, and interactive prototypes tested for effortless usability.',
    bullets: ['Information Architecture', 'Visual & Art Direction', 'Interface & Typography Systems', 'Interactive Prototype'],
  },
  {
    num: '03',
    title: 'Engineer & Integrate',
    phase: 'PHASE 03 // DEVELOPMENT',
    deliverable: 'TypeScript Codebase & Content Integration',
    description: 'We translate approved designs into clean TypeScript code using Next.js App Router. Modular component architecture, zero template bloat, and resilient integrations.',
    bullets: ['Frontend Engineering', 'Responsive Implementation', 'API & CMS Integration', 'Cross-Device Testing'],
  },
  {
    num: '04',
    title: 'Optimize & Launch',
    phase: 'PHASE 04 // DEPLOYMENT',
    deliverable: 'Production Deployment & Verification',
    description: 'We audit every asset, script, and font to ensure fast load times, Core Web Vitals stability, and structured technical SEO ahead of production rollout.',
    bullets: ['Quality Assurance Audit', 'SEO Structure Setup', 'Performance & Asset Review', 'Deployment & Verification'],
  },
]

function renderProcessBlueprintSVG(stepIndex: number) {
  switch (stepIndex) {
    case 0:
      return (
        <svg viewBox="0 0 320 220" fill="none" className="process-svg">
          <circle cx="160" cy="110" r="80" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          <circle cx="160" cy="110" r="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="160" cy="110" r="20" stroke="var(--accent)" strokeWidth="1.5" />
          <line x1="160" y1="20" x2="160" y2="200" stroke="rgba(255,255,255,0.08)" />
          <line x1="70" y1="110" x2="250" y2="110" stroke="rgba(255,255,255,0.08)" />
          <path d="M 160 110 L 216 54 A 80 80 0 0 0 160 30 Z" fill="rgba(107,216,199,0.15)" />
          <circle cx="200" cy="80" r="4" fill="var(--accent)" />
          <text x="210" y="83" fill="#ffffff" fontSize="8" fontFamily="monospace">POSITIONING TARGET</text>
          <circle cx="120" cy="140" r="3" fill="#3CBFA6" />
          <text x="75" y="155" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace">AUDIT COMPLETE</text>
        </svg>
      )
    case 1:
      return (
        <svg viewBox="0 0 320 220" fill="none" className="process-svg">
          <rect x="30" y="25" width="260" height="170" rx="4" fill="rgba(255,255,255,0.02)" stroke="var(--accent)" strokeWidth="1.2" />
          <line x1="30" y1="50" x2="290" y2="50" stroke="rgba(255,255,255,0.1)" />
          <rect x="42" y="34" width="30" height="6" rx="1" fill="var(--accent)" />
          <rect x="42" y="65" width="120" height="20" rx="2" fill="rgba(107,216,199,0.2)" />
          <rect x="42" y="93" width="140" height="8" rx="1" fill="rgba(255,255,255,0.3)" />
          <rect x="42" y="107" width="100" height="8" rx="1" fill="rgba(255,255,255,0.15)" />
          <rect x="42" y="130" width="90" height="50" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
          <rect x="142" y="130" width="90" height="50" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
          <rect x="200" y="65" width="80" height="55" rx="3" fill="rgba(107,216,199,0.08)" stroke="var(--accent)" strokeDasharray="2 2" />
          <text x="240" y="85" fill="var(--accent)" fontSize="8" fontFamily="monospace" textAnchor="middle">TOKENS: SYNCED</text>
          <text x="240" y="102" fill="#fff" fontSize="7" fontFamily="monospace" textAnchor="middle">FIGMA 1:1 CODE</text>
        </svg>
      )
    case 2:
      return (
        <svg viewBox="0 0 320 220" fill="none" className="process-svg">
          <rect x="30" y="25" width="260" height="170" rx="4" fill="#0f1115" stroke="rgba(255,255,255,0.12)" />
          <line x1="30" y1="50" x2="290" y2="50" stroke="rgba(255,255,255,0.08)" />
          <text x="45" y="40" fill="var(--accent)" fontSize="9" fontFamily="monospace">COMPILE // NEXT.JS APP ROUTER</text>
          <path d="M 80 80 L 160 80 M 160 80 L 160 120 M 160 120 L 240 120 M 160 120 L 160 160" stroke="var(--accent)" strokeWidth="1.5" />
          <circle cx="80" cy="80" r="6" fill="var(--accent)" />
          <text x="80" y="100" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">&lt;Layout /&gt;</text>
          <circle cx="160" cy="80" r="5" fill="#3CBFA6" />
          <circle cx="160" cy="120" r="5" fill="#3CBFA6" />
          <circle cx="240" cy="120" r="6" fill="var(--accent)" />
          <text x="240" y="140" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle">&lt;Edge /&gt;</text>
          <rect x="110" y="160" width="100" height="24" rx="3" fill="rgba(107,216,199,0.12)" stroke="var(--accent)" />
          <text x="160" y="176" fill="var(--accent)" fontSize="8" fontFamily="monospace" textAnchor="middle" fontWeight="bold">STATIC EXPORT: PASS</text>
        </svg>
      )
    case 3:
      return (
        <svg viewBox="0 0 320 220" fill="none" className="process-svg">
          <circle cx="160" cy="95" r="48" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
          <circle cx="160" cy="95" r="48" stroke="var(--accent)" strokeWidth="6" strokeDasharray="301" strokeDashoffset="0" strokeLinecap="round" />
          <text x="160" y="98" fill="#ffffff" fontSize="13" fontFamily="monospace" fontWeight="bold" textAnchor="middle">DEPLOYED</text>
          <text x="160" y="112" fill="var(--accent)" fontSize="8" fontFamily="monospace" textAnchor="middle">QA VERIFIED</text>
          <rect x="45" y="160" width="230" height="28" rx="4" fill="rgba(107,216,199,0.08)" stroke="var(--accent)" />
          <circle cx="62" cy="174" r="3.5" fill="var(--accent)" />
          <text x="74" y="178" fill="#ffffff" fontSize="8.5" fontFamily="monospace">STATUS: PRODUCTION LIVE // VERIFIED</text>
        </svg>
      )
    default:
      return null
  }
}

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)
  const [mobileExpandedStep, setMobileExpandedStep] = useState<number | null>(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ratio = entry.intersectionRatio
            if (ratio > 0.6) {
              // Smoothly transition based on scroll position
            }
          }
        })
      },
      { threshold: [0.2, 0.5, 0.8] }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const toggleMobileStep = (index: number) => {
    setMobileExpandedStep((prev) => (prev === index ? null : index))
  }

  return (
    <section className="process-section" id="process" aria-labelledby="process-heading" ref={sectionRef}>
      <div className="container process-section__container">
        {/* Section Header */}
        <div className="process-section__header">
          <Reveal direction="none">
            <div className="section-tag process-section__tag">
              <span className="section-tag-dot" aria-hidden="true" />
              <span className="section-tag-index">05</span>
              <span className="section-tag-separator" aria-hidden="true">/</span>
              <span className="section-tag-label">PROCESS</span>
            </div>
          </Reveal>

          <div className="process-section__title-row">
            <Reveal delay={100}>
              <h2 id="process-heading" className="process-section__title">
                A clear, considered process.{' '}
                <span className="process-section__title-accent">Zero guesswork.</span>
              </h2>
            </Reveal>

            <Reveal delay={180}>
              <p className="process-section__lead">
                Every project runs on a structured, four-phase delivery methodology designed to eliminate ambiguity,
                respect deadlines, and ensure the final product exceeds commercial and aesthetic expectations.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Desktop Progressive Timeline System */}
        <div className="process-system hide-on-mobile">
          {/* Timeline Step Selector Bar */}
          <div className="process-timeline" role="tablist" aria-label="Process steps">
            {/* Background Rail & Active Progress Line */}
            <div className="process-timeline__rail" aria-hidden="true">
              <div
                className="process-timeline__fill"
                style={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%` }}
              />
            </div>

            {/* Step Nodes */}
            <div className="process-timeline__nodes">
              {PROCESS_STEPS.map((step, i) => {
                const isActive = activeStep === i
                const isPassed = activeStep >= i
                return (
                  <button
                    key={step.num}
                    type="button"
                    role="tab"
                    id={`process-tab-${i}`}
                    aria-selected={isActive}
                    aria-controls={`process-panel-${i}`}
                    className={`process-node ${isActive ? 'process-node--active' : ''} ${isPassed ? 'process-node--passed' : ''}`}
                    onClick={() => setActiveStep(i)}
                    onMouseEnter={() => setActiveStep(i)}
                  >
                    <div className="process-node__marker">
                      <span className="process-node__index">{step.num}</span>
                      <span className="process-node__pulse" />
                    </div>
                    <span className="process-node__label">{step.title}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Active Step Showcase: Split Stage (Details + Technical Visual) */}
          <div className="process-stage" id={`process-panel-${activeStep}`} role="tabpanel">
            <div className="process-stage__details">
              <span className="process-stage__phase">{PROCESS_STEPS[activeStep].phase}</span>
              <h3 className="process-stage__title">{PROCESS_STEPS[activeStep].title}</h3>
              <p className="process-stage__description">{PROCESS_STEPS[activeStep].description}</p>

              <div className="process-stage__bullets">
                <span className="process-stage__deliverable-tag">
                  KEY DELIVERABLE: {PROCESS_STEPS[activeStep].deliverable}
                </span>
                <ul className="process-stage__bullet-list">
                  {PROCESS_STEPS[activeStep].bullets.map((bullet) => (
                    <li key={bullet} className="process-stage__bullet-item">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <circle cx="6" cy="6" r="3" fill="var(--accent)" />
                      </svg>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dynamic Stage Visual Blueprint */}
            <div className="process-stage__visual-box">
              <div className="process-stage__visual-bar">
                <span className="process-stage__sys-id">STAGE // {PROCESS_STEPS[activeStep].num}</span>
                <span className="process-stage__sys-state">SYSTEM ENGAGED</span>
              </div>

              <div className="process-stage__visual-canvas">
                {renderProcessBlueprintSVG(activeStep)}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Progressive Vertical Timeline with Expandable Details & Blueprints */}
        <div className="process-mobile-list hide-on-desktop">
          {PROCESS_STEPS.map((step, i) => {
            const isExpanded = mobileExpandedStep === i
            return (
              <div
                key={step.num}
                className={`process-mobile-item ${isExpanded ? 'process-mobile-item--open' : ''}`}
              >
                <button
                  type="button"
                  className="process-mobile-item__trigger"
                  onClick={() => toggleMobileStep(i)}
                  aria-expanded={isExpanded}
                  aria-controls={`process-mobile-panel-${i}`}
                >
                  <div className="process-mobile-item__header">
                    <span className="process-mobile-item__num">{step.num}</span>
                    <span className="process-mobile-item__line" />
                    <span className="process-mobile-item__phase">{step.phase}</span>
                  </div>
                  <div className="process-mobile-item__title-row">
                    <h3 className="process-mobile-item__title">{step.title}</h3>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      aria-hidden="true"
                      className={`process-mobile-item__chevron ${isExpanded ? 'process-mobile-item__chevron--rotated' : ''}`}
                    >
                      <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </button>

                <div
                  id={`process-mobile-panel-${i}`}
                  className="process-mobile-item__content"
                  aria-hidden={!isExpanded}
                >
                  <p className="process-mobile-item__desc">{step.description}</p>
                  <div className="process-mobile-item__deliverable">
                    <strong>DELIVERABLE:</strong> {step.deliverable}
                  </div>
                  <div className="process-mobile-item__tags">
                    {step.bullets.map((b) => (
                      <span key={b} className="process-mobile-item__tag">
                        {b}
                      </span>
                    ))}
                  </div>

                  {/* Inline Blueprint on Mobile */}
                  <div className="process-mobile-item__blueprint">
                    {renderProcessBlueprintSVG(i)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

