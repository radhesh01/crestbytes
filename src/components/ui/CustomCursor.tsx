'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

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

export default function CustomCursor() {
  const isPointerFine = usePointerCapable()
  const prefersReducedMotion = usePrefersReducedMotion()
  const interactive = isPointerFine && !prefersReducedMotion
  const pathname = usePathname()

  const cursorDotRef = useRef<HTMLDivElement>(null)
  const cursorRingRef = useRef<HTMLDivElement>(null)

  const pointer = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const rafId = useRef<number | null>(null)
  const cursorVisible = useRef(false)

  useEffect(() => {
    if (!interactive) return

    const onPointerMove = (e: PointerEvent) => {
      const x = e.clientX
      const y = e.clientY

      pointer.current.x = x
      pointer.current.y = y

      if (!cursorVisible.current) {
        cursorVisible.current = true
        cursorDotRef.current?.classList.add('is-visible')
        cursorRingRef.current?.classList.add('is-visible')
      }

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`
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

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      const isCta = target.closest('.btn--primary, .header__cta-primary')
      const isLink = target.closest('a, button, .header__nav-link')
      const isCard = target.closest('.project-feature, .positioning__card, .floater')

      if (isCta) {
        cursorRingRef.current?.classList.add('is-hovering-cta')
        cursorDotRef.current?.classList.add('is-hovering-cta')
      } else if (isCard) {
        cursorRingRef.current?.classList.add('is-hovering-card')
      } else if (isLink) {
        cursorRingRef.current?.classList.add('is-hovering-link')
        cursorDotRef.current?.classList.add('is-hovering-link')
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      const isCta = target.closest('.btn--primary, .header__cta-primary')
      const isLink = target.closest('a, button, .header__nav-link')
      const isCard = target.closest('.project-feature, .positioning__card, .floater')

      if (isCta) {
        cursorRingRef.current?.classList.remove('is-hovering-cta')
        cursorDotRef.current?.classList.remove('is-hovering-cta')
      }
      if (isCard) {
        cursorRingRef.current?.classList.remove('is-hovering-card')
      }
      if (isLink) {
        cursorRingRef.current?.classList.remove('is-hovering-link')
        cursorDotRef.current?.classList.remove('is-hovering-link')
      }
    }

    // Use event delegation on window
    window.addEventListener('mouseover', onMouseOver)
    window.addEventListener('mouseout', onMouseOut)

    return () => {
      window.removeEventListener('mouseover', onMouseOver)
      window.removeEventListener('mouseout', onMouseOut)
    }
  }, [interactive, pathname])

  if (!interactive) return null

  return (
    <>
      <div className="custom-cursor custom-cursor--dot" ref={cursorDotRef} />
      <div className="custom-cursor custom-cursor--ring" ref={cursorRingRef} />
    </>
  )
}
