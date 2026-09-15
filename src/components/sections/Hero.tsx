'use client'

import { useEffect, useRef, useState } from 'react'
import Button from '../ui/Button'
import {
  HeroConnectedBackdrop,
  HeroCodeFragment,
  HeroInterfaceFragment,
  HeroDataDiagnostic,
  HeroOrbitNode,
  HeroNodeNetwork,
} from './HeroObjects'

function usePointerCapable() {
  const [capable, setCapable] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setCapable(mq.matches)
    const onChange = () => setCapable(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return capable
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

export default function Hero() {
  const isPointerFine = usePointerCapable()
  const prefersReducedMotion = usePrefersReducedMotion()
  const interactive = isPointerFine && !prefersReducedMotion

  const heroRef = useRef<HTMLElement>(null)
  const fieldRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!interactive) return

    const heroEl = heroRef.current
    const fieldEl = fieldRef.current
    if (!heroEl) return

    let rafId: number
    let targetX = 50
    let targetY = 50
    let currentX = 50
    let currentY = 50

    const onPointerMove = (e: PointerEvent) => {
      const rect = heroEl.getBoundingClientRect()
      const x = e.clientX
      const y = e.clientY

      targetX = ((x - rect.left) / rect.width) * 100
      targetY = ((y - rect.top) / rect.height) * 100
    }

    const animate = () => {
      // Smooth interpolation
      currentX += (targetX - currentX) * 0.06
      currentY += (targetY - currentY) * 0.06

      heroEl.style.setProperty('--spot-x', `${currentX.toFixed(2)}%`)
      heroEl.style.setProperty('--spot-y', `${currentY.toFixed(2)}%`)

      if (fieldEl) {
        // Map 0-100 to -1 to 1 for responsive parallax
        const dx = (currentX - 50) / 50
        const dy = (currentY - 50) / 50
        fieldEl.style.setProperty('--px', `${dx.toFixed(4)}`)
        fieldEl.style.setProperty('--py', `${dy.toFixed(4)}`)
      }

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      cancelAnimationFrame(rafId)
    }
  }, [interactive])

  return (
    <section
      ref={heroRef}
      className={`hero ${interactive ? 'hero--interactive' : ''}`}
      aria-label="Introduction"
    >
      {/* Subtle cursor-following atmospheric illumination */}
      <div className="hero__spotlight" aria-hidden="true" />

      {/* Connected Digital Ecosystem Field */}
      <div className="hero__field" ref={fieldRef} aria-hidden="true">
        {/* Layer 3: Invisible overarching connection backdrop (barely reacts to cursor) */}
        <HeroConnectedBackdrop className="abstract-layer--3" />

        {/* Layer 2: Subtle Orbit & Node Network */}
        <HeroOrbitNode
          className="abstract-layer--2 hide-on-mobile"
          style={{
            width: '420px',
            height: '420px',
            top: '50%',
            left: '50%',
            marginTop: '-210px',
            marginLeft: '-210px',
          }}
        />

        <HeroNodeNetwork
          className="abstract-layer--2 anim-float-slow hide-on-mobile"
          style={{
            width: '150px',
            height: '110px',
            top: '18%',
            left: '8%',
          }}
        />

        {/* Abstract editorial code fragment (top right) */}
        <HeroCodeFragment
          className="abstract-layer--2 anim-float-subtle hide-on-mobile"
          style={{
            top: '16%',
            right: '8%',
            animationDelay: '-2.5s',
          }}
        />

        {/* Layer 1: Foreground Interactive Wireframe & Telemetry */}
        <HeroInterfaceFragment
          className="abstract-layer--1 anim-float-slow hide-on-mobile"
          style={{
            bottom: '14%',
            right: '7%',
            animationDelay: '-1s',
          }}
        />

        <HeroDataDiagnostic
          className="abstract-layer--1 anim-float-subtle"
          style={{
            bottom: '12%',
            left: '6%',
            animationDelay: '-3.8s',
          }}
        />
      </div>

      {/* Central Editorial Content Hierarchy */}
      <div className="container hero__inner">
        <div className="hero__content">
          {/* Eyebrow with refined technical micro-marker */}
          <div className="hero__meta hero__reveal hero__reveal--1">
            <span className="hero__meta-marker" aria-hidden="true">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <line x1="4" y1="0" x2="4" y2="8" stroke="var(--accent)" strokeWidth="1.2" />
                <line x1="0" y1="4" x2="8" y2="4" stroke="var(--accent)" strokeWidth="1.2" />
              </svg>
            </span>
            <span className="hero__meta-text">Digital Experiences / Web Development</span>
            <span className="hero__meta-status" aria-hidden="true">
              <span className="hero__meta-pulse" />
            </span>
          </div>

          {/* Headline with editorial weight contrast and accent underline */}
          <h1 className="hero__headline hero__reveal hero__reveal--2">
            Websites built to make brands{' '}
            <span className="hero__headline-accent">
              impossible to ignore.
              <svg
                className="hero__accent-underline"
                viewBox="0 0 240 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M 2 7 Q 120 2 238 5"
                  stroke="var(--accent)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.75"
                />
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p className="hero__subtext hero__reveal hero__reveal--3">
            CrestBytes engineers premium digital experiences. We combine high-end interface design
            with robust technical execution to elevate ambitious brands.
          </p>

          {/* Call to Actions */}
          <div className="hero__actions hero__reveal hero__reveal--4">
            <Button href="/contact" variant="primary">
              Start a Project
            </Button>
            <Button href="/projects" variant="secondary">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}