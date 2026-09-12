'use client'

import { useEffect, useRef, useState } from 'react'
import Button from '../ui/Button'

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

function Hero() {
  const isPointerFine = usePointerCapable()
  const prefersReducedMotion = usePrefersReducedMotion()
  const interactive = isPointerFine && !prefersReducedMotion

  const heroRef = useRef<HTMLElement>(null)
  const fieldRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)
  const primaryBtnRef = useRef<HTMLAnchorElement>(null)
  const secondaryBtnRef = useRef<HTMLAnchorElement>(null)

  const pointer = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const rafId = useRef<number | null>(null)
  const cursorVisible = useRef(false)

  useEffect(() => {
    if (!interactive) return

    const heroEl = heroRef.current
    const fieldEl = fieldRef.current
    if (!heroEl) return

    const onPointerMove = (e: PointerEvent) => {
      const rect = heroEl.getBoundingClientRect()
      const x = e.clientX
      const y = e.clientY

      pointer.current.x = x
      pointer.current.y = y

      if (!cursorVisible.current) {
        cursorVisible.current = true
        cursorDotRef.current?.classList.add('is-visible')
        cursorRingRef.current?.classList.add('is-visible')
      }

      const relX = ((x - rect.left) / rect.width) * 100
      const relY = ((y - rect.top) / rect.height) * 100
      heroEl.style.setProperty('--spot-x', `${relX}%`)
      heroEl.style.setProperty('--spot-y', `${relY}%`)

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
      }

      if (fieldEl) {
        const fRect = fieldEl.getBoundingClientRect()
        const centerX = fRect.left + fRect.width / 2
        const centerY = fRect.top + fRect.height / 2
        const dx = (x - centerX) / fRect.width
        const dy = (y - centerY) / fRect.height
        fieldEl.style.setProperty('--px', `${dx}`)
        fieldEl.style.setProperty('--py', `${dy}`)
      }
    }

    const onPointerLeave = () => {
      cursorVisible.current = false
      cursorDotRef.current?.classList.remove('is-visible')
      cursorRingRef.current?.classList.remove('is-visible')
    }

    const animateRing = () => {
      ring.current.x += (pointer.current.x - ring.current.x) * 0.16
      ring.current.y += (pointer.current.y - ring.current.y) * 0.16

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`
      }

      rafId.current = requestAnimationFrame(animateRing)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.addEventListener('pointerleave', onPointerLeave)
    rafId.current = requestAnimationFrame(animateRing)

    document.body.classList.add('has-custom-cursor')

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerleave', onPointerLeave)
      if (rafId.current !== null) cancelAnimationFrame(rafId.current)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [interactive])

  useEffect(() => {
    if (!interactive) return

    const interactiveEls = document.querySelectorAll('a, button')
    const floatEls = document.querySelectorAll('.floater')

    const onEnter = () => {
      cursorRingRef.current?.classList.add('is-hovering')
      cursorDotRef.current?.classList.add('is-hovering')
    }
    const onLeave = () => {
      cursorRingRef.current?.classList.remove('is-hovering')
      cursorDotRef.current?.classList.remove('is-hovering')
    }
    const onFloatEnter = () => {
      cursorRingRef.current?.classList.add('is-near-floater')
    }
    const onFloatLeave = () => {
      cursorRingRef.current?.classList.remove('is-near-floater')
    }

    interactiveEls.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    floatEls.forEach((el) => {
      el.addEventListener('mouseenter', onFloatEnter)
      el.addEventListener('mouseleave', onFloatLeave)
    })

    return () => {
      interactiveEls.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
      floatEls.forEach((el) => {
        el.removeEventListener('mouseenter', onFloatEnter)
        el.removeEventListener('mouseleave', onFloatLeave)
      })
    }
  }, [interactive])

  useEffect(() => {
    if (!interactive) return

    const setupMagnetic = (el: HTMLAnchorElement | null) => {
      if (!el) return () => {}

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const relX = e.clientX - (rect.left + rect.width / 2)
        const relY = e.clientY - (rect.top + rect.height / 2)
        el.style.transform = `translate(${relX * 0.2}px, ${relY * 0.3}px)`
      }

      const onLeave = () => {
        el.style.transform = 'translate(0, 0)'
      }

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)

      return () => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      }
    }

    const cleanupPrimary = setupMagnetic(primaryBtnRef.current)
    const cleanupSecondary = setupMagnetic(secondaryBtnRef.current)

    return () => {
      cleanupPrimary()
      cleanupSecondary()
    }
  }, [interactive])

  return (
    <section
      ref={heroRef}
      className={`hero ${interactive ? 'hero--interactive' : ''}`}
      aria-label="Introduction"
    >
      {interactive && <div className="hero__spotlight" aria-hidden="true" />}

      <div className="hero__field" ref={fieldRef} aria-hidden="true">
        <svg className="floater floater--back-grid" viewBox="0 0 120 120" aria-hidden="true">
          <line x1="0" y1="20" x2="120" y2="20" stroke="#2A2A2A" strokeWidth="1" />
          <line x1="0" y1="60" x2="120" y2="60" stroke="#2A2A2A" strokeWidth="1" />
          <line x1="0" y1="100" x2="120" y2="100" stroke="#2A2A2A" strokeWidth="1" />
          <line x1="20" y1="0" x2="20" y2="120" stroke="#2A2A2A" strokeWidth="1" />
          <line x1="60" y1="0" x2="60" y2="120" stroke="#2A2A2A" strokeWidth="1" />
          <line x1="100" y1="0" x2="100" y2="120" stroke="#2A2A2A" strokeWidth="1" />
        </svg>

        <svg className="floater floater--back-dots" viewBox="0 0 60 60" aria-hidden="true">
          <circle cx="10" cy="10" r="1.4" fill="#3CBFA6" />
          <circle cx="50" cy="20" r="1.4" fill="#58CEBA" />
          <circle cx="30" cy="50" r="1.4" fill="#6BD8C7" />
        </svg>

        <svg
          className="floater floater--browser floater--float-slow"
          viewBox="0 0 120 80"
          aria-hidden="true"
        >
          <rect x="1" y="1" width="118" height="78" rx="2" stroke="#3CBFA6" strokeWidth="1" />
          <line x1="1" y1="16" x2="119" y2="16" stroke="#3CBFA6" strokeWidth="1" />
          <circle cx="9" cy="8.5" r="2" fill="#58CEBA" />
          <circle cx="17" cy="8.5" r="2" fill="#2A2A2A" />
          <circle cx="25" cy="8.5" r="2" fill="#2A2A2A" />
          <rect x="10" y="28" width="70" height="6" fill="#2A2A2A" />
          <rect x="10" y="42" width="46" height="6" fill="#2A2A2A" />
        </svg>

        <svg
          className="floater floater--code floater--float-drift"
          viewBox="0 0 110 90"
          aria-hidden="true"
        >
          <rect x="1" y="1" width="108" height="88" rx="2" stroke="#6BD8C7" strokeWidth="1" />
          <line x1="1" y1="18" x2="109" y2="18" stroke="#6BD8C7" strokeWidth="1" />
          <rect x="12" y="30" width="50" height="5" fill="#2A2A2A" />
          <rect x="12" y="42" width="70" height="5" fill="#2A2A2A" />
          <rect x="12" y="54" width="40" height="5" fill="#2A2A2A" />
          <rect x="12" y="70" width="30" height="10" rx="1" stroke="#58CEBA" strokeWidth="1" />
        </svg>

        <svg
          className="floater floater--orbit floater--rotate-slow"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="38" stroke="#2A2A2A" strokeWidth="1" />
          <circle cx="50" cy="12" r="3" fill="#58CEBA" />
          <circle cx="50" cy="50" r="2.5" fill="#3CBFA6" />
        </svg>

        <svg
          className="floater floater--frame floater--pulse"
          viewBox="0 0 70 70"
          aria-hidden="true"
        >
          <rect x="4" y="4" width="62" height="62" stroke="#3CBFA6" strokeWidth="1" transform="rotate(6 35 35)" />
        </svg>

        <svg
          className="floater floater--curve floater--draw"
          viewBox="0 0 160 90"
          aria-hidden="true"
        >
          <path
            className="floater__path"
            d="M4 80 C 40 80, 60 20, 100 20 S 150 50, 156 10"
            stroke="#3CBFA6"
            strokeWidth="1"
            fill="none"
            strokeDasharray="4 5"
          />
          <circle cx="4" cy="80" r="2.5" fill="#58CEBA" />
          <circle cx="156" cy="10" r="2.5" fill="#6BD8C7" />
        </svg>

        <svg
          className="floater floater--labels"
          viewBox="0 0 120 40"
          aria-hidden="true"
        >
          <text x="0" y="12" fontSize="8" letterSpacing="1.5" fill="#3CBFA6" fontFamily="inherit">01 / DESIGN</text>
          <text x="0" y="26" fontSize="8" letterSpacing="1.5" fill="#2A2A2A" fontFamily="inherit">02 / BUILD</text>
          <text x="0" y="40" fontSize="8" letterSpacing="1.5" fill="#2A2A2A" fontFamily="inherit">03 / LAUNCH</text>
        </svg>

        <svg className="floater floater--front-node floater--pulse-fast" viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="3" fill="#58CEBA" />
          <circle cx="10" cy="10" r="8" stroke="#58CEBA" strokeWidth="1" />
        </svg>

        <svg className="floater floater--front-node-2 floater--pulse-fast" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="8" cy="8" r="2" fill="#6BD8C7" />
        </svg>
      </div>

      <div className="container hero__inner">
        <p className="hero__eyebrow hero__reveal hero__reveal--1">
          Digital Experiences / Web Development
        </p>

        <h1 className="hero__headline hero__reveal hero__reveal--2">
          Websites built to make brands{' '}
          <span className="hero__headline-accent">
            impossible to ignore.
            <svg
              className="hero__headline-underline"
              viewBox="0 0 320 12"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M2 8 C 80 2, 240 2, 318 8" />
            </svg>
          </span>
        </h1>

        <p className="hero__subtext hero__reveal hero__reveal--3">
          CrestBytes designs and develops premium digital experiences for
          ambitious brands — combining strategy, design, development, and
          performance.
        </p>

        <div className="hero__actions hero__reveal hero__reveal--4">
          <Button href="/contact" variant="primary" ref={primaryBtnRef}>
            Start a Project
          </Button>
          <Button href="/projects" variant="secondary" ref={secondaryBtnRef}>
            View Our Work
          </Button>
        </div>
      </div>

      <a href="#hero-end" className="hero__scroll-indicator" aria-hidden="true" tabIndex={-1}>
        <span>Scroll to Explore</span>
        <svg viewBox="0 0 12 32" width="12" height="32" aria-hidden="true">
          <line x1="6" y1="0" x2="6" y2="22" stroke="currentColor" strokeWidth="1" />
          <path d="M2 18 L6 24 L10 18" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </a>

      {interactive && (
        <>
          <div className="custom-cursor custom-cursor--dot" ref={cursorDotRef} />
          <div className="custom-cursor custom-cursor--ring" ref={cursorRingRef} />
        </>
      )}
    </section>
  )
}

export default Hero